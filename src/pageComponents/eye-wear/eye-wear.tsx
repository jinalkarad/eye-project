"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { PrimaryHeader } from "@/components";

import slider1 from "@/assets/images/eye_wear_slider_1.jpg";
import slider2 from "@/assets/images/eye_wear_slider_2.jpg";
import slider3 from "@/assets/images/eye_wear_slider_3.jpg";
import rightChevronIcon from "@/assets/icons/right_chevron_icon.svg";
import eyeIcon from "@/assets/icons/eye_icon.svg";
import serviceImage1 from "@/assets/images/services_img_1.jpg";
import glassesIcon from "@/assets/icons/glasses_icon.svg";
import examIcon from "@/assets/icons/exam_icon.svg";
import magicStarsIcon from "@/assets/icons/magic_stars_icon.svg";
import multiCheckIcon from "@/assets/icons/multi_check_icon.svg";
import digitalLabIcon from "@/assets/icons/adjustment.svg";
import repairsIcon from "@/assets/icons/repairs.svg";
import Link from "next/link";
import routes from "@/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { getAllSettings } from "@/services/setting";
import { setEyewearSettingData } from "@/redux/slices/EyeWearSlice";
import eyewearEnglishResponseData from "../../utils/json/eyewearPage/eyewearPageResponseEN.json";
import eyewearSpanishResponseData from "../../utils/json/eyewearPage/eyewearPageResponseES.json";

const EyeWearPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastSectionRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const settings = useSelector((state: RootState) => state.eyewear.settings);
  const [defaultLanguage, setDefaultLanguage] = useState("Spanish");

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

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getAllSettings({
          key: "Eyewear",
          language: defaultLanguage === "Spanish" ? "es" : "en",
          publish: true,
        });
        dispatch(setEyewearSettingData(res.data));
      } catch (error) {
        if (defaultLanguage === "English") {
          dispatch(setEyewearSettingData(eyewearEnglishResponseData.data));
        } else {
          dispatch(setEyewearSettingData(eyewearSpanishResponseData.data));
        }
        console.error("Error fetching settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
    // eslint-disable-next-line
  }, [defaultLanguage]);

  console.log(loading);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };
  const scrollToLastSection = () => {
    lastSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    {
      id: 1,
      image: slider1,
      text: settings[2]?.value,
      linkUrl: routes.GLASSES,
    },
    { id: 2, image: slider2, text: settings[3]?.value },
    {
      id: 3,
      image: slider3,
      text: settings[4]?.value,
      linkUrl: routes.CONTACT_LENSES,
    },
  ];

  const exams = [
    {
      icon: glassesIcon,
      title: settings[14]?.value,
      description: settings[15]?.value,
    },
    {
      icon: magicStarsIcon,
      title: settings[16]?.value,
      description: settings[17]?.value,
    },
    {
      icon: multiCheckIcon,
      title: settings[18]?.value,
      description: settings[19]?.value,
    },
  ];

  return (
    <section>
      <div className="hero_banner inner_banner_2 eye-wear d-flex overflow-hidden">
        <div className="container m-auto z-3">
          <div className="row flex-nowrap overflow-x-auto">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`mx-auto text-center slide ${
                  index === activeIndex ? "col-xl-9 col-md-7" : "col-md-3"
                }`}
                onClick={() => {
                  handleSlideChange(index);
                  if (slide.id === 2) scrollToLastSection();
                }}
                onMouseEnter={() => handleSlideChange(index)}
              >
                <a href={slide.linkUrl}>
                <div className="img_slider_box">
                  <Image
                    alt="slider"
                    src={slide.image}
                    className="position-relative z-3"
                  />
                  <div className="content" style={{ cursor: "pointer" }}>
                    <p>{slide.text}</p>
                  </div>
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="how_we_can_help bg_light_grey py_60 eye_wear">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto text-center">
              <PrimaryHeader
                primaryText={settings[5]?.value}
                primaryTextClass="imb_0"
              />
            </div>
          </div>
          <div className="row justify-content-center mt_50">
            <div className="col-md-12 col-xl-6">
              <div className="img_box h-100 our-service-img">
                <Image
                  alt="serviceImage1"
                  src={serviceImage1}
                  className="w-100 object-fit-cover h-100"
                />
              </div>
            </div>
            <div className="col-12 col-xl-6 mt-5 mt-xl-0 d-flex flex-column justify-content-between">
              <div className="card_2 eye-wear-card mb_24 h-auto d-md-flex justify-content-center text-md-start text-center align-items-center py_20">
                <div className="">
                  <div className="card_img coverd-icon">
                    <Image alt="glassesIcon" src={glassesIcon} />
                  </div>
                </div>

                <div className="content">
                  <h5 className="fs_22 fw_800 mb_10 size-20">
                    {settings[6]?.value}
                  </h5>
                  <p className="mb-0 fs_18 fw_400">{settings[7]?.value}</p>
                </div>
                <div className="right_arrow ml_24">
                  <Link href={routes.GLASSES}>
                    <Image alt="rightChevronIcon" src={rightChevronIcon} />
                  </Link>
                </div>
              </div>

              <div className="card_2 eye-wear-card mb_24 h-auto d-md-flex justify-content-center text-md-start text-center align-items-center py_20">
                <div className="img_mobile">
                  <div className="card_img coverd-icon">
                    <Image alt="eyeIcon" src={eyeIcon} />
                  </div>
                </div>

                <div className="content">
                  <h5 className="fs_22 fw_800 mb_10 size-20">
                    {settings[8]?.value}
                  </h5>
                  <p className="mb-0 fs_18 fw_400">{settings[9]?.value}</p>
                </div>
                <div className="right_arrow ml_24">
                  <Link href={routes.CONTACT_LENSES}>
                    <Image alt="rightChevronIcon" src={rightChevronIcon} />
                  </Link>
                </div>
              </div>

              <div className="card_2 eye-wear-card h-auto d-md-flex justify-content-center text-md-start text-center align-items-center py_20">
                <div className="">
                  <div className="card_img coverd-icon">
                    <Image alt="examIcon" src={examIcon} />
                  </div>
                </div>

                <div className="content">
                  <h5 className="fs_22 fw_800 mb_10 size-20">
                    {settings[10]?.value}
                  </h5>
                  <p className="mb-0 fs_18 fw_400">{settings[11]?.value}</p>
                </div>
                <div className="right_arrow ml_24">
                  <Link href={routes.EYE_EXAMS}>
                    <Image alt="rightChevronIcon" src={rightChevronIcon} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py_100">
        <div className="container">
          <div className="row mb_60">
            <div className="col-xl-9 m-auto text-center">
              <PrimaryHeader
                primaryText={settings[12]?.value}
                description={settings[13]?.value}
              />
            </div>
          </div>
          <div className="row justify-content-center mt_50">
            {exams.map(({ title, description, icon }, index) => {
              return (
                <div
                  key={index}
                  className="col-md-6 col-lg-4 col-12 text-md-start text-center"
                >
                  <div className="card_2">
                    <div className="card_img coverd-icon">
                      <Image alt="eye" src={icon} />
                    </div>
                    <div className="content w-100">
                      <h5 className="fs_22 fw_800 mt_26 mb_20 size-20">
                        {title}
                      </h5>
                      <p className="mb-0 fs_18 fw_400">{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <section
        ref={lastSectionRef}
        className="warranty_plan bg_light_grey py_80 mt_50"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto col-xl-6 d-flex flex-column">
              <PrimaryHeader
                alignment="left"
                primaryText={settings[22]?.value}
                description={settings[23]?.value}
                style={{ padding: 0 }}
                primaryTextClass="text-xl-start"
                secondaryTextClass="text-xl-start"
                className="fs_20"
              />
              <p className="fs_20 mt-2 text-xl-start text-center">
                {settings[24]?.value}
              </p>

              <div className="my-4 mb-xl-0 mt-md-3 text-xl-start text-center">
                <Link
                  href={routes.LOCATIONS}
                  className="btn btn_primary py_16 px_35"
                >
                  {settings[25]?.value}
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-12 col-xl-3 mb-md-5 mb-4 mb-lg-0">
              <div className="card_2">
                <div className="text-md-start text-center">
                  <Image alt="repairsIcon" src={repairsIcon} />
                </div>
                <div className="content w-100 text-md-start text-center">
                  <h4 className="my_12 fs_22 fw_900">{settings[26]?.value}</h4>
                  <p className="fs_18">{settings[27]?.value}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-xl-3">
              <div className="card_2">
                <div className="text-md-start text-center">
                  <Image alt="digitalLabIcon" src={digitalLabIcon} />
                </div>
                <div className="content w-100 text-md-start text-center">
                  <h4 className="my_12 fs_22 fw_900">{settings[28]?.value}</h4>
                  <p className="fs_18">{settings[29]?.value}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default EyeWearPage;
