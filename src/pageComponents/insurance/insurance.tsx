"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import cn from "@/utils/cn";

// import goggleWhiteIcon from "@/assets/icons/goggle_icon.svg";
import goggleBlackIcon from "@/assets/icons/goggle_black_icon.svg";
import insuranceLogo1 from "@/assets/images/i_logo_1.png";
import insuranceLogo2 from "@/assets/images/i_logo_2.png";
import insuranceLogo3 from "@/assets/images/i_logo_3.png";
import insuranceLogo4 from "@/assets/images/i_logo_4.png";
import insuranceLogo5 from "@/assets/images/i_logo_5.png";
import insuranceLogo6 from "@/assets/images/i_logo_7.png";
import insuranceLogo7 from "@/assets/images/i_logo_8.png";
import eyeIcon from "@/assets/icons/how_icon_1.svg";
import stockChartIcon from "@/assets/icons/stock_chart_icon.svg";
import walletIcon from "@/assets/icons/how_icon_3.svg";

import styles from "./insurance.module.scss";
import routes from "@/constants/routes";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { getAllSettings } from "@/services/setting";
import { setInsurancePageSettingData } from "@/redux/slices/InsurancePageSlice";
import insuranceEnglishResponseData from "../../utils/json/insurancePage/insurancePageResponseEN.json";
import insuranceSpanishResponseData from "../../utils/json/insurancePage/insurancePageResponseES.json";

