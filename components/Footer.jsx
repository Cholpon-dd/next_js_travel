import Link from 'next/link';

const footerSections = [
  {
    id: 1,
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our mission', href: '/#mission' },
      { name: 'Team', href: '/about/#team' },
    ],
  },
  {
    id: 2,
    title: 'Content',
    links: [
      { name: 'Advantages', href: '/#advantage' },
      { name: 'Destinations', href: '/destinations' },
      { name: 'Testimonials', href: '/#testim' },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-10 py-10 px-8 bg-slate-700 text-slate-400">
      <div className="md:flex max-w-7xl mx-auto">
        {footerSections.map((section) => (
          <div key={section.id} className="w-full mb-5 md:w-2/5">
            <h6 className="dark:text-white font-semibold text-slate-300 mb-3">{section.title}</h6>
            <ul className="inline-block">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="footer-link hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="w-full md:w-1/5">
          <h6 className="dark:text-white font-semibold text-slate-300 mb-3">Contact Us</h6>
          <ul className="flex">
            <li className="mr-2">
              <Link className="footer-link hover:text-white" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </Link>
            </li>
            <li className="mr-2">
              <Link className="footer-link hover:text-white" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link className="footer-link hover:text-white" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
