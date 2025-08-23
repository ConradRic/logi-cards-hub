import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TMS from "./pages/TMS";
import Veiculos from "./pages/Veiculos";
import Motoristas from "./pages/Motoristas";
import Produtos from "./pages/Produtos";
import Armazem from "./pages/Armazem";
import Frota from "./pages/Frota";
import Calculadora from "./pages/Calculadora";
import Analise from "./pages/Analise";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tms" element={<TMS />} />
          <Route path="/veiculos" element={<Veiculos />} />
          <Route path="/motoristas" element={<Motoristas />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/armazem" element={<Armazem />} />
          <Route path="/frota" element={<Frota />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/analise" element={<Analise />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
