import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <ul className={styles.topInfoBar}>
        <li>NOW OPEN at the Chattanooga Choo Choo</li>
        <li>WED-SUN 10am-8pm</li>
      </ul>
      <div className={styles.mainContainer}></div>
    </>
  );
}
