import { useEffect, useState } from "react";
import styles from './styles.module.css'

export default function Home() {
  const [horas, setHoras] = useState("00");
  const [minutos, setMinutos] = useState("00");
  const [segundos, setSegundos] = useState("00");

  useEffect(() => {
    const relogio = setInterval(() => {
      const dateToday = new Date();
      let hr = dateToday.getHours();
      let min = dateToday.getMinutes();
      let sec = dateToday.getSeconds();

      if (hr < 10) hr = "0" + hr;
      if (min < 10) min = "0" + min;
      if (sec < 10) sec = "0" + sec;

      setHoras(hr);
      setMinutos(min);
      setSegundos(sec);
    }, 1000);

    return () => clearInterval(relogio); // Cleanup do intervalo
  }, []);

  return (
    <div className={styles.relogio}>
      <div>
        <span>{horas}</span>
        <span className={styles.tempo}>Horas</span>
      </div>
      <div>
        <span>{minutos}</span>
        <span className={styles.tempo}>Minutos</span>
      </div>
      <div>
        <span>{segundos}</span>
        <span className={styles.tempo}>Segundos</span>
      </div>
    </div>
  );
}
