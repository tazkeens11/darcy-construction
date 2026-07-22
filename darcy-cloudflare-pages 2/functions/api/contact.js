function response(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

export async function onRequestPost({ request, env }) {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/x-www-form-urlencoded')) {
    return response({ error: 'Unsupported content type.' }, 415);
  }

  const data = await request.formData();
  if (String(data.get('bot-field') || '').trim()) {
    return new Response(null, { status: 204 });
  }

  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const project = String(data.get('project') || '').trim();
  const message = String(data.get('message') || '').trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
    return response({ error: 'Please provide a name, valid email and message.' }, 400);
  }
  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    return response({ error: 'Contact service is not configured.' }, 503);
  }

  const resend = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nProject: ${project}\n\n${message}`
    })
  });
  if (!resend.ok) return response({ error: 'Unable to send enquiry.' }, 502);
  return response({ ok: true }, 200);
}
