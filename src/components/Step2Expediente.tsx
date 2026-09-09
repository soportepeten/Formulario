import React from 'react';
import {
  Badge,
  School,
  Lock,
  CheckCircle2,
  Info,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { DocenteData } from '../types';

interface Step2Props {
  docente: DocenteData;
  onBack: () => void;
  onContinue: () => void;
  onReportInconsistency: () => void;
}

export const Step2Expediente: React.FC<Step2Props> = ({
  docente,
  onBack,
  onContinue,
  onReportInconsistency,
}) => {
  return (
    <div className="w-full max-w-md mx-auto space-y-4 py-2 pb-24">
      {/* Screen Title Section */}
      <div className="space-y-1">
        <div className="flex items-center space-x-1.5 text-[#00658f]">
          <span className="material-symbols-outlined text-sm font-semibold">assignment_ind</span>
          <span className="text-[11px] font-bold uppercase tracking-wider">
            PASO 2: CONFIRMACIÓN DE DATOS
          </span>
        </div>
        <h1 className="text-2xl font-bold text-[#00173b] tracking-tight">
          Expediente del Docente
        </h1>
        <p className="text-xs text-slate-600">
          Valide el registro ministerial antes de desbloquear el instrumento de encuesta.
        </p>
      </div>

      {/* Official Warning Notice Box */}
      <div className="bg-[#f2f4f6] border border-slate-200 rounded-xl p-3.5 shadow-xs space-y-2">
        <div className="flex items-start space-x-2.5">
          <Info className="w-5 h-5 text-[#00658f] mt-0.5 shrink-0" />
          <div className="space-y-1 flex-1">
            <h2 className="text-xs font-bold text-[#00173b]">
              Revisión de Información del Expediente
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Por favor verifique que sus datos y los del establecimiento sean correctos. Pantalla
              en modo solo lectura.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00658f] bg-[#c8e6ff]/50 px-2 py-0.5 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00658f]" />
            Verificado RENAP / SIRE
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
            <Lock className="w-3 h-3 text-slate-400" />
            No editable
          </span>
        </div>
      </div>

      {/* Card 1: Datos del Docente */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-xs p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
          <div className="flex items-center space-x-2">
            <Badge className="w-4 h-4 text-[#00658f]" />
            <h3 className="text-xs font-bold text-[#00173b] uppercase tracking-wide">
              Datos del Docente
            </h3>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1.5 animate-pulse" />
            {docente.estadoPlanilla}
          </span>
        </div>

        <div className="space-y-2.5 pt-0.5">
          <div>
            <label className="block text-xs font-semibold text-[#00173b] mb-1">
              Nombre Completo
            </label>
            <div className="bg-[#f2f4f6] border border-slate-200 rounded-lg px-3 py-2 text-sm text-[#191c1e] flex items-center justify-between">
              <span className="font-semibold text-[#00173b]">{docente.nombreCompleto}</span>
              <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-semibold text-[#00173b] mb-1">
                Fecha de Nacimiento
              </label>
              <div className="bg-[#f2f4f6] border border-slate-200 rounded-lg px-3 py-2 text-sm text-[#191c1e] flex items-center justify-between">
                <span>{docente.fechaNacimiento}</span>
                <Lock className="w-3 h-3 text-slate-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#00173b] mb-1">
                Género
              </label>
              <div className="bg-[#f2f4f6] border border-slate-200 rounded-lg px-3 py-2 text-sm text-[#191c1e] flex items-center justify-between">
                <span>{docente.genero}</span>
                <Lock className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#00173b] mb-1">
              Etnia / Pueblo de Pertenencia
            </label>
            <div className="bg-[#f2f4f6] border border-slate-200 rounded-lg px-3 py-2 text-sm text-[#191c1e] flex items-center justify-between">
              <span>{docente.etnia}</span>
              <Lock className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Card 2: Datos del Establecimiento Educativo */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-xs p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
          <div className="flex items-center space-x-2">
            <School className="w-4 h-4 text-[#00658f]" />
            <h3 className="text-xs font-bold text-[#00173b] uppercase tracking-wide">
              Datos del Establecimiento Educativo
            </h3>
          </div>
          <span className="text-[11px] font-semibold text-slate-600 font-mono bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            SEDE ACTIVA
          </span>
        </div>

        <div className="space-y-2.5 pt-0.5">
          <div>
            <label className="block text-xs font-semibold text-[#00173b] mb-1">
              Código de Establecimiento
            </label>
            <div className="bg-[#f2f4f6] border border-slate-200 rounded-lg px-3 py-2 text-sm text-[#191c1e] flex items-center justify-between font-mono font-semibold">
              <span className="text-[#00173b]">{docente.codigoEstablecimiento}</span>
              <Lock className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#00173b] mb-1">
              Nombre del Establecimiento
            </label>
            <div className="bg-[#f2f4f6] border border-slate-200 rounded-lg px-3 py-2 text-sm text-[#191c1e] flex items-start justify-between">
              <span className="leading-snug font-medium">{docente.nombreEstablecimiento}</span>
              <Lock className="w-3.5 h-3.5 text-slate-400 ml-2 mt-0.5 shrink-0" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#00173b] mb-1">
              Municipio y Departamento
            </label>
            <div className="bg-[#f2f4f6] border border-slate-200 rounded-lg px-3 py-2 text-sm text-[#191c1e] flex items-center justify-between">
              <span>{docente.municipioDepartamento}</span>
              <Lock className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#00173b] mb-1">
              Dirección
            </label>
            <div className="bg-[#f2f4f6] border border-slate-200 rounded-lg px-3 py-2 text-sm text-[#191c1e] flex items-start justify-between">
              <span className="leading-snug text-slate-700">{docente.direccion}</span>
              <Lock className="w-3.5 h-3.5 text-slate-400 ml-2 mt-0.5 shrink-0" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#00173b] mb-1">
              Modalidad Certificada
            </label>
            <div className="bg-[#f2f4f6] border border-slate-200 rounded-lg px-3 py-2 text-sm flex items-center justify-between">
              <span className="text-[#00658f] font-semibold">{docente.modalidadCertificada}</span>
              <Lock className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Report Inconsistency Alert Button */}
      <div className="pt-1">
        <button
          type="button"
          onClick={onReportInconsistency}
          className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg border border-red-200 bg-red-50 text-[#ba1a1a] hover:bg-red-100 transition-colors text-xs font-semibold cursor-pointer"
        >
          <AlertTriangle className="w-4 h-4 text-[#ba1a1a]" />
          <span>Reportar inconsistencia de datos</span>
        </button>
        <p className="text-center text-[11px] text-slate-500 mt-1.5">
          Si detecta un error en su CUI o sede, genere un ticket de soporte inmediato.
        </p>
      </div>

      {/* Floating Action Controls */}
      <div className="pt-3 flex items-center space-x-2">
        <button
          type="button"
          onClick={onBack}
          className="w-28 flex items-center justify-center space-x-1.5 py-3 px-3 rounded-lg border border-[#00658f] text-[#00658f] bg-white hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Regresar</span>
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg bg-[#00173b] hover:bg-[#0f2c59] active:bg-[#001b28] text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer"
        >
          <span className="truncate">Confirmar Datos y Continuar</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
