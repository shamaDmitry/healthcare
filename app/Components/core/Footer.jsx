import Link from 'next/link';
import Location from '../icons/Location';
import Call from '../icons/Call';

const Footer = () => {
  return (
    <footer className="text-black bg-light-gray">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 py-10">
          <div>
            <Link href="/">
              <div className="flex items-center justify-center px-4 py-2 border">
                Logo
              </div>
            </Link>

            <p className="flex items-center gap-x-4 text-gentle-black">
              <Location />
              <span>
                945893 Robert Rd., <br />
                Ste 111 Road Street, AA 134412
              </span>
            </p>

            <p className="flex items-center gap-x-4 text-gentle-black">
              <Call /> <span>(312) 321 - 23124</span>
            </p>
          </div>

          <div>
            <h1 className="mb-5">
              Subscribe our newsletter and receive information about our work,
              staff, and opportunities.
            </h1>

            <div className="flex mb-8">
              <input
                type="text"
                placeholder="Email address"
                className="p-4 bg-white border border-separator"
              />

              <button className="flex items-center justify-center px-5 py-2 font-bold text-white bg-secondary">
                SUBMIT
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <ul className="space-y-3 text-red-black">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/">Services</Link>
                </li>
                <li>
                  <Link href="/">Technology</Link>
                </li>
              </ul>

              <ul className="space-y-3 text-red-black">
                <li>
                  <Link href="/">News</Link>
                </li>
                <li>
                  <Link href="/">Career</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>

              <ul className="space-y-3 text-red-black">
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/">Accessibility</Link>
                </li>
                <li>
                  <Link href="/">Ethics Website</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-white bg-primary min-h-[50px] py-2 px-4">
        &copy; 2004 - 2023 XXXXXX LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
