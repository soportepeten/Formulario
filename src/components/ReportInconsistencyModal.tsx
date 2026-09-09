import React, { useState } from 'react';
import { X, AlertTriangle, CheckCircle2, Send, FileText } from 'lucide-react';
import { DocenteData } from '../types';
import { formatCUI } from '../data/mockDocentes';

interface InconsistencyModalProps {
  isOpen: boolean;
  docente: DocenteData;
  onClose: () => void;
}

export const ReportInconsistencyModal: React.FC<InconsistencyModalProps> = ({
  isOpen,
  docente,
  onClose,
}) => {
  const [tipo, setTipo] = useState<'nombre' | 'dpi' | 'establecimiento' | 'otro'>('establecimiento');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [ticketFolio, setTicketFolio] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!descripcion.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      setTicketFolio(`TKT-MINEDUC-2025-${randomNum}`);
    }, 800);
  };

  const handleResetAndClose = () => {
    setTicketFolio(null);
    setDescripcion('');
    setTelefono('');
    setCorreo('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00173b]/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-xl max-w-md w-full border border-slate-200 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#ba1a1a] text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-800 flex items-center justify-center text-white">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-tight">Reportar Inconsistencia</h3>
              <p className="text-[11px] text-red-100">Expediente Oficial de Telesecundaria</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="text-red-100 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {ticketFolio ? (
          <div className="p-5 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-base font-bold text-[#00173b]">Ticket Generado Exitosamente</h4>
            <p className="text-xs text-slate-600">
              Se ha remitido su reporte de discrepancia para revisión por la Dirección de Informática
              (DINFO) y DIGEEX.
            </p>
            <div className="bg-[#f2f4f6] p-3 rounded-lg border border-slate-200">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                Número de Trámite / Folio
              </span>
              <span className="text-sm font-bold font-mono text-[#00658f]">{ticketFolio}</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Guarde este folio. Puede continuar con su encuesta provisionalmente o esperar la
              actualización de su expediente.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-2.5 bg-[#00173b] hover:bg-[#0f2c59] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Cerrar y Continuar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 space-y-3.5 text-xs">
            <div className="bg-[#f2f4f6] p-2.5 rounded-lg border border-slate-200">
              <span className="text-[10px] text-slate-500 block">Docente Auditado:</span>
              <span className="font-bold text-[#00173b] block">{docente.nombreCompleto}</span>
              <span className="text-[11px] font-mono text-slate-600">
                CUI: {formatCUI(docente.cui)}
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#00173b] mb-1">
                Tipo de Discrepancia
              </label>
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value as any)}
                className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-[#00173b] focus:border-[#00658f] focus:outline-none"
              >
                <option value="establecimiento">Código o Nombre de Establecimiento Actual</option>
                <option value="nombre">Error ortográfico en Nombre / Apellidos</option>
                <option value="dpi">Error en Registro de CUI o Fecha</option>
                <option value="otro">Otro tipo de discrepancia administrativa</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#00173b] mb-1">
                Detalle de la Inconsistencia <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Indique con claridad cuál es el dato erróneo y cuál es el dato real..."
                className="w-full rounded-lg border border-slate-300 p-2.5 text-xs text-[#191c1e] placeholder-slate-400 focus:border-[#00658f] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-[#00173b] mb-1">
                  Teléfono de Contacto
                </label>
                <input
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ej. 5555-1234"
                  className="w-full rounded-lg border border-slate-300 py-1.5 px-2.5 text-xs text-[#191c1e] focus:border-[#00658f] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#00173b] mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="docente@mineduc.edu.gt"
                  className="w-full rounded-lg border border-slate-300 py-1.5 px-2.5 text-xs text-[#191c1e] focus:border-[#00658f] focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end space-x-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-3 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-[#ba1a1a] hover:bg-red-800 text-white rounded-lg font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Generando...' : 'Enviar Reporte'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
