import React from 'react';
import { Landmark, PhoneCall, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DocenteData, StepId } from '../types';
import { formatCUI } from '../data/mockDocentes';

interface HeaderProps {
  currentStep: StepId;
  docente: DocenteData | null;
  onOpenPbxHelp: () => void;
  onNavigateStep?: (step: StepId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  docente,
  onOpenPbxHelp,
  onNavigateStep,
}) => {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Institutional Top Banner */}
      <div className="bg-[#00173b] text-white px-4 py-1.5 text-xs font-medium">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#87ceff] animate-pulse"></span>
            <span className="tracking-wider uppercase font-semibold text-[11px] text-[#d8e2ff]">
              Gobierno de Guatemala
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300 text-[11px]">
              Ministerio de Educación (MINEDUC)
            </span>
          </div>
          <div className="flex items-center space-x-3 text-[11px]">
            <span className="text-[#87ceff] font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#87ceff]" />
              Ciclo Escolar 2024 - 2025
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-[#0f2c59] text-white flex items-center justify-center shadow-xs">
            <Landmark className="w-5 h-5 text-[#87ceff]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[17px] font-bold text-[#00173b] tracking-tight leading-none">
                MINEDUC Telesecundaria
              </span>
              <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#e0f2fe] text-[#00658f]">
                Oficial
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
              Dirección General de Gestión de Calidad Educativa (DIGEEX / DINFO)
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Quick step jump for easy review if desired */}
          {onNavigateStep && (
            <div className="hidden lg:flex items-center bg-slate-100 rounded-lg p-0.5 text-xs text-slate-600 mr-2">
              <button
                type="button"
                onClick={() => onNavigateStep('cui')}
                className={`px-2.5 py-1 rounded font-medium transition-all ${
                  currentStep === 'cui'
                    ? 'bg-white text-[#00173b] shadow-xs'
                    : 'hover:text-[#00173b]'
                }`}
              >
                1. CUI
              </button>
              <button
                type="button"
                onClick={() => onNavigateStep('expediente')}
                className={`px-2.5 py-1 rounded font-medium transition-all ${
                  currentStep === 'expediente'
                    ? 'bg-white text-[#00173b] shadow-xs'
                    : 'hover:text-[#00173b]'
                }`}
              >
                2. Expediente
              </button>
              <button
                type="button"
                onClick={() => onNavigateStep('encuesta')}
                className={`px-2.5 py-1 rounded font-medium transition-all ${
                  currentStep === 'encuesta'
                    ? 'bg-white text-[#00173b] shadow-xs'
                    : 'hover:text-[#00173b]'
                }`}
              >
                3. Encuesta
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={onOpenPbxHelp}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#00173b] bg-slate-100 hover:bg-slate-200 active:bg-slate-300 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#00658f]" />
            <span>Ayuda PBX</span>
          </button>
        </div>
      </div>

      {/* Sub-Header Metadata Strip */}
      <div className="bg-[#f2f4f6] border-t border-b border-slate-200/80 px-4 py-1.5 text-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00658f]" />
            <span className="font-bold text-[#00173b] uppercase tracking-wider text-[11px]">
              Ciclo Escolar 2024-2025
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[11px]">
            {docente ? (
              <span className="bg-[#e6e8ea] text-[#191c1e] px-2 py-0.5 rounded font-mono font-semibold">
                CUI: {formatCUI(docente.cui)}
              </span>
            ) : (
              <span className="text-slate-500 font-medium">DIGEEX / DINFO</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
