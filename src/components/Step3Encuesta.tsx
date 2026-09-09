import React, { useState } from 'react';
import {
  User,
  ChevronDown,
  ClipboardCheck,
  ThumbsUp,
  ThumbsDown,
  CheckCircle,
  XCircle,
  ArrowLeft,
  CheckSquare,
  Send,
  Loader2,
  Building,
  MapPin,
} from 'lucide-react';
import { DocenteData, EncuestaRespuestas } from '../types';
import { formatCUI, DEPARTAMENTOS_GUATEMALA, MUNICIPIOS_POR_DEPARTAMENTO } from '../data/mockDocentes';

interface Step3Props {
  docente: DocenteData;
  onBack: () => void;
  onSubmit: (respuestas: EncuestaRespuestas) => void;
}

export const Step3Encuesta: React.FC<Step3Props> = ({ docente, onBack, onSubmit }) => {
  // Survey Form State initialized with realistic defaults matching screenshots
  const [trayectoria, setTrayectoria] = useState<string>('4-7');
  const [aniosActual, setAniosActual] = useState<number>(4);
  const [acuerdoActual, setAcuerdoActual] = useState<'SI' | 'NO'>('SI');
  const [mismoMunicipio, setMismoMunicipio] = useState<'SI' | 'NO'>('SI');
  const [departamento, setDepartamento] = useState<string>(docente.departamento || '01');
  const [municipio, setMunicipio] = useState<string>(docente.municipio || '0103');
  const [observacion, setObservacion] = useState<string>('');
  const [declaracionJurada, setDeclaracionJurada] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorDeclaracion, setErrorDeclaracion] = useState<string>('');

  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(true);

  // Available municipalities for chosen department
  const municipiosDisponibles = MUNICIPIOS_POR_DEPARTAMENTO[departamento] || [
    { id: `${departamento}01`, nombre: 'Cabecera Departamental' },
    { id: `${departamento}02`, nombre: 'Municipio 2' },
  ];

  const handleDepartamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDept = e.target.value;
    setDepartamento(newDept);
    const firstMuni = MUNICIPIOS_POR_DEPARTAMENTO[newDept]?.[0]?.id || `${newDept}01`;
    setMunicipio(firstMuni);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!declaracionJurada) {
      setErrorDeclaracion('Debe aceptar la Declaración Jurada para poder remitir la encuesta oficial.');
      return;
    }
    setErrorDeclaracion('');
    setIsSubmitting(true);

    const respuestas: EncuestaRespuestas = {
      p1_trayectoria: trayectoria,
      p2_anios_actual: aniosActual,
      p3_acuerdo_actual: acuerdoActual,
      p4_mismo_municipio: mismoMunicipio,
      p5_departamento: departamento,
      p5_municipio: municipio,
      p5_observacion: observacion,
      declaracion_jurada: declaracionJurada,
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmit(respuestas);
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4 py-2 pb-24">
      {/* Ficha Resumida del Docente Verificado (Card Colapsable) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <button
          type="button"
          onClick={() => setIsSummaryOpen(!isSummaryOpen)}
          className="w-full flex items-center justify-between p-3.5 bg-[#f2f4f6] cursor-pointer select-none text-left"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0f2c59] text-white flex items-center justify-center shrink-0">
              <User className="w-4 h-4 text-[#87ceff]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-[#00658f] uppercase tracking-wide">
                  DOCENTE AUDITADO
                </span>
                <span className="inline-flex items-center text-[10px] bg-[#c8e6ff] text-[#001e2e] px-1.5 py-0.2 rounded font-semibold">
                  Verificado
                </span>
              </div>
              <p className="text-xs font-bold text-[#00173b] truncate">
                {docente.nombreCompleto}
              </p>
            </div>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
              isSummaryOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isSummaryOpen && (
          <div className="p-3.5 border-t border-slate-200 grid grid-cols-2 gap-2.5 text-xs bg-white">
            <div className="bg-[#f2f4f6] p-2.5 rounded-lg border border-slate-200/60">
              <span className="text-[11px] text-slate-500 block">CUI Docente:</span>
              <span className="text-xs text-[#00173b] font-bold font-mono">
                {formatCUI(docente.cui)}
              </span>
            </div>
            <div className="bg-[#f2f4f6] p-2.5 rounded-lg border border-slate-200/60">
              <span className="text-[11px] text-slate-500 block">Código Establecimiento:</span>
              <span className="text-xs text-[#00173b] font-bold font-mono">
                {docente.codigoEstablecimiento}
              </span>
            </div>
            <div className="col-span-2 bg-[#f2f4f6] p-2.5 rounded-lg border border-slate-200/60">
              <span className="text-[11px] text-slate-500 block">Establecimiento Actual:</span>
              <span className="text-xs text-slate-800 font-medium leading-snug">
                {docente.nombreEstablecimiento}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Banner Informativo del Formulario Oficial */}
      <div className="bg-[#c8e6ff]/30 border border-[#87ceff]/60 rounded-xl p-3.5 flex items-start gap-3 shadow-xs">
        <ClipboardCheck className="w-5 h-5 text-[#00658f] shrink-0 mt-0.5" />
        <div>
          <h1 className="text-xs font-bold text-[#00173b] uppercase tracking-wide">
            Cuestionario Oficial de Asignación y Permanencia Docente
          </h1>
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
            Responda con certeza y precisión cada uno de los ítems para la regularización de plazas
            en Telesecundaria.
          </p>
        </div>
      </div>

      {/* Contenedor del Cuestionario */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* PREGUNTA 01 */}
        <article className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] text-[#00658f] font-bold tracking-wide uppercase">
              PREGUNTA 01 / TRAYECTORIA
            </span>
            <span className="text-[11px] text-[#ba1a1a] font-semibold">* Obligatoria</span>
          </div>
          <label className="text-sm font-semibold text-[#00173b] block mb-3 leading-snug">
            ¿Cuántos años ha laborado en el programa de Telesecundaria?
          </label>

          <div className="space-y-2" role="radiogroup">
            {[
              { value: '<1', label: 'Menos de 1 año' },
              { value: '1-3', label: '1 a 3 años' },
              { value: '4-7', label: '4 a 7 años' },
              { value: '8-12', label: '8 a 12 años' },
              { value: '>12', label: 'Más de 12 años continuos' },
            ].map((opt) => {
              const isChecked = trayectoria === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all active:scale-[0.99] ${
                    isChecked
                      ? 'border-[#00658f] bg-[#c8e6ff]/20 font-medium shadow-xs'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xs text-slate-800 font-medium">{opt.label}</span>
                  <input
                    type="radio"
                    name="p1_trayectoria"
                    value={opt.value}
                    checked={isChecked}
                    onChange={() => setTrayectoria(opt.value)}
                    className="h-4 w-4 text-[#00658f] border-slate-300 focus:ring-[#87ceff]"
                  />
                </label>
              );
            })}
          </div>
        </article>

        {/* PREGUNTA 02 */}
        <article className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] text-[#00658f] font-bold tracking-wide uppercase">
              PREGUNTA 02 / ESTABLECIMIENTO VIGENTE
            </span>
            <span className="text-[11px] text-[#ba1a1a] font-semibold">* Obligatoria</span>
          </div>
          <label
            htmlFor="p2_anios_actual"
            className="text-sm font-semibold text-[#00173b] block mb-3 leading-snug"
          >
            ¿Cuántos años lleva laborando en el establecimiento donde está asignado en el presente
            ciclo escolar?
          </label>

          <div className="relative flex rounded-lg shadow-2xs">
            <div className="relative flex-grow focus-within:z-10">
              <input
                id="p2_anios_actual"
                type="number"
                min="0"
                max="40"
                value={aniosActual}
                onChange={(e) => setAniosActual(Math.max(0, parseInt(e.target.value) || 0))}
                className="block w-full rounded-none rounded-l-lg border-slate-300 py-2.5 px-3.5 text-base font-mono font-semibold text-[#00173b] focus:border-[#00658f] focus:ring-2 focus:ring-[#87ceff]/40 focus:outline-none"
              />
            </div>
            <span className="inline-flex items-center rounded-r-lg border border-l-0 border-slate-300 bg-[#f2f4f6] px-3.5 text-xs text-slate-600 select-none font-medium">
              años lectivos
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1">
            <span>ℹ️</span>
            <span>Ingrese 0 si es su primer ciclo escolar en este centro educativo.</span>
          </p>
        </article>

        {/* PREGUNTA 03 */}
        <article className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] text-[#00658f] font-bold tracking-wide uppercase">
              PREGUNTA 03 / ASIGNACIÓN PRESUPUESTARIA
            </span>
            <span className="text-[11px] text-[#ba1a1a] font-semibold">* Obligatoria</span>
          </div>
          <label className="text-sm font-semibold text-[#00173b] block mb-3 leading-snug">
            ¿Estaría de acuerdo a que su partida presupuestaria sea asignada en el establecimiento
            educativo donde está laborando actualmente?
          </label>

          <div className="grid grid-cols-2 gap-3" role="radiogroup">
            {/* SI */}
            <button
              type="button"
              onClick={() => setAcuerdoActual('SI')}
              className={`flex flex-col items-center justify-center p-3.5 rounded-lg border-2 cursor-pointer transition-all active:scale-[0.98] ${
                acuerdoActual === 'SI'
                  ? 'border-[#00658f] bg-[#c8e6ff]/30 shadow-xs'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <ThumbsUp
                className={`w-6 h-6 mb-1 ${
                  acuerdoActual === 'SI' ? 'text-[#00658f]' : 'text-slate-400'
                }`}
              />
              <span className="text-base font-bold text-[#00173b]">SÍ</span>
              <span className="text-[11px] text-slate-500">Acepto permanencia</span>
            </button>

            {/* NO */}
            <button
              type="button"
              onClick={() => setAcuerdoActual('NO')}
              className={`flex flex-col items-center justify-center p-3.5 rounded-lg border-2 cursor-pointer transition-all active:scale-[0.98] ${
                acuerdoActual === 'NO'
                  ? 'border-[#00658f] bg-[#c8e6ff]/30 shadow-xs'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <ThumbsDown
                className={`w-6 h-6 mb-1 ${
                  acuerdoActual === 'NO' ? 'text-[#00658f]' : 'text-slate-400'
                }`}
              />
              <span className="text-base font-bold text-slate-700">NO</span>
              <span className="text-[11px] text-slate-500">Deseo reubicación</span>
            </button>
          </div>
        </article>

        {/* PREGUNTA 04 */}
        <article className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] text-[#00658f] font-bold tracking-wide uppercase">
              PREGUNTA 04 / DEMANDA MUNICIPAL
            </span>
            <span className="text-[11px] text-[#ba1a1a] font-semibold">* Obligatoria</span>
          </div>
          <label className="text-sm font-semibold text-[#00173b] block mb-3 leading-snug">
            De no existir demanda en el establecimiento donde labora actualmente, ¿estaría de acuerdo
            que se le asigne en otro establecimiento, dentro de su mismo municipio?
          </label>

          <div className="grid grid-cols-2 gap-3" role="radiogroup">
            {/* SI */}
            <button
              type="button"
              onClick={() => setMismoMunicipio('SI')}
              className={`flex flex-col items-center justify-center p-3.5 rounded-lg border-2 cursor-pointer transition-all active:scale-[0.98] ${
                mismoMunicipio === 'SI'
                  ? 'border-[#00658f] bg-[#c8e6ff]/30 shadow-xs'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <CheckCircle
                className={`w-6 h-6 mb-1 ${
                  mismoMunicipio === 'SI' ? 'text-[#00658f]' : 'text-slate-400'
                }`}
              />
              <span className="text-base font-bold text-[#00173b]">SÍ</span>
              <span className="text-[11px] text-slate-500">Conformidad local</span>
            </button>

            {/* NO */}
            <button
              type="button"
              onClick={() => setMismoMunicipio('NO')}
              className={`flex flex-col items-center justify-center p-3.5 rounded-lg border-2 cursor-pointer transition-all active:scale-[0.98] ${
                mismoMunicipio === 'NO'
                  ? 'border-[#00658f] bg-[#c8e6ff]/30 shadow-xs'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <XCircle
                className={`w-6 h-6 mb-1 ${
                  mismoMunicipio === 'NO' ? 'text-[#00658f]' : 'text-slate-400'
                }`}
              />
              <span className="text-base font-bold text-slate-700">NO</span>
              <span className="text-[11px] text-slate-500">No acepto traslado</span>
            </button>
          </div>
        </article>

        {/* PREGUNTA 05 */}
        <article className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] text-[#00658f] font-bold tracking-wide uppercase">
              PREGUNTA 05 / REUBICACIÓN PREFERENTE
            </span>
            <span className="text-[11px] text-slate-500 font-semibold">Opcional</span>
          </div>
          <label className="text-sm font-semibold text-[#00173b] block mb-3 leading-snug">
            Si existiera la posibilidad de moverlo a otro municipio, indique qué municipio le
            gustaría que se le ubicara.
          </label>

          <div className="space-y-3">
            {/* Departamento */}
            <div>
              <label htmlFor="p5_departamento" className="block text-xs font-semibold text-[#00173b] mb-1">
                Departamento de Preferencia
              </label>
              <div className="relative">
                <select
                  id="p5_departamento"
                  value={departamento}
                  onChange={handleDepartamentoChange}
                  className="w-full rounded-lg border border-slate-300 bg-white py-2.5 px-3 text-xs text-[#00173b] font-medium focus:border-[#00658f] focus:ring-2 focus:ring-[#87ceff]/40 focus:outline-none appearance-none"
                >
                  {DEPARTAMENTOS_GUATEMALA.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.nombre}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Municipio */}
            <div>
              <label htmlFor="p5_municipio" className="block text-xs font-semibold text-[#00173b] mb-1">
                Municipio de Preferencia
              </label>
              <div className="relative">
                <select
                  id="p5_municipio"
                  value={municipio}
                  onChange={(e) => setMunicipio(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white py-2.5 px-3 text-xs text-[#00173b] font-medium focus:border-[#00658f] focus:ring-2 focus:ring-[#87ceff]/40 focus:outline-none appearance-none"
                >
                  {municipiosDisponibles.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.nombre}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Observación de Aldea o Caserío */}
            <div>
              <label htmlFor="p5_observacion" className="block text-xs font-semibold text-[#00173b] mb-1">
                Aldea, Caserío o Sector específico (Opcional)
              </label>
              <input
                id="p5_observacion"
                type="text"
                value={observacion}
                onChange={(e) => setObservacion(e.target.value)}
                placeholder="Ej. Aldea Joya de los Cedros o cercanía a CA-1"
                className="w-full rounded-lg border border-slate-300 py-2.5 px-3 text-xs text-[#00173b] placeholder-slate-400 focus:border-[#00658f] focus:ring-2 focus:ring-[#87ceff]/40 focus:outline-none"
              />
            </div>
          </div>
        </article>

        {/* Declaración Jurada Institucional */}
        <section className="bg-[#f2f4f6] border border-slate-200 rounded-xl p-4 shadow-xs">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="declaracion_jurada"
              checked={declaracionJurada}
              onChange={(e) => {
                setDeclaracionJurada(e.target.checked);
                if (e.target.checked) setErrorDeclaracion('');
              }}
              className="h-5 w-5 mt-0.5 rounded text-[#00658f] border-slate-300 focus:ring-[#87ceff]"
            />
            <div className="text-xs text-slate-700">
              <span className="font-bold text-[#00173b] block mb-0.5">
                Declaración Jurada y Certificación de Datos
              </span>
              Declaro bajo juramento que las respuestas y datos brindados en el presente instrumento
              son verídicos, exactos y corresponden a mi situación administrativa real en el programa
              de Telesecundaria para el presente ciclo lectivo del Ministerio de Educación.
            </div>
          </label>
          {errorDeclaracion && (
            <p className="text-xs text-[#ba1a1a] mt-2 font-medium">{errorDeclaracion}</p>
          )}
        </section>

        {/* Botones de Acción */}
        <div className="pt-2 pb-6 space-y-2.5">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#00173b] hover:bg-[#0f2c59] text-white py-3.5 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer ${
              isSubmitting ? 'opacity-90 cursor-wait' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#87ceff]" />
                <span>Transmitiendo y Certificando Encuesta...</span>
              </>
            ) : (
              <>
                <ClipboardCheck className="w-4 h-4 text-[#87ceff]" />
                <span>Finalizar y Enviar Encuesta</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onBack}
            disabled={isSubmitting}
            className="w-full bg-white hover:bg-slate-50 border border-[#00658f] text-[#00658f] py-3 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Verificación</span>
          </button>
        </div>
      </form>
    </div>
  );
};
