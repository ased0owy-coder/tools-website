import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import TextStylerPage from "@/pages/tools/text-styler";
import QrCodePage from "@/pages/tools/qr-code";
import LoveMessagePage from "@/pages/tools/love-message";
import CaptionPage from "@/pages/tools/caption";
import BioPage from "@/pages/tools/bio";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/tools/text-styler" component={TextStylerPage} />
      <Route path="/tools/qr-code" component={QrCodePage} />
      <Route path="/tools/love-message" component={LoveMessagePage} />
      <Route path="/tools/caption" component={CaptionPage} />
      <Route path="/tools/bio" component={BioPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
