import styles from "../componentsCSS/hero.module.css";
import banner2 from "../img/bannerRoraimaTravel.png";
export function Hero() {
  const stylesHero = {
    backgroundImage: `url(${banner2})`,
  };
  return (
    <>
      <section className={styles.hero_sect} style={stylesHero}></section>
    </>
  );
}
