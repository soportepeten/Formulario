import { DocenteData } from '../types';

export const MOCK_DOCENTES: DocenteData[] = [
  {
    cui: '2458910240101',
    nombreCompleto: 'LIC. MARIO ROBERTO GÓMEZ MEJÍA',
    fechaNacimiento: '18/09/1981',
    genero: 'Masculino',
    etnia: 'Ladino / Mestizo',
    estadoPlanilla: 'Activo en Planilla MINEDUC',
    codigoEstablecimiento: '01-01-0023-45',
    nombreEstablecimiento: 'Inst. Telesecundaria Aldea Las Anonas, San José Pinula',
    municipioDepartamento: 'San José Pinula, Guatemala',
    direccion: 'Sector 3, Aldea Las Anonas, San José Pinula',
    modalidadCertificada: 'Secundaria / Telesecundaria',
    departamento: '01', // Guatemala
    municipio: '0103', // San José Pinula
  },
  {
    cui: '2541890120101',
    nombreCompleto: 'PROF. CARLOS ENRIQUE MORALES SANDOVAL',
    fechaNacimiento: '14/05/1984',
    genero: 'Masculino',
    etnia: 'Ladino / Mestizo',
    estadoPlanilla: 'Activo en Planilla MINEDUC',
    codigoEstablecimiento: '01-01-0025-42',
    nombreEstablecimiento: 'Instituto Nacional de Educación Básica de Telesecundaria No. 12',
    municipioDepartamento: 'Guatemala, Guatemala',
    direccion: '10a. Calle 2-45, Zona 1, Aldea Las Flores',
    modalidadCertificada: 'Secundaria / Telesecundaria',
    departamento: '01',
    municipio: '0101',
  },
  {
    cui: '1982453101701',
    nombreCompleto: 'LICDA. CLAUDIA MARÍA FLORES IXCOY',
    fechaNacimiento: '22/11/1987',
    genero: 'Femenino',
    etnia: 'Maya Itzá',
    estadoPlanilla: 'Activo en Planilla MINEDUC',
    codigoEstablecimiento: '17-01-0042-12',
    nombreEstablecimiento: 'Inst. Nacional de Educación Básica Telesecundaria Santa Elena',
    municipioDepartamento: 'Flores, Petén',
    direccion: 'Barrio Central, Frente a Cancha Municipal',
    modalidadCertificada: 'Secundaria / Telesecundaria',
    departamento: '17', // Petén
    municipio: '1701', // Flores
  },
  {
    cui: '3012876540901',
    nombreCompleto: 'PROF. BYRON ESTUARDO CHÁVEZ PÉREZ',
    fechaNacimiento: '05/02/1989',
    genero: 'Masculino',
    etnia: 'Maya Kʼicheʼ',
    estadoPlanilla: 'Activo en Planilla MINEDUC',
    codigoEstablecimiento: '09-01-0018-33',
    nombreEstablecimiento: 'Instituto Mixto Telesecundaria Cantón Choquí',
    municipioDepartamento: 'Quetzaltenango, Quetzaltenango',
    direccion: 'Sector Las Rosas, Cantón Choquí',
    modalidadCertificada: 'Secundaria / Telesecundaria',
    departamento: '09',
    municipio: '0901',
  }
];

export const DEPARTAMENTOS_GUATEMALA = [
  { id: '01', nombre: 'Guatemala' },
  { id: '02', nombre: 'El Progreso' },
  { id: '03', nombre: 'Sacatepéquez' },
  { id: '04', nombre: 'Chimaltenango' },
  { id: '05', nombre: 'Escuintla' },
  { id: '06', nombre: 'Santa Rosa' },
  { id: '07', nombre: 'Sololá' },
  { id: '08', nombre: 'Totonicapán' },
  { id: '09', nombre: 'Quetzaltenango' },
  { id: '10', nombre: 'Suchitepéquez' },
  { id: '11', nombre: 'Retalhuleu' },
  { id: '12', nombre: 'San Marcos' },
  { id: '13', nombre: 'Huehuetenango' },
  { id: '14', nombre: 'Quiché' },
  { id: '15', nombre: 'Baja Verapaz' },
  { id: '16', nombre: 'Alta Verapaz' },
  { id: '17', nombre: 'Petén' },
  { id: '18', nombre: 'Izabal' },
  { id: '19', nombre: 'Zacapa' },
  { id: '20', nombre: 'Chiquimula' },
  { id: '21', nombre: 'Jalapa' },
  { id: '22', nombre: 'Jutiapa' }
];

