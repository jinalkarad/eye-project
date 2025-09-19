"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import cn from "@/utils/cn";
import styles from "./home.module.scss";

import goggleIcon from "@/assets/icons/goggle_icon.svg";
import goggleBlackIcon from "@/assets/icons/goggle_black_icon.svg";
import arrowRightBlackIcon from "@/assets/icons/arrow_right_black.svg";
import insuranceLogo1 from "@/assets/images/i_logo_1.png";
import insuranceLogo2 from "@/assets/images/i_logo_2.png";
import insuranceLogo3 from "@/assets/images/i_logo_3.png";
import insuranceLogo4 from "@/assets/images/i_logo_4.png";
import insuranceLogo5 from "@/assets/images/i_logo_5.png";
import insuranceLogo6 from "@/assets/images/i_logo_7.png";
import insuranceLogo7 from "@/assets/images/i_logo_8.png";
import doctorImage from "@/assets/images/dr_gabriel_santos.webp";
import marqueImage1 from "@/assets/images/marique_01.png";
import marqueImage2 from "@/assets/images/marique_02.png";
import marqueImage3 from "@/assets/images/marique_03.png";
import marqueImage4 from "@/assets/images/marique_04.png";
import marqueImage5 from "@/assets/images/marique_05.png";
import marqueImage6 from "@/assets/images/marique_06.png";
import marqueImage7 from "@/assets/images/marique_07.png";
import marqueImage8 from "@/assets/images/marique_08.png";
import marqueImage9 from "@/assets/images/marique_09.png";
import marqueImage10 from "@/assets/images/marique_10.png";
import marqueImage11 from "@/assets/images/marique_11.png";
import marqueImage12 from "@/assets/images/marique_12.png";

import Link from "next/link";
import routes from "@/constants/routes";
import { getAllSettings } from "@/services/setting";
import { setMediaSettings, setSettings } from "@/redux/slices/HomepageSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import EyewearCoverflow from "@/components/carousel/EyewearCoverflow";
import homepageEnglishDataResponse from "../../utils/json/homePage/homepageResponseEN.json";
import homepageSpanishDataResponse from "../../utils/json/homePage/homepageResponseES.json";

