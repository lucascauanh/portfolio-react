import Image from "next/image";
import styles from "./header.module.scss";

export function Header() {
  return (
      <div className={styles.header}>
          <div>
              <h1>Hi, I’m Lucas! 👋</h1>
              <h2>Software Engineer</h2>
          </div>
          <Image
              src="/lucas-foto.jpg"
              alt="Profile Picture"
              width={325}
              height={310}
              priority
          />
          <div className={styles.trianglesBackground}>
              <div className={styles.triangle}></div>
              <div className={styles.triangle}></div>
              <div className={styles.triangle}></div>
              <div className={styles.triangle}></div>
              <div className={styles.triangle}></div>
              <div className={styles.triangle}></div>
              <div className={styles.triangle}></div>
          </div>
      </div>
  );
}

