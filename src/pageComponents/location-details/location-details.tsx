"use client";

import React, { useEffect, useMemo, useState } from "react";

import Image from "next/image";

import goggleBlackIcon from "@/assets/icons/goggle_black_icon.svg";
// import location1Image from '@/assets/images/location_1.png';
// import location2Image from '@/assets/images/location_2.png';
// import location3Image from '@/assets/images/location_3.png';
import calenderIcon from "@/assets/icons/calender_icon.svg";
import locationIcon from "@/assets/icons/location_icon.svg";
import callIcon from "@/assets/icons/call_icon.svg";
import eyeExamIcon from "@/assets/icons/eye_exam_icon.svg";
import digitalLabIcon from "@/assets/icons/digital_lab_icon.svg";
import repairsIcon from "@/assets/icons/repairs_icon.svg";
import lenseIcon from "@/assets/icons/lenses_icon.svg";
import visionIcon from "@/assets/icons/vision_icon.svg";
import glassFrameIcon from "@/assets/icons/glass_frame_icon.svg";
import marqueImage1 from "@/assets/images/marique_01.png";
import marqueImage2 from "@/assets/images/marique_02.png";
import marqueImage3 from "@/assets/images/marique_03.png";
import marqueImage4 from "@/assets/images/marique_04.png";
import marqueImage5 from "@/assets/images/marique_05.png";
import marqueImage6 from "@/assets/images/marique_06.png";
import { BackButton, PrimaryHeader } from "@/components";
import routes from "@/constants/routes";
import locations from "@/data/locations";
import { useParams } from "next/navigation";
import Link from "next/link";
import { offices } from "../locations/locations";
import locationImg from "@/assets/images/location_img.png";

// const offices = [
//     {
//         id: 100,
//         image: location1Image, // Add the corresponding image
//         title: 'Eye Center Boutique',
//         location: 'Fajardo',
//         availability: '9:00 AM - 5:00 PM (Mon - Sat)',
//         mobile: '(787) 860-3331',
//         locationUrl: 'Carr. #3, Suite 125 Fajardo, PR 00738',
//         locationName: locationsName.FAJARDO
//     },
//     {
//         id: 200,
//         image: location2Image,
//         title: 'Eye Center Boutique',
//         location: 'Rio Grande',
//         availability: '9:00 AM - 5:00 PM (Mon - Sat)',
//         mobile: '(787) 988-7061',
//         locationUrl: 'PR-3 Kilometro 24.5 Guzman Abajo Ward Local A-19 Rio Grande, PR 00745',
//         locationName: locationsName.RIO_GRANDE
//     },
//     {
//         id: 300,
//         image: location3Image,
//         title: 'Eye Center Boutique',
//         location: 'Humacao',
//         availability: '9:00 AM - 5:00 PM (Mon - Sat)',
//         mobile: '(787) 850-5222',
//         locationUrl: 'Carr. 3, Suite 270 Palma Real Shopping Center Humacao, PR 00791',
//         locationName: locationsName.HUMACAO
//     },
//     {
//         id: 400,
//         image: location1Image,
//         title: 'Eye Center Boutique',
//         location: 'Isabela',
//         availability: '9:00 AM - 5:00 PM (Mon - Sat)',
//         mobile: '(787) 589-8334',
//         locationUrl: '3535 Ave. Militar, Isabela, PR 00662',
//         locationName: locationsName.ISABELA
//     },
//     {
//         id: 500,
//         image: location2Image,
//         title: 'Eye Center Boutique',
//         location: 'Plaza Las Americas',
//         availability: 'Mon-Sat: 9:00 AM - 9:00 PM, Sun: 11:00 AM - 7:00 PM',
//         mobile: '(787) 759-4444',
//         locationUrl: '525 Avenida F.D. Roosevelt, San Juan, PR 00918',
//         locationName: locationsName.PLAZA_LAS_AMERICAS
//     }
// ];

