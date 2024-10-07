import Link from "next/link";

export const Header = () => {
  return (
    <header className=" bg-tintblue">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center text-white">
        <Link href="/" className="text-2xl font-bold text-white">
          Finsweet
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link href="#" className="hover:text-yellow-300 transition-colors">
            About us
          </Link>
          <Link href="#" className="hover:text-yellow-300 transition-colors">
            Features
          </Link>
          <Link href="#" className="hover:text-yellow-300 transition-colors">
            Pricing
          </Link>
          <Link href="#" className="hover:text-yellow-300 transition-colors">
            FAQ
          </Link>
          <Link href="#" className="hover:text-yellow-300 transition-colors">
            Blog
          </Link>
        </nav>
        <button className="bg-[#5454D4] px-6 py-2 rounded-full hover:bg-[#4646B3] transition-colors">
          Contact us
        </button>
      </div>
    </header>
  );
};
