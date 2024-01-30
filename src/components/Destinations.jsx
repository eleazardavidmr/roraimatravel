import React, { useEffect, useRef, useState } from "react";
import cancun from "../img/cancun.jpg";
import rivieramaya from "../img/rivieramaya.jpg";
import styles from "../componentsCSS/destinations.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Destinations() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
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
          <div className={styles.container}>
            <img className={styles.img} src={cancun} alt="Cancún" />
            <h2>Cancún</h2>
          </div>
          <div className={styles.container}>
            <img className={styles.img} src={rivieramaya} alt="Riviera Maya" />
            <h2>Riviera Maya</h2>
          </div>
        </Carousel>
      </section>
    </>
  );
}