const locationLinksDetails = [
  [
    {
      title: "Privado ($59.00) - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464990/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "First Medical - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464623/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "First Medical Vital - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464597/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "Humana Gold Plus - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464888/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "Humana Privado - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464914/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "MCS - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60372561/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "MCS Classicare - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60373192/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "MMM - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464568/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "MMM Vital - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60465151/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "PROSAM - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464961/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "Triple S Advantage - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60373480/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "Triple S Privado - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60373625/calendar/6836477?calendarIds=6836477",
    },
    {
      title: "Triple S Vital - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60577346/calendar/6836477?calendarIds=6836477",
    },
  ],
  [
    {
      title: "Privado ($59.00) - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464990/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "First Medical - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464623/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "First Medical Vital - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464597/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "Humana Gold Plus - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464888/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "Humana Privado - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464914/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "MCS - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60372561/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "MCS Classicare - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60373192/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "MMM - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464568/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "MMM Vital - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60465151/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "PROSAM - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464961/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "Triple S Advantage - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60373480/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "Triple S Privado - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60373625/calendar/6836485?calendarIds=6836485",
    },
    {
      title: "Triple S Vital - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60577346/calendar/6836485?calendarIds=6836485",
    },
  ],
  [
    {
      title: "Privado ($59.00) - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464990/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "First Medical - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464623/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "First Medical Vital - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464597/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "Humana Gold Plus - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464888/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "Humana Privado - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464914/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "MCS - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60372561/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "MCS Classicare - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60373192/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "MMM - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464568/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "MMM Vital - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60465151/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "PROSAM - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60464961/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "Triple S Advantage - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60373480/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "Triple S Privado - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60373625/calendar/6829219?calendarIds=6829219",
    },
    {
      title: "Triple S Vital - Examen Visual",
      time: "20 minutes",
      link: "https://app.acuityscheduling.com/schedule/9f546184/appointment/60577346/calendar/6829219?calendarIds=6829219",
    },
  ],
  [
    {
      title: "Privado ($59.00) - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60464990/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "First Medical - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60464623/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "First Medical Vital - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60464597/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "Humana Gold Plus - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60464888/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "Humana Privado - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60464914/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "MCS - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60372561/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "MCS Classicare - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60373192/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "MMM - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60464568/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "MMM Vital - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60465151/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "PROSAM - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60464961/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "Triple S Advantage - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60373480/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "Triple S Privado - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60373625/calendar/12069149?calendarIds=12069149",
    },
    {
      title: "Triple S Vital - Examen Visual",
      time: "20 minutes",
      link: "https://ecbvisioncitas.as.me/schedule/9f546184/appointment/60577346/calendar/12069149?calendarIds=12069149",
    },
  ],
];

