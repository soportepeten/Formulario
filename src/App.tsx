import React, { useState } from 'react';
import { Header } from './components/Header';
import { Stepper } from './components/Stepper';
import { Step1ConsultaCUI } from './components/Step1ConsultaCUI';
import { Step2Expediente } from './components/Step2Expediente';
import { Step3Encuesta } from './components/Step3Encuesta';
import { ConstanciaDigitalView } from './components/ConstanciaDigitalView';
import { BottomNavBar } from './components/BottomNavBar';
import { Footer } from './components/Footer';
import { PbxHelpModal } from './components/PbxHelpModal';
import { ReportInconsistencyModal } from './components/ReportInconsistencyModal';
import { StepId, DocenteData, EncuestaRespuestas, ConstanciaDigital } from './types';
import { MOCK_DOCENTES } from './data/mockDocentes';

export default function App() {
  const [currentStep, setCurrentStep] = useState<StepId>('cui');
  const [docente, setDocente] = useState<DocenteData | null>(MOCK_DOCENTES[0]); // Lic. Mario Roberto Gómez Mejía as default verified docente
  const [constancia, setConstancia] = useState<ConstanciaDigital | null>(null);

  // Modals
  const [isPbxOpen, setIsPbxOpen] = useState<boolean>(false);
  const [isInconsistencyOpen, setIsInconsistencyOpen] = useState<boolean>(false);

  // Transitions
  const handleDocenteIdentificado = (doc: DocenteData) => {
    setDocente(doc);
    setCurrentStep('expediente');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConfirmExpediente = () => {
    setCurrentStep('encuesta');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCUI = () => {
    setCurrentStep('cui');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToExpediente = () => {
    setCurrentStep('expediente');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitEncuesta = (respuestas: EncuestaRespuestas) => {
    if (!docente) return;

    const now = new Date();
    const fecha = now.toLocaleDateString('es-GT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const hora = now.toLocaleTimeString('es-GT', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const newConstancia: ConstanciaDigital = {
      folio: `MINEDUC-TELESEC-2025-${randomSuffix}`,
      fechaEmision: fecha,
      horaEmision: hora,
      docente,
      respuestas,
      codigoSeguridad: `DIGEEX-AUTH-${docente.cui.slice(-4)}-${randomSuffix}`,
      hashTransaccional: `SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`,
    };

    setConstancia(newConstancia);
    setCurrentStep('constancia');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFlow = () => {
    setConstancia(null);
    setCurrentStep('cui');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex flex-col font-sans selection:bg-[#c8e6ff] selection:text-[#001e2e]">
      {/* Top Header */}
      <Header
        currentStep={currentStep}
        docente={docente}
        onOpenPbxHelp={() => setIsPbxOpen(true)}
        onNavigateStep={(step) => {
          // If stepping forward without docente, fallback to first mock docente
          if (!docente) setDocente(MOCK_DOCENTES[0]);
          setCurrentStep(step);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Stepper Progress Indicator (shown on steps 1, 2, 3) */}
      {currentStep !== 'constancia' && (
        <Stepper
          currentStep={currentStep}
          onSelectStep={(step) => {
            if (!docente) setDocente(MOCK_DOCENTES[0]);
            setCurrentStep(step);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Main Canvas Area */}
      <main className="flex-1 px-4 py-4 max-w-5xl mx-auto w-full">
        {currentStep === 'cui' && (
          <Step1ConsultaCUI
            initialCui={docente?.cui || ''}
            onContinue={handleDocenteIdentificado}
          />
        )}

        {currentStep === 'expediente' && (
          <Step2Expediente
            docente={docente || MOCK_DOCENTES[0]}
            onBack={handleBackToCUI}
            onContinue={handleConfirmExpediente}
            onReportInconsistency={() => setIsInconsistencyOpen(true)}
          />
        )}

        {currentStep === 'encuesta' && (
          <Step3Encuesta
            docente={docente || MOCK_DOCENTES[0]}
            onBack={handleBackToExpediente}
            onSubmit={handleSubmitEncuesta}
          />
        )}

        {currentStep === 'constancia' && constancia && (
          <ConstanciaDigitalView constancia={constancia} onReset={handleResetFlow} />
        )}
      </main>

      {/* Institutional Desktop / Print Footer */}
      <Footer />

      {/* Sticky Bottom Navigation for Mobile */}
      <BottomNavBar
        currentStep={currentStep}
        onSelectStep={(step) => {
          if (!docente) setDocente(MOCK_DOCENTES[0]);
          setCurrentStep(step);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        canAccessExpediente={true}
        canAccessEncuesta={true}
      />

      {/* Modals */}
      <PbxHelpModal isOpen={isPbxOpen} onClose={() => setIsPbxOpen(false)} />

      {docente && (
        <ReportInconsistencyModal
          isOpen={isInconsistencyOpen}
          docente={docente}
          onClose={() => setIsInconsistencyOpen(false)}
        />
      )}
    </div>
  );
}
