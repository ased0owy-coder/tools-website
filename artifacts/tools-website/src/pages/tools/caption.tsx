import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Copy, Check, RefreshCw, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const categories: Record<string, { label: string; emoji: string; captions: string[] }> = {
  aesthetic: {
    label: "Aesthetic",
    emoji: "🌸",
    captions: [
      "soft life, quiet joy.",
      "chasing sunsets and good vibes.",
      "bloom where you are planted.",
      "living slowly and loving it.",
      "golden hour state of mind.",
      "in a world of noise, be someone's calm.",
      "collect moments, not things.",
      "soft hearts in a loud world.",
      "sunlight and simplicity.",
      "be the energy you want to attract.",
      "romanticize your life.",
      "peace is a lifestyle.",
      "find beauty in the ordinary.",
      "stay close to what makes you feel alive.",
      "less perfection, more authenticity.",
    ],
  },
  funny: {
    label: "Funny",
    emoji: "😂",
    captions: [
      "I came. I saw. I made it awkward.",
      "Napping professionally since birth.",
      "Running on caffeine and sarcasm.",
      "I woke up like this. (It took 3 hours.)",
      "My vibe is 'accidentally sent it to the wrong person.'",
      "Trying to be a morning person. It is not going well.",
      "Plot twist: I'm tired.",
      "Currently pretending I know what I'm doing.",
      "Professional overthinker.",
      "My life is a mood board nobody asked for.",
      "Existing but making it cute.",
      "My hobbies include starting projects and abandoning them.",
      "Do not disturb. I am disturbed enough.",
      "Lost somewhere between who I was and who I pretend to be.",
      "I put the 'pro' in procrastination.",
    ],
  },
  motivational: {
    label: "Motivational",
    emoji: "💪",
    captions: [
      "Your only competition is who you were yesterday.",
      "Do it scared.",
      "Bet on yourself every single time.",
      "Progress, not perfection.",
      "Show up, even when it is hard.",
      "The version of you that never gave up is the one that wins.",
      "Start before you are ready.",
      "Hard days are proof you are trying.",
      "You are one decision away from a completely different life.",
      "Keep going. Your future self is cheering you on.",
      "Dream it. Plan it. Do it.",
      "Uncomfortable is where growth lives.",
      "There is power in your persistence.",
      "Be the energy you wish to receive.",
      "Fall down seven times, stand up eight.",
    ],
  },
  travel: {
    label: "Travel",
    emoji: "✈️",
    captions: [
      "Passport stamps and wandering souls.",
      "Not all those who wander are lost.",
      "Collect memories, not luggage.",
      "Life is short and the world is wide.",
      "The world is a book — I am on chapter three.",
      "Saltwater heals everything.",
      "Every city has a story. Go find yours.",
      "Jet-lagged but worth it.",
      "New latitude, new attitude.",
      "Chasing horizons.",
      "Adventure is out there — you just have to book the ticket.",
      "Home is wherever I wander next.",
      "Wander often, wonder always.",
      "The best view comes after the hardest climb.",
      "Travel — because you can't Google the feeling.",
    ],
  },
  food: {
    label: "Food",
    emoji: "🍕",
    captions: [
      "I followed my heart and it led me to the kitchen.",
      "Food is my love language.",
      "Eating my feelings and they taste amazing.",
      "You cannot buy happiness but you can buy pizza. Close enough.",
      "Brunch is always a good idea.",
      "Live. Laugh. Eat good food.",
      "This was not on my diet plan but here we are.",
      "Calories don't count when you are happy. Right?",
      "Food is art and I am a hungry museum.",
      "My favorite exercise? A combination of fork lifts and spoon curls.",
      "In a committed relationship with pasta.",
      "Dessert first, adulting later.",
      "Good food, good mood.",
      "If food is wrong, I don't want to be right.",
      "Stressed spelled backwards is desserts. Coincidence? I think not.",
    ],
  },
};

export default function CaptionPage() {
  const [selected, setSelected] = useState("aesthetic");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Caption Generator — Social Media Captions | ToolKit";
    setCurrentIndex(Math.floor(Math.random() * categories[selected].captions.length));
  }, []);

  const changeCategory = (key: string) => {
    setSelected(key);
    setCurrentIndex(Math.floor(Math.random() * categories[key].captions.length));
    setCopied(false);
  };

  const generate = () => {
    const list = categories[selected].captions;
    let next = Math.floor(Math.random() * list.length);
    while (next === currentIndex && list.length > 1) next = Math.floor(Math.random() * list.length);
    setCurrentIndex(next);
    setCopied(false);
  };

  const caption = categories[selected].captions[currentIndex];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(caption);
    setCopied(true);
    toast({ title: "Copied!", description: "Caption copied to clipboard." });
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
          <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-2xl">📸</div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Caption Generator</h1>
            <p className="text-muted-foreground text-sm">Generate perfect social media captions for any mood</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              data-testid={`button-category-${key}`}
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

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 rounded-3xl p-8 text-center shadow-sm mb-6 min-h-[140px] flex items-center justify-center">
          <div>
            <Camera className="w-7 h-7 text-sky-400 mx-auto mb-3" />
            <p data-testid="text-caption" className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
              {caption}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            data-testid="button-generate"
            onClick={generate}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
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
              { label: "Love Message Generator", path: "/tools/love-message" },
              { label: "Bio Generator", path: "/tools/bio" },
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
