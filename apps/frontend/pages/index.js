import Link from 'next/link';
import CourseCard from '../components/CourseCard';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Featured courses data
  const featuredCourses = [
    {
      id: 1,
      title: 'Modern Web Geliştirme: React & Next.js',
      instructor: 'Ayşe Yılmaz',
      thumbnail: '/placeholder-course.png',
      rating: 4.8,
      students: 2547,
      price: 299,
      category: 'Web Geliştirme',
      level: 'Orta',
    },
    {
      id: 2,
      title: 'Python ile Veri Bilimi ve Makine Öğrenmesi',
      instructor: 'Dr. Mehmet Demir',
      thumbnail: '/placeholder-course.png',
      rating: 4.9,
      students: 3821,
      price: 399,
      category: 'Veri Bilimi',
      level: 'İleri',
    },
    {
      id: 3,
      title: 'İngilizce Konuşma Pratiği - A1\'den C1\'e',
      instructor: 'Elif Kaya',
      thumbnail: '/placeholder-course.png',
      rating: 4.7,
      students: 5234,
      price: 249,
      category: 'Dil Eğitimi',
      level: 'Başlangıç',
    },
  ];

  const categories = [
    { name: 'Web Geliştirme', icon: '💻', color: '#667eea' },
    { name: 'Veri Bilimi', icon: '📊', color: '#f093fb' },
    { name: 'Tasarım', icon: '🎨', color: '#4facfe' },
    { name: 'Pazarlama', icon: '📈', color: '#43e97b' },
    { name: 'Dil Eğitimi', icon: '🗣️', color: '#fa709a' },
    { name: 'İş Becerileri', icon: '💼', color: '#fee140' },
  ];

  const testimonials = [
    {
      name: 'Zeynep Aktaş',
      role: 'Frontend Developer',
      text: 'DreamHack sayesinde kariyerimde büyük bir sıçrama yaptım. Eğitimler çok kaliteli ve eğitmenler gerçekten işinin uzmanı.',
      avatar: '👩‍💼',
    },
    {
      name: 'Can Yılmaz',
      role: 'Veri Analisti',
      text: 'Python eğitimi aldıktan sonra hayalim olan pozisyona geçiş yaptım. Pratik odaklı içerikler harika!',
      avatar: '👨‍💻',
    },
    {
      name: 'Selin Öztürk',
      role: 'Dijital Pazarlamacı',
      text: 'Esnek eğitim saatleri sayesinde işimden arta kalan zamanlarda kendimi geliştirebildim. Herkese tavsiye ederim!',
      avatar: '👩‍🎓',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container">
          <div style={styles.heroContent}>
            <div style={styles.heroText} className="animate-fadeIn">
              <h1 style={styles.heroTitle}>
                <span className="gradient-text">Geleceğini</span> Bugünden İnşa Et
              </h1>
              <p style={styles.heroSubtitle}>
                Türkiye'nin en iyi eğitmenleriyle canlı ve video eğitimler.
                Kariyerinde hızla yükselmek için ihtiyacın olan her şey burada!
              </p>
              <div style={styles.heroButtons}>
                <Link href="/courses">
                  <button className="btn btn-accent btn-lg">
                    🚀 Eğitimleri Keşfet
                  </button>
                </Link>
                <button className="btn btn-secondary btn-lg">
                  📹 Nasıl Çalışır?
                </button>
              </div>
              {/* Stats */}
              <div style={styles.stats}>
                <div style={styles.stat}>
                  <span style={styles.statNumber}>10K+</span>
                  <span style={styles.statLabel}>Öğrenci</span>
                </div>
                <div style={styles.stat}>
                  <span style={styles.statNumber}>500+</span>
                  <span style={styles.statLabel}>Eğitim</span>
                </div>
                <div style={styles.stat}>
                  <span style={styles.statNumber}>150+</span>
                  <span style={styles.statLabel}>Eğitmen</span>
                </div>
              </div>
            </div>
            <div style={styles.heroVisual} className="animate-slideInRight">
              <div className="glass" style={styles.heroCard}>
                <div style={styles.heroCardIcon}>🎓</div>
                <h3 style={styles.heroCardTitle}>Başarıya Giden En Kısa Yol</h3>
                <p style={styles.heroCardText}>
                  Sertifikalı eğitimler, 7/24 destek ve topluluk desteğiyle öğren!
                </p>
                <div style={styles.heroCardFeatures}>
                  <div style={styles.feature}>✓ Canlı Dersler</div>
                  <div style={styles.feature}>✓ Video İçerikler</div>
                  <div style={styles.feature}>✓ Sertifika</div>
                  <div style={styles.feature}>✓ Topluluk Desteği</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section style={styles.section}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>🌟 Öne Çıkan Eğitimler</h2>
            <p style={styles.sectionSubtitle}>
              En popüler ve en çok tercih edilen eğitimlerimizi keşfet
            </p>
          </div>
          <div style={styles.courseGrid}>
            {featuredCourses.map((course, idx) => (
              <div key={course.id} className="stagger-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          <div style={styles.viewAll}>
            <Link href="/courses">
              <button className="btn btn-primary btn-lg">
                Tüm Eğitimleri Gör →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={styles.section}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>📚 Kategoriler</h2>
            <p style={styles.sectionSubtitle}>
              İlgi alanına göre eğitim bul
            </p>
          </div>
          <div style={styles.categoryGrid}>
            {categories.map((cat, idx) => (
              <Link href={`/courses?category=${cat.name}`} key={idx} style={{ textDecoration: 'none' }}>
                <div className="card hover-glow stagger-item" style={{
                  ...styles.categoryCard,
                  animationDelay: `${idx * 0.1}s`
                }}>
                  <span style={{ fontSize: 'var(--text-5xl)' }}>{cat.icon}</span>
                  <h3 style={styles.categoryName}>{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.section}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>💬 Öğrencilerimiz Ne Diyor?</h2>
          </div>
          <div style={styles.testimonialWrapper}>
            <div className="glass" style={styles.testimonialCard}>
              <div style={styles.testimonialAvatar}>
                {testimonials[currentTestimonial].avatar}
              </div>
              <p style={styles.testimonialText}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div style={styles.testimonialAuthor}>
                <strong>{testimonials[currentTestimonial].name}</strong>
                <span>{testimonials[currentTestimonial].role}</span>
              </div>
            </div>
            <div style={styles.testimonialDots}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  style={{
                    ...styles.dot,
                    background: idx === currentTestimonial
                      ? 'var(--color-accent-green)'
                      : 'rgba(255, 255, 255, 0.3)',
                  }}
                  onClick={() => setCurrentTestimonial(idx)}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div className="container">
          <div className="glass" style={styles.ctaBanner}>
            <h2 style={styles.ctaTitle}>Hemen Başla, Geleceğini Şekillendir! 🚀</h2>
            <p style={styles.ctaText}>
              Ücretsiz deneme dersleri ile platformumuzu keşfet ve kariyer hedeflerine ulaş!
            </p>
            <div style={styles.ctaButtons}>
              <button className="btn btn-accent btn-lg">
                Ücretsiz Başla
              </button>
              <button className="btn btn-secondary btn-lg">
                Kurumsal Çözümler
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  hero: {
    padding: 'var(--space-3xl) 0',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 'var(--space-3xl)',
    alignItems: 'center',
  },
  heroText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-xl)',
  },
  heroTitle: {
    fontSize: 'var(--text-6xl)',
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: 0,
  },
  heroSubtitle: {
    fontSize: 'var(--text-xl)',
    color: 'var(--color-gray-200)',
    lineHeight: 1.6,
    maxWidth: '600px',
  },
  heroButtons: {
    display: 'flex',
    gap: 'var(--space-md)',
    flexWrap: 'wrap',
  },
  stats: {
    display: 'flex',
    gap: 'var(--space-2xl)',
    marginTop: 'var(--space-xl)',
    flexWrap: 'wrap',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-xs)',
  },
  statNumber: {
    fontSize: 'var(--text-4xl)',
    fontWeight: 800,
    color: 'var(--color-accent-yellow)',
    fontFamily: 'var(--font-display)',
  },
  statLabel: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-gray-400)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  heroVisual: {
    display: 'flex',
    justifyContent: 'center',
  },
  heroCard: {
    padding: 'var(--space-2xl)',
    textAlign: 'center',
    maxWidth: '400px',
  },
  heroCardIcon: {
    fontSize: '4rem',
    marginBottom: 'var(--space-lg)',
  },
  heroCardTitle: {
    fontSize: 'var(--text-2xl)',
    marginBottom: 'var(--space-md)',
  },
  heroCardText: {
    fontSize: 'var(--text-base)',
    color: 'var(--color-gray-300)',
    marginBottom: 'var(--space-xl)',
  },
  heroCardFeatures: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 'var(--space-md)',
  },
  feature: {
    fontSize: 'var(--text-sm)',
    fontWeight: 600,
    color: 'var(--color-accent-green)',
  },
  section: {
    padding: 'var(--space-3xl) 0',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: 'var(--space-2xl)',
  },
  sectionTitle: {
    fontSize: 'var(--text-4xl)',
    marginBottom: 'var(--space-md)',
  },
  sectionSubtitle: {
    fontSize: 'var(--text-lg)',
    color: 'var(--color-gray-300)',
  },
  courseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: 'var(--space-xl)',
  },
  viewAll: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'var(--space-2xl)',
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: 'var(--space-lg)',
  },
  categoryCard: {
    textAlign: 'center',
    padding: 'var(--space-2xl) var(--space-lg)',
    cursor: 'pointer',
  },
  categoryName: {
    fontSize: 'var(--text-lg)',
    fontWeight: 600,
    marginTop: 'var(--space-md)',
    marginBottom: 0,
  },
  testimonialWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  testimonialCard: {
    padding: 'var(--space-2xl)',
    textAlign: 'center',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 'var(--space-lg)',
  },
  testimonialAvatar: {
    fontSize: '5rem',
    marginBottom: 'var(--space-md)',
  },
  testimonialText: {
    fontSize: 'var(--text-xl)',
    fontStyle: 'italic',
    color: 'var(--color-gray-200)',
    lineHeight: 1.8,
  },
  testimonialAuthor: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-xs)',
    fontSize: 'var(--text-base)',
    color: 'var(--color-gray-400)',
  },
  testimonialDots: {
    display: 'flex',
    justifyContent: 'center',
    gap: 'var(--space-sm)',
    marginTop: 'var(--space-lg)',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all var(--transition-base)',
    padding: 0,
  },
  ctaSection: {
    padding: 'var(--space-3xl) 0',
  },
  ctaBanner: {
    padding: 'var(--space-3xl)',
    textAlign: 'center',
    background: 'var(--gradient-primary)',
  },
  ctaTitle: {
    fontSize: 'var(--text-4xl)',
    marginBottom: 'var(--space-lg)',
  },
  ctaText: {
    fontSize: 'var(--text-xl)',
    color: 'var(--color-gray-100)',
    marginBottom: 'var(--space-xl)',
    maxWidth: '700px',
    margin: '0 auto var(--space-xl)',
  },
  ctaButtons: {
    display: 'flex',
    gap: 'var(--space-md)',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};
