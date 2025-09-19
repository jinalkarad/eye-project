"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import goggleBlackIcon from "@/assets/icons/goggle_black_icon.svg";
// import calenderIcon from '@/assets/icons/calender_icon.svg';
import locationIcon from "@/assets/icons/location_icon.svg";
import aboutUsImage1 from "@/assets/images/about_us_img_1.png";
import aboutUsImage2 from "@/assets/images/about_us_img_2.jpg";
import aboutUsImage3 from "@/assets/images/about_us_img_3.png";
// import doctorImage1 from '@/assets/images/dr_1.png';
// import doctorImage2 from '@/assets/images/dr_2.png';
// import doctorImage3 from '@/assets/images/dr_3.png';
// import astridFlores from '@/assets/images/dr_astrid_flores.jpg';
// import cristinaMena from '@/assets/images/dr_cristina_mena.jpg';
// import adgardoOrtiz from '@/assets/images/dr_adgardo_ortiz.jpg';
import timeIcon from "@/assets/icons/time.svg";

import styles from "./about-us.module.scss";
import cn from "@/utils/cn";
import Link from "next/link";
import routes from "@/constants/routes";
import doctors from "@/data/doctors";
import locations from "@/data/locations";
import { PrimaryHeader } from "@/components";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { getAllSettings } from "@/services/setting";
import { setAboutUsSettingsData } from "@/redux/slices/AboutusPageSlice";
import aboutusEnglishResponseData from "../../utils/json/aboutusPage/aboutusPageResponseEN.json";
import aboutusSpanishhResponseData from "../../utils/json/aboutusPage/aboutusPageResponseES.json";
import doctorsSpanishLan from "@/data/doctorsSpanishLan";
import { useRouter } from "next/navigation";

