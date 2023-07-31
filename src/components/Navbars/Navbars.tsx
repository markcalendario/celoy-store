"use client";

import { Fragment, useEffect, useState } from "react";
import Button from "../Buttons/Buttons";
import styles from "./Navbars.module.scss";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "Cart", link: "/cart" }
];

export default function Navbar() {
  const [screenSize, setScreenSize] = useState<null | number>(null);
  const [isTinted, setIsTinted] = useState<null | boolean>(null);

  useEffect(() => {
    const updateTint = () => {
      setIsTinted(window.scrollY >= 10 ? true : false);
    };

    updateTint();
    window.addEventListener("scroll", updateTint);

    return () => {
      window.removeEventListener("scroll", updateTint);
    };
  }, []);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  if (screenSize === null) {
    return null;
  }

  if (screenSize >= 768) {
    return <WideScreenNavbar isTinted={isTinted} />;
  }

  if (screenSize < 768) {
    return <SmallScreenNavbar isTinted={isTinted} />;
  }
}

type TNavbar = {
  isTinted: boolean | null;
};

function WideScreenNavbar({ isTinted }: TNavbar) {
  return (
    <nav
      className={
        styles.wideScreenNavbar + " " + (isTinted ? styles.tint : styles.notint)
      }>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.brand}>CLOY</h1>
          <div className={styles.links}>
            {navLinks.map((navLink) => (
              <a href={navLink.link}>{navLink.name}</a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function SmallScreenNavbar({ isTinted }: TNavbar) {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <nav
        className={
          styles.smallScreenNavbar +
          " " +
          (isTinted ? styles.tint : styles.notint)
        }>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h1 className={styles.brand}>CLOY</h1>
            <Button
              className={styles.burger + " bg-transparent"}
              onClick={handleToggleDrawer}>
              <i className="fa fa-bars fa-fw" />
            </Button>
          </div>
        </div>
      </nav>
      {isDrawerOpen ? <Drawer handleToggleDrawer={handleToggleDrawer} /> : null}
    </Fragment>
  );
}

type TDrawer = {
  handleToggleDrawer(): void;
};

function Drawer({ handleToggleDrawer }: TDrawer) {
  return (
    <aside id={styles.aside}>
      <div className={styles.head}>
        <h4>CLOY</h4>
        <Button
          className={styles.close + " bg-red"}
          onClick={handleToggleDrawer}>
          <i className="fa fa-times fa-fw" />
        </Button>
      </div>
      <div className={styles.links}>
        {navLinks.map((navLink) => (
          <a href={navLink.link}>{navLink.name}</a>
        ))}
      </div>
    </aside>
  );
}
