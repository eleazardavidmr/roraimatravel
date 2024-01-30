import { useState } from "react";
import styles from "../componentsCSS/contact.module.css";
import { motion } from "framer-motion";
export function Contact() {
  const [name, setName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("name vacio");
    }
  };
  return (
    <>
      <section id="contact">
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/ffac70ffbb48b25cb540e8c11dbd315a"
          method="POST"
          className={styles.form}
        >
          <h1>CONTACTANOS</h1>
          <hr className={styles.hr} />
          <div className={styles.container}>
            <label htmlFor="name">Nombre *</label>
            <motion.input
              initial={{ opacity: 1, scale: 0 }}
              whileInView={{ opcity: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={styles.form_input}
              type="text"
              name="name"
            />
          </div>
          <div className={styles.container}>
            <label htmlFor="email">Correo electónico *</label>
            <motion.input
              initial={{ opacity: 1, scale: 0 }}
              whileInView={{ opcity: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={styles.form_input}
              type="email"
              name="email"
            />
          </div>
          <div className={styles.container}>
            <label htmlFor="phone">Teléfono</label>
            <motion.input
              initial={{ opacity: 1, scale: 0 }}
              whileInView={{ opcity: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={styles.form_input}
              type="text"
              name="phone"
            />
          </div>
          <div className={styles.container}>
            <label htmlFor="message">Mensaje *</label>
            <motion.textarea
              initial={{ opacity: 1, scale: 0 }}
              whileInView={{ opcity: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              name="message"
              id="message"
              cols="10"
              rows="10"
            ></motion.textarea>
          </div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            type="submit"
            className={styles.btn}
          >
            Enviar
          </motion.button>
        </form>
      </section>
    </>
  );
}
