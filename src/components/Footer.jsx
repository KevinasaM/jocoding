import styles from './Footer.module.css';
//import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>JoCoding</div>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <div className={styles.social}>
        <div className='social mt-3'>
            <i className='fa-brands fa-instagram'>@kepin.json </i>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-linkedin'> +62 8123 4567 890</i>
            <i className='fa-brands fa-youtube'></i>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 JoCoding. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

