import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FacilitiesPage from "./pages/FacilitiesPage";
import LimpezaPage from "./pages/LimpezaPage";
import SegurancaPage from "./pages/SegurancaPage";
import SindicoPage from "./pages/SindicoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
