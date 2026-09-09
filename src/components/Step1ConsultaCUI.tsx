import React, { useState } from 'react';
import {
  Fingerprint,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  FileCheck2,
  Phone,
  Mail,
  Lock,
  Sparkles,
  Loader2,
} from 'lucide-react';
import { DocenteData } from '../types';
import { MOCK_DOCENTES, lookupDocenteByCUI, formatCUI } from '../data/mockDocentes';

interface Step1Props {
  initialCui: string;
  onContinue: (docente: DocenteData) => void;
}

export const Step1ConsultaCUI: React.FC<Step1Props> = ({ initialCui, onContinue }) => {
  const [cuiInput, setCuiInput] = useState(initialCui || '');
  const [errorMsg, setErrorMsg] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [showValidationSuccess, setShowValidationSuccess] = useState(false);

  const cleanDigits = cuiInput.replace(/\D/g, '');
  const is13Digits = cleanDigits.length === 13;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, '');
    if (raw.length > 13) raw = raw.slice(0, 13);
    setCuiInput(raw);
    if (errorMsg && raw.length === 13) {
      setErrorMsg('');
    }
  };

  const handleQuickFill = (presetCui: string) => {
    setCuiInput(presetCui);
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!is13Digits) {
      setErrorMsg('El CUI debe constar exactamente de 13 dígitos numéricos válidos.');
      return;
    }

    setErrorMsg('');
    setIsValidating(true);

    // Simulate ministerial RENAP & SIRE verification latency
    setTimeout(() => {
      setIsValidating(false);
      setShowValidationSuccess(true);

      setTimeout(() => {
        const docente = lookupDocenteByCUI(cleanDigits);
        onContinue(docente);
      }, 700);
    }, 1100);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4 py-2">
      {/* Directive Alert Banner */}
      <div className="bg-[#d8e2ff]/50 border border-[#0f2c59]/20 rounded-xl p-3.5 flex items-start space-x-3 shadow-xs">
        <ShieldCheck className="w-5 h-5 text-[#00658f] mt-0.5 shrink-0" />
        <div>
          <h2 className="text-xs font-bold text-[#00173b] uppercase tracking-wide">
            Plataforma Oficial de Validación
          </h2>
          <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
            Proceso obligatorio para personal docente de Telesecundaria para la actualización de
            la ficha censal institucional.
          </p>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center space-x-3 pb-3 border-b border-slate-200 mb-4">
          <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#00658f] flex items-center justify-center border border-slate-200">
            <Building2 className="w-5 h-5 text-[#00658f]" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#00173b] tracking-tight leading-tight">
              Consulta y Validación de Docente
            </h1>
            <p className="text-xs text-slate-500">
              Ingrese su Código Único de Identificación (DPI)
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <label htmlFor="cui" className="font-semibold text-[#00173b] flex items-center">
                DPI / CUI del Docente <span className="text-[#ba1a1a] ml-1">*</span>
              </label>
              <span className="font-mono text-slate-500 font-medium">
                {cleanDigits.length} / 13 dígitos
              </span>
            </div>

            <div className="relative rounded-lg shadow-2xs">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Fingerprint className="w-5 h-5" />
              </div>
              <input
                id="cui"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={13}
                value={cuiInput}
                onChange={handleInputChange}
                placeholder="Ej. 2489123450101"
                autoComplete="off"
                disabled={isValidating || showValidationSuccess}
                className={`block w-full pl-11 pr-11 py-3 text-base text-[#191c1e] bg-white border rounded-lg font-mono tracking-wider transition-all focus:outline-none focus:ring-2 ${
                  errorMsg
                    ? 'border-[#ba1a1a] focus:ring-red-200'
                    : is13Digits
                    ? 'border-[#00658f] focus:ring-[#87ceff]/40 ring-1 ring-[#00658f]/30'
                    : 'border-slate-300 focus:border-[#00658f] focus:ring-[#87ceff]/40'
                }`}
              />
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                {is13Digits ? (
                  <CheckCircle2 className="w-5 h-5 text-[#00658f]" />
                ) : errorMsg ? (
                  <AlertCircle className="w-5 h-5 text-[#ba1a1a]" />
                ) : (
                  <span className="material-symbols-outlined text-xl text-slate-400">dialpad</span>
                )}
              </div>
            </div>

            {errorMsg && (
              <p className="text-xs text-[#ba1a1a] flex items-center gap-1 font-medium pt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errorMsg}
              </p>
            )}

            {/* Quick Helper for Demo Testing */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#00658f]" />
                  Docentes de muestra registrados:
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-left">
                {MOCK_DOCENTES.slice(0, 4).map((d) => (
                  <button
                    key={d.cui}
                    type="button"
                    onClick={() => handleQuickFill(d.cui)}
                    className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-[#e0f2fe] text-left transition-colors group cursor-pointer"
                  >
                    <p className="text-[10px] font-bold text-[#00173b] truncate group-hover:text-[#00658f]">
                      {d.nombreCompleto}
                    </p>
                    <p className="text-[10px] font-mono text-slate-500">
                      {formatCUI(d.cui)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Institutional Legal Disclaimer */}
          <div className="bg-[#f2f4f6] rounded-lg p-3 border border-slate-200 flex items-start space-x-2.5">
            <FileCheck2 className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
            <p className="text-xs text-slate-600 leading-tight">
              La información será confrontada con los registros del{' '}
              <strong className="font-semibold text-[#00173b]">RENAP</strong> y{' '}
              <strong className="font-semibold text-[#00173b]">SIRE</strong> en conformidad con la{' '}
              <span className="text-[#00658f] font-medium">
                Ley de Acceso a la Información Pública (Decreto 57-2008)
              </span>
              .
            </p>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={isValidating || showValidationSuccess}
            className={`w-full py-3.5 px-4 font-semibold text-sm rounded-lg shadow-xs flex items-center justify-center space-x-2 transition-all cursor-pointer ${
              showValidationSuccess
                ? 'bg-[#00658f] text-white'
                : isValidating
                ? 'bg-[#0f2c59] text-white opacity-90 cursor-wait'
                : 'bg-[#00173b] hover:bg-[#0f2c59] active:bg-[#001b28] text-white'
            }`}
          >
            {isValidating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#87ceff]" />
                <span>Validando con RENAP / SIRE...</span>
              </>
            ) : showValidationSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Docente Identificado con Éxito</span>
              </>
            ) : (
              <>
                <span>Consultar y Continuar</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Help & Support Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2.5 shadow-xs">
        <h3 className="text-xs font-bold text-[#00173b] flex items-center space-x-1.5">
          <Phone className="w-3.5 h-3.5 text-[#00658f]" />
          <span>¿Tiene dificultades para ingresar o consultar?</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <a
            href="tel:50224119595"
            className="flex items-center space-x-2 p-2 rounded-lg bg-[#f2f4f6] hover:bg-[#e0f2fe] transition-colors text-[#00173b] font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#00658f] shrink-0" />
            <span className="truncate">(502) 2411-9595 Ext. 210</span>
          </a>
          <a
            href="mailto:soporte.telesecundaria@mineduc.edu.gt"
            className="flex items-center space-x-2 p-2 rounded-lg bg-[#f2f4f6] hover:bg-[#e0f2fe] transition-colors text-[#00173b] font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-[#00658f] shrink-0" />
            <span className="truncate">soporte.telesecundaria</span>
          </a>
        </div>
        <p className="text-[11px] text-slate-500">
          Horario de atención institucional: Lunes a viernes de 07:00 a 15:30 hrs.
        </p>
      </div>

      {/* Security Footer Info */}
      <div className="px-2 py-1 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center">
          <Lock className="w-3 h-3 mr-1 text-slate-400" />
          Conexión Segura SSL
        </span>
        <span>Versión 2.4.1 - DIGECADE</span>
      </div>
    </div>
  );
};
