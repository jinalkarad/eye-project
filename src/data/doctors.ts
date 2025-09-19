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
  image: StaticImageData | StaticImport | string; // or StaticImageData if you're using Next.js
  locationAddress?: string[]; // if locationsName.FAJARDO is a string
  redirect: number;
};

const doctors: Doctor[] = [
  {
    id: 1,
    drName: "Dr. Gabriel Santos, O. D",
    description: {
      background:
        "Dr. Gabriel Santos Delgado is a respected optometrist with over 13 years of experience in providing comprehensive eye care. He earned his Bachelor of Science in Psychology, with a minor in Business, from the University of Central Florida, and received his Doctor of Optometry degree from the Inter American University of Puerto Rico School of Optometry in 2012.",
      philosophy:
        "He began his career in Virginia, where he practiced full-scope optometry for six years. During that time, he developed extensive expertise in primary eye care, ocular disease management, and contact lens fittings. Driven by a desire to serve his home community, Dr. Santos Delgado returned to Puerto Rico to build a patient-centered practice rooted in clinical excellence and personalized service. In 2019, he opened the first Eye Center Boutique in Fajardo with a team of four employees. His vision of expanding access to high-quality optometric care led to the opening of additional locations in Humacao (2020), Rio Grande (2023), and the upcoming Caguas Centro office (2025).",
    },
    availability: "9:00 am - 3:30 pm (Mon - Sat)",
    address: "Fajardo, Humacao, Rio Grande, Caguas",
    image: gabrielSantos,
    redirect: 0,
    // locationAddress: [locationsName.HUMACAO]
  },
  {
    id: 2,
    drName: "Dr. Gerardo Correa, O.D",
    description: {
      background:
        "Dr. Correa is a bilingual optometrist with extensive experience performing comprehensive eye exams across various locations in the United States and Puerto Rico. He holds a Doctor of Optometry degree from the Inter American University School of Optometry in San Juan, Puerto Rico, and a Bachelor of Science from Kansas State University in Manhattan, Kansas.",
      philosophy:
        "He brings a strong commitment to patient-centered care, supported by his deep knowledge of ophthalmic products and a solid background in therapeutic optometric practices.",
    },
    availability: "9:00 am - 3:30 pm (Mon - Sat)",
    address: "Carr. #3, Suite 125 Fajardo, PR 00738",
    image: gerardoCorrea,
    locationAddress: [locationsName.FAJARDO],
    redirect: 1,
  },
  {
    id: 3,
    drName: "Dr. Luis Lugo, O.D",
    description: {
      background:
        "Dr. Lugo graduated from the IAU school of Optometry, with over 35 years of experience providing comprehensive eye exams in mostly Cidra, Cayey, Aibonito and Caguas. He also has been a clinical supervisor for optometry students in one of the school’s external clinic in Cidra. ",
      philosophy:
        "He has extensive experience serving as a clinical supervisor for optometry students in one of the university’s external clinics in Cidra. He is committed to provide a thorough eye examination to all his patients.",
      interests:
        "Dr. Lugo enjoys exercising, walking, music and visual arts, as well as movies.",
    },
    availability: "9:00 am - 3:30 pm (Mon - Sat)",
    address: "Carr. #3, Suite 125 Fajardo, PR 00738",
    image: luisLugo,
    locationAddress: [locationsName.CAGUAS],
    redirect: 4,
  },
  {
    id: 4,
    drName: "Dr. Edgardo Ortiz, O.D",
    description: {
      background:
        "Dr. Edgardo Ortiz earned both his undergraduate degree and Doctor of Optometry from the Inter American University of Puerto Rico. He has extensive experience in delivering comprehensive optometric services including contact lens fittings, prescriptions, and ocular disease diagnosis and monitoring across communities in Puerto Rico.  ",
      philosophy:
        "Having worn glasses since a young age, Dr. Ortiz understands firsthand how a thorough eye exam can significantly enhance quality of life. He is committed to delivering exceptional care grounded in clear communication, empathy, and detailed clinical evaluation. His goal is for every patient to leave feeling informed about their eye health and empowered with a clear plan to improve their vision.",
      interests:
        "Dr. Ortiz enjoys playing video games, discovering new dining experiences, and hiking the trails of El Yunque.",
    },
    availability: "9:00 am - 3:30 pm (Mon - Sat)",
    address: "Carr. #3, Suite 125 Fajardo, PR 00738",
    image: adgardoOrtiz,
    locationAddress: [locationsName.HUMACAO],
    redirect: 2,
  },
  {
    id: 5,
    drName: "Dr. Astrid Flores, O.D.",
    description: {
      background:
        "Dr. Astrid Flores is a dedicated optometrist committed to providing high-quality eye care. She earned her bachelor's Degree In Biology with a sub-concentration in biotechnology from UPR Ponce, as well as a Doctor of Optometry degree from the Inter-American University of Puerto Rico School of Optometry. ",
      philosophy:
        "Dr. Flores has developed a strong foundation in comprehensive eye exams, contact lens fittings, and patient education to ensure optimal visual health. Her approach to patient care is rooted in precision, compassion, and a commitment to enhancing vision and quality of life..",
      interests:
        "Outside of clinic, Dr. Flores is passionate about overall well-being, enjoying HIIT workouts, yoga, and reading.",
    },
    availability: "9:00 am - 3:30 pm (Mon - Sat)",
    address: "Fajardo, Humacao, Rio Grande, Caguas",
    image: astridFlores,
    locationAddress: [locationsName.FAJARDO],
    redirect: 1,
  },
  {
    id: 6,
    drName: "Dr. Cristina Mena, O.D",
    description: {
      background:
        " Dr. Cristina Mena completed her undergraduate in the University of Puerto Rico in Rio Piedras and hder Doctor of Optometry at the Inter American University of Puerto Rico. Since 2021, she has been proudly serving patients at Eye Center Boutique in Fajardo, Río Grande, and Humacao.  ",
      philosophy:
        "She is dedicated to providing a personalized and comfortable eyecare experience, ensuring patients feel heard and empowered to take charge of their eye health. ",
      interests:
        "Outside the clinic, she enjoys yoga, running, exploring new places, trying new restaurants, reading, and learning something new.",
    },
    availability: "9:00 am - 3:30 pm (Mon - Sat)",
    address: "Carr. #3, Suite 125 Fajardo, PR 00738",
    image: cristinaMena,
    locationAddress: [locationsName.RIO_GRANDE],
    redirect: 3,
  },
  {
    id: 7,
    drName: "Dr. Lydia Roman, O.D",
    description: {
      background:
        "Dr. Lydia Roman is a highly skilled optometrist with 25 years of experience in diagnosing and managing refractive errors, ocular diseases, and vision disorders. She holds a Bachelor of Science in Biology from the university of Central Florida and a Doctorate of Optometry from the Inter-American University (IAU) School of Optometry in Puerto Rico.",
      philosophy:
        "Dr. Roman is deeply committed to helping patients achieve optimal eye health. Her clinical approach combines deep expertise with a compassionate, patient-first mindset.",
      interests:
        "In addition to her clinical work, she serves as an Associate Professor at IAU's School of Optometry. ",
    },
    availability: "9:00 am - 3:30 pm (Mon - Sat)",
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
        "Dr. Jay Garcia began his career in Odessa, Tx where he practiced for 3 years prior to moving to Puerto Rico and joining Eye Center Boutique. Born and raised in Texas, he earned his undergraduate degree at Texas Tech University and doctorate degree at Inter Americana University of Puerto Rico graduating in 2020. Dr. Jay Garcia is a member of the Colegio of Optometry in Puerto Rico.",
      philosophy:
        "Dr. Jay Garcia believes that every patient deserves clear and comprehensive eye care. He takes pride in offering personalized service and ensures that each patient’s needs are thoroughly addressed by delivering thorough clinical evaluations, respectful and professional care, and enhancing patient’s confidence and understanding concerning their eye health.",
      interests:
        "In his free time,  Dr. Jay Garcia enjoys playing golf, pickleball, basketball and adventuring around the island tasting all the food along the way.",
    },
    availability: "9:00 am - 3:30 pm (Mon - Sat)",
    address: "Carr. #3, Suite 125 Fajardo, PR 00738",
    image: michaelJayGarcia,
    locationAddress: [locationsName.HUMACAO],
    redirect: 2,
  },
];

export default doctors;
