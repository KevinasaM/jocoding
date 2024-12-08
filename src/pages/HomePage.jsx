import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.hero}>
        <h1>Welcome to JoCoding</h1>
        <p>Dedikasi dalam menyajikan layanan joki tugas coding terbaik untuk kepuasan anda yang tak terbantahkan</p>
        <a href="/services" className={styles.cta}>Explore Our Services</a>
      </header>
      <section className={styles.about}>
        <h2>About Us</h2>
        <p>Di dunia teknologi yang terus berkembang, kami hadir sebagai mitra terpercaya dalam perjalanan belajar dan pengembangan proyek Anda. JoCoding adalah tim profesional yang berdedikasi untuk membantu Anda meraih kesuksesan di dunia pemrograman.

        Dengan keahlian mendalam dan pengalaman luas, kami menyediakan layanan joki coding berkualitas tinggi yang dirancang untuk memenuhi kebutuhan spesifik Anda. Baik untuk tugas akademik, proyek freelance, atau pengembangan aplikasi, kami siap memberikan solusi terbaik yang cepat, aman, dan terpercaya.

        Komitmen kami adalah menghadirkan hasil yang tidak hanya memenuhi ekspektasi, tetapi juga memberikan nilai tambah bagi setiap proyek yang kami kerjakan.</p>
        <p>Bersama kami, keterbatasan menjadi peluang dan ide menjadi kenyataan!.</p>
      </section>
      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>website development services</h3>
            <p>Web development services with responsive UI. and We analyze your code, provide detailed feedback, and optimize it for better performance and readability.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Coding assignments or projects</h3>
            <p>Helps you complete your coursework, job, or coding project according to the instructions and deadlines given. From small assignments to large-scale projects, we provide end-to-end support to ensure your coding projects are a success.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

