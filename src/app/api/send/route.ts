import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, company, email, whatsapp, segment, message, cart } = body;

        // 1. Insert Quote into Supabase (Persist Data)
        const { error: dbError } = await supabase
            .from('quotes')
            .insert([
                {
                    name,
                    company,
                    email,
                    whatsapp,
                    segment,
                    message,
                    items: cart || [], // Store cart items as JSON
                    status: 'new'
                }
            ]);

        if (dbError) {
            console.error('Supabase Quote Insert Error:', dbError);
            // Continue execution to at least send the email
        }

        if (!resend) {
            return NextResponse.json({ error: 'Resend API key not configured' }, { status: 500 });
        }

        const { data: resendData, error: resendError } = await resend.emails.send({
            from: 'BRUX Soluções <contato@bruxsolucoes.com.br>',
            to: ['contato@bruxsolucoes.com.br'],
            subject: `Novo Orçamento: ${company}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #39FF14; background: #000; padding: 10px;">Nova Solicitação de Orçamento - BRUX</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Empresa:</strong> ${company}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp || 'Não informado'}</p>
          <p><strong>Segmento:</strong> ${segment}</p>
          <p><strong>Mensagem/Demanda:</strong> ${message || 'Sem mensagem adicional'}</p>
          
          ${cart && cart.length > 0 ? `
            <h3>Itens de Interesse:</h3>
            <ul>
                ${cart.map((item: any) => `<li>${item.product.title} (${item.volume}) - Qtd: ${item.quantity}</li>`).join('')}
            </ul>
          ` : ''}

          <hr />
          <p style="font-size: 12px; color: #666;">Enviado via BRUX Landing Page - Stitch Elite</p>
        </div>
      `,
        });

        if (resendError) {
            return NextResponse.json({ error: resendError.message, details: resendError }, { status: 400 });
        }

        return NextResponse.json(resendData);
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
