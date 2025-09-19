"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cn from "@/utils/cn";

import styles from "./eye-exams.module.scss";

// import goggleWhiteIcon from '@/assets/icons/goggle_icon.svg';
import goggleBlackIcon from "@/assets/icons/goggle_black_icon.svg";
import headacheIcon from "@/assets/icons/headache_icon.svg";
import doubleVisionIcon from "@/assets/icons/double_vision_icon.svg";
import eyePainIcon from "@/assets/icons/eye_pain_icon.svg";
import lightSensitivityIcon from "@/assets/icons/light_sensitivity_icon.svg";
import eyeDrynessIcon from "@/assets/icons/eye_dryness_icon.svg";
import eyeVisionIcon from "@/assets/icons/vision_icon.svg";
import eyeIcon from "@/assets/icons/eye_icon.svg";
import diagnosticExamIcon from "@/assets/icons/diagnostic_exam_icon.svg";
import lensFittingExam from "@/assets/icons/lens_fitting_exam.svg";
import visionExamIcon from "@/assets/icons/vision_exam_icon.svg";
import examMatterBanner from "@/assets/images/exam_matter_banner1.jpg";
import { setEyeExamContactLenseData } from "@/redux/slices/EyeexampageSlice";
import { getAllSettings } from "@/services/setting";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import eyeexamEnglishResponse from "../../utils/json/eyeexamPage/eyeexamPageResponseEN.json";
import eyeexamSpanishResponse from "../../utils/json/eyeexamPage/eyeexamPageResponseEN.json";
import routes from "@/constants/routes";
import Link from "next/link";

const EyeExamsPage = () => {
  const [loading, setLoading] = useState(true);
  const settings = useSelector((state: RootState) => state.eyeexam.settings);
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
          key: "EyeExam",
          language: defaultLanguage === "Spanish" ? "es" : "en",
          publish: true,
        });
        dispatch(setEyeExamContactLenseData(res.data));
      } catch (error) {
        if (defaultLanguage === "English") {
          dispatch(setEyeExamContactLenseData(eyeexamEnglishResponse.data));
        } else {
          dispatch(setEyeExamContactLenseData(eyeexamSpanishResponse.data));
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

  const exams = [
    {
      icon: eyeIcon,
      title: settings[4]?.value,
      description: settings[5]?.value,
    },
    {
      icon: diagnosticExamIcon,
      title: settings[6]?.value,
      description: settings[7]?.value.slice(0, 75),
      list: [
        settings[7]?.value.slice(75, 85),
        settings[7]?.value.slice(85, 105),
        settings[7]?.value.slice(106, 127),
        settings[7]?.value.slice(128),
      ],
    },
    {
      icon: lensFittingExam,
      title: settings[8]?.value,
      description: settings[9]?.value,
    },
    {
      icon: visionExamIcon,
      title: settings[10]?.value,
      description: settings[11]?.value,
    },
  ];
  const data = [
    {
      title: settings[16]?.value,
      icon: headacheIcon,
    },
    {
      title: settings[17]?.value,
      icon: doubleVisionIcon,
    },
    {
      title: settings[18]?.value,
      icon: eyePainIcon,
    },
    {
      title: settings[19]?.value,
      icon: lightSensitivityIcon,
    },
    {
      title: settings[20]?.value,
      icon: eyeDrynessIcon,
    },
    {
      title: settings[21]?.value,
      icon: eyeVisionIcon,
    },
  ];
  return (
    <section className={styles.eyeExamsContainer}>
      <div className={cn(styles.heroBanner, "hero_banner ")}>
        <div
          className="inner_banner d-flex"
          style={{ background: "#00000017", height: "100%" }}
        >
          <div className="container m-auto z-3">
            <div className="row">
              <div className="col-xl-9 mx-auto text-center">
                <h5 className="fs_42 fw_700 white mb_0 size-24">
                  {settings[0]?.value}
                </h5>
                <p className="fs_20 fw_400 white my_16 size-16">
                  {settings[1]?.value}
                </p>
                <a
                  href={routes.LOCATIONS}
                  className="btn btn_primary py_16 px_70"
                >
                  {settings[2]?.value}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py_70">
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
              <h4 className="fs_32 fw_800 mb_20 size-24">
                {settings[3]?.value}
              </h4>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center mt_12 g-4">
            {exams.map(
              (
                {
                  title,
                  description,

                  list,
                },
                index
              ) => {
                return (
                  <div
                    key={index}
                    className="col-md-6 col-xl-3 col-12 mt-0 mb-3"
                  >
                    <div
                      className="card_2 offer-box"
                      style={{ border: "none", height: "100%" }}
                    >
                      {/* <Image alt='eye' src={icon} /> */}
                      <h5 className="fs_22 fw_800 mb_20">{title}</h5>
                      <p className="mb-0 fs_18 fw_400">{description}</p>
                      {list && list?.length && (
                        <ul
                          className={cn(
                            styles.examWeOfferSection,
                            "check_list mt_10"
                          )}
                        >
                          {list.map((item, i) => {
                            return (
                              <li
                                key={i}
                                // style={{fontSize:"18px", fontWeight: 500, color:"#545454" }}
                              >
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="pt_70 bg_light_grey pb_60">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-10 text-center">
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
                 {settings[12]?.value}
              </h4>
              <p className="fs_22 fw_400">{settings[13]?.value}</p>
            </div>
            <div className="col-12 mt_32 mb_36">
              <div className="container-fluid">
                <div
                  className="row justify-content-center"
                  style={{ marginBottom: "-14px" }}
                >
                  {data.map(({ title, icon }, index) => {
                    return (
                      <div
                        key={index}
                        className="col-md-4 col-sm-6 col-xl-3 py_14"
                      >
                        <div className="icon_crad px_10 py_22 h-100">
                          <Image alt="icon" src={icon} />
                          <p
                            className="fs_18 fw_400 mt_12 text-center"
                            style={{ color: "#000" }}
                          >
                            {title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-md-6 order-md-1 order-2 text-md-start text-center mt-md-0 mt-3">
              <div>
                <p className="fs_22">{settings[14]?.value}</p>
                <p className="fs_22 pt_30">{settings[15]?.value}</p>
              </div>
              <Link
                href={routes.LOCATIONS}
                className=" btn btn_primary py_16 px_35 mt_24"
              >
                Book Your Eye Exam Today
              </Link>
            </div>

            <div className="col-md-6 order-md-2 order-1">
              <Image
                alt="banner"
                src={examMatterBanner}
                className="w-100 h-100 mt-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyeExamsPage;

// 6. Eye Wear Section
// In the last section, only the "Book Appointment" should be there

// 8. Digital Labs Section
// Fix misalignment of content make it same as figma.
// set content gaps between two sections same as figma.
