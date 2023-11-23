const Footer = () => {
  return (
    <footer className="text-sm">
      <p>
        Designed in
        <a
          href="https://www.figma.com"
          className="font-medium text-slate-200 hover:text-purple-300 focus-visible:text-purple-300"
        >
          {" "}
          Figma{" "}
        </a>
        and coded in
        <a
          href="https://code.visualstudio.com"
          className="font-medium text-slate-200 hover:text-purple-300 focus-visible:text-purple-300"
        >
          {" "}
          Visual Studio Code{" "}
        </a>
        by me. Built with
        <a
          href="https://nextjs.org"
          className="font-medium text-slate-200 hover:text-purple-300 focus-visible:text-purple-300"
        >
          {" "}
          Next.js 14{" "}
        </a>
        and
        <a
          href="https://tailwindcss.com"
          className="font-medium text-slate-200 hover:text-purple-300 focus-visible:text-purple-300"
        >
          {" "}
          Tailwind CSS{" "}
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-slate-200 hover:text-purple-300 focus-visible:text-purple-300"
        >
          {" "}
          Vercel{" "}
        </a>
        .
      </p>
      <p className="pt-2.5">@2023. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
