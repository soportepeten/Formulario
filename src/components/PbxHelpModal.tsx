import React from 'react';
import { X, Phone, Mail, Clock, HelpCircle, Building, ExternalLink } from 'lucide-react';

interface PbxHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PbxHelpModal: React.FC<PbxHelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00173b]/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-xl max-w-md w-full border border-slate-200 shadow-xl overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#00173b] text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0f2c59] flex items-center justify-center text-[#87ceff]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-tight">Mesa de Ayuda PBX - MINEDUC</h3>
              <p className="text-[11px] text-[#87ceff]">Atención a Docentes de Telesecundaria</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
          {/* Direct Lines */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#00173b] uppercase tracking-wider text-[11px]">
              Líneas de Atención Telefónica
            </h4>
            <div className="grid grid-cols-1 gap-2">
              <a
                href="tel:50224119595"
                className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-[#e0f2fe] transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#00658f]" />
                  <div>
                    <p className="font-bold text-[#00173b]">PBX Central MINEDUC</p>
                    <p className="text-[11px] text-slate-500">(502) 2411-9595 - Extensión 210</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-[#00658f] bg-[#c8e6ff] px-2 py-0.5 rounded">
                  DIGEEX
                </span>
              </a>

              <a
                href="tel:50224119595"
                className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-[#e0f2fe] transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#00658f]" />
                  <div>
                    <p className="font-bold text-[#00173b]">Soporte Técnico DINFO</p>
                    <p className="text-[11px] text-slate-500">(502) 2411-9595 - Extensión 215</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-[#00658f] bg-[#c8e6ff] px-2 py-0.5 rounded">
                  DINFO
                </span>
              </a>
            </div>
          </div>

          {/* Email channels */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#00173b] uppercase tracking-wider text-[11px]">
              Canales Digitales Oficiales
            </h4>
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00658f]" />
                <div>
                  <span className="text-[10px] text-slate-500 block">Consultas Administrativas:</span>
                  <a
                    href="mailto:soporte.telesecundaria@mineduc.gob.gt"
                    className="font-semibold text-[#00658f] hover:underline"
                  >
                    soporte.telesecundaria@mineduc.gob.gt
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-1 border-t border-slate-200">
                <Clock className="w-4 h-4 text-[#00658f]" />
                <div>
                  <span className="text-[10px] text-slate-500 block">Horario de Atención:</span>
                  <span className="text-slate-700">Lunes a viernes de 07:00 a 15:30 hrs.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#00173b] uppercase tracking-wider text-[11px]">
              Preguntas Frecuentes
            </h4>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg border border-slate-200 bg-white">
                <p className="font-bold text-[#00173b]">
                  ¿Qué ocurre si mis datos de establecimiento están desactualizados?
                </p>
                <p className="text-slate-600 mt-0.5 text-[11px]">
                  En el Paso 2 presione &quot;Reportar inconsistencia de datos&quot;. Esto generará
                  un ticket automático en DIGEEX para cotejar con su DRE Departamental.
                </p>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200 bg-white">
                <p className="font-bold text-[#00173b]">
                  ¿El llenado de este cuestionario garantiza mi permanencia?
                </p>
                <p className="text-slate-600 mt-0.5 text-[11px]">
                  Es un instrumento oficial de auditoría censal y preferencia docente para el proceso
                  de regularización de plazas de Telesecundaria según normativa ministerial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#00173b] hover:bg-[#0f2c59] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Entendido y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
