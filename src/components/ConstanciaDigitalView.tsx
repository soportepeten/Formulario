import React from 'react';
import {
  CheckCircle2,
  Printer,
  Download,
  RotateCcw,
  ShieldCheck,
  Building2,
  QrCode,
  FileCheck,
} from 'lucide-react';
import { ConstanciaDigital } from '../types';
import { formatCUI, DEPARTAMENTOS_GUATEMALA, MUNICIPIOS_POR_DEPARTAMENTO } from '../data/mockDocentes';

interface ConstanciaProps {
  constancia: ConstanciaDigital;
  onReset: () => void;
}

export const ConstanciaDigitalView: React.FC<ConstanciaProps> = ({ constancia, onReset }) => {
  const { docente, respuestas, folio, fechaEmision, horaEmision, hashTransaccional } = constancia;

  const handlePrint = () => {
    window.print();
  };

  const getDeptName = (id: string) => {
    return DEPARTAMENTOS_GUATEMALA.find((d) => d.id === id)?.nombre || id;
  };

  const getMuniName = (deptId: string, muniId: string) => {
    const list = MUNICIPIOS_POR_DEPARTAMENTO[deptId] || [];
    return list.find((m) => m.id === muniId)?.nombre || muniId;
  };

  const getTrayectoriaLabel = (val: string) => {
    switch (val) {
      case '<1':
        return 'Menos de 1 año';
      case '1-3':
        return '1 a 3 años';
      case '4-7':
        return '4 a 7 años';
      case '8-12':
        return '8 a 12 años';
      case '>12':
        return 'Más de 12 años continuos';
      default:
        return val;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4 py-2 pb-24 print:max-w-full print:p-0">
      {/* Success Badge Banner */}
      <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-center space-y-1 shadow-xs print:hidden">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h2 className="text-base font-bold text-emerald-900 pt-1">
          ¡Encuesta Oficial Remitida con Éxito!
        </h2>
        <p className="text-xs text-emerald-700">
          Su información ha sido transmitida y certificada por el sistema central del MINEDUC.
        </p>
      </div>

      {/* Official Certificate Document Card */}
      <div className="bg-white border-2 border-[#00173b] rounded-xl p-5 shadow-sm space-y-4 print:border print:shadow-none">
        {/* Document Header */}
        <div className="border-b border-slate-200 pb-3 flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#00173b] text-white flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#87ceff]" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Gobierno de Guatemala
              </p>
              <h1 className="text-sm font-bold text-[#00173b] leading-tight">
                Ministerio de Educación
              </h1>
              <p className="text-[11px] text-[#00658f] font-semibold">
                Dirección General de Gestión de Calidad Educativa (DIGEEX)
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#c8e6ff] text-[#001e2e]">
              CERTIFICADO
            </span>
          </div>
        </div>

        {/* Certificate Title & Folio */}
        <div className="bg-[#f2f4f6] rounded-lg p-3 text-center border border-slate-200">
          <p className="text-[11px] font-bold text-[#00658f] uppercase tracking-wider">
            Constancia Oficial de Censo y Encuesta Docente
          </p>
          <p className="text-xs text-slate-600">Programa Nacional de Telesecundaria</p>
          <div className="mt-2 pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
            <span className="text-slate-500">Folio Electrónico:</span>
            <span className="font-mono font-bold text-[#00173b]">{folio}</span>
          </div>
        </div>

        {/* Verified Teacher Data */}
        <div className="space-y-2 text-xs">
          <h3 className="font-bold text-[#00173b] text-xs uppercase tracking-wide border-b pb-1">
            1. Datos del Docente Auditado
          </h3>
          <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <div>
              <span className="text-slate-500 text-[10px] block">Nombre Completo:</span>
              <span className="font-bold text-[#00173b]">{docente.nombreCompleto}</span>
            </div>
            <div>
              <span className="text-slate-500 text-[10px] block">CUI / DPI:</span>
              <span className="font-mono font-bold text-[#00173b]">{formatCUI(docente.cui)}</span>
            </div>
            <div className="col-span-2">
              <span className="text-slate-500 text-[10px] block">Establecimiento Actual:</span>
              <span className="font-medium text-slate-800">
                {docente.nombreEstablecimiento} ({docente.codigoEstablecimiento})
              </span>
            </div>
          </div>
        </div>

        {/* Summary of Responses */}
        <div className="space-y-2 text-xs">
          <h3 className="font-bold text-[#00173b] text-xs uppercase tracking-wide border-b pb-1">
            2. Respuestas Registradas
          </h3>
          <ul className="space-y-1.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[11px]">
            <li className="flex justify-between">
              <span className="text-slate-600">Trayectoria en Telesecundaria:</span>
              <strong className="text-[#00173b]">
                {getTrayectoriaLabel(respuestas.p1_trayectoria)}
              </strong>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-600">Años en establecimiento actual:</span>
              <strong className="text-[#00173b] font-mono">
                {respuestas.p2_anios_actual} año(s)
              </strong>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-600">Permanencia en sede actual:</span>
              <span
                className={`font-bold px-1.5 py-0.2 rounded text-[10px] ${
                  respuestas.p3_acuerdo_actual === 'SI'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {respuestas.p3_acuerdo_actual === 'SI' ? 'SÍ (Acepta permanencia)' : 'NO (Reubicación)'}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-600">Reubicación en mismo municipio:</span>
              <span
                className={`font-bold px-1.5 py-0.2 rounded text-[10px] ${
                  respuestas.p4_mismo_municipio === 'SI'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {respuestas.p4_mismo_municipio === 'SI' ? 'SÍ (Conformidad)' : 'NO (No acepta traslado)'}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-600">Municipio de preferencia:</span>
              <strong className="text-[#00173b]">
                {getMuniName(respuestas.p5_departamento, respuestas.p5_municipio)}, {getDeptName(respuestas.p5_departamento)}
              </strong>
            </li>
            {respuestas.p5_observacion && (
              <li className="pt-1 text-slate-500 italic">
                Sector / Aldea: {respuestas.p5_observacion}
              </li>
            )}
          </ul>
        </div>

        {/* Verification and Electronic Stamp */}
        <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-[11px]">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00658f]" />
              <span>Certificación Digital: SIRE / RENAP</span>
            </div>
            <p className="text-slate-400 font-mono text-[10px]">
              Fecha: {fechaEmision} - {horaEmision}
            </p>
            <p className="text-slate-400 font-mono text-[9px] truncate max-w-[200px]">
              Hash: {hashTransaccional}
            </p>
          </div>

          <div className="border border-slate-300 p-1 rounded bg-white shrink-0 text-center">
            <QrCode className="w-12 h-12 text-[#00173b]" />
            <span className="text-[8px] font-mono text-slate-500 block">MINEDUC QR</span>
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="space-y-2 print:hidden">
        <button
          type="button"
          onClick={handlePrint}
          className="w-full bg-[#00173b] hover:bg-[#0f2c59] text-white py-3 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Imprimir / Guardar Constancia en PDF</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="w-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 py-3 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-[#00658f]" />
          <span>Realizar Nueva Consulta de Docente</span>
        </button>
      </div>
    </div>
  );
};
