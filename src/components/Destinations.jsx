import React, { useEffect, useRef, useState } from "react";
import cancun from "../img/cancun.jpg";
import rivieramaya from "../img/rivieramaya.jpg";
import styles from "../componentsCSS/destinations.module.css";
import prvlq from "../img/PRVLQ.jpg";
import huatulco from "../img/huatulco.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Destinations() {
  const cancunStyles = {
    backgroundImage: ` url(${cancun})`,
  };

  const rivieraMayaStyles = {
    backgroundImage: `url(${rivieramaya})`,
  };
  const puertoVallartaStyles = {
    backgroundImage: `url(${prvlq})`,
  };

  const huatulcoStyles = {
    backgroundImage: `url(${huatulco})`,
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <section className={styles.dest_sect}>
        <h1 className={styles.title}>DESTINOS RECOMENDADOS</h1>
        <hr className={styles.hr} />
        <Carousel className={styles.carousel} responsive={responsive}>
          <div className={`${styles.container}`} style={cancunStyles}>
            <p className={styles.imgTitle}>Cancún</p>
          </div>

          <div className={` ${styles.container}`} style={rivieraMayaStyles}>
            <h2 className={styles.imgTitle}>Riviera Maya</h2>
          </div>

          <div className={`${styles.container}`} style={puertoVallartaStyles}>
            <h2 className={styles.imgTitle}>Puerto Vallarta</h2>
          </div>

          <div className={`${styles.container}`} style={huatulcoStyles}>
            <h2 className={styles.imgTitle}>Huatulco</h2>
          </div>
        </Carousel>
      </section>
    </>
  );
}
