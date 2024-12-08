import { useState } from 'react';
import styles from './FAQPage.module.css';

const faqs = [
  {
    id: 1,
    question: 'Apa saja layanan yang disediakan oleh JoCoding?',
    answer: 'JoCoding memberikan layanan penyelesaian tugas (kuliah, pekerjaan atau proyek individu), pengembaangan website, Dan lain sebagainya.',
  },
  {
    id: 2,
    question: 'Bagaimana cara kerja proses peninjauan kode?',
    answer: 'Tim ahli kami menganalisis kode Anda, memberikan umpan balik terperinci, dan menyarankan pengoptimalan. Kami fokus pada peningkatan kinerja, keterbacaan, dan kepatuhan terhadap praktik terbaik.',
  },
  {
    id: 3,
    question: 'Bahasa perograman apa saja yang didukung?',
    answer: 'Bahasa utama yang didukung oleh JoCoding adalah HTML, CSS, dan JavaScript. Dan beberapa framework populer seperti React, Angular, dan Laravel.',
  },
  {
    id: 4,
    question: 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan sebuah proyek?',
    answer: 'Jadwal proyek bervariasi tergantung pada ruang lingkup dan kompleksitasnya. Kami bekerja sama dengan Anda untuk menetapkan tenggat waktu yang realistis dan berusaha untuk menyelesaikannya tepat waktu.',
  },
  {
    id: 5,
    question: 'Apakah saya bisa minta penjelasan tentang kode yang dibuat?',
    answer: 'Tentu saja, kami menyediakan penjelasan detail tentang kode yang dibuat, baik melalui dokumentasi atau sesi konsultasi, sesuai permintaan anda.',
  },
];

const FAQPage = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={styles.faqPage}>
      <h1>FAQ</h1>
      <div className={styles.faqList}>
        {faqs.map((faq) => (
          <div key={faq.id} className={styles.faqItem}>
            <button
              className={styles.question}
              onClick={() => toggleFAQ(faq.id)}
              aria-expanded={activeId === faq.id}
            >
              {faq.question}
              <span className={styles.icon}>{activeId === faq.id ? '-' : '+'}</span>
            </button>
            {activeId === faq.id && (
              <div className={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;

