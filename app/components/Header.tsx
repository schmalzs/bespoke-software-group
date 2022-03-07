import Logo from './Logo';

export default function Header() {
  return (
    <>
      <header className="flex items-center bg-gray font-extrabold text-white text-xl md:text-4xl p-4">
        <Logo className="fill-transparent stroke-react mr-4 w-8 h-8 md:w-14 md:h-14" />
        {<h1>Bespoke Software Group</h1>}
      </header>
      <svg
        className="bg-react h-4 md:h-8"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon className="fill-gray" points="0 0 2560 100 2560 0"></polygon>
      </svg>
    </>
  );
}