export const MUNICIPIOS_POR_DEPARTAMENTO: Record<string, { id: string; nombre: string }[]> = {
  '01': [
    { id: '0101', nombre: 'Guatemala (Ciudad)' },
    { id: '0102', nombre: 'Santa Catarina Pinula' },
    { id: '0103', nombre: 'San José Pinula' },
    { id: '0104', nombre: 'San José del Golfo' },
    { id: '0105', nombre: 'Palencia' },
    { id: '0106', nombre: 'Chinautla' },
    { id: '0107', nombre: 'San Pedro Ayampuc' },
    { id: '0108', nombre: 'Mixco' },
    { id: '0109', nombre: 'San Pedro Sacatepéquez' },
    { id: '0110', nombre: 'San Juan Sacatepéquez' },
    { id: '0111', nombre: 'San Raymundo' },
    { id: '0112', nombre: 'Chuarrancho' },
    { id: '0113', nombre: 'Fraijanes' },
    { id: '0114', nombre: 'Amatitlán' },
    { id: '0115', nombre: 'Villa Nueva' },
    { id: '0116', nombre: 'Villa Canales' },
    { id: '0117', nombre: 'Petapa' }
  ],
  '02': [
    { id: '0201', nombre: 'Guastatoya' },
    { id: '0202', nombre: 'Morazán' },
    { id: '0203', nombre: 'San Agustín Acasaguastlán' },
    { id: '0204', nombre: 'San Cristóbal Acasaguastlán' },
    { id: '0205', nombre: 'El Jícaro' },
    { id: '0206', nombre: 'Sansare' },
    { id: '0207', nombre: 'Sanarate' },
    { id: '0208', nombre: 'San Antonio La Paz' }
  ],
  '03': [
    { id: '0301', nombre: 'Antigua Guatemala' },
    { id: '0302', nombre: 'Jocotenango' },
    { id: '0303', nombre: 'Pastores' },
    { id: '0304', nombre: 'Sumpango' },
    { id: '0305', nombre: 'Santo Domingo Xenacoj' },
    { id: '0306', nombre: 'Santiago Sacatepéquez' },
    { id: '0307', nombre: 'San Bartolomé Milpas Altas' },
    { id: '0308', nombre: 'San Lucas Sacatepéquez' },
    { id: '0309', nombre: 'Santa Lucía Milpas Altas' },
    { id: '0310', nombre: 'Magdalena Milpas Altas' },
    { id: '0311', nombre: 'Santa María de Jesús' },
    { id: '0312', nombre: 'Ciudad Vieja' }
  ],
  '04': [
    { id: '0401', nombre: 'Chimaltenango' },
    { id: '0402', nombre: 'San José Poaquil' },
    { id: '0403', nombre: 'San Martín Jilotepeque' },
    { id: '0404', nombre: 'Comalapa' },
    { id: '0405', nombre: 'Santa Apolonia' },
    { id: '0406', nombre: 'Tecpán Guatemala' },
    { id: '0407', nombre: 'Patzún' },
    { id: '0408', nombre: 'Pochuta' },
    { id: '0409', nombre: 'Patzicía' },
    { id: '0410', nombre: 'Santa Cruz Balanyá' },
    { id: '0411', nombre: 'Acatenango' },
    { id: '0412', nombre: 'Yepocapa' },
    { id: '0413', nombre: 'San Andrés Itzapa' },
    { id: '0414', nombre: 'Parramos' },
    { id: '0415', nombre: 'Zaragoza' },
    { id: '0416', nombre: 'El Tejar' }
  ],
  '05': [
    { id: '0501', nombre: 'Escuintla' },
    { id: '0502', nombre: 'Santa Lucía Cotzumalguapa' },
    { id: '0503', nombre: 'La Democracia' },
    { id: '0504', nombre: 'Siquinalá' },
    { id: '0505', nombre: 'Masagua' },
    { id: '0506', nombre: 'Tiquisate' },
    { id: '0507', nombre: 'La Gomera' },
    { id: '0508', nombre: 'Guanagazapa' },
    { id: '0509', nombre: 'San José' },
    { id: '0510', nombre: 'Iztapa' },
    { id: '0511', nombre: 'Palín' },
    { id: '0512', nombre: 'San Vicente Pacaya' },
    { id: '0513', nombre: 'Nueva Concepción' },
    { id: '0514', nombre: 'Sipacate' }
  ],
  '09': [
    { id: '0901', nombre: 'Quetzaltenango' },
    { id: '0902', nombre: 'Salcajá' },
    { id: '0903', nombre: 'Olintepeque' },
    { id: '0904', nombre: 'San Carlos Sija' },
    { id: '0905', nombre: 'Sibilia' },
    { id: '0906', nombre: 'Cabricán' },
    { id: '0907', nombre: 'Cajolá' },
    { id: '0908', nombre: 'San Miguel Sigüilá' },
    { id: '0909', nombre: 'San Juan Ostuncalco' },
    { id: '0910', nombre: 'San Mateo' },
    { id: '0911', nombre: 'Concepción Chiquirichapa' },
    { id: '0912', nombre: 'San Martín Sacatepéquez' },
    { id: '0913', nombre: 'Almolonga' },
    { id: '0914', nombre: 'Cantel' },
    { id: '0915', nombre: 'Huitán' },
    { id: '0916', nombre: 'Zunil' },
    { id: '0917', nombre: 'Colomba' },
    { id: '0918', nombre: 'San Francisco La Unión' },
    { id: '0919', nombre: 'El Palmar' },
    { id: '0920', nombre: 'Coatepeque' },
    { id: '0921', nombre: 'Génova' },
    { id: '0922', nombre: 'Flores Costa Cuca' },
    { id: '0923', nombre: 'La Esperanza' },
    { id: '0924', nombre: 'Palestina de Los Altos' }
  ],
  '17': [
    { id: '1701', nombre: 'Flores' },
    { id: '1702', nombre: 'San José' },
    { id: '1703', nombre: 'San Benito' },
    { id: '1704', nombre: 'San Andrés' },
    { id: '1705', nombre: 'La Libertad' },
    { id: '1706', nombre: 'San Francisco' },
    { id: '1707', nombre: 'Santa Ana' },
    { id: '1708', nombre: 'Dolores' },
    { id: '1709', nombre: 'San Luis' },
    { id: '1710', nombre: 'Sayaxché' },
    { id: '1711', nombre: 'Melchor de Mencos' },
    { id: '1712', nombre: 'Poptún' },
    { id: '1713', nombre: 'Las Cruces' },
    { id: '1714', nombre: 'El Chal' }
  ]
};

