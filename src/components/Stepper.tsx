import React from 'react';
import { Check } from 'lucide-react';
import { StepId } from '../types';

interface StepperProps {
  currentStep: StepId;
  onSelectStep?: (step: StepId) => void;
}

export const Stepper: React.FC<StepperProps> = ({ currentStep, onSelectStep }) => {
  const steps: { id: StepId; number: number; label: string }[] = [
    { id: 'cui', number: 1, label: '1. Consulta CUI' },
    { id: 'expediente', number: 2, label: '2. Expediente' },
    { id: 'encuesta', number: 3, label: '3. Encuesta' },
  ];

  const getStepIndex = (step: StepId): number => {
    switch (step) {
      case 'cui':
        return 1;
      case 'expediente':
        return 2;
      case 'encuesta':
        return 3;
      case 'constancia':
        return 4;
      default:
        return 1;
    }
  };

  const currentIndex = getStepIndex(currentStep);

  return (
    <div className="bg-white border-b border-slate-200 py-3.5 px-4 shadow-xs">
      <div className="max-w-md mx-auto relative">
        {/* Background track line */}
        <div className="absolute left-6 right-6 top-4 -translate-y-1/2 h-0.5 bg-slate-200 z-0" />

        {/* Progress track line fill */}
        <div
          className="absolute left-6 top-4 -translate-y-1/2 h-0.5 bg-[#00658f] transition-all duration-300 z-0"
          style={{
            width:
              currentIndex === 1
                ? '0%'
                : currentIndex === 2
                ? '50%'
                : 'calc(100% - 48px)',
          }}
        />

        <div className="flex items-center justify-between relative z-10">
          {steps.map((step) => {
            const isCompleted = currentIndex > step.number;
            const isActive = currentIndex === step.number;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => onSelectStep && onSelectStep(step.id)}
                className="flex flex-col items-center group cursor-pointer focus:outline-none transition-all"
              >
                {/* Circle */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                    isCompleted
                      ? 'bg-[#00658f] text-white shadow-xs'
                      : isActive
                      ? 'bg-white border-2 border-[#0f2c59] text-[#00173b] shadow-xs ring-4 ring-[#c8e6ff]'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-[11px] mt-1.5 font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-[#00658f] font-bold'
                      : isCompleted
                      ? 'text-slate-700'
                      : 'text-slate-400'
                  }`}
                >
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