const HeroBanner = () => {
  const [loading, setLoading] = useState(true);
  const [zipcode, setZipcode] = useState("");
  const [zipError, setZipError] = useState("");
  const [defaultLanguage, setDefaultLanguage] = useState("Spanish");

  const router = useRouter();

  const { settings } = useSelector((state: RootState) => state.homepage);
  const dispatch = useDispatch();

  // Map zipcodes to location IDs
  const zipToLocationId = {
    "00738": 1, // Fajardo
    "00745": 3, // Rio Grande
    "00791": 2, // Humacao
    "00725": 4, // Caguas
  };
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
    // const defaultLanguage = localStorage.getItem("language");
    const fetchSettings = async () => {
      try {
        const res = await getAllSettings({
          key: "Homepage",
          language: defaultLanguage === "Spanish" ? "es" : "en",
          publish: true,
        });
        const resMedia = await getAllSettings({
          key: "Homepage",
          publish: true,
        });
        dispatch(setSettings(res.data));
        dispatch(
          setMediaSettings(
            resMedia.data?.filter((item) => item.key.includes("Media"))
          )
        );
      } catch (error) {
        if (defaultLanguage === "English") {
          dispatch(setSettings(homepageEnglishDataResponse.data));
        } else {
          dispatch(setSettings(homepageSpanishDataResponse.data));
        }
        console.error("Error fetching settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
    // eslint-disable-next-line
  }, [defaultLanguage]);

  const heroSection = settings.filter((item) =>
    item.key.includes("Homepage.Hero")
  );
  const searchSection = settings.filter((item) =>
    item.key.includes("Homepage.Search")
  );
  const bestsellerSection = settings.filter((item) =>
    item.key.includes("Homepage.BestSellers")
  );
  const trendingSection = settings.filter((item) =>
    item.key.includes("Homepage.Trending")
  );
  const insuranceSection = settings.filter((item) =>
    item.key.includes("Homepage.Insurance")
  );
  const optometristSection = settings.filter((item) =>
    item.key.includes("Homepage.Optometrist")
  );
  console.log(loading, settings);

  return (
    <section className={styles.container}>
      <div className={cn(styles.heroBanner, "hero_banner")}>
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
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.headingIcon}>
              <div className={"divider_line white"}></div>
              <Image
                className={styles.icon}
                alt="goggle"
                src={goggleIcon}
                width={50}
                height={18}
              />
              <div className={"divider_line white"}></div>
            </div>
            <h5 className={styles.subHeading}>{heroSection[0]?.value}</h5>
            <h1 className={styles.mainHeading}>
              {/* {heroSection[1]?.value.slice(0, 10)}{" "}
              <span>{heroSection[1]?.value.slice(10, 17)}</span>{" "}
              {heroSection[1]?.value.slice(17)} */}
              {(() => {
                const value = heroSection[1]?.value || "";
                const boldWord =
                  defaultLanguage === "Spanish" ? "VISIÓN" : "VISION";
                const parts = value.split(new RegExp(`(${boldWord})`, "i"));

                return (
                  <>
                    {parts[0]}
                    <span>{parts[1]}</span>
                    {parts[2]}
                  </>
                );
              })()}
            </h1>
            <Link
              href={routes.LOCATIONS}
              className="btn btn_primary py_16 px_70"
            >
              {heroSection[2]?.value}
            </Link>
          </div>
        </div>
      </div>
      <div
        className={cn(
          styles.locationSection,
          "sub_section bg_light_grey py_46"
        )}
      >
        <div className="container">
          <div className={cn("divider row")}>
            {/* Find a Location */}
            <div className={cn(styles.leftSection, "col-md-6 col-lg-5")}>
              <div
                className={cn(
                  styles.headingIcon,
                  "d-flex justify-content-center align-items-center mb_16"
                )}
              >
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
              <h4 className="fs_32 fw_800 text-center">
                {searchSection[0]?.value}
              </h4>
              <div
                className={cn(styles.formLocation, "position-relative mt_20")}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder={searchSection[3]?.value || "Enter ZIP code"}
                  value={zipcode}
                  onChange={(e) => {
                    setZipcode(e.target.value);
                    setZipError("");
                  }}
                  maxLength={5}
                />
                <div
                  className="circle_button"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (
                      zipToLocationId[zipcode as keyof typeof zipToLocationId]
                    ) {
                      setZipError("");
                      router.push(
                        `/location-details/${
                          zipToLocationId[
                            zipcode as keyof typeof zipToLocationId
                          ]
                        }`
                      );
                    } else {
                      setZipError("Invalid zipcode");
                    }
                  }}
                >
                  <Image
                    alt="arrow"
                    src={arrowRightBlackIcon}
                    width={28}
                    height={24}
                  />
                </div>
                {zipError && (
                  <div style={{ color: "red", marginTop: 8, fontSize: 14 }}>
                    {zipError}
                  </div>
                )}
              </div>
            </div>

            {/* Insurance Info */}
            <div className="col-md-6 col-lg-6 text-center offset-lg-1">
              <div
                className={cn(
                  styles.headingIcon,
                  "d-flex justify-content-center align-items-center mb_16"
                )}
              >
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
              <h4 className="fs_32 fw_800 text-center mb_16">
                {searchSection[1]?.value}
              </h4>
              <Link href={routes.INSURANCE} className={cn("btn_secondary")}>
                {searchSection[2]?.value}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={cn(styles.ourBestSellers, "py_80 our_best_sellers")}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
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
              <div className="slider-content">
                <h4 className="fs_32 fw_800 text-center mb_16">
                  {bestsellerSection[0]?.value}
                </h4>
                <p className="fs_22 fw_400  text-center">
                  {bestsellerSection[1]?.value}
                </p>
              </div>
            </div>
            <EyewearCoverflow />
          </div>
          <div className="row mt_48">
            <div className="col-md-12">
              <div className={styles.heighlight_product}>
                <div className="row align-items-center">
                  <div className="col-md-12 col-xl-5">
                    <div className="product_img">
                      <video autoPlay muted loop className="h-100 w-100">
                        <source
                          src="https://corporatecb.azurewebsites.net/Videos/Homepage/heighlited_products.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="col-md-12 col-xl-7 mt-4 mt-xl-0 text-md-center text-lg-start">
                    <h4 className="fs_32 fw_900 ready-title">
                      {trendingSection[0]?.value}
                    </h4>
                    <p className="fs_22 fw_400 mt_14 mb_22 content-m-18">
                      {trendingSection[1]?.value}
                    </p>
                    <Link
                      href={routes.AI_GLASSES}
                      className="btn_secondary content-m-18"
                    >
                      {trendingSection[2]?.value}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py_80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
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
              <h4 className="fs_32 fw_800 insurance-plans text-center size-24">
                {insuranceSection[0]?.value}
              </h4>
              <div className="marquee">
                <div
                  className="insurances_logo d-flex flex-wrap justify-content-between align-items-center mt_54 mb_20 marquee__group"
                  aria-hidden="true"
                >
                  <Image alt="logo" src={insuranceLogo1} objectFit="contain" />
                  <Image alt="logo" src={insuranceLogo2} objectFit="contain" className="msc_logo"/>
                  <Image alt="logo" src={insuranceLogo3} objectFit="contain" className="triple_s_logo" />
                  <Image alt="logo" src={insuranceLogo4} objectFit="contain" className="humana_logo" />
                  <Image alt="logo" src={insuranceLogo5} objectFit="contain" />
                  <Image alt="logo" src={insuranceLogo6} objectFit="contain" />
                  <Image
                    alt="logo"
                    src={insuranceLogo7}
                    className="insurence_M3"
                    objectFit="contain"
                  />
                </div>
                <div className="insurances_logo d-flex flex-wrap justify-content-between align-items-center mt_54 mb_20 marquee__group">
                  <Image alt="logo" src={insuranceLogo1} objectFit="contain" />
                  <Image alt="logo" src={insuranceLogo2} objectFit="contain" className="msc_logo"/>
                  <Image alt="logo" src={insuranceLogo3} objectFit="contain" className="triple_s_logo" />
                  <Image alt="logo" src={insuranceLogo4} objectFit="contain" className="humana_logo" />
                  <Image alt="logo" src={insuranceLogo5} objectFit="contain" />
                  <Image alt="logo" src={insuranceLogo6} objectFit="contain" />
                  <Image
                    alt="logo"
                    src={insuranceLogo7}
                    className="insurence_M3"
                    objectFit="contain"
                  />
                </div>
              </div>
              <p className="fs_20 fw_300 mt_24 text-center size-16">
                {insuranceSection[1]?.value}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={cn(styles.our_doctor, "bg_light_grey pt_40 pb_80")}>
        <div className="container">
          <div className="row justify-content-center align-items-center mt_50">
            <div className="col-md-6 col-xl-5 col-sm-12">
              <div className="img_box meet-your-optometrist">
                <Image alt="w-100" src={doctorImage} />
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12 mt-4  mt-xl-0 text-center ps-lg-4 text-md-start text-xl-start">
              <div className="d-flex headding_icon align-items-center mb_16 justify-content-center justify-content-xl-start justify-content-md-start">
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
              <h4 className="fs_32 fw_800 mb-2 size-24">
                {optometristSection[0]?.value}
              </h4>
              <p className="fs_20 fw_400 mb_30 content-m-18 sub-title">
                {optometristSection[1]?.value}
              </p>
              <p className="fs_20 content-m-18">
                {optometristSection[2]?.value}
              </p>
              <Link
                href={routes.OPTOMETRISTS}
                className="btn btn_primary mt_30 content-m-18"
              >
                {optometristSection[3]?.value}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="brands py_100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 wrapper">
              <div className="marquee">
                <div className="marquee__group">
                  <Image alt="logo" src={marqueImage1} />
                  <Image alt="logo" src={marqueImage2} />
                  <Image alt="logo" src={marqueImage3} />
                  <Image alt="logo" src={marqueImage4} />
                  <Image alt="logo" src={marqueImage5} className={styles.guessLogo}  />
                  <Image alt="logo" src={marqueImage6} />
                </div>
                <div aria-hidden="true" className="marquee__group">
                  <Image alt="logo" src={marqueImage1} />
                  <Image alt="logo" src={marqueImage2} />
                  <Image alt="logo" src={marqueImage3} />
                  <Image alt="logo" src={marqueImage4} />
                  <Image alt="logo" src={marqueImage5} className={styles.guessLogo} />
                  <Image alt="logo" src={marqueImage6} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 wrapper">
              <div className="marquee marquee--reverse mt_30">
                <div className="marquee__group">
                  <Image alt="logo" src={marqueImage7} />
                  <Image alt="logo" src={marqueImage8} />
                  <Image alt="logo" src={marqueImage9} />
                  <Image alt="logo" src={marqueImage10} />
                  <Image alt="logo" src={marqueImage11} />
                  <Image alt="logo" src={marqueImage12} />
                </div>
                <div aria-hidden="true" className="marquee__group">
                  <Image alt="logo" src={marqueImage7} />
                  <Image alt="logo" src={marqueImage8} />
                  <Image alt="logo" src={marqueImage9} />
                  <Image alt="logo" src={marqueImage10} />
                  <Image alt="logo" src={marqueImage11} />
                  <Image alt="logo" src={marqueImage12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroBanner;
