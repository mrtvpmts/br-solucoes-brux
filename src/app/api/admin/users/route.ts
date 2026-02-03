import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

// GET: List all users (Only for Master accounts)
export async function GET() {
    try {
        const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers()

        if (error) throw error

        // Fetch profiles to get roles
        const { data: profiles, error: profileError } = await supabaseAdmin
            .from('profiles')
            .select('*')

        if (profileError) throw profileError

        const usersWithRoles = users.map(user => ({
            id: user.id,
            email: user.email,
            role: profiles.find(p => p.id === user.id)?.role || 'admin',
            last_login: user.last_sign_in_at,
            created_at: user.created_at
        }))

        return NextResponse.json(usersWithRoles)

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

// POST: Register User
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, password, role = 'admin' } = body

        if (!email || !password) {
            return NextResponse.json({ error: 'Email e senha são obrigatórios' }, { status: 400 })
        }

        const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
            user_metadata: { role }
        })

        if (authError) throw authError

        return NextResponse.json({ success: true, user: authData.user })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

// PATCH: Update User (Role)
export async function PATCH(request: Request) {
    try {
        const body = await request.json()
        const { id, role } = body

        if (!id || !role) return NextResponse.json({ error: 'ID e Role são obrigatórios' }, { status: 400 })

        // Update role in profiles table
        const { error } = await supabaseAdmin
            .from('profiles')
            .update({ role })
            .eq('id', id)

        if (error) throw error

        return NextResponse.json({ success: true, message: 'Usuário atualizado com sucesso' })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

// DELETE: Remove User (Only for Master accounts)
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const userId = searchParams.get('id')

        if (!userId) return NextResponse.json({ error: 'ID do usuário é obrigatório' }, { status: 400 })

        // 1. Delete from Auth (Triggers cascade delete in Profiles)
        const { error } = await supabaseAdmin.auth.admin.deleteUser(userId)

        if (error) throw error

        return NextResponse.json({ success: true, message: 'Usuário removido com sucesso' })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
