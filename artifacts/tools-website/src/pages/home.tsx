import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Search, ArrowRight, Sparkles, MessageCircleHeart, Type, QrCode,
  Camera, User, Mail, Zap, Shield, Wifi, Smartphone, Lock, Star,
  ChevronRight, Globe
} from "lucide-react";
import AdBanner from "@/components/AdBanner";
import { useLang } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { t, lang, setLang, dir } = useLang();
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = t("hero_title") + " — " + t("hero_subtitle");
  }, [lang]);

  const tools = [
    {
      id: "text-styler",
      icon: "✏️",
      lucideIcon: Type,
      title: t("tool_text_styler"),
      description: t("tool_text_styler_desc"),
      path: "/tools/text-styler",
      color: "from-orange-400 to-rose-400",
      bg: "bg-orange-50",
      borderColor: "border-orange-200",
      tag: t("tool_text_styler_tag"),
    },
    {
      id: "qr-code",
      icon: "📱",
      lucideIcon: QrCode,
      title: t("tool_qr_code"),
      description: t("tool_qr_code_desc"),
      path: "/tools/qr-code",
      color: "from-violet-500 to-purple-600",
      bg: "bg-violet-50",
      borderColor: "border-violet-200",
      tag: t("tool_qr_code_tag"),
    },
    {
      id: "love-message",
      icon: "💖",
      lucideIcon: MessageCircleHeart,
      title: t("tool_love_message"),
      description: t("tool_love_message_desc"),
      path: "/tools/love-message",
      color: "from-pink-400 to-rose-500",
      bg: "bg-pink-50",
      borderColor: "border-pink-200",
      tag: t("tool_love_message_tag"),
    },
    {
      id: "caption",
      icon: "📸",
      lucideIcon: Camera,
      title: t("tool_caption"),
      description: t("tool_caption_desc"),
      path: "/tools/caption",
      color: "from-sky-400 to-blue-500",
      bg: "bg-sky-50",
      borderColor: "border-sky-200",
      tag: t("tool_caption_tag"),
    },
    {
      id: "bio",
      icon: "🧑‍💻",
      lucideIcon: User,
      title: t("tool_bio"),
      description: t("tool_bio_desc"),
      path: "/tools/bio",
      color: "from-emerald-400 to-teal-500",
      bg: "bg-emerald-50",
      borderColor: "border-emerald-200",
      tag: t("tool_bio_tag"),
    },
  ];

  const filtered = tools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase()) ||
      tool.tag.toLowerCase().includes(search.toLowerCase())
  );

  const stats = [
    { value: "5+", label: t("stats_tools") },
    { value: "10K+", label: t("stats_users") },
    { value: "2", label: t("stats_langs") },
    { value: "⚡", label: t("stats_speed") },
  ];

  const features = [
    { icon: Lock, title: t("feat1_title"), desc: t("feat1_desc"), color: "text-violet-500", bg: "bg-violet-50" },
    { icon: Star, title: t("feat2_title"), desc: t("feat2_desc"), color: "text-amber-500", bg: "bg-amber-50" },
    { icon: Wifi, title: t("feat3_title"), desc: t("feat3_desc"), color: "text-emerald-500", bg: "bg-emerald-50" },
    { icon: Smartphone, title: t("feat4_title"), desc: t("feat4_desc"), color: "text-sky-500", bg: "bg-sky-50" },
    { icon: Zap, title: t("feat5_title"), desc: t("feat5_desc"), color: "text-orange-500", bg: "bg-orange-50" },
    { icon: Shield, title: t("feat6_title"), desc: t("feat6_desc"), color: "text-rose-500", bg: "bg-rose-50" },
  ];

  const steps = [
    { num: "01", title: t("how1_title"), desc: t("how1_desc"), icon: "🔍" },
    { num: "02", title: t("how2_title"), desc: t("how2_desc"), icon: "✍️" },
    { num: "03", title: t("how3_title"), desc: t("how3_desc"), icon: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-background" dir={dir}>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-foreground text-xl tracking-tight">{t("brand")}</span>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#tools" className="hover:text-foreground transition-colors">{t("nav_tools")}</a>
            <a href="#features" className="hover:text-foreground transition-colors">{t("nav_features")}</a>
            <a href="#contact" className="hover:text-foreground transition-colors">{t("nav_contact")}</a>
          </nav>

          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/50 hover:bg-muted text-sm font-semibold text-foreground transition-all"
          >
            <Globe className="w-4 h-4 text-primary" />
            {lang === "en" ? "العربية" : "English"}
          </button>
        </div>
      </header>

      {/* ── AD TOP ── */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <AdBanner slot="1234567890" format="horizontal" />
      </div>

      {/* ── HERO ── */}
      <section className="relative max-w-6xl mx-auto px-4 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">
          <Sparkles className="w-4 h-4" />
          {t("hero_badge")}
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-foreground leading-tight mb-5">
          {t("hero_title")}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("hero_subtitle")}
        </p>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-12">
          <Search className={`absolute ${dir === "rtl" ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground`} />
          <input
            type="search"
            placeholder={t("search_placeholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full ${dir === "rtl" ? "pr-12 pl-4" : "pl-12 pr-4"} py-4 rounded-2xl border border-border bg-card text-foreground shadow-md text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-black text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section id="tools" className="max-w-6xl mx-auto px-4 pb-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-foreground mb-2">{t("nav_tools")}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-foreground mb-2">{t("no_tools_title")}</h3>
            <p className="text-muted-foreground">{t("no_tools_sub")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tool) => (
              <ToolCard key={tool.id} tool={tool} tryNow={t("try_now")} />
            ))}
          </div>
        )}
      </section>

      {/* ── AD MIDDLE ── */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <AdBanner slot="0987654321" format="rectangle" />
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-foreground mb-2">{t("how_title")}</h2>
          <p className="text-muted-foreground">{t("how_sub")}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-3" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-8 start-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
                {step.icon}
              </div>
              <div className="text-xs font-black text-primary tracking-widest mb-1">{step.num}</div>
              <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-foreground mb-2">{t("features_title")}</h2>
          <p className="text-muted-foreground">{t("features_sub")}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-3" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── AD BOTTOM ── */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <AdBanner slot="1122334455" format="horizontal" />
      </div>

      {/* ── CONTACT ── */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 sm:p-14 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-white rounded-full" />
          </div>
          <div className="relative z-10">
            <div className="text-5xl mb-4">💼</div>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">{t("contact_title")}</h2>
            <p className="text-white/80 max-w-md mx-auto mb-8 text-lg">{t("contact_desc")}</p>
            <a
              href="mailto:contact@toolkit.app"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg"
            >
              <Mail className="w-5 h-5" />
              {t("contact_btn")}
              <ChevronRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-extrabold text-foreground">{t("brand")}</span>
              <span className="text-muted-foreground text-sm">— {t("tagline")}</span>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <div>{t("footer_made")}</div>
              <div>© {new Date().getFullYear()} {t("brand")}. {t("footer_copy")}</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ToolCard({ tool, tryNow }: { tool: any; tryNow: string }) {
  return (
    <div className="group bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className={`w-14 h-14 rounded-2xl ${tool.bg} border ${tool.borderColor} flex items-center justify-center text-3xl shadow-sm`}>
          {tool.icon}
        </div>
        <span className="text-xs font-semibold bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border">
          {tool.tag}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="font-black text-foreground text-lg mb-2">{tool.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
      </div>
      <Link
        href={tool.path}
        className={`inline-flex items-center gap-2 bg-gradient-to-r ${tool.color} text-white px-5 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-all w-full justify-center shadow-sm group-hover:shadow-md`}
      >
        {tryNow}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}
