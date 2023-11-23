import MouseFollow from "@/app/_components/MouseFollow/MouseFollow";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative bg-slate-900 leading-relaxed text-slate-400 antialiased group/spotlight">
      <MouseFollow />
      {children}
    </div>
  );
};

export default Layout;
