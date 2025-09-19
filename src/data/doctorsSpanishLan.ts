import astridFlores from "@/assets/images/dr_astrid_flores.jpg";
import cristinaMena from "@/assets/images/dr_cristina_mena.jpg";
import adgardoOrtiz from "@/assets/images/dr_adgardo_ortiz.jpg";
import gabrielSantos from "@/assets/images/dr_gabriel_santos.jpg";
import gerardoCorrea from "@/assets/images/dr_gerardo_correa.jpg";
import luisLugo from "@/assets/images/dr_luis_lugo.jpg";
import lydiaRoman from "@/assets/images/dr_lydia_roman.jpg";
import michaelJayGarcia from "@/assets/images/dr_michael_jay_garcia.jpg";
import { locationsName } from "./locations";
import { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Doctor = {
  id: number;
  drName: string;
  description: {
    background: string;
    philosophy: string;
    interests?: string;
  };
  availability: string;
  address: string;
  image: StaticImageData | StaticImport | string;
  locationAddress?: string[];
  redirect: number;
};

const doctorsSpanishLan: Doctor[] = [
  {
    id: 1,
    drName: "Dr. Gabriel Santos, O. D",
    description: {
      background:
        "El Dr. Gabriel Santos Delgado es un optometrista respetado con más de 13 años de experiencia en el cuidado integral de la vista. Obtuvo su Licenciatura en Psicología, con una subespecialización en Negocios, de la Universidad de Florida Central, y su Doctorado en Optometría de la Universidad Interamericana de Puerto Rico en 2012.",
      philosophy:
        "Comenzó su carrera en Virginia, donde practicó optometría de alcance completo durante seis años. Durante ese tiempo, desarrolló una amplia experiencia en el cuidado primario de los ojos, el manejo de enfermedades oculares y la adaptación de lentes de contacto. Impulsado por su deseo de servir a su comunidad, el Dr. Santos regresó a Puerto Rico para construir una práctica centrada en el paciente. En 2019, abrió el primer Eye Center Boutique en Fajardo. Su visión de expandir el acceso a atención optométrica de calidad lo llevó a abrir sedes adicionales en Humacao (2020), Río Grande (2023) y próximamente en Caguas Centro (2025).",
    },
    availability: "9:00 am - 3:30 pm (Lun - Sáb)",
    address: "Fajardo, Humacao, Río Grande, Caguas",
    image: gabrielSantos,
    redirect: 0,
  },
  {
    id: 2,
    drName: "Dr. Gerardo Correa, O.D",
    description: {
      background:
        "El Dr. Correa es un optometrista bilingüe con amplia experiencia realizando exámenes oculares integrales en diversas localidades de Estados Unidos y Puerto Rico. Tiene un Doctorado en Optometría de la Universidad Interamericana en San Juan y una Licenciatura en Ciencias de la Universidad Estatal de Kansas.",
      philosophy:
        "Está comprometido con la atención centrada en el paciente, respaldado por su conocimiento en productos oftálmicos y una sólida formación en prácticas terapéuticas optométricas.",
    },
    availability: "9:00 am - 3:30 pm (Lun - Sáb)",
    address: "Carr. #3, Suite 125 Fajardo, PR 00738",
    image: gerardoCorrea,
    locationAddress: [locationsName.FAJARDO],
    redirect: 2,
  },
  {
    id: 3,
    drName: "Dr. Luis Lugo, O.D",
    description: {
      background:
        "El Dr. Lugo se graduó de la Escuela de Optometría de la IAU y cuenta con más de 35 años de experiencia realizando exámenes oculares integrales, especialmente en Cidra, Cayey, Aibonito y Caguas. También ha sido supervisor clínico para estudiantes de optometría en una clínica externa de la universidad en Cidra.",
      philosophy:
        "Posee una amplia experiencia como supervisor clínico y está comprometido con realizar exámenes exhaustivos a todos sus pacientes.",
      interests:
        "Al Dr. Lugo le gusta hacer ejercicio, caminar, la música y las artes visuales, además del cine.",
    },
    availability: "9:00 am - 3:30 pm (Lun - Sáb)",
    address: "Carr. #3, Suite 125 Fajardo, PR 00738",
    image: luisLugo,
    locationAddress: [locationsName.RIO_GRANDE],
    redirect: 3,
  },
  {
    id: 4,
    drName: "Dr. Edgardo Ortiz, O.D",
    description: {
      background:
        "El Dr. Edgardo Ortiz obtuvo tanto su licenciatura como su doctorado en optometría en la Universidad Interamericana de Puerto Rico. Tiene experiencia brindando servicios integrales, incluyendo adaptación de lentes, recetas y diagnóstico de enfermedades oculares.",
      philosophy:
        "Como usuario de gafas desde joven, entiende la importancia de un buen examen visual. Está comprometido con brindar atención basada en la comunicación clara, empatía y evaluación clínica detallada.",
      interests:
        "Le gusta jugar videojuegos, explorar nuevos restaurantes y caminar por los senderos de El Yunque.",
    },
    availability: "9:00 am - 3:30 pm (Lun - Sáb)",
    address: "Carr. #3, Suite 125 Fajardo, PR 00738",
    image: adgardoOrtiz,
    locationAddress: [locationsName.HUMACAO],
    redirect: 2,
  },
  {
    id: 5,
    drName: "Dra. Astrid Flores, O.D.",
    description: {
      background:
        "La Dra. Astrid Flores es una optometrista dedicada a brindar atención visual de alta calidad. Obtuvo su Licenciatura en Biología con subespecialización en Biotecnología de la UPR Ponce y su Doctorado en Optometría de la Universidad Interamericana.",
      philosophy:
        "Cuenta con una sólida formación en exámenes oculares, adaptación de lentes y educación del paciente. Su enfoque se basa en la precisión, la compasión y el compromiso con mejorar la visión y calidad de vida.",
      interests:
        "Le apasiona el bienestar integral, disfruta hacer HIIT, yoga y leer.",
    },
    availability: "9:00 am - 3:30 pm (Lun - Sáb)",
    address: "Fajardo, Humacao, Río Grande, Caguas",
    image: astridFlores,
    locationAddress: [locationsName.FAJARDO],
    redirect: 2,
  },
  {
    id: 6,
    drName: "Dra. Cristina Mena, O.D",
    description: {
      background:
        "La Dra. Cristina Mena obtuvo tanto su licenciatura como doctorado en optometría en la Universidad Interamericana de Puerto Rico. Desde 2021, ha atendido pacientes en Eye Center Boutique en Fajardo, Río Grande y Humacao.",
      philosophy:
        "Está dedicada a brindar una experiencia personalizada y cómoda, asegurando que los pacientes se sientan escuchados y empoderados para cuidar su salud visual.",
      interests:
        "Está dedicada a brindar una experiencia personalizada y cómoda, asegurando que los pacientes se sientan escuchados y empoderados para cuidar su salud visual.",
    },
    availability: "9:00 am - 3:30 pm (Lun - Sáb)",
    address: "Carr. #3, Suite 125 Fajardo, PR 00738",
    image: cristinaMena,
    locationAddress: [locationsName.RIO_GRANDE],
    redirect: 3,
  },
  {
    id: 7,
    drName: "Dra. Lydia Román, O.D",
    description: {
      background:
        "La Dra. Lydia Román es una optometrista altamente capacitada con 25 años de experiencia en el diagnóstico y manejo de errores refractivos, enfermedades oculares y trastornos visuales. Tiene una Licenciatura en Biología de la Universidad de Florida Central y un Doctorado de la Universidad Interamericana.",
      philosophy:
        "Está profundamente comprometida con ayudar a los pacientes a lograr una salud visual óptima, combinando experiencia clínica con una mentalidad compasiva y centrada en el paciente.",
      interests:
        "Además de su práctica clínica, es profesora asociada en la Escuela de Optometría de la IAU.",
    },
    availability: "9:00 am - 3:30 pm (Lun - Sáb)",
    address: "Carr. #3, Suite 125 Fajardo, PR 00738",
    image: lydiaRoman,
    locationAddress: [locationsName.CAGUAS],
    redirect: 4,
  },
  {
    id: 8,
    drName: "Dr. Jay Garcia, O.D",
    description: {
      background:
        "El Dr. Jay comenzó su carrera en Odessa, Texas, donde ejerció durante tres años antes de mudarse a Puerto Rico y unirse a Eye Center Boutique. Nacido y criado en Texas, obtuvo su licenciatura en Texas Tech University y su doctorado en la Universidad Interamericana en 2020. Es miembro del Colegio de Optometría en Puerto Rico.",
      philosophy:
        "Cree que cada paciente merece una atención visual clara y completa. Se enorgullece de ofrecer un servicio personalizado, evaluaciones clínicas detalladas y atención profesional.",
      interests:
        "En su tiempo libre, disfruta jugar golf, pickleball, baloncesto y explorar la isla probando su gastronomía.",
    },
    availability: "9:00 am - 3:30 pm (Lun - Sáb)",
    address: "Carr. #3, Suite 125 Fajardo, PR 00738",
    image: michaelJayGarcia,
    locationAddress: [locationsName.HUMACAO],
    redirect: 2,
  },
];

export default doctorsSpanishLan;
