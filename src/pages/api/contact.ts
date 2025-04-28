import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, whatsapp, email, message } = req.body;

  if (!name || !whatsapp || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // seu email do gmail
        pass: process.env.GMAIL_PASS, // sua senha de app do gmail
      },
    });

    await transporter.sendMail({
      from: `"Contato do Site" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: 'Nova mensagem de contato',
      html: `
        <p><strong>Nome ou Razão Social:</strong> ${name}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/> ${message}</p>
      `,
    });

    return res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch {
    console.error('error ao enviar menssagem');
    return res.status(500).json({ message: 'Erro ao enviar o email.' });
  }
}
