import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/readings", label: "Readings" },
  { path: "/writings", label: "Writings" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <nav className="container flex items-center justify-between py-4">
          <Link to="/" className="font-mono text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
            Your Name
          </Link>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`font-mono text-sm transition-colors ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        <div className="container py-6 flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
          <div className="flex gap-4">
            <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">Scholar</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
