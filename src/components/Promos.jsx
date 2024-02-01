import styles from "../componentsCSS/proms.module.css";
import prom1 from "../img/proms/prom1.jpg";
import prom2 from "../img/proms/prom2.jpg";
export function Promos() {
  return (
    <>
      <section className={styles.proms_sect} id="promos">
        <h1 className={styles.title}>PROMOCIONES</h1>
        <hr className={styles.hr} />

        <div className={styles.prom}>
          <div className={styles.img_container}>
            <img src={prom1} alt="Promocion" className={styles.prom_img} />
          </div>

          <div>
            <p>
              ¡Seguimos innovado nuestras rutas! ☝️🌍 Te presentamos este nuevo
              circuito de 14 días y 11 noches que recorre las ciudades más
              espléndidas de #Europa, capitales de historia y cultura como
              <span className={styles.hashtag}>#Budapest</span>,{" "}
              <span className={styles.hashtag}>#Praga</span> y{" "}
              <span className={styles.hashtag}>#Viena</span>. Con operación de
              <span className={styles.hashtag}> #MegaTravel</span> y vuelo
              directo a <span className={styles.hashtag}>#Bulgaria</span>. ✈️
            </p>
            <p>
              ¡Descubre la Magia Imperial! Solicita más información e itinerario
              detallado al 81 1922 3081 ☎️ 8129568801
            </p>

            <div className={styles.ul}>
              <p>
                <strong>INCLUYE:</strong>
              </p>
              <li>✈ Vuelos</li>
              <li>🏨 Hospedaje</li>
              <li>🚗Traslados</li>
              <li>🍽 Alimentos según itinerario</li>
              <li>🙋‍♀️Guía habla hispana</li>
              <li>🚶‍♀Visitas indicadas</li>
            </div>
          </div>
        </div>

        <div className={styles.prom}>
          <div className={styles.img_container}>
            <img src={prom2} alt="Promocion" className={styles.prom_img} />
          </div>
          <div>
            <strong>
              <p>JAPÓN ESENCIAL</p>
            </strong>
            <p>
              ¡Embárcate en un viaje de descubrimiento por Japón con nuestro
              exclusivo paquete! 🏯🌸
            </p>
            <p>
              Desde la elegancia atemporal de Kyoto hasta la vanguardia de
              Tokyo, cada rincón teje una historia única.
            </p>
            <p>
              Descubre la serenidad de los templos ancestrales y la modernidad
              vibrante de la metrópolis japonesa.
            </p>

            <p>Sumérgete en la belleza que solo Japón puede ofrecer. 🇯🇵✨</p>
            <p>
              Personaliza tu paquete a través de tu Agente de Viajes. Solicita
              itinerario detallado
            </p>
            <div className={styles.span_container}>
              <span className={styles.hashtag}>#JapónExclusivo</span>
              <span className={styles.hashtag}>#DescubreJapón</span>
              <span className={styles.hashtag}>#RegioOperadora</span>
              <span className={styles.hashtag}>#regiotravel</span>
              <span className={styles.hashtag}>#destinossorprendentes</span>
              <span className={styles.hashtag}>#viajes</span>
              <span className={styles.hashtag}>#japantravel</span>
              <span className={styles.hashtag}>#somosroraimatravelmty</span>
              <span className={styles.hashtag}>#roraimatravel</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
