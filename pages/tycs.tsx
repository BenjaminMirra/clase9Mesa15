import { GetStaticProps, NextPage } from "next";
import React from "react";
import { TyC, TyCsAPIResponse } from "../types";
import styles from "../styles/TYC.module.css";
import Head from "next/head";

// Por ahora estamos utilizando data mockeada, pero
// debemos reemplazar esto por información proveniente de la
// API

interface Props{
  data:TyCsAPIResponse
}

export const getStaticProps: GetStaticProps = async (context) => {
  const lan = context.locale
  const res = await fetch(process.env.BASE_URL + "/api/tycs/" + lan)
  const data : TyCsAPIResponse= await res.json()
  return {
      props: {
          data
      }
  }
}


const TerminosYCondiciones: NextPage<Props> = ({data}:Props) => {
  if (!data) return null;

  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>Tienda Libre - Términos y Condiciones</title>
        <meta
          name="description"
          content="términos y condiciones de Tienda Libre"
        />
      </Head>
      <h2>Terminos y Concidiones</h2>
      <p>Versión: {version}</p>
      {tycs.map(renderTyc)}
    </div>
  );
};

// Aquí debemos agregar el método para obtener la información
// de la API

export default TerminosYCondiciones;