const Insurance = () => {
  const [loading, setLoading] = useState(true);
  const settings = useSelector((state: RootState) => state.insurance.settings);
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
          key: "Insurance",
          language: defaultLanguage === "Spanish" ? "es" : "en",
          publish: true,
        });
        dispatch(setInsurancePageSettingData(res.data));
      } catch (error) {
        if (defaultLanguage === "English") {
          dispatch(
            setInsurancePageSettingData(insuranceEnglishResponseData.data)
          );
        } else {
          dispatch(
            setInsurancePageSettingData(insuranceSpanishResponseData.data)
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

  return (
    <section className={styles.insuranceContainer}>
      <div className={cn(styles.heroBanner, "hero_banner insurance_banner")}>
        <div
          className="d-flex"
          style={{ background: "#00000069", height: "100%" }}
        >
          <div className="container m-auto z-3">
            <div className="row">
              <div className="col-xl-8 col-lg-10 mx-auto text-center">
                {/* <div className="d-flex headding_icon justify-content-center align-items-center mb_16">
                                <div className="divider_line"></div>
                                <Image className="mx_16" alt="goggle" src={goggleWhiteIcon} width={50} height={18} />
                                <div className="divider_line"></div>
                            </div> */}
                <h5 className="fs_42 white mb_0 size-24">
                  {settings[2]?.value}
                </h5>
                <p className="fs_20 fw_400 white my_16 size-16">
                  Proudly accepting all Medicare Advantage Plans Including MCS
                  Classicare, Triple-S Advantage, Humana Gold Plus, and MMM
                  Advantage
                </p>
                <Link
                  href={routes.LOCATIONS}
                  className="btn btn_primary py_16 size-16 px_70 insurence_hero_btn"
                >
                  {settings[4]?.value}
                </Link>
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
                <div className="divider_line" />
                <Image
                  className="mx_16"
                  alt="goggle"
                  src={goggleBlackIcon}
                  width={50}
                  height={18}
                />
                <div className="divider_line" />
              </div>
              <h4 className="fs_32 fw_800 insurance-plans text-center size-24">
                {settings[5]?.value}
              </h4>
              <div className="marquee">
                <div
                  className="insurances_logo d-flex flex-wrap justify-content-between align-items-center mt_54 mb_20 marquee__group"
                  aria-hidden="true"
                >
                  <Image alt="logo" src={insuranceLogo1} objectFit="contain" />
                  <Image alt="logo" src={insuranceLogo2} objectFit="contain" className="msc_logo" />
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
                  <Image alt="logo" src={insuranceLogo2} objectFit="contain" className="msc_logo" />
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
                {settings[6]?.value}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_light_grey py_60">
        <div className="container">
          <div className="row">
            <div className="col-md-9 m-auto">
              <div className="d-flex headding_icon justify-content-center align-items-center mb_16">
                <div className="divider_line" />
                <Image
                  className="mx_16"
                  alt="goggle"
                  src={goggleBlackIcon}
                  width={50}
                  height={18}
                />
                <div className="divider_line" />
              </div>
              <h4 className="fs_32 fw_800 text-center size-24">
                {settings[7]?.value}
              </h4>
            </div>
          </div>
          <div className="row justify-content-center mt_50">
            <div className="col-xl-3 col-md-4">
              <div className="card_2">
                <div className="card_img coverd-icon">
                  <Image alt="eye" src={eyeIcon} />
                </div>
                <h5 className="fs_22 fw_800 mt_26 mb_16 size-20 text-md-start text-center">
                  {settings[8]?.value}
                </h5>
                <p className="mb-0 fs_18 fw_400 text-md-start text-center">
                  {settings[9]?.value}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="card_2">
                <div className="card_img coverd-icon">
                  <Image alt="eye" src={stockChartIcon} />
                </div>
                <h5 className="fs_22 fw_800 mt_26 mb_20 size-20 text-md-start text-center">
                  {settings[10]?.value}
                </h5>
                <p className="mb-0 fs_18 fw_400 text-md-start text-center">
                  {settings[11]?.value}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="card_2">
                <div className="card_img coverd-icon">
                  <Image alt="eye" src={walletIcon} />
                </div>
                <h5 className="fs_22 fw_800 mt_26 mb_20 text-md-start text-center">
                  {settings[12]?.value}
                </h5>
                <p className="mb-0 fs_18 fw_400 text-md-start text-centers">
                  {settings[13]?.value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-5 col-sm-12 mt-md-5 mt-sm-0 col-12">
              <div className="d-flex headding_icon  justify-content-xl-start justify-content-md-center align-items-center mb_16">
                <div className="divider_line" />
                <Image
                  className="mx_16"
                  alt="goggle"
                  src={goggleBlackIcon}
                  width={50}
                  height={18}
                />
                <div className="divider_line" />
              </div>
              {/* <h4 className="fs_32 fw_800 text-start">Understand What’s Covered — We’ve Got You</h4> */}
              <h4 className="fs_32 fw_800 text-xl-start text-md-center not-covered size-24 ">
                {settings[14]?.value}
              </h4>
            </div>
            <div className="col-xl-8 col-md-7 col-sm-12 mt-4 mt-xl-0">
              <ul className="check_list">
                <li className="fs_22">
                  <span className="d-block fs_22 fw_800 mt-neg-8">
                    {" "}
                    {settings[15]?.value.slice(0, 68)}
                  </span>
                  {settings[15]?.value.slice(68)}
                </li>
                <li className="fs_22 mt-3">
                  <span className="d-block fs_22 fw_800">
                    {" "}
                    {settings[16]?.value}
                  </span>
                  Don’t let them go to waste—book your eye exam before time runs
                  out.
                </li>
                <li className="fs_22 mt-3">
                  <span className="d-block fs_22 fw_800 mt-neg-8">
                    {" "}
                    {settings[17]?.value?.slice(0, 40)}
                  </span>{" "}
                  {settings[17]?.value?.slice(40)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cta_bg_section pb_50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta_bg_area py_50 px_30 d-flex">
                <div className="col-md-12 col-lg-8 m-auto">
                  <div className="d-flex headding_icon justify-content-center align-items-center mb_16">
                    <div className="devider_line"></div>
                    <Image
                      className="mx_16"
                      alt="goggle"
                      src={goggleBlackIcon}
                      width={50}
                      height={18}
                    />
                    <div className="devider_line"></div>
                  </div>
                  <h4 className="fs_32 fw_800 mb_16 size-24">
                    {settings[18]?.value}
                  </h4>
                  <p className="fs_20 fw_300 mb_30 content-m-18 text-black">
                    {settings[19]?.value}
                  </p>
                  <div className="d-md-flex gap-4 justify-content-center align-items-center">
                    {/*<a href="#" className="btn_secondary px_30">*/}
                    {/*  <Image className="mr_10" alt="goggle" src={callIcon} />{" "}*/}
                    {/*  {settings[20]?.value}*/}
                    {/*</a>*/}
                    <Link
                      href={routes.LOCATIONS}
                      className=" btn_secondary_dark_bg px_30"
                    >
                      {settings[21]?.value}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
