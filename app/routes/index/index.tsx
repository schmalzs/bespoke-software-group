import { redirect, useActionData, useTransition } from 'remix';
import ContactForm from '~/components/ContactForm';
import submitContactForm from '~/services/submit-contact-form';

import type { ActionFunction } from 'remix';

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const getValidationErrors = (data: ContactFormData) => {
  const errors: Record<string, string> = {};

  if (!data.name) {
    errors.name = 'Full name is required';
  }

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!data.message) {
    errors.message = 'Message is required';
  }

  return Object.entries(errors).length > 0 ? errors : null;
};

export const action: ActionFunction = async ({ request }) => {
  const values = Object.fromEntries(
    await request.formData()
  ) as ContactFormData;

  const errors = getValidationErrors(values);
  if (errors) return { errors, values };

  await submitContactForm(values);

  return redirect('/thank-you');
};

export default function Index() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <div className="flex flex-col flex-grow items-center">
      <h1 className="font-extrabold text-3xl md:text-5xl mt-12 md:mt-18 text-center">
        Launch your product.
      </h1>
      <h2 className="font-extralight text-lg md:text-3xl mt-5 md:mt-8 text-center">
        We help businesses build software.
      </h2>
      <div className="mt-2 md:mt-4">---</div>
      <ContactForm
        className="font-extralight mt-2 md:mt-4 px-6 w-full max-w-md text-md"
        actionData={actionData}
        transition={transition}
      />
    </div>
  );
}
