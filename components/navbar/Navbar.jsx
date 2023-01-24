import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Destinations', path: '/destinations' },
  { id: 3, title: 'About Us', path: '/about' },
];
const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav
      className="w-full h-14 border-b-2 border-b-slate-400 absolute
  top-0 left-0 flex justify-between items-center z-10 lg:font-semibold tracking-wider text-lg backdrop-filter 
  backdrop-blur-sm bg-opacity-20"
    >
      <Link
        href="/"
        className="pl-8 hover: text-slate-800 hover:border-blue-800 transition-all duration-300"
      >
        Logo
      </Link>
      <ul className="h-px flex justify-between items-center gap-4 cursor-pointer pr-8">
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <Link
              href={path}
              className={`${
                pathname === path ? 'text-cyan-700' : ''
              } header-link hover: text-slate-800 hover:border-cyan-800 transition-all duration-300`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
