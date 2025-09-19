"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./carousel.module.scss";
import Image from "next/image";

import productImage1 from "@/assets/images/product_img_1.png";
import productImageHover from "@/assets/images/hover_img_1.png";

import productImage2 from "@/assets/images/product_img_2.png";
import productImageHover1 from "@/assets/images/hover_img_2.png";

import productImage3 from "@/assets/images/product_img_3.png";
import productImageHover2 from "@/assets/images/hover_img_3.png";

import productImage4 from "@/assets/images/product_img_4.png";
import productImageHover3 from "@/assets/images/hover_img_4.png";

import productImage5 from "@/assets/images/product_img_5.png";
import productImageHover4 from "@/assets/images/hover_img_5.png";

import productImage6 from "@/assets/images/product_img_6.png";
import productImageHover5 from "@/assets/images/hover_img_6.png";

import productImage7 from "@/assets/images/hover_img_7.png";
import productImageHover6 from "@/assets/images/product_img_7.png";

import productImage8 from "@/assets/images/product_img_8.png";
import productImageHover7 from "@/assets/images/hover_img_8.png";

import productImage9 from "@/assets/images/product_img_9.png";
import productImageHover8 from "@/assets/images/hover_img_9.png";

import productImage10 from "@/assets/images/hover_img_10.png";
import productImageHover10 from "@/assets/images/product_img_10.png";

import arrowRightBlackIcon from "@/assets/images/light.png";
import arrowLeftBlackIcon from "@/assets/images/left.png";

const EyewearCoverflow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    drag: true,
    slides: {
      origin: "auto",
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1199px)": {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setTotalSlides(slider.track.details.slides.length);
    },
  });


  const items = [
    {
      brand: "Miu Miu Eyewear",
      model: "MU 04UV Black",
      img: productImage1,
      hover_img: productImageHover,
    },
    {
      brand: "Prada Eyewear",
      model: "0PR 09ZV Turtle",
      img: productImage2,
      hover_img: productImageHover1,
    },
    {
      brand: "Swarovski Eyewear",
      model: "Swarovski Transparent",
      img: productImage3,
      hover_img: productImageHover2,
    },
    {
      brand: "Ray Ban Eyewear",
      model: "ORX5228 Dark Havana",
      img: productImage4,
      hover_img: productImageHover3,
    },
    {
      brand: "Prada Eyewear",
      model: "OPR 15ZV Red",
      img: productImage5,
      hover_img: productImageHover4,
    },
    {
      brand: "Rayban (sunglasses)",
      model: "0RB2140 - Wayfarer Black",
      img: productImage6,
      hover_img: productImageHover5,
    },
    {
      brand: "Oakley Eyewear",
      model: "0OX8190 Red",
      img: productImage7,
      hover_img: productImageHover6,
    },
    {
      brand: "Versace Eyewear",
      model: "0VE3326U Black & Gold",
      img: productImage8,
      hover_img: productImageHover7,
    },
    {
      brand: "Armani Exchange Eyewear",
      model: "OEA4115F Black Matte",
      img: productImage9,
      hover_img: productImageHover8,
    },
    {
      brand: "Oakley",
      model: "Acetate - Carbon Matte",
      img: productImage10,
      hover_img: productImageHover10,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!instanceRef.current) return;

      const slider = instanceRef.current;
      const current = slider.track.details.rel;
      const total = slider.track.details.slides.length;
      if (current < total - 4) {
        slider.next();
      } else {

        slider.moveToIdx(0);
      }
    }, 90000);

    return () => clearInterval(interval);
  }, [instanceRef]);


  return (
    <div ref={sliderRef} className="keen-slider">
      <button
        className={`${styles.arrow} ${styles.left}  ${currentSlide >= totalSlides - 4 ? styles.disabled : ''}`}
        onClick={() => instanceRef.current?.prev()}
      >
        <Image src={arrowLeftBlackIcon} alt="Left Arrow" width={15} height={15} />
      </button>
      {items.map((item, index) => (
        <div className={`keen-slider__slide ${styles.slide}`} key={index}>
          <div className={styles.card}>
            <div className="mb_30">
              <div className={styles.imageWrapper}>
                <Image
                  className={`${styles.image} mb_20`}
                  alt={item.brand}
                  src={item.img}
                  width={400}
                  height={120}
                />
                <Image
                  className={`${styles.hoverImage} mb_20`}
                  alt={`${item.brand} Hover`}
                  src={item.hover_img}
                  width={400}
                  height={120}
                />
              </div>
            </div>
            <h5 className="text-start mt_20 fs_20 fw_600 black mb-1">{item.brand}</h5>
            <p className="text-start mt_10 fs_16 fw_300">{item.model}</p>
          </div>
        </div>
      ))}
      <button
        className={`${styles.arrow} ${styles.right} `}
        onClick={() => instanceRef.current?.next()}
      >
        <Image src={arrowRightBlackIcon} alt="Right Arrow" width={15} height={15} />
      </button>
    </div>
  );
};

export default EyewearCoverflow;