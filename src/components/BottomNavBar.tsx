import React from 'react';
import { BadgeCheck, UserSquare2, ClipboardList } from 'lucide-react';
import { StepId } from '../types';

interface BottomNavProps {
  currentStep: StepId;
  onSelectStep: (step: StepId) => void;
  canAccessExpediente: boolean;
  canAccessEncuesta: boolean;
}

export const BottomNavBar: React.FC<BottomNavProps> = ({
  currentStep,
  onSelectStep,
  canAccessExpediente,
  canAccessEncuesta,
}) => {
  return (
    <nav
      aria-label="Navegación del proceso"
      className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-slate-200 flex justify-around items-center px-2 py-1.5 max-w-5xl mx-auto shadow-lg md:hidden print:hidden"
    >
      {/* 1. Consulta CUI */}
      <button
        type="button"
        onClick={() => onSelectStep('cui')}
        className={`flex flex-col items-center justify-center py-1 transition-colors ${
          currentStep === 'cui' ? 'text-[#00658f] font-bold' : 'text-slate-500 hover:text-[#00173b]'
        }`}
      >
        <BadgeCheck
          className={`w-5 h-5 ${currentStep === 'cui' ? 'text-[#00658f] stroke-[2.5]' : 'text-slate-400'}`}
        />
        <span className="text-[11px] mt-0.5">1. Consulta CUI</span>
      </button>

      {/* 2. Expediente */}
      <button
        type="button"
        disabled={!canAccessExpediente}
        onClick={() => canAccessExpediente && onSelectStep('expediente')}
        className={`flex flex-col items-center justify-center py-1 transition-colors ${
          currentStep === 'expediente'
            ? 'text-[#00658f] font-bold'
            : canAccessExpediente
            ? 'text-slate-500 hover:text-[#00173b]'
            : 'text-slate-300 opacity-60 cursor-not-allowed'
        }`}
      >
        <UserSquare2
          className={`w-5 h-5 ${
            currentStep === 'expediente'
              ? 'text-[#00658f] stroke-[2.5]'
              : 'text-slate-400'
          }`}
        />
        <span className="text-[11px] mt-0.5">2. Expediente</span>
      </button>

      {/* 3. Encuesta */}
      <button
        type="button"
        disabled={!canAccessEncuesta}
        onClick={() => canAccessEncuesta && onSelectStep('encuesta')}
        className={`flex flex-col items-center justify-center py-1 transition-colors ${
          currentStep === 'encuesta'
            ? 'text-[#00658f] font-bold'
            : canAccessEncuesta
            ? 'text-slate-500 hover:text-[#00173b]'
            : 'text-slate-300 opacity-60 cursor-not-allowed'
        }`}
      >
        <ClipboardList
          className={`w-5 h-5 ${
            currentStep === 'encuesta' ? 'text-[#00658f] stroke-[2.5]' : 'text-slate-400'
          }`}
        />
        <span className="text-[11px] mt-0.5">3. Encuesta</span>
      </button>
    </nav>
  );
};
