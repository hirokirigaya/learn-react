import {Link} from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <ul className={styles.list} >
    <li>
      <Link to="/" className={styles.listItem}>Home</Link>
    </li>
    <li>
      <Link to="/company" className={styles.listItem}>Company</Link>
    </li>
    <li>
      <Link to="/contact" className={styles.listItem}>Contact</Link>
    </li>
  </ul>
  );
};

export default Navbar;