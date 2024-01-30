import styles from "../componentsCSS/hero.module.css";
import banner2 from "../img/banner2.jpeg";
export function Hero() {
  const stylesHero = {
    backgroundImage: `linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ), url(${banner2})`,
  };
  return (
    <>
      <section className={styles.hero_sect} style={stylesHero}>
          
      </section>
    </>
  );
}
