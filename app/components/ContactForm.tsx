import { Form } from 'remix';

import type { Transition } from '@remix-run/react/transition';

export default function ContactForm({
  actionData,
  transition,
}: {
  actionData: any;
  transition: Transition;
}) {
  return (
    <Form method="post">
      <fieldset disabled={transition.state === 'submitting'}>
        <div className="flex flex-col">
          <label>
            Full Name
            <br />
            <input
              className="w-full border-2 border-gray"
              type="text"
              name="name"
              defaultValue={actionData?.values.name}
            />
          </label>

          {actionData?.errors.name ? (
            <p style={{ color: 'red' }}>{actionData.errors.name}</p>
          ) : null}

          <label>
            Email
            <br />
            <input
              className="w-full"
              type="email"
              name="email"
              defaultValue={actionData?.values.email}
            />
          </label>

          <label>
            Message
            <br />
            <textarea
              name="message"
              defaultValue={actionData?.values.message}
              rows={10}
              cols={50}
            />
          </label>

          {actionData?.errors.email ? (
            <p style={{ color: 'red' }}>{actionData.errors.email}</p>
          ) : null}

          <button type="submit">
            {transition.state === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </fieldset>
    </Form>
  );
}
