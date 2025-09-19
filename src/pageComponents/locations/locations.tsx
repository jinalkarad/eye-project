"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import goggleBlackIcon from "@/assets/icons/goggle_black_icon.svg";
import location1Image from "@/assets/images/location_1.jpg";
import location2Image from "@/assets/images/location_2.jpg";
import location3Image from "@/assets/images/location_3.jpg";
import location4Image from "@/assets/images/location_4.jpg";
import calenderIcon from "@/assets/icons/calender_icon.svg";
import locationIcon from "@/assets/icons/location_icon.svg";

import callIcon from "@/assets/icons/call_icon.svg";
import Link from "next/link";
import routes from "@/constants/routes";
// import { GradientBackground } from '@/components';
import locations, { locationsName } from "@/data/locations";
import { RootState } from "@/redux/store/Store";
import { useDispatch, useSelector } from "react-redux";
import { getAllSettings } from "@/services/setting";
import { setLocationpageSettingData } from "@/redux/slices/LocationPageSlice";
import locationEnglishResponseData from "../../utils/json/locationPage/locationPageResponseEN.json";
import locationSpanishResponseData from "../../utils/json/locationPage/locationPageResponseES.json";

export const offices = [
  {
    id: 1,
    image: location1Image, // Add the corresponding image
    title: "Plaza Fajardo",
    location: "Plaza Fajardo",
    availability: "9:00 AM - 5:00 PM (Mon - Sat)",
    mobile: "787-558-5501",
    locationUrl: "150 Carr 940, Fajardo, 00738, Puerto Rico",
    locationName: locationsName.FAJARDO,
    welcomeMessage:"Welcome to our Fajardo location."
  },
  {
    id: 2,
    image: location3Image,
    title: "Plaza Palma Real in Humacao",
    location: "Plaza Palma Real in Humacao",
    availability: "9:00 AM - 5:00 PM (Mon - Sat)",
    mobile: "787-558-5502",
    locationUrl:
      "Carr. 3, Suite 270 Palma Real Shopping Center Humacao, PR 00791",
    locationName: locationsName.HUMACAO,
    welcomeMessage:"Welcome to our Humacao location."
  },
  {
    id: 3,
    image: location2Image, // Add the corresponding image,
    title: "Rio Grande Town Center",
    location: "Rio Grande Town Center",
    availability: "9:00 AM - 5:00 PM (Mon - Sat)",
    mobile: "787-558-5503",
    locationUrl: "95G9+68V, Carretera 3, Río Grande, 00745, Puerto Rico",
    locationName: locationsName.RIO_GRANDE,
    welcomeMessage:"Welcome to our Rio Grande location."
  },
  {
    id: 4,
    image: location4Image,
    title: "Plaza Centro Mall in Caguas",
    location: "Plaza Centro Mall in Caguas",
    availability: "9:00 AM - 7:00 PM (Mon-Sat) | 11:00 AM - 7:00 PM (Sun)",
    mobile: "787-558-5504",
    locationUrl: "200 Av. Rafael Cordero, Caguas, 00725, Puerto Rico",
    locationName: locationsName.ISABELA,
    welcomeMessage:"Welcome to our Caguas location."
  },
];

const LocationsPage = () => {
  const [loading, setLoading] = useState(true);
  const settings = useSelector((state: RootState) => state.location.settings);
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
          key: "Locations",
          language: defaultLanguage === "Spanish" ? "es" : "en",
          publish: true,
        });
        dispatch(setLocationpageSettingData(res.data));
      } catch (error) {
        if (defaultLanguage === "English") {
          dispatch(
            setLocationpageSettingData(locationEnglishResponseData.data)
          );
        } else {
          dispatch(
            setLocationpageSettingData(locationSpanishResponseData.data)
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

  console.log(loading, settings);
  return (
    <section>
      {/* <GradientBackground /> */}
      <div className="d-flex without_banner pt_50 pb_30">
        <div className="container m-auto z-3">
          <div className="row">
            <div className="col-xl-8 mx-auto text-center">
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
              <h5 className="fs_42 fw_800  size-24 mb_0">
                {settings[0]?.value}
              </h5>
              <p className="fs_20 fw_400 content-m-18 my_16">
                {settings[1]?.value}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="locations pb_50">
        <div className="container">
          <div className="row">
            {offices.map(
              ({
                id,
                image,
                title,
                mobile,
                availability,
                locationName,
                locationUrl,
              }) => {
                const locationDetails = locations.find(
                  ({ name }) => locationName === name
                );
                return (
                  <div key={id} className="col-md-6 mb_24">
                    <div className="card_1 d-flex flex-column">
                      <div className="img_box location-image-box">
                        <Image
                          alt="doctor"
                          src={image}
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="detail_content px_22 py_22">
                        <h4 className="fs_18 fw_300 mb_2">{title}</h4>
                        {/* <h4 className="fs_18 fw_300 mb_2">{locationName}</h4> */}
                        <div className="d-flex align-items-center">
                          <Image
                            alt="calender"
                            src={calenderIcon}
                            className="mr_10"
                          />
                          <p>{availability}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <Image
                            alt="location"
                            src={callIcon}
                            className="mr_10"
                          />
                          <p>{mobile}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <Image
                            alt="location"
                            src={locationIcon}
                            className="mr_10"
                          />
                          <a
                            target="_blank"
                            href={locationDetails?.locationUrl}
                            className="btn_link"
                            style={{ color: "#006BB4" }}
                          >
                            {locationUrl}
                          </a>
                        </div>
                        <Link
                          href={`${routes.LOCATION_DETAILS}/${locationDetails?.id}`}
                          className="btn btn_secondary location_btn d-block border-1"
                        >
                          Learn More{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsPage;
