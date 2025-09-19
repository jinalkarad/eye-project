"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./digital-labs.module.scss";
import { PrimaryHeader } from "@/components";
import cn from "@/utils/cn";

import labDoctorImage from "@/assets/images/lab_doctor.jpg";
import lenseCheckingImage from "@/assets/images/lense_checking.jpg";

import customLensesBanner from "@/assets/images/custom_lenses_banner.jpg";
import checkIcon from "@/assets/icons/check.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { getAllSettings } from "@/services/setting";
import { setDigitalLabSettingData } from "@/redux/slices/DigitalLabsSlice";
import Link from "next/link";
import routes from "@/constants/routes";
import digitalabEnglishResponseData from "../../utils/json/digitallabsPage/digitallabspageResponseEN.json";
import digitalabSpanishResponseData from "../../utils/json/digitallabsPage/digitallabsPageResponseES.json";

const DigitalLabsPage = () => {
  const settings = useSelector((state: RootState) => state.digitallab.settings);
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
          key: "DigitalLabs",
          language: defaultLanguage === "Spanish" ? "es" : "en",
          publish: true,
        });
        dispatch(setDigitalLabSettingData(res.data));
      } catch (error) {
        if (defaultLanguage === "English") {
          dispatch(setDigitalLabSettingData(digitalabEnglishResponseData.data));
        } else {
          dispatch(setDigitalLabSettingData(digitalabSpanishResponseData.data));
        }
        console.error("Error fetching settings:", error);
      } finally {
      }
    };

    fetchSettings();
    // eslint-disable-next-line
  }, [defaultLanguage]);

  return (
    <section className={styles.digitalLabsContainer}>
      <div className={cn(styles.heroBanner, "hero_banner inner_banner d-flex")}>
        <div className="container m-auto z-3">
          <div className="row">
            <div className="col-xl-8 mx-auto text-center">
              <h5 className="fs_42 fw_500 white mb_0 size-24">
                {settings[2]?.value.slice(0, 32)} <br /> Just for You
              </h5>
              <p className="fs_20 content-m-18 fw_400 white my_16">
                {settings[3]?.value}
              </p>
              {/* <button className="btn btn_primary py_16 px_70">Learn More</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container pt_80 pb_50">
        <div className="row">
          <div className="col-md-8 mx-auto text-center ">
            <PrimaryHeader
              className="w-80"
              primaryText={<>{settings[4]?.value}</>}
            />
          </div>
          <div className="col-md-8 mx-auto">
            <div className={cn(styles.lenseComparisionContainer, "mt_36")}>
              <video autoPlay muted loop className=" w-100">
                <source
                  src="https://corporatecb.azurewebsites.net/Videos/DigitalLabs/Transitions.mp4"
                  type="video/mp4"
                />
              </video>
              {/* <Image
                alt="banner"
                src={lenseComparisionBanner}
                className={styles.lenseComparisionBanner}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="py_70 our_approch bg_light_grey">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="img_box">
                <Image
                  alt="banner"
                  src={labDoctorImage}
                  className={cn(styles.labDoctorImage)}
                />
              </div>
            </div>
            <div
              className={cn(
                styles.labDoctorContent,
                "text-start col-md-6 col-sm-12 col-lg-6 mt-5 mt-lg-5"
              )}
            >
              <div>
                <h1 className="fs_32 fw_800 mb_16 size-24 text-md-start text-center">
                  {settings[5]?.value}
                </h1>
                <p className="fs_20 mt_20 content-m-18 text-md-start text-center">
                  {settings[6]?.value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py_50 our_approch">
        <div className="container">
          <div className="row align-items-center">
            <div className="text-start col-md-6 col-sm-12 col-lg-6 order-md-1 order-2">
              {/* <div className='offset-lg-1'> */}
              <h4 className="fs_32 fw_800 mb_16 size-24 text-md-start text-center">
                {settings[7]?.value}
              </h4>
              <p className="fs_20 mt_20 content-m-18 text-md-start text-center mb_16">
                {settings[8]?.value}
              </p>

              {/* </div> */}
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 mt-5 mt-lg-4 order-md-2 order-1 mb-md-0 mb-4">
              <div className="img_box">
                <Image
                  alt="banner"
                  src={lenseCheckingImage}
                  className={cn(styles.lenseCheckingImage, "w-100")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py_50 our_approch ">
        <div className="container">
          <div className="row align-items-center mb_20">
            <div className="col-xl-6 col-md-8 m-auto text-center">
              <PrimaryHeader primaryText={<>{settings[9]?.value}</>} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
              <div className="ehhance-box h-100">
                <h5 className="fs_24 fw-semibold mb_18">
                  {settings[10]?.value}
                </h5>
                <ul className="enhancement-list">
                  <li>
                    <Image alt="image" src={checkIcon} />
                    {settings[12]?.value}
                  </li>
                  <li>
                    <Image alt="image" src={checkIcon} /> {settings[11]?.value}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
              <div className="ehhance-box h-100">
                <h5 className="fs_24 fw-semibold mb_18">
                  {settings[13]?.value}
                </h5>
                <ul className="enhancement-list">
                  <li>
                    <Image alt="image" src={checkIcon} />
                    {settings[14]?.value}
                  </li>
                  <li>
                    <Image alt="image" src={checkIcon} /> {settings[15]?.value}
                  </li>
                  <li>
                    <Image alt="image" src={checkIcon} />
                    {settings[16]?.value}
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 col-sm-12 mb-2 mt-xl-0 mt-md-3">
              <div className="ehhance-box h-100">
                <h5 className="fs_24 fw-semibold mb_18">
                  {settings[17]?.value}
                </h5>
                <ul className="enhancement-list">
                  <li>
                    <Image alt="image" src={checkIcon} />
                    {settings[18]?.value}
                  </li>
                  <li>
                    <Image alt="image" src={checkIcon} /> {settings[19]?.value}
                  </li>
                </ul>
              </div>
            </div>

            {/* {lenseTypes.map(({ image, title }, index) => {
                            return (
                                <div key={index} className='col-md-6 col-6 col-lg-3 my_30'>
                                    <div className="img_box">
                                        <Image
                                            alt='image'
                                            src={image}
                                            className={styles.lenseTypeImage}
                                        />
                                    </div>
                                    <p className='fs_22 fw_800 text-center mt_16'>{title}</p>
                                </div>
                            )
                        })} */}
          </div>
        </div>
      </div>

      {/* <div className='py_100 our_approch bg_light_grey'>
                <div className="container">
                    <div className="row align-items-center mb_20">
                        <div className="col-md-9 m-auto">
                            <PrimaryHeader
                                primaryText={<>Specialty Lenses – Made for Every Moment</>}
                                description='We create all of our specialty lenses in-house, ensuring the highest quality and precision.'
                            />
                        </div>
                    </div>
                    <div className="row">
                        {lenseTypes.map(({ image, title }, index) => {
                            return (
                                <div key={index} className='col-md-6 col-6 col-lg-3 my_30'>
                                    <div className="img_box">
                                        <Image
                                            alt='image'
                                            src={image}
                                            className={styles.lenseTypeImage}
                                        />
                                    </div>
                                    <p className='fs_22 fw_800 text-center mt_16'>{title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div> */}

      <div className="pt_30 pb_70">
        <div className="container position-relative">
          <Image
            alt="banner"
            src={customLensesBanner}
            className={cn(styles.customLensesBanner, "w-100")}
          />
          <div className={styles.customLenseContent}>
            <PrimaryHeader
              style={{ maxWidth: "100", height: "100%" }}
              color="white"
              className="text-center text-white"
              primaryText={settings[20]?.value}
            >
              <Link
                href={routes.LOCATIONS}
                className="py_16 px_30 fw_700"
                style={{
                  color: "#fff",
                  background: "#000",
                  borderRadius: "10px",
                }}
              >
                {settings[21]?.value}
              </Link>
            </PrimaryHeader>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalLabsPage;
