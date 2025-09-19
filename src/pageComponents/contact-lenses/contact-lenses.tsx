"use client";
import React, { useEffect, useState } from "react";
import cn from "@/utils/cn";
import Image from "next/image";

import styles from "./contact-lenses.module.scss";

import goggleBlackIcon from "@/assets/icons/goggle_black_icon.svg";
// import eyeIcon from "@/assets/icons/eye_icon.svg";
// import userAuthenticatedIcon from "@/assets/icons/user_authenticated_icon.svg";
// import lensFittingExam from "@/assets/icons/lens_fitting_exam.svg";
// import visionExamIcon from "@/assets/icons/vision_exam_icon.svg";
import lenseFittingBanner from "@/assets/images/lense_fitting_banner.png";

import trustedBrandImage from "@/assets/images/trusted_brands_image.png";
import dailiesBrand from "@/assets/images/dailies_brand.png";
import biofinityBrand from "@/assets/images/biofinity_brand.png";
import acuvueBrand from "@/assets/images/acuvue_brand.png";
import precisionBrand from "@/assets/images/precision_brand.png";
import supplyProgramBanner from "@/assets/images/supply_program_banner.png";
import notforglasses from "@/assets/images/not-for-glass.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { getAllSettings } from "@/services/setting";
import { setContactLenseSettingsData } from "@/redux/slices/ContactLenseSlice";
import contactlenseEnglishResponseData from "../../utils/json/contactlensePage/contactlensePageRespponseEN.json";
import contactlenseSpanishResponseData from "../../utils/json/contactlensePage/contactlensePageResponseES.json";
import Link from "next/link";
import routes from "@/constants/routes";

// const data = [
//   {
//     icon: eyeIcon,
//     description:
//       "Expert fittings ensure lenses that fit your eye shape perfectly",
//   },
//   {
//     icon: userAuthenticatedIcon,
//     description: "Better comfort and clearer vision with professional guidance",
//   },
//   {
//     icon: lensFittingExam,
//     description: "Access to specialty lenses not available online",
//   },
//   {
//     icon: visionExamIcon,
//     description: `Ongoing support for adjustments, replacements, and any issues you may encounter`,
//   },
// ];

