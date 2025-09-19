"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BannerHeader, PrimaryHeader } from "@/components";
import cn from "@/utils/cn";
import styles from "./lense-selection.module.scss";

import polycarbonateMaterial from "@/assets/images/polycarbonate_material.png";
import highIndexMaterial from "@/assets/images/high_index_material.png";
import adaptiveLenseBanner from "@/assets/images/adaptive_lense_banner.png";

import uvProtectionIcon from "@/assets/icons/uv_protection_icon.svg";
import reflectionIcon from "@/assets/icons/reflection_icon.svg";
import subGlassIcon from "@/assets/icons/goggle_black_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { getAllSettings } from "@/services/setting";
import { setLenseSelectionSettingData } from "@/redux/slices/LenseSelectionPageSlice";
import lensesectionEnglishResponseData from "../../utils/json/lensesectionPage/lensesectionPageResponseEN.json";
import lensesectionSpanishResponseData from "../../utils/json/lensesectionPage/lensesectionPageResponseES.json";

const LenseSelectionPage = () => {
  const [loading, setLoading] = useState(true);
  const settings = useSelector((state: RootState) => state.lense.settings);
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
          key: "EyeWearLenses",
          language: defaultLanguage === "English" ? "en" : "es",
          publish: true,
        });
        dispatch(setLenseSelectionSettingData(res.data));
      } catch (error) {
        if (defaultLanguage === "English") {
          dispatch(
            setLenseSelectionSettingData(lensesectionEnglishResponseData.data)
          );
        } else {
          dispatch(
            setLenseSelectionSettingData(lensesectionSpanishResponseData.data)
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

  const performances = [
    {
      icon: uvProtectionIcon,
      title: settings[17]?.value,
      list: [settings[19]?.value, settings[18]?.value],
    },
    {
      icon: reflectionIcon,
      title: settings[20]?.value,
      list: [settings[21]?.value, settings[22]?.value, settings[23]?.value],
    },
    {
      icon: subGlassIcon,
      title: settings[24]?.value,
      list: [settings[25]?.value, settings[26]?.value],
    },
  ];

  return (
    <section className={styles.lenseSelectionContainer}>
      <div className={cn(styles.heroBanner, "hero_banner inner_banner d-flex")}>
        <BannerHeader
          primaryText={settings[0]?.value}
          secondaryText={settings[1]?.value}
        />
      </div>
      <div className="bg_light_grey py_56">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <PrimaryHeader primaryText={<>{settings[2]?.value}</>} />
            </div>
          </div>
          <div className="row g-4 mt_40">
            <div className="col-lg-6 col-12">
              <div className={cn(styles.materialCard, "d-flex gap-4")}>
                <Image alt="material" src={polycarbonateMaterial} />
                <div className="d-flex align-items-center">
                  <div>
                    <h2 className="fs_22 fw_800">{settings[3]?.value}</h2>
                    <ul className="check_list mt_20">
                      <li style={{ fontSize: "16px" }}>{settings[4]?.value}</li>
                      <li style={{ fontSize: "16px" }}>{settings[5]?.value}</li>
                      <li style={{ fontSize: "16px" }}>{settings[6]?.value}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className={cn(styles.materialCard, "d-flex gap-3")}>
                <Image alt="material" src={highIndexMaterial} />
                <div className="d-flex align-items-center">
                  <div>
                    <h2 className="fs_22 fw_800">{settings[7]?.value}</h2>
                    <ul className="check_list mt_20">
                      <li style={{ fontSize: "16px" }}>{settings[8]?.value}</li>
                      <li style={{ fontSize: "16px" }}>{settings[9]?.value}</li>
                      <li style={{ fontSize: "16px" }}>
                        {settings[10]?.value}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py_100">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-12 d-flex align-items-center px_20">
              <div>
                <PrimaryHeader
                  alignment="left"
                  primaryText={settings[11]?.value}
                />
                <ul className="check_list mt_30">
                  <li className="fs_22">{settings[12]?.value}</li>
                  <li className="fs_22">{settings[13]?.value}</li>
                  <li className="fs_22">{settings[14]?.value}</li>
                  <li className="fs_22">{settings[15]?.value}</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <Image
                alt="banner"
                src={adaptiveLenseBanner}
                className={cn(styles.lenseCheckingImage, "w-100")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg_light_grey py_100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <PrimaryHeader primaryText={<>{settings[16]?.value}</>} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center mt_10 g-4">
            {performances.map(({ title, icon, list }, index) => {
              return (
                <div key={index} className="col-md-6 col-lg-4 col-12">
                  <div className="card_2">
                    <Image alt="eye" src={icon} />
                    <h5 className="fs_22 fw_800 mt_26 mb_20">{title}</h5>
                    {list && list?.length && (
                      <ul className="check_list mt_10">
                        {list.map((item, i) => {
                          return (
                            <li key={i} style={{ fontSize: "16px" }}>
                              {" "}
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LenseSelectionPage;
