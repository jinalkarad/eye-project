"use client";
import React, { useEffect, useState } from "react";
import cn from "@/utils/cn";
import Image from "next/image";

import styles from "./ai-glasses.module.scss";

import metaAiGlasses from "@/assets/images/meta_ai_glasses.png";
import aiCamera from "@/assets/images/ai_camera.png";
import aiAudio from "@/assets/images/ai_audio.png";
import aiControls from "@/assets/images/ai_controls.png";
import chargingCase from "@/assets/images/charging_case.png";
import metaViewApp from "@/assets/images/meta_view_app.png";
import { setAiGlassesPageSettingData } from "@/redux/slices/AiGlassesPageSlice";
import { getAllSettings } from "@/services/setting";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";

const AiGlassesPage = () => {
  const [loading, setLoading] = useState(true);
  const settings = useSelector((state: RootState) => state.aiglass.settings);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getAllSettings({
          key: "LearnMore",
          language: "en",
          publish: true,
        });
        dispatch(setAiGlassesPageSettingData(res.data));
      } catch (error) {
        console.error("Error fetching settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
    // eslint-disable-next-line
  }, []);

  console.log(loading);

  return (
    <section className={styles.aiGlassesContainer}>
      <div className={cn(styles.heroBanner, "hero_banner inner_banner d-flex")}>
        <div className="container m-auto z-3">
            <div className="row">
                <div className="col-md-6 mx-auto text-center">
                    <h5 className="fs_42 fw_800 white mb_0">{settings[0]?.value}</h5>
                    <p className="fs_20 fw_400 white my_16 px-lg-5">{settings[1]?.value}</p>
                </div>
            </div>
        </div>
        {/* <BannerHeader
            primaryText={settings[0]?.value}
            secondaryText={settings[1]?.value}
          /> */}
      </div>
      <div className="py_80">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-12 d-flex align-items-center pl_20 pe-md-5">
              <div>
                <h1 className="fs_32 fw_800">{settings[2]?.value}</h1>
                <p className="fs_22 mt_20">{settings[3]?.value}</p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <Image
                alt="banner"
                src={metaAiGlasses}
                className={cn(styles.bannerImage, "w-100")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg_light_grey py_80">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-12">
              <Image
                alt="banner"
                src={aiCamera}
                className={cn(styles.bannerImage, "w-100")}
              />
            </div>
            <div className="col-lg-6 col-12 d-flex align-items-center pr_20 ps-md-5">
              <div>
                <h1 className="fs_32 fw_800">{settings[4]?.value}</h1>
                <p className="fs_22 mt_20">{settings[5]?.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py_80">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-12 d-flex align-items-center pl_20 pe-md-5">
              <div>
                <h1 className="fs_32 fw_800">{settings[6]?.value}</h1>
                <p className="fs_22 mt_20">{settings[7]?.value}</p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <Image
                alt="banner"
                src={aiAudio}
                className={cn(styles.bannerImage, "w-100")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg_light_grey py_80">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-12">
              <Image
                alt="banner"
                src={aiControls}
                className={cn(styles.bannerImage, "w-100")}
              />
            </div>
            <div className="col-lg-6 col-12 d-flex align-items-center pl_20 ps-md-5">
              <div>
                <h1 className="fs_32 fw_800">{settings[8]?.value}</h1>
                <p className="fs_22 mt_20">{settings[9]?.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py_100">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className={styles.card}>
                <div>
                <Image alt="image" src={chargingCase} className="w-100 rounded-4" />
                </div>
                <div className="mt_30">
                  <p className="fs_22 fw_900">{settings[10]?.value}</p>
                  <p className="fs_22 mt_20">{settings[11]?.value}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className={styles.card}>
                <div>
                <Image alt="image" src={metaViewApp} className="w-100 rounded-4" /> 
                </div>
                <div className="mt_30">
                  <p className="fs_22 fw_900">{settings[12]?.value}</p>
                  <p className="fs_22 mt_20">{settings[13]?.value}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiGlassesPage;
