import styles from './Footer.module.css';

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
          <div className="social margin-3">
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i> @kepin.json
            </a>
            <a href="#" className="social-link margin-3">
              <i className="fab fa-whatsapp"></i> +628123456789
            </a>
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
