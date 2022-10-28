import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p>Powered by <b>aleon</b></p>
      </footer>
    </>
  );
};
export default Footer;
