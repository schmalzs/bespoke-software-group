import { Form } from 'remix';
import TextArea from './TextArea';
import TextBox from './TextBox';

import type { Transition } from '@remix-run/react/transition';

export default function ContactForm({
  className,
  actionData,
  transition,
}: {
  className?: string;
  actionData: any;
  transition: Transition;
}) {
  return (
    <Form method="post" className={className}>
      <fieldset disabled={transition.state === 'submitting'}>
        <div className="flex flex-col">
          <label className="my-2">
            Full Name
            <br />
            <TextBox
              className="w-full"
              type="text"
              name="name"
              defaultValue={actionData?.values.name}
              hasError={!!actionData?.errors.name}
            />
          </label>

          <label className="my-2">
            Email
            <br />
            <TextBox
              className="w-full"
              type="text"
              name="email"
              defaultValue={actionData?.values.email}
              hasError={!!actionData?.errors.email}
            />
          </label>

          <label className="my-2">
            Message
            <br />
            <TextArea
              className="w-full h-[8rem]"
              name="message"
              defaultValue={actionData?.values.message}
              hasError={!!actionData?.errors.message}
            />
          </label>

          <button
            type="submit"
            className="bg-react text-gray px-8 py-2 rounded-lg hover:bg-light-react duration-200"
          >
            {transition.state === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </fieldset>
    </Form>
  );
}
