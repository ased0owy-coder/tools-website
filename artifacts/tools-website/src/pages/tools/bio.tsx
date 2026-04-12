import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Copy, Check, RefreshCw, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const bioCategories: Record<string, { label: string; emoji: string; bios: string[] }> = {
  aesthetic: {
    label: "Aesthetic",
    emoji: "🌸",
    bios: [
      "soft life enthusiast ✨ | chasing golden hours | building a life I love",
      "living slowly | bloom in silence 🌷 | collecting sunsets",
      "romanticizing the ordinary | soft girl era 🍃 | peace over everything",
      "daydreamer | coffee + poetry | here for the vibes 🌙",
      "vintage soul | floral lover | making every day a little prettier 🌸",
      "gentle heart | deep thoughts | aesthetic obsessed ✨",
      "quiet mornings, warm coffee ☕ | in love with simple things",
      "soft but resilient 🌿 | living in my own little world",
    ],
  },
  funny: {
    label: "Funny",
    emoji: "😂",
    bios: [
      "professional overthinker | chaotic but cute | nap enthusiast 😴",
      "I put the 'pro' in procrastination | expert at starting things",
      "living on iced coffee and good vibes ☕ | professionally confused",
      "my hobbies include sleeping and thinking about sleeping",
      "CEO of forgetting why I walked into a room 🤔",
      "I'm not lazy, I'm on energy-saving mode 🔋",
      "zero talent, maximum confidence | somehow thriving",
      "wanted by many, understood by few, hated by some — basically famous",
      "accidentally funny | professionally chaotic | doing my best",
      "average person trying to be slightly above average",
    ],
  },
  professional: {
    label: "Professional",
    emoji: "💼",
    bios: [
      "building things that matter | lifelong learner | driven by curiosity",
      "creative thinker | problem solver | always learning, always growing",
      "turning ideas into reality | passionate about my craft",
      "focused on impact | love what I do | dreaming big, working harder",
      "entrepreneur in the making | creative | connecting dots others miss",
      "building my dream one step at a time | intentional living",
      "always curious, constantly creating | obsessed with getting better",
    ],
  },
  mysterious: {
    label: "Mysterious",
    emoji: "🌑",
    bios: [
      "not everyone's cup of tea — but someone's entire ocean 🌊",
      "I contain multitudes 🌑 | still figuring it out",
      "a walking contradiction | beautifully chaotic",
      "the universe in human form 🌌 | ask me anything",
      "a story still being written ✍️ | complex, layered, rare",
      "not lost — just exploring different paths 🌙",
      "made of stardust and secrets ✨ | depth over everything",
      "quiet on the outside, storm on the inside ⚡",
    ],
  },
  travel: {
    label: "Travel",
    emoji: "✈️",
    bios: [
      "citizen of the world 🌍 | passport collector | always on the move",
      "wandering soul | 30+ countries | home is wherever I unpack",
      "I travel not to escape life, but so life does not escape me ✈️",
      "globe-trotter | sunset chaser | culturally curious",
      "collecting passport stamps and life lessons 🗺️",
      "adventure seeker | local food enthusiast | always planning the next trip",
      "lost in the right direction 🌍 | perpetual traveler",
    ],
  },
};

export default function BioPage() {
  const [selected, setSelected] = useState("aesthetic");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Bio Generator — Instagram Bio Ideas | ToolKit";
    setCurrentIndex(Math.floor(Math.random() * bioCategories[selected].bios.length));
  }, []);

  const changeCategory = (key: string) => {
    setSelected(key);
    setCurrentIndex(Math.floor(Math.random() * bioCategories[key].bios.length));
    setCopied(false);
  };

  const generate = () => {
    const list = bioCategories[selected].bios;
    let next = Math.floor(Math.random() * list.length);
    while (next === currentIndex && list.length > 1) next = Math.floor(Math.random() * list.length);
    setCurrentIndex(next);
    setCopied(false);
  };

  const bio = bioCategories[selected].bios[currentIndex];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(bio);
    setCopied(true);
    toast({ title: "Copied!", description: "Bio copied to clipboard." });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link
          href="/"
          data-testid="link-back"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all tools
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">🧑‍💻</div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Bio Generator</h1>
            <p className="text-muted-foreground text-sm">Generate the perfect Instagram or social media bio</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(bioCategories).map(([key, cat]) => (
            <button
              key={key}
              data-testid={`button-style-${key}`}
              onClick={() => changeCategory(key)}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                selected === key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-8 text-center shadow-sm mb-6 min-h-[130px] flex items-center justify-center">
          <div>
            <User className="w-7 h-7 text-emerald-400 mx-auto mb-3" />
            <p data-testid="text-bio" className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
              {bio}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            data-testid="button-generate"
            onClick={generate}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            <RefreshCw className="w-4 h-4" />
            Generate New
          </button>
          <button
            data-testid="button-copy"
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 bg-card border border-border text-foreground px-5 py-3 rounded-xl font-semibold hover:bg-muted transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm font-semibold text-foreground mb-4">Try other tools</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Caption Generator", path: "/tools/caption" },
              { label: "Love Message Generator", path: "/tools/love-message" },
              { label: "Text Styler", path: "/tools/text-styler" },
            ].map((t) => (
              <Link
                key={t.path}
                href={t.path}
                className="text-sm bg-muted hover:bg-primary hover:text-primary-foreground px-3 py-1.5 rounded-lg transition-colors"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
