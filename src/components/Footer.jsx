import styles from "../componentsCSS/footer.module.css";
export function Footer() {
  return (
    <>
      <section className={styles.footer_sect}>
        <div>
          <p>
            Dessarollado por: <strong>Eleazar Muñoz</strong>
          </p>
          <p>
            Contácto:{" "}
            <strong>
              <a
                href="http://edmr.surge.sh/"
                target="_blank"
                className={styles.contact_a}
              >
                edmr.surge.sh
              </a>
            </strong>
          </p>
        </div>
      </section>
    </>
  );
}
