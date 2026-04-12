import { Link } from "wouter";
import { Home, Frown } from "lucide-react";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Page Not Found | ToolKit";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <Frown className="w-16 h-16 text-muted-foreground mb-4" />
      <h1 className="text-4xl font-extrabold text-foreground mb-2">404</h1>
      <p className="text-xl text-muted-foreground mb-6">Page not found</p>
      <Link
        href="/"
        data-testid="link-home"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
      >
        <Home className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}