const LocationDetailsPage = () => {
  const { id } = useParams();
  const linksId = Number(id);
  const [defaultLanguage, setDefaultLanguage] = useState(
    localStorage.getItem("language")
      ? localStorage.getItem("language")
      : "Spanish"
  );
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "language") {
        setDefaultLanguage(event.newValue || "Spanish");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  const currentOffice = useMemo(() => {
    return offices.find((office) => office.id === Number(id));
  }, [id]);

  const currentLocation = useMemo(() => {
    return locations.find(
      (location) => location.name === currentOffice?.locationName
    );
  }, [currentOffice]);

  const services = [
    {
      id: 1,
      image: eyeExamIcon,
      title:
        defaultLanguage === "English" ? "Eye Exams" : "Exámenes de la Vista",
    },
    {
      id: 2,
      image: digitalLabIcon,
      title:
        defaultLanguage === "English"
          ? "On-site Digital Lab"
          : "Laboratorio Digital en el Sitio",
    },
    {
      id: 3,
      image: repairsIcon,
      title:
        defaultLanguage === "English"
          ? "Frame Repairs & Adjustments"
          : "Reparaciones y Ajustes de Armazones",
    },
    {
      id: 4,
      image: lenseIcon,
      title:
        defaultLanguage === "English"
          ? "Custom Prescription Lenses"
          : "Lentes Recetados Personalizados",
    },
    {
      id: 5,
      image: visionIcon,
      title:
        defaultLanguage === "English"
          ? "Single Vision Rx Lenses within 1 Hour"
          : "Lentes Monofocales en 1 Hora",
    },
    {
      id: 6,
      image: glassFrameIcon,
      title:
        defaultLanguage === "English"
          ? "Lens Replacements"
          : "Reemplazo de Lentes",
    },
  ];

  return (
    <section>
      {/* <GradientBackground /> */}
      <section className="d-flex without_banner pt_50">
        <div className="container m-auto z-3">
          <div className="row d-flex align-items-center gap-4">
            <BackButton to={routes.LOCATIONS}>
              <p>{defaultLanguage === "English" ? "Back" : "Volver"}</p>
            </BackButton>
            <div className="col-md-12 " style={{ maxWidth: "max-content" }}>
              {/* <div className="d-flex headding_icon mb_16 align-items-center">
                                <div className="divider_line"></div>
                                <Image className="mx_16" alt="goggle" src={goggleBlackIcon} width={50} height={18} />
                                <div className="divider_line"></div>
                            </div> */}
              <h5 className="fs_32 size-24 fw_800 mb-0">
                {currentOffice?.title}
              </h5>
              <p className="fs_20 fw_400 content-m-18 mt-1 mb-4">
                {currentOffice?.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="location_img">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="img img-store-details">
                {currentOffice?.image && (
                  <Image
                    alt="location"
                    src={currentOffice?.image}
                    className="w-100"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location_details py_50">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 d-flex flex-column">
              <p className="fs_24 fw_600 size-20 text-black">
                {defaultLanguage === "English"
                  ? currentOffice?.welcomeMessage
                  : currentOffice?.welcomeMessage}
              </p>

              <Image
                alt="location"
                src={locationImg}
                className="mt_10 rounded-3"
              />
              <p className="mt_22 fs_18 fw_300 size-20 mt-auto text-black">
                <Image alt="calender" src={calenderIcon} className="mr_10" />
                {currentOffice?.availability}
              </p>
              <p className="mt_22 fs_18 size-20 fw_300 text-black">
                <Image alt="location" src={callIcon} className="mr_10" />
                {currentOffice?.mobile}
              </p>
              <div className="mt_22  d-flex mb_24">
                <Image alt="location" src={locationIcon} className="mr_10" />
                <a
                  href={currentLocation?.locationUrl || "#"}
                  target="_blank"
                  className="btn_link fs_18"
                >
                  {currentLocation?.address}
                </a>
              </div>
            </div>
            <div className="col-md-12 col-lg-9">
              <div className="row">
                <div className="col-md-12">
                  <p className="fs_20 fw_800 mb_18 text-black ">
                    {defaultLanguage === "English"
                      ? "Services that this location offers are:"
                      : "Los servicios que ofrece esta ubicación son:"}
                  </p>
                </div>
              </div>
              <div className="row">
                {services.map(({ id, image, title }) => {
                  return (
                    <div key={id} className="col-xl-4 col-6 mb-3">
                      <div className="icon_crad h-100">
                        <Image alt="icon" src={image} />
                        <p className="fs_22 fw_400 mt_22 text-center text-black">
                          {title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our_services pt_50 pb_30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fs_32 fw_800 text-center text-xl-start">
                {defaultLanguage === "English"
                  ? "Our Services"
                  : "Nuestros Servicios"}
              </h4>
            </div>
          </div>
          <div className="row">
            {locationLinksDetails[linksId - 1].map((item) => {
              return (
                <>
                  {" "}
                  <div className="col-md-4 col-xl-3 my_24">
                    <div className="services_box d-flex flex-column justify-content-between h-100">
                      <div>
                        <h5 className="fs_22 fw_900 mb_20">{item.title}</h5>
                        <p className="fs_18 fw_300 mb_30">{item.time}</p>
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        className="btn btn_secondary d-block text-center fw_300"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <section className="brands py_70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mx-auto text-center justify-content-center align-items-center">
              <div className="d-flex headding_icon mb_16 align-items-center justify-content-center">
                <div className="divider_line"></div>
                <Image
                  className="mx_16"
                  alt="goggle"
                  src={goggleBlackIcon}
                  width={50}
                  height={18}
                />
                <div className="divider_line"></div>
              </div>
              <h5 className="fs_32 fw_800 text-black mb-0">
                {defaultLanguage === "English"
                  ? "Featured Brands"
                  : "Marcas Destacadas"}
              </h5>
            </div>
          </div>
          <div className="row mt_50">
            <div className="col-md-12 wrapper">
              <div className="marquee">
                <div className="marquee__group">
                  <Image alt="logo" src={marqueImage1} className="mx_20" />
                  <Image alt="logo" src={marqueImage2} className="mx_20" />
                  <Image alt="logo" src={marqueImage3} className="mx_20" />
                  <Image alt="logo" src={marqueImage4} className="mx_20" />
                  <Image alt="logo" src={marqueImage5} className="mx_20" />
                  <Image alt="logo" src={marqueImage6} className="mx_20" />
                </div>
                <div aria-hidden="true" className="marquee__group">
                  <Image alt="logo" src={marqueImage1} className="mx_20" />
                  <Image alt="logo" src={marqueImage2} className="mx_20" />
                  <Image alt="logo" src={marqueImage3} className="mx_20" />
                  <Image alt="logo" src={marqueImage4} className="mx_20" />
                  <Image alt="logo" src={marqueImage5} className="mx_20" />
                  <Image alt="logo" src={marqueImage6} className="mx_20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py_50">
        <div className="container">
          <PrimaryHeader
            className="col-md-12 text-center mb_60"
            primaryText="More Offices"
          />
          <div className="row">
            {offices
              .filter(({ id: officeId }) => officeId !== Number(id))
              .map(
                ({ id, image, title, mobile, availability, locationName }) => {
                  const locationDetails = locations.find(
                    ({ name }) => locationName === name
                  );
                  return (
                    <div key={id} className="col-md-6 mb_24">
                      <div className="card_1 d-flex flex-column">
                        <div className="img_box location-image-box">
                          <Image
                            alt="location"
                            src={image}
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="detail_content px_22 py_22">
                          <h4>{title}</h4>
                          {/* <p className="fs_18 fw_300">{locationName}</p> */}

                          <div className="d-flex align-items-center">
                            <Image
                              alt="calendar"
                              src={calenderIcon}
                              className="mr_10"
                            />
                            <p>{availability}</p>
                          </div>

                          <div className="d-flex align-items-center">
                            <Image
                              alt="phone"
                              src={callIcon}
                              className="mr_10"
                            />
                            <p>{mobile}</p>
                          </div>

                          <div className="d-flex align-items-center">
                            <Image
                              alt="location"
                              src={locationIcon}
                              className="mr_10"
                            />
                            <a
                              target="_blank"
                              href={locationDetails?.locationUrl}
                              className="btn_link"
                            >
                              {locationDetails?.address}
                            </a>
                          </div>

                          {/* 🔥 Learn More should link to correct location page */}
                          <Link
                            href={`${routes.LOCATION_DETAILS}/${id}`}
                            className="btn btn_secondary d-block mt_22"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default LocationDetailsPage;
