import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "ar";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
  dir: "ltr",
});

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    brand: "ToolKit",
    tagline: "Free tools for everyone",
    nav_tools: "Tools",
    nav_features: "Features",
    nav_contact: "Contact",
    hero_badge: "Free forever — no sign-up needed",
    hero_title: "All-in-One Free Tools 🔥",
    hero_subtitle: "Simple, powerful tools you need every day — right in your browser",
    search_placeholder: "Search tools...",
    no_tools_title: "No tools found",
    no_tools_sub: "Try a different search term",
    try_now: "Try Now",
    stats_tools: "Free Tools",
    stats_users: "Happy Users",
    stats_langs: "Languages",
    stats_speed: "Always Fast",
    features_title: "Why ToolKit?",
    features_sub: "Everything you need, nothing you don't",
    feat1_title: "No Sign-up",
    feat1_desc: "Use all tools instantly — no account, no email, no password.",
    feat2_title: "100% Free",
    feat2_desc: "Every tool is completely free, forever. No hidden fees.",
    feat3_title: "Works Offline",
    feat3_desc: "All tools run in your browser. No server needed.",
    feat4_title: "Mobile Friendly",
    feat4_desc: "Designed for phones, tablets, and desktops.",
    feat5_title: "Fast & Smooth",
    feat5_desc: "Results in milliseconds, no waiting.",
    feat6_title: "Privacy First",
    feat6_desc: "Your data never leaves your device.",
    how_title: "How It Works",
    how_sub: "Three simple steps",
    how1_title: "Pick a Tool",
    how1_desc: "Browse or search for the tool you need.",
    how2_title: "Enter Your Text",
    how2_desc: "Type or paste your content into the tool.",
    how3_title: "Copy & Use",
    how3_desc: "Copy the result and use it anywhere.",
    tool_text_styler: "Text Styler",
    tool_text_styler_desc: "Convert plain text into fancy unicode styles — bold, italic, cursive, bubble and more.",
    tool_text_styler_tag: "Writing",
    tool_qr_code: "QR Code Generator",
    tool_qr_code_desc: "Turn any link or text into a scannable QR code instantly. Download and share.",
    tool_qr_code_tag: "Utility",
    tool_love_message: "Love Message Generator",
    tool_love_message_desc: "Generate beautiful romantic messages for your special someone in one click.",
    tool_love_message_tag: "Social",
    tool_caption: "Caption Generator",
    tool_caption_desc: "Get perfect social media captions for any mood — funny, aesthetic, motivational.",
    tool_caption_tag: "Social",
    tool_bio: "Bio Generator",
    tool_bio_desc: "Create a catchy Instagram or social media bio that reflects your personality.",
    tool_bio_tag: "Social",
    contact_title: "Need a Custom Website?",
    contact_desc: "We build fast, beautiful, and modern websites tailored to your needs.",
    contact_btn: "Contact Us",
    footer_copy: "All rights reserved.",
    footer_made: "Made with ❤️ for everyone",
  },
  ar: {
    brand: "تولكيت",
    tagline: "أدوات مجانية للجميع",
    nav_tools: "الأدوات",
    nav_features: "المميزات",
    nav_contact: "تواصل معنا",
    hero_badge: "مجاني للأبد — بدون تسجيل",
    hero_title: "أدوات مجانية متكاملة 🔥",
    hero_subtitle: "أدوات بسيطة وقوية تحتاجها يومياً — مباشرة من متصفحك",
    search_placeholder: "ابحث عن أداة...",
    no_tools_title: "لا توجد أدوات",
    no_tools_sub: "جرب كلمة بحث مختلفة",
    try_now: "جرّب الآن",
    stats_tools: "أداة مجانية",
    stats_users: "مستخدم سعيد",
    stats_langs: "لغات",
    stats_speed: "سريع دائماً",
    features_title: "لماذا تولكيت؟",
    features_sub: "كل ما تحتاجه، بدون تعقيد",
    feat1_title: "بدون تسجيل",
    feat1_desc: "استخدم جميع الأدوات فوراً — بدون حساب أو بريد إلكتروني.",
    feat2_title: "مجاني 100%",
    feat2_desc: "كل أداة مجانية تماماً، إلى الأبد. بدون رسوم مخفية.",
    feat3_title: "يعمل بدون إنترنت",
    feat3_desc: "جميع الأدوات تعمل في متصفحك. لا سيرفر مطلوب.",
    feat4_title: "متوافق مع الجوال",
    feat4_desc: "مصمم للهواتف والأجهزة اللوحية وأجهزة الكمبيوتر.",
    feat5_title: "سريع وسلس",
    feat5_desc: "النتائج في أجزاء من الثانية، بدون انتظار.",
    feat6_title: "خصوصيتك أولاً",
    feat6_desc: "بياناتك لا تغادر جهازك أبداً.",
    how_title: "كيف يعمل؟",
    how_sub: "ثلاث خطوات بسيطة",
    how1_title: "اختر الأداة",
    how1_desc: "تصفح أو ابحث عن الأداة التي تريدها.",
    how2_title: "أدخل النص",
    how2_desc: "اكتب أو الصق المحتوى في الأداة.",
    how3_title: "انسخ واستخدم",
    how3_desc: "انسخ النتيجة واستخدمها في أي مكان.",
    tool_text_styler: "منسّق النصوص",
    tool_text_styler_desc: "حوّل النص العادي إلى أنماط يونيكود مذهلة — عريض، مائل، منحني، فقاعي والمزيد.",
    tool_text_styler_tag: "كتابة",
    tool_qr_code: "مولّد رمز QR",
    tool_qr_code_desc: "حوّل أي رابط أو نص إلى رمز QR قابل للمسح فوراً. تنزيل ومشاركة.",
    tool_qr_code_tag: "أدوات",
    tool_love_message: "مولّد رسائل الحب",
    tool_love_message_desc: "أنشئ رسائل رومانسية جميلة لشخصك المميز بنقرة واحدة.",
    tool_love_message_tag: "اجتماعي",
    tool_caption: "مولّد التعليقات",
    tool_caption_desc: "احصل على تعليقات مثالية لوسائل التواصل الاجتماعي — مضحكة، جمالية، تحفيزية.",
    tool_caption_tag: "اجتماعي",
    tool_bio: "مولّد البايو",
    tool_bio_desc: "أنشئ بايو جذاباً للإنستغرام ووسائل التواصل يعكس شخصيتك.",
    tool_bio_tag: "اجتماعي",
    contact_title: "تريد موقعاً مخصصاً؟",
    contact_desc: "نبني مواقع سريعة وجميلة وحديثة تناسب احتياجاتك.",
    contact_btn: "تواصل معنا",
    footer_copy: "جميع الحقوق محفوظة.",
    footer_made: "صُنع بـ ❤️ للجميع",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "ar" || saved === "en") ? saved : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  const t = (key: string) => translations[lang][key] ?? translations["en"][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
