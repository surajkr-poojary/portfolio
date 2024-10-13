// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="w-full px-6 py-4 mt-12 text-center bg-transparent border-t-2">
        <p className="text-xs sm:text-sm md:text-base">
          © {new Date().getFullYear()} Suraj K R. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  