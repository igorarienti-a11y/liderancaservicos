import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { preloadImages } from "@/hooks/use-image-preload";
import Index from "./pages/Index";
import FacilitiesPage from "./pages/FacilitiesPage";
import LimpezaPage from "./pages/LimpezaPage";
import SegurancaPage from "./pages/SegurancaPage";
import SindicoPage from "./pages/SindicoPage";
import TelefoniaPage from "./pages/TelefoniaPage";
import ZeladoriaPage from "./pages/ZeladoriaPage";
import LimpezaConservacaoPage from "./pages/LimpezaConservacaoPage";
import SegurancaPatrimonialPage from "./pages/SegurancaPatrimonialPage";
import AscensoristaPage from "./pages/AscensoristaPage";
import GarcomPage from "./pages/GarcomPage";
import JardinagemPage from "./pages/JardinagemPage";
import MaoDeObraPage from "./pages/MaoDeObraPage";
import CopaCafePage from "./pages/CopaCafePage";
import CozinheiraPage from "./pages/CozinheiraPage";
import DigitacaoPage from "./pages/DigitacaoPage";
import MotoristaPage from "./pages/MotoristaPage";
import PortariaPage from "./pages/PortariaPage";
import RecepcaoPage from "./pages/RecepcaoPage";
import NotFound from "./pages/NotFound";

// Import hero images for preloading
import heroBanner from "@/assets/hero-banner.png";
import heroFacilities from "@/assets/hero-facilities-new.png";
import heroLimpeza from "@/assets/hero-limpeza-conservacao.png";
import heroSeguranca from "@/assets/hero-seguranca-new.png";
import heroTelefonia from "@/assets/hero-telefonia.png";
import heroPortaria from "@/assets/hero-portaria.png";
import heroRecepcao from "@/assets/hero-recepcao.png";
import heroAscensorista from "@/assets/hero-ascensorista.png";
import heroCopaCafe from "@/assets/hero-copa-cafe.png";
import heroCozinheira from "@/assets/hero-cozinheira.png";
import heroDigitacao from "@/assets/hero-digitacao.png";
import heroGarcom from "@/assets/hero-garcom.png";
import heroJardinagem from "@/assets/hero-jardinagem.png";
import heroMaoDeObra from "@/assets/hero-mao-de-obra.png";
import heroMotorista from "@/assets/hero-motorista.png";
import heroZeladoria from "@/assets/hero-zeladoria.png";

const queryClient = new QueryClient();

const App = () => {
  // Preload all hero images on app start
  useEffect(() => {
    preloadImages([
      heroBanner,
      heroFacilities,
      heroLimpeza,
      heroSeguranca,
      heroTelefonia,
      heroPortaria,
      heroRecepcao,
      heroAscensorista,
      heroCopaCafe,
      heroCozinheira,
      heroDigitacao,
      heroGarcom,
      heroJardinagem,
      heroMaoDeObra,
      heroMotorista,
      heroZeladoria,
    ]);
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/limpeza" element={<LimpezaPage />} />
          <Route path="/seguranca" element={<SegurancaPage />} />
          <Route path="/sindico" element={<SindicoPage />} />
          <Route path="/telefonia" element={<TelefoniaPage />} />
          <Route path="/zeladoria" element={<ZeladoriaPage />} />
          <Route path="/limpeza-conservacao" element={<LimpezaConservacaoPage />} />
          <Route path="/seguranca-patrimonial" element={<SegurancaPatrimonialPage />} />
          <Route path="/ascensorista" element={<AscensoristaPage />} />
          <Route path="/garcom" element={<GarcomPage />} />
          <Route path="/jardinagem" element={<JardinagemPage />} />
          <Route path="/mao-de-obra" element={<MaoDeObraPage />} />
          <Route path="/copa-cafe" element={<CopaCafePage />} />
          <Route path="/cozinheira" element={<CozinheiraPage />} />
          <Route path="/digitacao" element={<DigitacaoPage />} />
          <Route path="/motorista" element={<MotoristaPage />} />
          <Route path="/portaria" element={<PortariaPage />} />
          <Route path="/recepcao" element={<RecepcaoPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
