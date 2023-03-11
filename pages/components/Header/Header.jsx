import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import {locales, localeNames } from '../../../locale/constants';
import { useRouter } from "next/router";

const Header = () => {

  return (
    <header className={styles.header}>
      <div>
        <figure>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </figure>
        <div className={styles.appName}>
          <p>tienda</p>
          <p>libre</p>
        </div>
      </div>
      <div className={styles.navbar}>
        <Link href="./"> Productos destacados</Link>
        <Link href="./tycs"> Tèrminos y condiciones </Link>
      </div>
      <div className={styles.navbar}>
        {Object.keys(locales).map((lan) => {
        return (
          <Link href="/" key={lan} locale={locales[lan]}>
            {localeNames[locales[lan]]}
          </Link>
        )
      })}
      </div>
    </header>
  )
};

export default Header;
