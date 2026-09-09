import React from 'react';
import { Landmark, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-5 px-4 mt-auto mb-16 md:mb-0 print:hidden shadow-2xs">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-[#00173b] flex items-center justify-center text-white shrink-0">
            <Landmark className="w-5 h-5 text-[#87ceff]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#00173b]">
              Ministerio de Educación de Guatemala
            </span>
            <span className="text-[11px] text-slate-500">
              Dirección General de Gestión de Calidad Educativa - Telesecundaria
            </span>
          </div>
        </div>

        <div className="flex flex-col md:items-end text-[11px] text-slate-500 space-y-1">
          <div className="flex items-center justify-center md:justify-end space-x-2">
            <span className="inline-flex items-center text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              Sello de Confianza y Seguridad SSL
            </span>
            <span>•</span>
            <span>SIRE / RENAP v2.4</span>
          </div>
          <p>© 2025 MINEDUC. Todos los derechos reservados. Portal Administrativo Docente.</p>
        </div>
      </div>
    </footer>
  );
};
