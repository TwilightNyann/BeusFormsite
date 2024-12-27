import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, date, address, details } = body;

    // Форматирование даты для удобного чтения
    const formattedDate = new Date(date).toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const { data, error } = await resend.emails.send({
      from: 'Чарівні привітання <onboarding@resend.dev>',
      to: ['ura2123266@gmail.com'],
      subject: `Нова заявка на привітання від ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #ec4899; text-align: center;">Нова заявка на привітання</h1>
          <div style="background-color: #fdf2f8; padding: 20px; border-radius: 10px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Ім'я:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong>Телефон:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>Дата та час:</strong> ${formattedDate}</p>
            <p style="margin: 10px 0;"><strong>Адреса:</strong> ${address}</p>
            <p style="margin: 10px 0;"><strong>Додаткова Інформація:</strong> ${details || 'Не вказані'}</p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Помилка відправки email:', error);
      return NextResponse.json(
          { success: false, error: 'Не вдалось відправити email' },
          { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Заявка відправлена',
      data
    });
  } catch (error) {
    console.error('Помилка в submit-form:', error);
    return NextResponse.json(
        { success: false, error: 'Внутрішня помилка серверу' },
        { status: 500 }
    );
  }
}