import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p>Powered by <b>aleon</b></p>
        <span className={styles.logo}>
          <Image src="/poke.svg" alt="Pokemon Logo" width={25} height={25} />
        </span>
      </footer>
    </>
  );
};
export default Footer;