// const teamCard = [
//     {
//         id: 1,
//         drName: 'Astrid Flores, O.D.',
//         description: 'Dr. Mena completed her undergraduate and optometry studies in Puerto Rico. Since 2021, she has been proudly serving patients at Eye Center Boutique in Fajardo, Río Grande, and Humacao.',
//         availability: '9:00 am - 3:30 pm (Mon - Sat)',
//         address: 'Fajardo, Humacao, Rio Grande, Caguas',
//         image: astridFlores
//     },
//     {
//         id: 2,
//         drName: 'Cristina Men, O.D',
//         description: `Dr. Astrid Flores is a dedicated optometrist committed to providing high-quality eye care. She earned her bachelor's Degree In Biology with a sub-concentration in biotechnology from UPR Ponce, as well as a Doctor of Optometry degree from the Inter-American University of Puerto Rico School of Optometry. With more than two years of hands-on experience, Dr. Flores has developed a strong foundation in comprehensive eye exams, contact lens fittings, and patient education to ensure optimal visual health. Beyond her professional expertise, Dr. Flores is passionate about overall well-being, enjoying HIIT workouts, yoga, and reading. Her approach to patient care is rooted in precision, compassion, and a commitment to enhancing vision and quality of life.`,
//         availability: '9:00 am - 3:30 pm (Mon - Sat)',
//         address: 'Carr. #3, Suite 125 Fajardo, PR 00738',
//         image: cristinaMena
//     },
//     {
//         id: 3,
//         drName: 'Dr. Gabriel Santos, O.D.',
//         description: `Dr. Mena completed her undergraduate and optometry studies in Puerto Rico. Since 2021, she has been proudly serving patients at Eye Center Boutique in Fajardo, Río Grande, and Humacao.`,
//         availability: '9:00 am - 3:30 pm (Mon - Sat)',
//         address: 'Carr. #3, Suite 125 Fajardo, PR 00738',
//         image: adgardoOrtiz
//     },
// ]
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
  image: StaticImport | string;
  locationAddress?: string[];
  redirect: number;
};

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [currentDoctLang, setCurrentDocLang] = useState(doctorsSpanishLan);
  const [defaultLanguage, setDefaultLanguage] = useState("Spanish");

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const settings = useSelector((state: RootState) => state.aboutUs.settings);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      setDefaultLanguage(storedLang);
    }
  }, []);
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
  const handleRedirect = (redirectId: number) => {
    if (redirectId) {
      router.push(`${routes.LOCATION_DETAILS}/${redirectId}`);
    } else {
      router.push(routes.LOCATIONS);
    }
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getAllSettings({
          key: "About",
          language: defaultLanguage === "Spanish" ? "es" : "en",
          publish: true,
        });
        dispatch(setAboutUsSettingsData(res.data));
      } catch (error) {
        if (defaultLanguage === "English") {
          dispatch(setAboutUsSettingsData(aboutusEnglishResponseData.data));
        } else {
          dispatch(setAboutUsSettingsData(aboutusSpanishhResponseData.data));
        }
        console.error("Error fetching settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
    // eslint-disable-next-line
  }, [defaultLanguage]);

  useEffect(() => {
    if (defaultLanguage === "English") {
      setCurrentDocLang(doctors);
    } else {
      setCurrentDocLang(doctorsSpanishLan);
    }
  }, [defaultLanguage]);

  const aboutUsContent = [
    {
      title: settings[2]?.value,
      description: settings[3]?.value,
      image: aboutUsImage1,
      layout: "left",
    },
    {
      title: settings[4]?.value,
      description: settings[5]?.value,
      image: aboutUsImage2,
      layout: "right",
    },
    {
      title: settings[6]?.value,
      description: settings[7]?.value,
      image: aboutUsImage3,
      layout: "left",
    },
  ];

  const lcAddress = locations.filter(({ name }) =>
    selectedDoctor?.locationAddress?.includes(name)
  );

  const [visibleDoctors, setVisibleDoctors] = useState(3);

  useEffect(() => {
    const updateDoctorsToShow = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setVisibleDoctors(2);
      } else if (width < 1199) {
        setVisibleDoctors(2);
      } else {
        setVisibleDoctors(3);
      }
    };

    updateDoctorsToShow();
    window.addEventListener("resize", updateDoctorsToShow);

    return () => window.removeEventListener("resize", updateDoctorsToShow);
  }, []);

  console.log(loading);
  return (
    <section className={styles.aboutUsContainer}>
      <div className={cn(styles.heroBanner, "hero_banner inner_banner d-flex")}>
        {/* <div className="container m-auto z-3">
                    <div className="row heroContent" style={{marginTop: "250px"}}>
                        <div className="col-md-6 mx-auto text-center">
                            <div className="d-flex headding_icon justify-content-center align-items-center mb_16">
                                <div className="divider_line"></div>
                                <Image className="mx_16" alt="goggle" src={goggleWhiteIcon} width={50} height={18} />
                                <div className="divider_line"></div>
                            </div>
                            <h5 className="fs_42 fw_400 white my_16">About Us</h5>
                            <p className="fs_20 fw_800 white mb_0">Premium Vision Care</p>
                            <Link href={routes.OPTOMETRISTS} className="btn btn_primary py_16 px_70 mt_20">Schedule an Appointment</Link>
                        </div>
                    </div>
                </div> */}
      </div>
      <div className="py_100 our_approch">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="d-flex headding_icon justify-content-center align-items-center mb_16">
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
              <h4 className="fs_32 fw_800 mb_16 size-24">
                {settings[0]?.value}
              </h4>
              <p className="fs_22 fw_400 content-m-18">{settings[1]?.value}</p>
            </div>
          </div>
        </div>
      </div>
      {aboutUsContent.map(({ title, description, image, layout }) => {
        return layout === "left" ? (
          <div className="py_100 our_approch bg_light_grey" key={title}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-6">
                  <div className="img_box about-img-box">
                    <Image
                      alt="about-us"
                      src={image}
                      style={{ objectFit: "cover", maxHeight: "350px" }}
                    />
                  </div>
                </div>
                <div className="text-start col-md-12 col-lg-6 mt-5 mt-lg-0 ps-xl-5">
                  <h4 className="fs_32 fw_800 mb_16 size-24">{title} </h4>
                  <p className="fs_22 fw_400">{description}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py_100 our_approch" key={title}>
            <div className="container">
              <div className="row align-items-center">
                <div className="text-start col-md-12 col-lg-6 order-2 order-lg-1 pe-xl-5">
                  <h4 className="fs_32 fw_800 mb_16 size-24">{title} </h4>
                  <p className="fs_22 fw_400">{description}</p>
                </div>
                <div className="col-md-12 col-lg-6 mb-5 mt-xl-0 order-1 order-lg-2">
                  <div className="img_box about-img-box">
                    <Image
                      alt="about-us"
                      src={image}
                      style={{ objectFit: "cover", maxHeight: "350px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="pt_100 meet_our_optometrist">
        <div className="container">
          <div className="row">
            <PrimaryHeader
              className="col-md-12 text-center mb_60 size-24"
              primaryText={settings[8]?.value}
              description="Meet Our Expert Eye Care Team"
            />
          </div>
          <div className="row justify-content-center">
            {currentDoctLang.slice(0, visibleDoctors).map((doctor) => {
              const { id, drName, description, image, locationAddress } =
                doctor;
              const dLength = description?.background.length;
              const lcAddress = locations.filter(({ name }) =>
                locationAddress?.includes(name)
              );
              return (
                // <div className="col-md-4" key={id}>
                <div className="col-md-6 col-xl-4 my-2 my-xl-0" key={id}>
                  <div className="card_1 d-flex flex-column">
                    <div className="img_box doctor-img">
                      <Image
                        alt="doctor"
                        src={image}
                        className="w-100"
                        style={{ objectFit: "cover", height: "500px" }}
                      />
                    </div>
                    <div className="detail_content px_22 py_22 mt-auto">
                      <div>
                        <h4>{drName}</h4>
                        <p className="fs_18 fw_300 mt_10">
                          {description?.background.slice(0, 120)}
                          {dLength > 120 ? "..." : ""}
                        </p>
                        {dLength > 120 && (
                          <p
                            className="btn_link mt_10 d-inline-block cursor-pointer"
                            onClick={() => {
                              setSelectedDoctor(doctor);
                              setIsModalOpen(true);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            Read More
                          </p>
                        )}
                        {/* <p className="mt_10 d-flex">
                                                {/* <p className="mt_10 d-flex">
                                                    <Image alt='calender' src={calenderIcon} className='mr_10' />
                                                    {availability}
                                                </p> */}
                        {/* </p> */}
                        {!!lcAddress.length &&
                          lcAddress.map(({ address, locationUrl }, index) => {
                            return (
                              <div
                                key={cn(address, String(index))}
                                className="d-flex mt_10 align-items-center"
                              >
                                <Image
                                  alt="calender"
                                  src={locationIcon}
                                  className="mr_10"
                                />
                                <a
                                  target="_blank"
                                  href={locationUrl}
                                  className="btn_link"
                                >
                                  {address}
                                </a>
                              </div>
                            );
                          })}
                      </div>
                      <button
                        className="btn btn_primary d-block mt_22"
                        style={{ fontWeight: 500 }}
                        onClick={() => handleRedirect(doctor.redirect)}
                      >
                        {defaultLanguage === "English"
                          ? "Book An Appointment"
                          : "Reservar una Cita"}
                      </button>
                    </div>
                  </div>
                </div>
                // </div>
              );
            })}
            <div className="col-md-12 text-center my_30">
              <Link
                href={routes.OPTOMETRISTS}
                className="btn_secondary_dark_bg px_30"
              >
                {" "}
                {settings[9]?.value}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cta_bg_section py_50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta_bg_area py_50 px_30 d-flex">
                <div className="col-xl-6 m-auto">
                  <div className="d-flex headding_icon justify-content-center align-items-center mb_16">
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
                  <h4 className="fs_32 fw_800 mb_30">{settings[10]?.value}</h4>
                  <Link
                    href={routes.FAQ}
                    className="btn_secondary_dark_bg px_30"
                  >
                    {settings[11]?.value}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        size="lg"
        className={styles.drDetailPopup}
        centered
      >
        <div className={cn(
                styles.drDetailModalContent,
                "px_30 py_30 position-relative"
              )} >
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="position-absolute top-0 end-0 m-3 btn-close popup_close"
            aria-label="Close"
          ></button>
          <div
            className={cn(
              styles.drDetailCard,
              "card_1 optometrist-view d-flex py-2 ps-2 bg-white"
            )}
          >
            <div className={cn(styles.drDetailPopupImg, "img_box ")}>
              {selectedDoctor?.image && (
                <Image
                  alt="doctor"
                  src={selectedDoctor?.image}
                  className="w-100"
                  style={{ objectFit: "cover", height: "100%" }}
                />
              )}
            </div>
            <div
              className={cn(
                styles.drDetailPopupdetailDiv,
                "detail_content pl_20"
              )}
            >
              <h4 className="fs_22 mb_12 fw_700 pr_30">
                {selectedDoctor?.drName}
              </h4>
              <div className={cn(styles.drDetail, "popup_content pr_30")}>
                <div>
                  <div>
                    <h6 className="fs_18 fw_600 mb_10">
                      {defaultLanguage === "English"
                        ? "Professional Background"
                        : "Antecedentes Profesionales"}
                    </h6>

                    <ul className="ps-3">
                      {selectedDoctor?.description.background
                        ?.split(/(?<!\bDr)\. +|\n+/)
                        .filter((point) => point.trim() !== "")
                        .slice(0, 2)
                        .map((point, index) => (
                          <li className="mb_10" key={index}>
                            {point.trim().replace(/\.$/, "")}.
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h6 className="fs_18 fw_600 mb_10">
                      {defaultLanguage === "English"
                        ? "Patient Care Philosophy"
                        : "Filosofía de Atención al Paciente"}
                    </h6>

                    <ul className="ps-3">
                      {selectedDoctor?.description.philosophy
                        ?.split(/(?<!\bDr)\. +|\n+/)
                        .filter((point) => point.trim() !== "")
                        .slice(0, 2)
                        .map((point, index) => (
                          <li className="mb_10" key={index}>
                            {point.trim().replace(/\.$/, "")}.
                          </li>
                        ))}
                    </ul>
                  </div>
                  {selectedDoctor?.description.interests && (
                    <div>
                      <h6 className="fs_18 fw_600 mb_10">
                        {defaultLanguage === "English"
                          ? "Personal Interests"
                          : "Intereses Personales"}
                      </h6>

                      <ul className="ps-3">
                        {selectedDoctor?.description.interests
                          ?.split(/(?<!\bDr)\. +|\n+/)
                          .filter((point) => point.trim() !== "")
                          .slice(0, 2)
                          .map((point, index) => (
                            <li className="mb_10" key={index}>
                              {point.trim().replace(/\.$/, "")}.
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="pr_30">
                <div>
                  <div className="d-flex align-items-center">
                    <Image alt="clock" src={timeIcon} className="mr_10" />
                    <span>{selectedDoctor?.availability}</span>
                  </div>
                </div>

                {/* <p className="fs_18 fw_300">{selectedDoctor?.description?.slice(0, 120)}{selectedDoctor?.description && selectedDoctor?.description?.length > 120 ? '...' : ''}</p> */}
                {/* {dLength > 120 && (
                                                        <p className="btn_link d-inline-block">Read More</p>
                                                    )} */}

                <div>
                  {lcAddress?.map(({ address, locationUrl }, index) => (
                    <div
                      key={cn(address, String(index))}
                      className="d-flex mt_10 align-items-center"
                    >
                      <Image
                        alt="location"
                        src={locationIcon}
                        className="mr_10"
                      />
                      <a
                        target="_blank"
                        href={locationUrl}
                        className="btn_link"
                      >
                        {address}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pr_30">
                <button
                  className="btn btn_secondary_dark_bg d-block "
                  style={{width:"100%"}}
                  onClick={() =>
                    selectedDoctor && handleRedirect(selectedDoctor?.redirect)
                  }
                >
                  {defaultLanguage === "English"
                    ? "Book An Appointment"
                    : "Reservar una Cita"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default AboutUs;
