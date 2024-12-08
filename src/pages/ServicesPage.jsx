import styles from './ServicesPage.module.css';

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      <h1>Our Services</h1>
      <div className={styles.serviceGrid}>
        <div className={styles.serviceCard}>
          <h2>Website Development Services</h2>
          <p>Bawa bisnis Anda melesat ke dunia digital dengan website profesional yang dirancang khusus untuk kebutuhan Anda. Tim ahli kami siap menciptakan website yang tidak hanya menarik secara visual, tetapi juga fungsional, responsif, dan mudah diakses di berbagai perangkat.</p>
          <p>Mulai dari landing page sederhana hingga platform e-commerce yang kompleks, kami menggabungkan desain kreatif dengan teknologi terbaru untuk memastikan website Anda tampil menonjol di tengah persaingan.</p>
          <ul>
            <li>Desain Eksklusif</li>
            <li>Optimalisasi kinerja</li>
            <li>Fitur sesuai kebutuhan bisnis</li>
            <li>Web responsif</li>
            <li>Support & Maintenance</li>
          </ul>
        </div>
        <div className={styles.serviceCard}>
          <h2>Coding assignments or projects</h2>
          <p>Hadapi tantangan dunia pemrograman tanpa rasa khawatir! Tim profesional kami hadir untuk membantu Anda menyelesaikan tugas coding dan proyek IT dengan hasil terbaik, tepat waktu, dan sesuai kebutuhan.</p>
          <p>Kami melayani berbagai tingkat kesulitan — dari tugas akademik, proyek freelance, hingga pengembangan aplikasi skala besar. Dengan pendekatan yang terstruktur dan solusi berbasis teknologi terkini, kami memastikan setiap proyek Anda dikerjakan secara teliti dan profesional.</p>
          <ul>
            <li>Code berkualitas, terstruktur, dan mudah dipahami</li>
            <li>Disesuaikan dengan kebutuhan dan spesifikasi Anda</li>
            <li>Pengerjaan sesuai tenggat waktu yang disepakati</li>
            <li>Code documentation</li>
            <li>Manajemen dan perencanaan projek</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

