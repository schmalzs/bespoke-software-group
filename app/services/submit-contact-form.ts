import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('Missing SENDGRID_API_KEY environment variable');
}

if (!process.env.BSG_EMAIL) {
  throw new Error('Missing BSG_EMAIL environment variable');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function submitContactForm(
  formData: Record<string, string>
) {
  const html = Object.entries(formData)
    .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
    .join('<br /><br />');

  const msg = {
    to: process.env.BSG_EMAIL,
    from: 'noreply@bespokesoftwaregroup.com',
    subject: 'Contact Form Submission',
    html,
  };

  try {
    await sgMail.send(msg);
    console.info('Email sent');
  } catch (error) {
    console.error(error);
  }
}
