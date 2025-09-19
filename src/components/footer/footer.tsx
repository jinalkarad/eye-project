"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./footer.module.scss";

import logo from "@/assets/images/footer-logo.png";
import facebookIcon from "@/assets/icons/facebook_icon.svg";
import instagramIcon from "@/assets/icons/instagram_icon.svg";
import linkedInIcon from "@/assets/icons/linkedin_icon.svg";
import Link from "next/link";
import cn from "@/utils/cn";
import routes from "@/constants/routes";

const Footer = () => {
  const [defaultLanguage, setDefaultLanguage] = useState("Spanish");
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
  return (
    <div className={styles.footerWrapper}>
      <section className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Image alt="logo" src={logo} width={360} height={40} />
              <h5 className="mt_50">
                {defaultLanguage === "English" ? "Follow Us" : "Síguenos"}
              </h5>

              <ul className={cn(styles.socialIcons, "me-auto ms-0 ps-0 mt_30")}>
                <li>
                  <Link
                    href="https://www.facebook.com/ecbvision"
                    target="_blank"
                  >
                    <Image
                      alt="facebook"
                      src={facebookIcon}
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/ecbvision"
                    target="_blank"
                  >
                    <Image
                      alt="instagram"
                      src={instagramIcon}
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      alt="linkedin"
                      src={linkedInIcon}
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6 mt-4 mt-md-0">
              <h5>
                {defaultLanguage === "English"
                  ? "Eye Care"
                  : "Cuidado de los Ojos"}
              </h5>
              <ul className={cn(styles.menuLinks, "mt_30")}>
                <li>
                  <Link href={routes.EYE_EXAMS}>
                    {defaultLanguage === "English" ? "Exams" : "Exámenes"}
                  </Link>
                </li>
                <li>
                  <Link href={routes.EYE_WEAR}>
                    {defaultLanguage === "English" ? "Eye Wear" : "Lentes"}
                  </Link>
                </li>
                <li>
                  <Link href={routes.GLASSES}>
                    {defaultLanguage === "English" ? "Glasses" : "Gafas"}
                  </Link>
                </li>
                <li>
                  <Link href={routes.DIGITAL_LABS}>
                    {defaultLanguage === "English"
                      ? "Digital Labs"
                      : "Laboratorios Digitales"}
                  </Link>
                </li>
                <li>
                  <Link href={routes.CONTACT_LENSES}>
                    {defaultLanguage === "English"
                      ? "Contact Lenses"
                      : "Lentes de Contacto"}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-6 mt-4 mt-md-0">
              <h5>
                {defaultLanguage === "English"
                  ? "Company Info"
                  : "Información de la Empresa"}
              </h5>
              <ul className={cn(styles.menuLinks, "mt_30")}>
                <li>
                  <Link href={routes.ABOUT_US}>
                    {defaultLanguage === "English"
                      ? "About Us"
                      : "Sobre Nosotros"}
                  </Link>
                </li>
                <li>
                  <Link href={routes.OPTOMETRISTS}>
                    {defaultLanguage === "English"
                      ? "Our Optometrists"
                      : "Nuestros Optometristas"}
                  </Link>
                </li>
                <li>
                  <Link href={routes.FAQ}>
                    {defaultLanguage === "English"
                      ? "FAQs"
                      : "Preguntas Frecuentes"}
                  </Link>
                </li>
                <li>
                  <Link href={routes.INSURANCE}>
                    {defaultLanguage === "English" ? "Insurance" : "Seguro"}
                  </Link>
                </li>
                <li>
                  <Link href={routes.LOCATIONS}>
                    {defaultLanguage === "English"
                      ? "Locations"
                      : "Ubicaciones"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={cn(styles.copyright)}>
        <div className="container">
          <p>
            {defaultLanguage === "English"
              ? "©2025 by Eye Center Boutique. Powered by JEM Media Network"
              : "©2025 por Eye Center Boutique. Desarrollado por JEM Media Network"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
