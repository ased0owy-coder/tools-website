import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowLeft, Download, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function QrCodePage() {
  const [input, setInput] = useState("");
  const [generated, setGenerated] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "QR Code Generator — Free Online QR Creator | ToolKit";
  }, []);

  const generateQR = async () => {
    if (!input.trim()) {
      toast({ title: "Input required", description: "Please enter a URL or text.", variant: "destructive" });
      return;
    }
    const QRCode = (await import("qrcode")).default;
    const canvas = canvasRef.current;
    if (!canvas) return;
    await QRCode.toCanvas(canvas, input.trim(), {
      width: 280,
      margin: 2,
      color: { dark: "#1a0a00", light: "#fffbf5" },
    });
    setGenerated(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") generateQR();
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast({ title: "Downloaded!", description: "QR code saved as PNG." });
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
          <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl">📱</div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">QR Code Generator</h1>
            <p className="text-muted-foreground text-sm">Turn any link or text into a scannable QR code</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Enter URL or Text</label>
            <input
              data-testid="input-url"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="https://example.com or any text..."
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <button
            data-testid="button-generate"
            onClick={generateQR}
            disabled={!input.trim()}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-5 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <QrCode className="w-4 h-4" />
            Generate QR Code
          </button>
        </div>

        <div className={`flex flex-col items-center gap-4 transition-all duration-300 ${generated ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className="bg-card border border-card-border rounded-2xl p-6 shadow-sm">
            <canvas data-testid="canvas-qr" ref={canvasRef} className="rounded-lg" />
          </div>
          <button
            data-testid="button-download"
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-xl font-semibold hover:bg-muted transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PNG
          </button>
        </div>

        {!generated && (
          <div className="text-center py-12 text-muted-foreground">
            <QrCode className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p>Enter a URL or text above and click Generate</p>
          </div>
        )}

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
