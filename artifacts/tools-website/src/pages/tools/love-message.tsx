import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Copy, Check, RefreshCw, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const messages = [
  "Every time I look at you, I fall in love all over again. You are my favorite person in this entire world.",
  "You make every ordinary moment feel like a fairytale. I am so grateful the universe brought us together.",
  "If I could give you one thing in life, I would give you the ability to see yourself through my eyes. Only then would you realize how special you are to me.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "You are the first thing I think about when I wake up and the last thing on my mind before I sleep. You are my everything.",
  "With you, I have found my home. Not a place, but a feeling — safe, warm, and full of love.",
  "My heart smiles every time I see your name light up my phone. You are my happy place.",
  "You are the reason I believe in love — effortlessly, unconditionally, and completely.",
  "Every love song suddenly makes sense because of you. You are my melody.",
  "I never knew what it meant to be truly happy until the day I met you. Thank you for being mine.",
  "You walked into my life and everything changed — for the better, forever.",
  "Loving you is the easiest and most natural thing I have ever done. It feels like breathing.",
  "You are not just my partner — you are my best friend, my confidant, my safe harbor in every storm.",
  "I could search the entire universe and never find anyone as perfect for me as you.",
  "You give me butterflies — not just at the beginning, but every single day.",
  "Being with you feels like sunshine on a winter morning — warm, unexpected, and beautiful.",
  "I love the way you make me laugh, the way you make me think, and the way you make me feel alive.",
  "You are my greatest adventure and my sweetest comfort all in one.",
  "My love for you is not a noun — it is a verb, growing stronger with each passing day.",
  "In a room full of people, my eyes will always search for you. That will never change.",
  "You are the poem I never knew how to write and the song I always wanted to sing.",
  "Wherever you are is home for me. That is the truest thing I know.",
  "I want to spend every morning waking up next to you and every night falling asleep holding your hand.",
  "You are my favorite kind of magic — real, warm, and mine.",
  "Thank you for loving me on my good days, my bad days, and all the days in between.",
];

export default function LoveMessagePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Love Message Generator 💖 | ToolKit";
    setCurrentIndex(Math.floor(Math.random() * messages.length));
  }, []);

  const generate = () => {
    let next = Math.floor(Math.random() * messages.length);
    while (next === currentIndex) next = Math.floor(Math.random() * messages.length);
    setCurrentIndex(next);
    setCopied(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(messages[currentIndex]);
    setCopied(true);
    toast({ title: "Copied!", description: "Love message copied to clipboard." });
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
          <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-2xl">💖</div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Love Message Generator</h1>
            <p className="text-muted-foreground text-sm">Beautiful romantic messages for your special someone</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 rounded-3xl p-8 text-center shadow-sm mb-6">
          <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4" />
          <p data-testid="text-message" className="text-lg sm:text-xl text-foreground font-medium leading-relaxed italic">
            "{messages[currentIndex]}"
          </p>
        </div>

        <div className="flex gap-3">
          <button
            data-testid="button-generate"
            onClick={generate}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
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

        <p className="text-center text-xs text-muted-foreground mt-4">{messages.length} unique messages available</p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm font-semibold text-foreground mb-4">Try other tools</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Text Styler", path: "/tools/text-styler" },
              { label: "Caption Generator", path: "/tools/caption" },
              { label: "Bio Generator", path: "/tools/bio" },
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
