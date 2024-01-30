import styles from '../componentsCSS/navbar.module.css'

export function Navbar() {
  return (
    <>
      <section className={styles.navbar_sect}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </section>
    </>
  );
}
