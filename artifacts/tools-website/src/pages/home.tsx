import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Search, ArrowRight, Sparkles, MessageCircleHeart, Type, QrCode, Camera, User, Mail, ExternalLink } from "lucide-react";

const tools = [
  {
    id: "text-styler",
    icon: "✏️",
    lucideIcon: Type,
    title: "Text Styler",
    description: "Convert plain text into fancy unicode styles — bold, italic, cursive, bubble and more.",
    path: "/tools/text-styler",
    color: "from-orange-400 to-rose-400",
    bg: "bg-orange-50",
    tag: "Writing",
  },
  {
    id: "qr-code",
    icon: "📱",
    lucideIcon: QrCode,
    title: "QR Code Generator",
    description: "Turn any link or text into a scannable QR code instantly. Download and share.",
    path: "/tools/qr-code",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    tag: "Utility",
  },
  {
    id: "love-message",
    icon: "💖",
    lucideIcon: MessageCircleHeart,
    title: "Love Message Generator",
    description: "Generate beautiful romantic messages for your special someone in one click.",
    path: "/tools/love-message",
    color: "from-pink-400 to-rose-500",
    bg: "bg-pink-50",
    tag: "Social",
  },
  {
    id: "caption",
    icon: "📸",
    lucideIcon: Camera,
    title: "Caption Generator",
    description: "Get perfect social media captions for any mood — funny, aesthetic, motivational.",
    path: "/tools/caption",
    color: "from-sky-400 to-blue-500",
    bg: "bg-sky-50",
    tag: "Social",
  },
  {
    id: "bio",
    icon: "🧑‍💻",
    lucideIcon: User,
    title: "Bio Generator",
    description: "Create a catchy Instagram or social media bio that reflects your personality.",
    path: "/tools/bio",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    tag: "Social",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "All-in-One Free Tools 🔥 — Simple tools you need every day";
  }, []);

  const filtered = tools.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground text-lg">ToolKit</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#tools" className="hover:text-foreground transition-colors">Tools</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Ad Banner Top */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <div className="w-full h-16 rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center text-muted-foreground text-xs font-mono tracking-wide">
          Advertisement
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" />
          Free forever — no sign-up needed
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-5">
          All-in-One Free Tools 🔥
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Simple tools you need every day
        </p>

        {/* Search */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            data-testid="input-search"
            type="search"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-card text-foreground shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="max-w-6xl mx-auto px-4 pb-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No tools found</h3>
            <p className="text-muted-foreground">Try a different search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </section>

      {/* Ad Banner Middle */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="w-full h-24 rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center text-muted-foreground text-xs font-mono tracking-wide">
          Advertisement
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 sm:p-12 text-center border border-border">
          <div className="text-4xl mb-4">💼</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Need a custom website?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            We build fast, beautiful, and modern websites tailored to your needs. Let's create something amazing together.
          </p>
          <a
            href="mailto:contact@toolkit.app"
            data-testid="link-contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Contact Us
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground">ToolKit</span>
            <span>— Free tools for everyone</span>
          </div>
          <span>© {new Date().getFullYear()} ToolKit. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

function ToolCard({ tool }: { tool: typeof tools[number] }) {
  return (
    <div
      data-testid={`card-tool-${tool.id}`}
      className="group bg-card border border-card-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <div className={`w-12 h-12 rounded-xl ${tool.bg} flex items-center justify-center text-2xl`}>
          {tool.icon}
        </div>
        <span className="text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
          {tool.tag}
        </span>
      </div>
      <div>
        <h3 className="font-bold text-foreground text-lg mb-1">{tool.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
      </div>
      <Link
        href={tool.path}
        data-testid={`link-try-${tool.id}`}
        className={`inline-flex items-center gap-2 bg-gradient-to-r ${tool.color} text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all w-full justify-center group-hover:shadow-sm`}
      >
        Try Now
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}
