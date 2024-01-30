import arrow from "../img/arrowUp.png";
import styles from "../componentsCSS/topbutton.module.css";
import { motion } from "framer-motion";
export function TopButton() {
  return (
    <>
      <motion.section
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className={styles.arrow}
      >
        <a href="#">
          <img src={arrow} alt="Flecha" />
        </a>
      </motion.section>
    </>
  );
}
