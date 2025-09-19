"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import cn from "@/utils/cn";
import { Input } from "../input";
import routes from "@/constants/routes";
import logo from "@/assets/images/logo.png";
import searchIcon from "@/assets/icons/search_icon.svg";
import language from "@/assets/icons/Language.svg";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import styles from "./header.module.scss";

const Header = () => {
  const pathname = usePathname();
  const expand = "xl";
  const navbarToggleRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [defaultLanguage, setDefaultLanguage] = useState("Spanish");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageSelect = (lang: string) => {
    localStorage.setItem("language", lang);
    window.dispatchEvent(
      new StorageEvent("storage", { key: "language", newValue: lang })
    );
    setIsOpen(false);
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
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    // Check if navbar is expanded (mobile view) and close it
    if (window.innerWidth < 992) {
      // lg breakpoint
      navbarToggleRef.current?.click();
    }
  };
  console.log("setting");
  return (
    <header className={styles.headerContainer}>
      <Navbar expand={expand} className="w-100 p-0">
        <Container fluid className="p-0">
          <Link href={routes.HOME} className="navbar-brand">
            <Image
              alt="logo"
              src={logo}
              style={{ width: "220px", height: "auto" }}
            />
          </Link>
          <Navbar.Toggle
            ref={navbarToggleRef}
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className={styles.offCanvas}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Image alt="logo" src={logo} width={140} height={28} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="d-flex align-items-center ms-auto sider-search order-xl-2">
                <div
                  className="dropdown me-xl-4 order-xl-1 order-2"
                  ref={dropdownRef}
                >
                  <button
                    className="btn dropdown-toggle border-0 d-flex align-items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={toggleDropdown}
                  >
                    <Image
                      className="me-2"
                      alt="language"
                      src={language}
                      width={18}
                      height={18}
                    />
                    {defaultLanguage}
                  </button>
                  {isOpen && (
                    <ul className="dropdown-menu show">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleLanguageSelect("English")}
                        >
                          English
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleLanguageSelect("Spanish")}
                        >
                          Spanish
                        </button>
                      </li>
                    </ul>
                  )}
                </div>

                <div
                  className={cn(
                    styles.searchWrapper,
                    " me-md-3 me-2 order-xl-2 order-1"
                  )}
                >
                  <Input
                    placeholder="Search"
                    rightIcon={
                      <Image
                        alt={
                          defaultLanguage === "English" ? "Search" : "Buscar"
                        }
                        src={searchIcon}
                        width={16}
                        height={16}
                      />
                    }
                  />
                </div>
              </div>

              <Nav className={cn(styles.navLinks, "order-xl-1")}>
                {[
                  {
                    href: routes.ABOUT_US,
                    label:
                      defaultLanguage === "English"
                        ? "About Us"
                        : "Sobre Nosotros",
                  },
                  {
                    href: routes.EYE_WEAR,
                    label:
                      defaultLanguage === "English" ? "Eye Wear" : "Lentes",
                  },
                  {
                    href: routes.INSURANCE,
                    label:
                      defaultLanguage === "English" ? "Insurance" : "Seguro",
                  },
                  {
                    href: routes.DIGITAL_LABS,
                    label:
                      defaultLanguage === "English"
                        ? "Digital Labs"
                        : " Laboratorios Digitales",
                  },
                  {
                    href: routes.CONTACT_LENSES,
                    label:
                      defaultLanguage === "English"
                        ? "Contact Lenses"
                        : "Lentes de Contacto",
                  },
                  {
                    href: routes.LOCATIONS,
                    label:
                      defaultLanguage === "English"
                        ? "Locations"
                        : "Ubicaciones",
                  },
                ].map(({ href, label }) => (
                  <Nav.Item key={label}>
                    <Link
                      className={cn(
                        styles.navLink,
                        pathname === href ? styles.active : ""
                      )}
                      href={href}
                      onClick={handleLinkClick}
                    >
                      {label}
                    </Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
