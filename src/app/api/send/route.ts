import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
    try {
        const { name, company, email, whatsapp, segment, message } = await request.json();

        if (!resend) {
            return NextResponse.json({ error: 'Resend API key not configured' }, { status: 500 });
        }

        const { data: resendData, error: resendError } = await resend.emails.send({
            from: 'BRUX Landing Page <onboarding@resend.dev>',
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
