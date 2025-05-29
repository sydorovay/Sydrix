import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Modal from 'react-modal';
import styles from './BlogSection.module.css';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  preview: string;
  fullText: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Сайт, який продає: як ми створюємо проєкти, від яких не відвести очей",
    date: "14 травня 2025",
    preview: "Уявіть: клієнт відкриває ваш сайт — і одразу розуміє, що це саме те, що йому потрібно...",
    fullText: "Це повний текст статті, який буде відображатися в модальному вікні. Тут можна докладніше описати підхід, стратегії та результат.",
  },
  // інші пости можна додати тут
];

Modal.setAppElement('#root');

const BlogSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <section className={styles.blogSection} id="blog">
      <h2 className={styles.title}>Блог</h2>
      <div className={styles.posts}>
        {blogPosts.map(post => (
          <article key={post.id} className={styles.post}>
            <p className={styles.date}>{post.date}</p>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.preview}>{post.preview}</p>
            <button
              className={styles.readMore}
              onClick={() => openModal(post)}
              aria-label={`Читати далі: ${post.title}`}
            >
              Читати далі
            </button>
          </article>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Повна стаття"
        className={styles.modal}
        overlayClassName={styles.overlay}
        closeTimeoutMS={300}
      >
        {selectedPost && (
          <div className={styles.modalContent}>
            <button className={styles.closeModal} onClick={closeModal} aria-label="Закрити">×</button>
            <h2 className={styles.modalTitle}>{selectedPost.title}</h2>
            <p className={styles.modalText}>{selectedPost.fullText}</p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default BlogSection;