export function formatCUI(cui: string): string {
  const clean = cui.replace(/\D/g, '');
  if (clean.length <= 4) return clean;
  if (clean.length <= 9) return `${clean.slice(0, 4)} ${clean.slice(4)}`;
  return `${clean.slice(0, 4)} ${clean.slice(4, 9)} ${clean.slice(9, 13)}`;
}

export function lookupDocenteByCUI(cui: string): DocenteData {
  const clean = cui.replace(/\D/g, '');
  const match = MOCK_DOCENTES.find(d => d.cui === clean);
  if (match) return match;

  // Fallback realistic generator if user tests arbitrary 13-digit CUI
  const formatted = formatCUI(clean);
  return {
    cui: clean,
    nombreCompleto: 'PROF. ' + (clean.endsWith('1') ? 'LIC. MARIO ROBERTO GÓMEZ MEJÍA' : 'CARLOS ENRIQUE MORALES SANDOVAL'),
    fechaNacimiento: '14/05/1984',
    genero: 'Masculino',
    etnia: 'Ladino / Mestizo',
    estadoPlanilla: 'Activo en Planilla MINEDUC',
    codigoEstablecimiento: '01-01-0023-45',
    nombreEstablecimiento: 'Instituto Nacional de Educación Básica de Telesecundaria No. 12',
    municipioDepartamento: 'Guatemala, Guatemala',
    direccion: '10a. Calle 2-45, Zona 1, Aldea Las Flores',
    modalidadCertificada: 'Secundaria / Telesecundaria',
    departamento: '01',
    municipio: '0103',
  };
}
