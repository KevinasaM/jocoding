import styles from './TestimonialsPage.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Samsuel Smith',
    role: 'Student in Computer Science',
    content: 'JoCoding membantu saya menyelesaikan tugas akhir saya tepat waktu. Keahlian dan dukungan mereka sangat berharga!',
  },
  {
    id: 2,
    name: 'Hendra Hancuk',
    role: 'Software Developer',
    content: 'Layanan peninjauan kode dari JoCoding secara signifikan meningkatkan kualitas dan efisiensi basis kode kami.',
  },
  {
    id: 3,
    name: 'Toni Satttt',
    role: 'Startup UMKM Founder',
    content: 'Website yang dibuat oleh JoCoding mempermudah kami untuk menjangkau lebih banyak pelanggan.!',
  },
  {
    id: 4,
    name: 'Samhudi Johnson',
    role: 'student informatics',
    content: 'JoCoding\'s Membantu menyelesaikan coding tugas kuliah, project sesuai kebutuhan saya, Mantap!.',
  },
];

const TestimonialsPage = () => {
  return (
    <div className={styles.testimonialsPage}>
      <h1>Testimoni Dari Pelanggan</h1>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <p className={styles.content}>{testimonial.content}</p>
            <div className={styles.author}>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;