const ContactLensesPage = () => {
  const [loading, setLoading] = useState(true);
  const settings = useSelector(
    (state: RootState) => state.contactLense.settings
  );
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
          key: "ContactLenses",
          language: defaultLanguage === "Spanish" ? "es" : "en",
          publish: true,
        });
        dispatch(setContactLenseSettingsData(res.data));
      } catch (error) {
        if (defaultLanguage === "English") {
          dispatch(
            setContactLenseSettingsData(contactlenseEnglishResponseData.data)
          );
        } else {
          dispatch(
            setContactLenseSettingsData(contactlenseSpanishResponseData.data)
          );
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

  const lenseOptions = [
    settings[15]?.value,
    settings[16]?.value,
    settings[17]?.value,
    settings[18]?.value,
    settings[19]?.value,
    settings[20]?.value,
  ];
  return (
    <section className={styles.contactLensesContainer}>
      {/* <div className={cn(styles.heroBanner, "hero_banner inner_banner d-flex")}>
                <div className={styles.videoWrapper}>
                    <video
                        className={styles.videoBackground}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/videos/video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="container m-auto z-3">
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center">
                            <h5 className="fs_42 fw_800 white mb_0">Expert Contact Lens Fitting - Customized for your Eyes</h5>
                            <p className="fs_20 fw_400 white my_16">with over 50 options to fit your unique vision needs, our expert optometrists ensure you get the right lenses for comfort and clarity.</p>
                        </div>
                    </div>
                </div>
            </div> */}
      {/* <div className={cn(styles.heroBanner, 'hero_banner')}>
                <div className={styles.videoWrapper}>
                    <video
                        className={styles.videoBackground}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/videos/video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={cn('container m-auto z-3', styles.contentWrapper)}>
                    <div className={cn('row', styles.content)}>
                        <div className="col-md-9 col-sm-12 mx-auto text-center">
                            <h5 className="fs_42 fw_800 white mb_0">Expert Contact Lens Fitting - Customized for your Eyes</h5>
                            <p className="fs_20 fw_400 white my_16">with over 50 options to fit your unique vision needs, our expert optometrists ensure you get the right lenses for comfort and clarity.</p>
                        </div>
                    </div>
                </div>
            </div> */}

      <div className={cn(styles.heroBanner, "hero_banner inner_banner d-flex")}>
        <div className="container m-auto z-3">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h5 className="fs_42 fw_500 white mb_0 size-24">
                {settings[0]?.value}
              </h5>
              {/* <p className="fs_20 fw_400 white my_16">with over 50 options to fit your unique vision needs, our expert optometrists ensure you get the right lenses for comfort and clarity.</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="py_60 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-md-5">
              <div className="d-flex headding_icon justify-content-md-start justify-content-center mb_16">
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
              <h4
                className="fs_32 size-24 text-md-start text-center fw_600 mb_16 "
                style={{ color: "#000" }}
              >
                {settings[1]?.value}
              </h4>
              <p
                className="fs_20 fw_400 content-m-18 text-md-start text-center mb-0"
                style={{ color: "#000" }}
              >
                {settings[2]?.value}
              </p>
              <div className="text-sm-center text-md-start text-xl-start contact_lenses_btn">
                <Link
                  href={routes.LOCATIONS}
                  className="btn_secondary_dark_bg mt_32 mx-md-0 mx-sm-auto mb-md-0 mb-3"
                >
                  {settings[3]?.value}
                </Link>
              </div>
            </div>

            <div className="col-xl-8 col-md-7">
              <div className="img-box h-100 w-90 ">
                <Image
                  className="mx_14 w-100 h-100 object-fit-cover"
                  alt="goggle box"
                  src={notforglasses}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brands py_50">
        <div className="container">
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
              <h4
                className="fs_32 fw_800 mb_16 size-24"
                style={{ color: "#000" }}
              >
                {settings[4]?.value}
              </h4>
              <p
                className="fs_20 fw_400  mb-0 content-m-18"
                style={{ color: "#000" }}
              >
                {settings[5]?.value}
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mt_40">
            <div className="col-md-3">
              <Image
                alt="logo"
                src={trustedBrandImage}
                height={70}
                className="objectfit_contain trusted_img_main"
              />
            </div>
            <div className="col-md-9 wrapper">
              <div className="marquee">
                <div className="marquee__group">
                  <Image
                    alt="logo"
                    src={dailiesBrand}
                    height={60}
                    className="objectfit_contain mx_20"
                  />
                  <Image
                    alt="logo"
                    src={biofinityBrand}
                    height={60}
                    className="objectfit_contain mx_20"
                  />
                  <Image
                    alt="logo"
                    src={acuvueBrand}
                    height={60}
                    className="objectfit_contain mx_20"
                  />
                  <Image
                    alt="logo"
                    src={precisionBrand}
                    height={60}
                    className="objectfit_contain mx_20"
                  />
                </div>
                <div aria-hidden="true" className="marquee__group">
                  <Image
                    alt="logo"
                    src={dailiesBrand}
                    height={60}
                    className="objectfit_contain mx_20"
                  />
                  <Image
                    alt="logo"
                    src={biofinityBrand}
                    height={60}
                    className="objectfit_contain mx_20"
                  />
                  <Image
                    alt="logo"
                    src={acuvueBrand}
                    height={60}
                    className="objectfit_contain mx_20"
                  />
                  <Image
                    alt="logo"
                    src={precisionBrand}
                    height={60}
                    className="objectfit_contain mx_20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py_50">
        <div
          className={cn(styles.programContainer, "container")}
          style={{ borderRadius: "10px" }}
        >
          <div className={cn(styles.programContent, "d-xl-flex d-block")}>
            <div className="trusted-img-box">
              <Image
                alt="banner"
                src={supplyProgramBanner}
                width={650}
                height={450}
                className={styles.image}
              />
            </div>
            <div className={styles["right-content"]}>
              <div className="d-flex headding_icon align-items-center justify-content-xl-start mt-xl-0 mt-4 justify-content-md-center mb_16">
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
              <h4 className="fs_32 fw_800 text-xl-start text-md-center size-24">
                {settings[7]?.value}
              </h4>
              <p className="fs_22 mt_16 text-black text-xl-start text-md-center content-m-18">
                {settings[8]?.value}
              </p>
              <p className="fs_22 fw_600 text-black mt_14 mb_14 content-m-18">
                {settings[9]?.value}
              </p>
              <ul className="check_list content-m-18 ">
                <li>{settings[10]?.value}</li>
                <li>{settings[11]?.value}</li>
                <li>{settings[12]?.value}</li>
              </ul>

              <div className="text-sm-start w-100">
                <Link
                  href={routes.LOCATIONS}
                  className="btn_secondary_dark_bg mt_32 mx-xl-0"
                >
                  {settings[13]?.value}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="why_choose py_100">
                <div className="container">
                    <div className="row mb_50">
                        <div className="col-md-9 m-auto">
                            <div className="d-flex headding_icon justify-content-center align-items-center mb_16">
                                <div className="divider_line"></div>
                                <Image className="mx_16" alt="goggle" src={goggleBlackIcon} width={50} height={18} />
                                <div className="divider_line"></div>
                            </div>
                            <h4 className="fs_32 fw_800 text-center"> Why Choose Our Optometrists for Contact Lenses? </h4>
                        </div>
                    </div> */}
      {/* <div className="container"> */}
      {/* <div className="row">
                        {data.map(({
                            description,
                            icon,
                        }, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-md-6">
                                    <div className="icon_crad text-start my_10 justify-content-start align-items-start" style={{ borderRadius: '20px' }}>
                                        <Image alt='icon' src={icon} width={60} height={60} />
                                        <p className="fs_18 fw_400 mt_22 text-start" style={{ lineHeight: '28px', color: '#000' }}>{description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div> */}
      {/* </div> */}
      {/* </div>
            </div> */}
      <div className="our_contect_lenssess bg_light_grey py_70">
        <div className="container">
          <div className={cn(styles.customizeContent, "row")}>
            <div
              className={cn(
                styles.imgContentDiv,
                "col-md-4 col-sm-12 col-lg-4 mt-4 mt-md-0"
              )}
            >
              <div className="img_box">
                <Image
                  alt="banner"
                  src={lenseFittingBanner}
                  className="w-100 h-100 object-fit-cover"
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </div>
            <div
              className={cn(
                styles.imgContentDiv,
                "col-md-8 col-sm-12 col-lg-8 mt-4 mt-md-0"
              )}
            >
              <div className={styles.contact_lenses_customize_content}>
                <h1 className="fs_24 fw_800 text-start mb_10 mt_20">
                  {settings[14]?.value}
                </h1>
                <ul className="check_list">
                  {lenseOptions.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt_40">
            <div className="col-md-12">
              <div
                className="cta_bg_area d-md-flex justify-content-center align-items-center py-3 px-4"
                style={{ gap: "8px" }}
              >
                <p className="fs_22 fw_500 text-black mb-0">
                  {settings[21]?.value}
                </p>
                <div className="ms-auto">
                  <Link
                    href={routes.LOCATIONS}
                    className="btn_secondary_dark_bg px_30  mt-3 mt-md-0"
                  >
                    {settings[22]?.value}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLensesPage;
