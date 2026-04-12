import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Copy, Check, Type } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const styleMap: Record<string, { label: string; fn: (text: string) => string }> = {
  bold: {
    label: "Bold",
    fn: (t) => t.replace(/[A-Za-z0-9]/g, (c) => {
      const code = c.charCodeAt(0);
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D400 + code - 65);
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D41A + code - 97);
      if (c >= '0' && c <= '9') return String.fromCodePoint(0x1D7CE + code - 48);
      return c;
    }),
  },
  italic: {
    label: "Italic",
    fn: (t) => t.replace(/[A-Za-z]/g, (c) => {
      const code = c.charCodeAt(0);
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D434 + code - 65);
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D44E + code - 97);
      return c;
    }),
  },
  boldItalic: {
    label: "Bold Italic",
    fn: (t) => t.replace(/[A-Za-z]/g, (c) => {
      const code = c.charCodeAt(0);
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D468 + code - 65);
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D482 + code - 97);
      return c;
    }),
  },
  cursive: {
    label: "Cursive",
    fn: (t) => t.replace(/[A-Za-z]/g, (c) => {
      const code = c.charCodeAt(0);
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D4D0 + code - 65);
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D4EA + code - 97);
      return c;
    }),
  },
  fraktur: {
    label: "Fraktur",
    fn: (t) => t.replace(/[A-Za-z]/g, (c) => {
      const code = c.charCodeAt(0);
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D504 + code - 65);
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D51E + code - 97);
      return c;
    }),
  },
  doubleStruck: {
    label: "Double Struck",
    fn: (t) => t.replace(/[A-Za-z0-9]/g, (c) => {
      const code = c.charCodeAt(0);
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D538 + code - 65);
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D552 + code - 97);
      if (c >= '0' && c <= '9') return String.fromCodePoint(0x1D7D8 + code - 48);
      return c;
    }),
  },
  bubble: {
    label: "Bubble",
    fn: (t) => t.replace(/[A-Za-z0-9]/g, (c) => {
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x24B6 + c.charCodeAt(0) - 65);
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x24D0 + c.charCodeAt(0) - 97);
      if (c === '0') return '⓪';
      if (c >= '1' && c <= '9') return String.fromCodePoint(0x2460 + c.charCodeAt(0) - 49);
      return c;
    }),
  },
  monospace: {
    label: "Monospace",
    fn: (t) => t.replace(/[A-Za-z0-9]/g, (c) => {
      const code = c.charCodeAt(0);
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D670 + code - 65);
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D68A + code - 97);
      if (c >= '0' && c <= '9') return String.fromCodePoint(0x1D7F6 + code - 48);
      return c;
    }),
  },
  smallCaps: {
    label: "Small Caps",
    fn: (t) => {
      const map: Record<string, string> = {a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ꜰ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'Q',r:'ʀ',s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ'};
      return t.toLowerCase().split('').map(c => map[c] ?? c).join('');
    },
  },
  upsideDown: {
    label: "Upside Down",
    fn: (t) => {
      const map: Record<string, string> = {a:'ɐ',b:'q',c:'ɔ',d:'p',e:'ǝ',f:'ɟ',g:'ƃ',h:'ɥ',i:'ᴉ',j:'ɾ',k:'ʞ',l:'l',m:'ɯ',n:'u',o:'o',p:'d',q:'b',r:'ɹ',s:'s',t:'ʇ',u:'n',v:'ʌ',w:'ʍ',x:'x',y:'ʎ',z:'z',A:'∀',B:'B',C:'Ɔ',D:'D',E:'Ǝ',F:'Ⅎ',G:'פ',H:'H',I:'I',J:'ɾ',K:'ʞ',L:'˥',M:'W',N:'N',O:'O',P:'Ԁ',Q:'Q',R:'ɹ',S:'S',T:'┴',U:'∩',V:'Λ',W:'M',X:'X',Y:'⅄',Z:'Z',' ':' '};
      return t.split('').map(c => map[c] ?? c).reverse().join('');
    },
  },
};

export default function TextStylerPage() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Text Styler — Fancy Text Generator | ToolKit";
  }, []);

  const handleCopy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    toast({ title: "Copied!", description: "Styled text copied to clipboard." });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link
          href="/"
          data-testid="link-back"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all tools
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">✏️</div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Text Styler</h1>
            <p className="text-muted-foreground text-sm">Convert your text into fancy unicode styles</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Your Text</label>
            <textarea
              data-testid="input-text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type something here..."
              className="w-full h-28 px-4 py-3 rounded-xl border border-border bg-card text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
            />
          </div>

          {input && (
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Styled Versions</p>
              {Object.entries(styleMap).map(([key, style]) => {
                const styled = style.fn(input);
                return (
                  <div key={key} className="flex items-center gap-3 bg-card border border-card-border rounded-xl px-4 py-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">{style.label}</p>
                      <p data-testid={`text-styled-${key}`} className="text-base text-foreground break-all">{styled}</p>
                    </div>
                    <button
                      data-testid={`button-copy-${key}`}
                      onClick={() => handleCopy(styled, key)}
                      className="shrink-0 p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {copied === key ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {!input && (
            <div className="text-center py-12 text-muted-foreground">
              <Type className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p>Start typing above to see styled versions</p>
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm font-semibold text-foreground mb-4">Try other tools</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "QR Code Generator", path: "/tools/qr-code" },
              { label: "Love Message Generator", path: "/tools/love-message" },
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
