"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./optometrists.module.scss";
import goggleBlackIcon from "@/assets/icons/goggle_black_icon.svg";
import locationIcon from "@/assets/icons/location_icon.svg";
import arrowLeftBlackIcon from "@/assets/icons/arrow_left_black.svg";
import timeIcon from "@/assets/icons/time.svg";
import cn from "@/utils/cn";
import Link from "next/link";
import routes from "@/constants/routes";
import doctors from "@/data/doctors";
import locations from "@/data/locations";
import dynamic from "next/dynamic";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import doctorsSpanishLan from "@/data/doctorsSpanishLan";
import { useRouter } from "next/navigation";
const Modal = dynamic(() => import("react-bootstrap/Modal"), { ssr: false });
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

const OptometristsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [currentDoctLang, setCurrentDocLang] = useState(doctorsSpanishLan);
  const [defaultLanguage, setDefaultLanguage] = useState("Spanish");

  const router = useRouter();
  const lcAddress = locations.filter(({ name }) =>
    selectedDoctor?.locationAddress?.includes(name)
  );
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
  useEffect(() => {
    if (defaultLanguage === "English") {
      setCurrentDocLang(doctors);
    } else {
      setCurrentDocLang(doctorsSpanishLan);
    }
  }, [defaultLanguage]);

  const handleRedirect = (redirectId: number) => {
    if (redirectId) {
      router.push(`${routes.LOCATION_DETAILS}/${redirectId}`);
    } else {
      router.push(routes.LOCATIONS);
    }
  };
  return (
    <>
      <section>
        {/* <GradientBackground /> */}
        <div className="d-flex without_banner py_50">
          <div className="container m-auto z-3">
            <div className={cn(styles.header, "row")}>
              <Link href={routes.ABOUT_US}>
                <button className={styles.backButton}>
                  <Image alt="left" src={arrowLeftBlackIcon} />
                  {defaultLanguage === "English" ? "Back" : "Volver"}
                </button>
              </Link>
              <div className="col-md-8 mx-auto text-center">
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
                <h5 className="fs_42 fw_800 mb_0">
                  {defaultLanguage === "English"
                    ? "Our Optometrists"
                    : "Nuestros Optometristas"}
                </h5>

                <p className="fs_20 fw_400 my_16">
                  {defaultLanguage === "English"
                    ? "Meet Our Expert Eye Care Team"
                    : "Conoce a Nuestro Equipo Experto en Cuidado de los Ojos"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb_30">
          <div className="container">
            <div className="row">
              {currentDoctLang.map((doctor: Doctor) => {
                const { id, drName, description, image, locationAddress } =
                  doctor;
                const dLength = description.background?.length;
                const lcAddress = locations.filter(({ name }) =>
                  locationAddress?.includes(name)
                );

                return (
                  <div key={id} className="col-xl-4 col-md-6 mb_24">
                    <div className="card_1 d-flex flex-column">
                      <div className="img_box" style={{ height: "420px" }}>
                        <Image
                          alt="doctor"
                          src={image}
                          className="w-100"
                          style={{ objectFit: "cover", height: "550px" }}
                        />
                      </div>
                      <div className="detail_content px_22 py_22">
                        <div>
                          <h4>{drName}</h4>
                          <p className="fs_18 fw_30 mt_10">
                            {description.background?.slice(0, 120)}
                            {dLength > 120 ? "..." : ""}
                          </p>
                          {dLength > 120 && (
                            <p
                              className="btn_link mt_10 d-inline-block cursor-pointer"
                              onClick={() => {
                                setSelectedDoctor(doctor);
                                setIsModalOpen(true);
                              }}
                            >
                              Read More
                            </p>
                          )}
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
                          className="btn btn_secondary_dark_bg d-block"
                          onClick={() => handleRedirect(doctor.redirect)}
                        >
                          {defaultLanguage === "English"
                            ? "Book An Appointment"
                            : "Reservar una Cita"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                    className="btn btn_secondary_dark_bg d-block"
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
    </>
  );
};

export default OptometristsPage;
