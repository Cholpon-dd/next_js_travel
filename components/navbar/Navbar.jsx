import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Destinations', path: '/destinations' },
  { id: 3, title: 'About Us', path: '/about' },
];
const Navbar = () => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-14 border-b-2 border-b-slate-400 fixed top-0 left-0 flex justify-between items-center z-10 lg:font-semibold tracking-wider text-lg backdrop-filter backdrop-blur-sm bg-opacity-20">
      <Link
        href="/"
        className="pl-8 text-cyan-600 uppercase italic hover:border-cyan-800 transition-all duration-300"
      >
        Onatrip
      </Link>
      <ul className="hidden lg:flex h-px justify-between items-center gap-4 cursor-pointer pr-8">
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <Link
              href={path}
              className={`${
                pathname === path ? 'text-cyan-700 font-extrabold  px-4 rounded-md' : ''
              } header-link hover:text-slate-800 hover:border-cyan-800 transition-all duration-300`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="lg:hidden text-slate-800 absolute right-5 uppercase italic  hover:border-cyan-800 transition-all duration-300"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      <div className={`lg:hidden  ${open ? 'block' : 'hidden'}`}>
        <ul className="h-px justify-between items-center gap-4 cursor-pointer pr-8 ">
          {navigation.map(({ id, title, path }) => (
            <li key={id}>
              <Link
                href={path}
                className={`${
                  pathname === path ? 'text-white bg-cyan-600 px-4 rounded-md' : ''
                } header-link hover:text-slate-800 hover:border-cyan-800 transition-all duration-300`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
