import { redirect, useActionData, useTransition } from 'remix';
// import ContactForm from '~/components/ContactForm';

import type { ActionFunction } from 'remix';

// export const action: ActionFunction = async ({ request }) => {
//   const formData = await request.formData();

//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   // const [errors, project] = await createProject(formData);

//   // if (errors) {
//   //   const values = Object.fromEntries(formData);
//   //   return { errors, values };
//   // }

//   console.info(formData);
//   return redirect('/');
// };

export default function Index() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <div className="flex flex-col flex-grow items-center">
      <h1 className="font-extrabold text-3xl md:text-5xl mt-12 md:mt-20">
        Launch your product.
      </h1>
      <h2 className="font-extralight text-lg md:text-3xl mt-5 md:mt-8 text-center">
        We help businesses build software.
      </h2>
      <h3 className="text-md md:text-2xl mt-5 md:mt-8">
        <a
          className="font-extralight underline hover:text-react duration-200"
          href="mailto:scott@bespokesoftwaregroup.com"
        >
          scott@bespokesoftwaregroup.com
        </a>
      </h3>
      {/* <ContactForm actionData={actionData} transition={transition} /> */}
    </div>
  );
}
