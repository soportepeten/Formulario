export type StepId = 'cui' | 'expediente' | 'encuesta' | 'constancia';

export interface DocenteData {
  cui: string;
  nombreCompleto: string;
  fechaNacimiento: string;
  genero: string;
  etnia: string;
  estadoPlanilla: string;
  codigoEstablecimiento: string;
  nombreEstablecimiento: string;
  municipioDepartamento: string;
  direccion: string;
  modalidadCertificada: string;
  departamento: string;
  municipio: string;
}

export interface EncuestaRespuestas {
  p1_trayectoria: string; // '<1', '1-3', '4-7', '8-12', '>12'
  p2_anios_actual: number;
  p3_acuerdo_actual: 'SI' | 'NO';
  p4_mismo_municipio: 'SI' | 'NO';
  p5_departamento: string;
  p5_municipio: string;
  p5_observacion: string;
  declaracion_jurada: boolean;
}

export interface ConstanciaDigital {
  folio: string;
  fechaEmision: string;
  horaEmision: string;
  docente: DocenteData;
  respuestas: EncuestaRespuestas;
  codigoSeguridad: string;
  hashTransaccional: string;
}

export interface InconsistencyReport {
  id: string;
  cui: string;
  nombre: string;
  tipoError: 'nombre' | 'dpi' | 'establecimiento' | 'otro';
  descripcion: string;
  telefonoContacto: string;
  correoContacto: string;
  fecha: string;
  folioReporte: string;
}
