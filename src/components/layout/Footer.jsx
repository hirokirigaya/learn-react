import styles from "./Footer.module.css";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <ul className={styles.idle}>
        <li><FaDiscord className={styles.idleItem}/></li>
        <li><FaInstagram className={styles.idleItem}/></li>
        <li><FaTwitter className={styles.idleItem}/></li>
      </ul>
    </footer>
  );
}

export default Footer;
