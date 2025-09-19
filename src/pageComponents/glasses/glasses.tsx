"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./glasses.module.scss";
import cn from "@/utils/cn";
import { PrimaryHeader } from "@/components";

import downRightArrow from "@/assets/icons/down_right_arrow.svg";
import downLeftArrow from "@/assets/icons/down_left_arrow.svg";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { getAllSettings } from "@/services/setting";
import { setGlassesSettingData } from "@/redux/slices/GlassesPageSlice";
import EyewearCoverflow from "@/components/carousel/EyewearCoverflow";
import Link from "next/link";
import routes from "@/constants/routes";
import glassesEnglishResponseData from "../../utils/json/glassesPage/glassesPageResponseEN.json";
import glassesSpanishResponseData from "../../utils/json/glassesPage/glassesPageResponseES.json";

const GlassesPage = () => {
  const [loading, setLoading] = useState(true);
  const settings = useSelector((state: RootState) => state.glasses.settings);
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
          key: "glasses",
          language: defaultLanguage === "Spanish" ? "es" : "en",
          publish: true,
        });
        dispatch(setGlassesSettingData(res.data));
      } catch (error) {
        if (defaultLanguage === "English") {
          dispatch(setGlassesSettingData(glassesEnglishResponseData.data));
        } else {
          dispatch(setGlassesSettingData(glassesSpanishResponseData.data));
        }
        console.error("Error fetching settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
    // eslint-disable-next-line
  }, [defaultLanguage]);

  console.log(loading, settings);

  // const handleBadgeClick = (index: number) => {
  //     setSelectedBadges((prev: any) =>
  //         prev.includes(index)
  //             ? prev.filter((i: any) => i !== index)
  //             : [...prev, index]
  //     );
  // };

  const cards = [
    {
      title: settings[9]?.value,
      description: settings[10]?.value,
      position: "left",
    },
    {
      title: settings[11]?.value,
      description: settings[12]?.value,
      position: "right",
    },
    {
      title: settings[13]?.value,
      description: settings[14]?.value,
      position: "left",
    },
    {
      title: settings[15]?.value,
      description: settings[16]?.value,
      position: "right",
    },
  ];

  return (
    <section className={styles.glassesContainer}>
      <div
        className={cn(
          styles.heroBanner,
          "hero_banner inner_banner glasses-banner d-flex"
        )}
      >
        <div className="container m-auto mt-5 z-3">
          <div className="row">
            <div className="col-md-5 ms-auto ">
              <h5 className="fs_42 fw_800 white mb_0">{settings[0]?.value}</h5>
              <p className="fs_20 fw_400 white my_16">{settings[1]?.value}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(styles.ourBestSellers, "py_80")}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-4">
              <PrimaryHeader
                primaryText={settings[2]?.value}
                description={settings[3]?.value}
              />
            </div>
            <EyewearCoverflow />
          </div>

          <div className="row mt_48">
            <div className="col-md-12">
              <div className={styles.heighlight_product}>
                <div className="row align-items-center">
                  <div className="col-md-12 col-xl-5">
                    <div className="product_img">
                      <video
                        controls
                        autoPlay
                        muted
                        loop
                        className="h-100 w-100"
                      >
                        <source
                          src="https://corporatecb.azurewebsites.net/Videos/Homepage/heighlited_products.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="col-md-12 col-xl-7 mt-4 mt-xl-0 text-md-center text-lg-start">
                    <h4 className="fs_32 fw_900 ready-title">
                      {settings[4]?.value}
                    </h4>
                    <p className="fs_22 fw_400 mt_14 mb_22 content-m-18">
                      {settings[5]?.value}
                    </p>
                    <Link
                      href={routes.AI_GLASSES}
                      className="btn_secondary content-m-18"
                    >
                      {settings[6]?.value}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt_70 ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <PrimaryHeader
                primaryText={settings[7]?.value}
                description={settings[8]?.value}
              />
            </div>
          </div>
          {cards.map(({ title, description, position }, index) => {
            return (
              <div key={index}>
                {position === "left" ? (
                  <div
                    className={cn(
                      "step_left d-flex row radius_10 mt_80 mb_100"
                    )}
                  >
                    <div className="col-xl-8 col-10 ">
                      <div className="bg_light_grey py_44 px_38 radius_10">
                        <div className={styles.numbers}>{index + 1}</div>
                        <h4 className="mt_30 mb_24 fw_900 fs_28">{title}</h4>
                        <p className="fs_22 fw_400">{description}</p>
                      </div>
                    </div>
                    {index + 1 !== cards.length && (
                      <div className="col-xl-4 col-2 d-flex">
                        <Image
                          alt="rightarrow"
                          src={downRightArrow}
                          className="mt-auto step_left_img"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="step_right d-flex row radius_10 mt_80 mb_100 ">
                    <div
                      className="col-xl-4 col-2 d-flex"
                      style={
                        index + 1 === cards.length
                          ? { visibility: "hidden" }
                          : {}
                      }
                    >
                      <Image
                        alt="leftarrow"
                        src={downLeftArrow}
                        className="mt-auto step_right_img ms-auto"
                      />
                    </div>
                    <div className="col-xl-8 col-10">
                      <div className="bg_light_grey py_44 px_38 radius_10">
                        <div className={styles.numbers}>{index + 1}</div>
                        <h4 className="mt_30 mb_24 fw_900 fs_28">{title}</h4>
                        <p className="fs_22 fw_400">{description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* <section className="quiz bg_light_grey py_80">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto text-center">
              <PrimaryHeader
                primaryText={settings[17]?.value}
                description={settings[18]?.value}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 m-auto">
              <div className="white_box position-relative mt_40">
                {currentStep === 1 && (
                  <div
                    className="d-flex flex-column align-items-center step_1 px_50 flex-wrap"
                    id="step_1"
                  >
                    <div className="col-md-12">
                      <h4 className="fs_32 fw_800 text-center mb_26">
                        What Type of Glasses are you looking for?
                      </h4>
                    </div>
                    <div className="col-md-12 mt-4 mt-lg-0">
                      <div className="d-flex justify-content-center gap-4">
                        <div className="information_box position-relative">
                          <div className="info-img">
                            <Image
                              alt="image"
                              src={quizIcon1}
                              className="w-100 h-100 object-cover"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-center gap-2 mt_12">
                            <div className="check_icon">
                              <Image alt="image" src={Icon1} />
                            </div>
                            <p className="fs_20 fw_300">Male</p>
                          </div>
                        </div>
                        <div className="information_box position-relative">
                          <div className="info-img">
                            <Image
                              alt="image"
                              className="w-100 h-100 object-cover"
                              src={quizIcon2}
                            />
                          </div>

                          <div className="d-flex align-items-center justify-content-center gap-2 mt_12">
                            <div className="check_icon">
                              <Image alt="image" src={Icon1} />
                            </div>
                            <p className="fs_20 fw_300">Female</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 2 && (
                  <div
                    className="d-flex flex-column align-items-center step_1 px_50 flex-wrap"
                    id="step_2"
                  >
                    <div className="col-md-12">
                      <h4 className="fs_26 fw_800 text-center mb_26">
                        What is important to you when shopping for glasses?
                      </h4>
                    </div>
                    <div className="col-md-12 mt-4 mt-lg-0">
                      <p className="fs_16 fw_600 mb_22 text-center">
                        Pick up to 3 options
                      </p>
                      <div className="d-flex justify-content-center gap_10 flex-wrap">
                        <div className="custom_bdages">
                          <div className="info-img">
                            <Image
                              alt="image"
                              src={checkQuizIcon}
                              className="d-none mr_6"
                            />
                          </div>
                          Light weight
                        </div>
                        <div className="custom_bdages">
                          <Image
                            alt="image"
                            src={checkQuizIcon}
                            className="d-none mr_6"
                          />{" "}
                          Style
                        </div>
                        <div className="custom_bdages">
                          <Image
                            alt="image"
                            src={checkQuizIcon}
                            className="d-none mr_6"
                          />{" "}
                          Wide Fit
                        </div>
                        <div className="custom_bdages">
                          <Image
                            alt="image"
                            src={checkQuizIcon}
                            className="d-none mr_6"
                          />{" "}
                          Durable
                        </div>
                        <div className="custom_bdages">
                          <Image
                            alt="image"
                            src={checkQuizIcon}
                            className="d-none mr_6"
                          />{" "}
                          Petite Fit
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 3 && (
                  <div
                    className="d-flex flex-column align-items-center step_1 px_50 flex-wrap"
                    id="step_3"
                  >
                    <div className="col-md-12">
                      <h4 className="fs_26 fw_800 text-center mb_26">
                        Let&apos;s review some general ELEMENTS about your face
                      </h4>
                    </div>
                    <div className="col-md-12 mt-4 mt-lg-0">
                      <div className="d-flex justify-content-center gap-4">
                        <div className="information_box position-relative mr_20">
                          <Image alt="image" src={quizIcon3} />
                          <p className="mt_10 fs_20 fw_300">Wider than chin</p>
                          <div className="check_icon d-none">
                            <Image alt="image" src={checkQuizIcon} />
                          </div>
                        </div>
                        <div className="information_box position-relative mr_20">
                          <Image alt="image" src={quizIcon4} />
                          <p className="mt_10 fs_20 fw_300">Equal to chin</p>
                          <div className="check_icon d-none">
                            <Image alt="image" src={checkQuizIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 4 && (
                  <div className="d-flex step_4 px_50 flex-wrap" id="step_4">
                    <div className="col-md-12 col-lg-4">
                      <h4 className="fs_26 fw_800">
                        Let&apos;s review some general ELEMENTS about your face
                      </h4>
                    </div>
                    <div className="col-md-12 col-lg-6 offset-lg-1 mt-4 mt-lg-0">
                      <div className="d-flex flex-wrap">
                        <div className="information_box position-relative mr_20">
                          <Image alt="image" src={quizIcon5} />
                          <p className="mt_10 fs_20 fw_300">High & Defined</p>
                          <div className="check_icon d-none">
                            <Image alt="image" src={checkQuizIcon} />
                          </div>
                        </div>
                        <div className="information_box position-relative mr_20">
                          <Image alt="image" src={quizIcon6} />
                          <p className="mt_10 fs_20 fw_300">Soft & Round</p>
                          <div className="check_icon d-none">
                            <Image alt="image" src={checkQuizIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 5 && (
                  <div className="d-flex step_5 px_50 flex-wrap" id="step_5">
                    <div className="col-md-12 col-lg-4">
                      <h4 className="fs_26 fw_800">
                        Le&apos;s review some general ELEMENTS about your face
                      </h4>
                    </div>
                    <div className="col-md-12 col-lg-6 offset-lg-1">
                      <div className="d-flex flex-wrap">
                        <div className="information_box position-relative mr_20">
                          <Image alt="image" src={quizIcon7} />
                          <p className="mt_10 fs_20 fw_300">Square</p>
                          <div className="check_icon d-none">
                            <Image alt="image" src={checkQuizIcon} />
                          </div>
                        </div>
                        <div className="information_box position-relative mr_20">
                          <Image alt="image" src={quizIcon8} />
                          <p className="mt_10 fs_20 fw_300">Narrow</p>
                          <div className="check_icon d-none">
                            <Image alt="image" src={checkQuizIcon} />
                          </div>
                        </div>
                        <div className="information_box position-relative mr_20">
                          <Image alt="image" src={quizIcon9} />
                          <p className="mt_10 fs_20 fw_300">Round</p>
                          <div className="check_icon d-none">
                            <Image alt="image" src={checkQuizIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 6 && (
                  <div className="d-flex step_5 px_50 flex-wrap" id="step_6">
                    <div className="col-md-12 col-lg-4">
                      <h4 className="fs_26 fw_800">
                        Your Personalized Results
                      </h4>
                      <p className="fs_20 fw_400">
                        Your prescription may also impact best frame and lense
                        shape/style. Be sure to speak with your eyecare
                        consultant for best options during your visit to our
                        office.
                      </p>
                    </div>
                    <div className="col-md-12 col-lg-6 offset-lg-1">
                      <div className="d-flex flex-wrap">
                        <div className="information_box position-relative mr_20">
                          <Image alt="image" src={quizIcon10} />
                          <p className="mt_10 fs_20 fw_300">
                            {" "}
                            Face Shape Square
                          </p>
                          <div className="check_icon d-none">
                            <Image alt="image" src={checkQuizIcon} />
                          </div>
                        </div>
                        <div className="information_box position-relative mr_20">
                          <Image alt="image" src={quizIcon11} />
                          <p className="mt_10 fs_20 fw_300">
                            Glasses TypeRound & Aviator
                          </p>
                          <div className="check_icon d-none">
                            <Image alt="image" src={checkQuizIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="fotter_buttons d-flex justify-content-center align-items-end">
                  <button
                    className="btn_secondary mr_20 border-0"
                    id="skip"
                    onClick={handleSkip}
                  >
                    Skip
                  </button>
                  <button
                    className="btn_secondary mr_20"
                    id="back"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button
                    className="btn_secondary_dark_bg"
                    id="next"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default GlassesPage;
