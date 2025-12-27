import { useState } from 'react';
import CourseCard from '../components/CourseCard';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('courses');

  // User data
  const user = {
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    avatar: '👨‍💻',
    joinDate: 'Ocak 2024',
    completedCourses: 5,
    inProgressCourses: 3,
  };

  // User's courses
  const myCourses = [
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
      progress: 65,
    },
    {
      id: 2,
      title: 'Python ile Veri Bilimi',
      instructor: 'Dr. Mehmet Demir',
      thumbnail: '/placeholder-course.png',
      rating: 4.9,
      students: 3821,
      price: 399,
      category: 'Veri Bilimi',
      level: 'İleri',
      progress: 30,
    },
    {
      id: 3,
      title: 'İngilizce Konuşma Pratiği',
      instructor: 'Elif Kaya',
      thumbnail: '/placeholder-course.png',
      rating: 4.7,
      students: 5234,
      price: 249,
      category: 'Dil Eğitimi',
      level: 'Başlangıç',
      progress: 100,
    },
  ];

  const certificates = [
    { id: 1, courseName: 'İngilizce Konuşma Pratiği', date: '15 Kasım 2024', instructor: 'Elif Kaya' },
    { id: 2, courseName: 'UI/UX Tasarım Temelleri', date: '3 Ekim 2024', instructor: 'Can Özdemir' },
  ];

  return (
    <main style={styles.main}>
      <div className="container">
        {/* Profile Header */}
        <div className="glass" style={styles.profileHeader}>
          <div style={styles.profileInfo}>
            <div style={styles.avatar}>{user.avatar}</div>
            <div style={styles.userDetails}>
              <h1 style={styles.userName}>{user.name}</h1>
              <p style={styles.userEmail}>{user.email}</p>
              <p style={styles.joinDate}>👋 Üye olma tarihi: {user.joinDate}</p>
            </div>
          </div>
          <button className="btn btn-primary">Profili Düzenle</button>
        </div>

        {/* Stats */}
        <div style={styles.statsGrid}>
          <div className="glass" style={styles.statCard}>
            <div style={styles.statIcon}>📚</div>
            <div style={styles.statValue}>{myCourses.length}</div>
            <div style={styles.statLabel}>Aktif Eğitim</div>
          </div>
          <div className="glass" style={styles.statCard}>
            <div style={styles.statIcon}>✅</div>
            <div style={styles.statValue}>{user.completedCourses}</div>
            <div style={styles.statLabel}>Tamamlanan</div>
          </div>
          <div className="glass" style={styles.statCard}>
            <div style={styles.statIcon}>🎓</div>
            <div style={styles.statValue}>{certificates.length}</div>
            <div style={styles.statLabel}>Sertifika</div>
          </div>
          <div className="glass" style={styles.statCard}>
            <div style={styles.statIcon}>⚡</div>
            <div style={styles.statValue}>
              {Math.round(myCourses.reduce((sum, c) => sum + c.progress, 0) / myCourses.length)}%
            </div>
            <div style={styles.statLabel}>Ortalama İlerleme</div>
          </div>
        </div>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            onClick={() => setActiveTab('courses')}
            style={{
              ...styles.tab,
              ...(activeTab === 'courses' ? styles.tabActive : {}),
            }}
          >
            📖 Eğitimlerim
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            style={{
              ...styles.tab,
              ...(activeTab === 'certificates' ? styles.tabActive : {}),
            }}
          >
            🏆 Sertifikalarım
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            style={{
              ...styles.tab,
              ...(activeTab === 'settings' ? styles.tabActive : {}),
            }}
          >
            ⚙️ Ayarlar
          </button>
        </div>

        {/* Tab Content */}
        <div style={styles.tabContent}>
          {activeTab === 'courses' && (
            <div>
              <h2 style={styles.sectionTitle}>Devam Eden Eğitimlerim</h2>
              <div style={styles.courseGrid}>
                {myCourses.map(course => (
                  <CourseCard key={course.id} course={course} showProgress={true} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div>
              <h2 style={styles.sectionTitle}>Aldığım Sertifikalar</h2>
              {certificates.length > 0 ? (
                <div style={styles.certificateGrid}>
                  {certificates.map(cert => (
                    <div key={cert.id} className="glass card" style={styles.certificateCard}>
                      <div style={styles.certificateIcon}>🎓</div>
                      <h3 style={styles.certificateName}>{cert.courseName}</h3>
                      <p style={styles.certificateInstructor}>Eğitmen: {cert.instructor}</p>
                      <p style={styles.certificateDate}>Tarih: {cert.date}</p>
                      <button className="btn btn-accent" style={{ marginTop: 'var(--space-md)', width: '100%' }}>
                        📥 Sertifikayı İndir
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass" style={styles.emptyState}>
                  <span style={styles.emptyIcon}>🎯</span>
                  <h3>Henüz sertifikan yok</h3>
                  <p>Eğitimlerini tamamla ve sertifikalarını kazan!</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="glass" style={styles.settingsCard}>
              <h2 style={styles.sectionTitle}>Profil Ayarları</h2>
              <form style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Ad Soyad</label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>E-posta</label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Mevcut Şifre</label>
                  <input
                    type="password"
                    placeholder="Mevcut şifreniz"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Yeni Şifre</label>
                  <input
                    type="password"
                    placeholder="Yeni şifreniz"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formActions}>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Değişiklikleri Kaydet
                  </button>
                  <button type="button" className="btn btn-secondary">
                    İptal
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    padding: 'var(--space-2xl) 0',
  },
  profileHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'var(--space-2xl)',
    marginBottom: 'var(--space-2xl)',
    flexWrap: 'wrap',
    gap: 'var(--space-lg)',
  },
  profileInfo: {
    display: 'flex',
    gap: 'var(--space-xl)',
    alignItems: 'center',
  },
  avatar: {
    fontSize: '5rem',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'var(--gradient-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-xl)',
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-xs)',
  },
  userName: {
    fontSize: 'var(--text-4xl)',
    marginBottom: 0,
  },
  userEmail: {
    fontSize: 'var(--text-base)',
    color: 'var(--color-gray-300)',
    marginBottom: 0,
  },
  joinDate: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-gray-400)',
    marginBottom: 0,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'var(--space-lg)',
    marginBottom: 'var(--space-2xl)',
  },
  statCard: {
    padding: 'var(--space-xl)',
    textAlign: 'center',
  },
  statIcon: {
    fontSize: 'var(--text-5xl)',
    marginBottom: 'var(--space-md)',
  },
  statValue: {
    fontSize: 'var(--text-4xl)',
    fontWeight: 800,
    color: 'var(--color-accent-yellow)',
    fontFamily: 'var(--font-display)',
    marginBottom: 'var(--space-xs)',
  },
  statLabel: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-gray-400)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  tabs: {
    display: 'flex',
    gap: 'var(--space-sm)',
    marginBottom: 'var(--space-2xl)',
    flexWrap: 'wrap',
  },
  tab: {
    padding: 'var(--space-md) var(--space-xl)',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 'var(--radius-lg)',
    color: 'var(--color-white)',
    fontSize: 'var(--text-base)',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all var(--transition-base)',
  },
  tabActive: {
    background: 'var(--gradient-primary)',
    borderColor: 'transparent',
  },
  tabContent: {
    minHeight: '400px',
  },
  sectionTitle: {
    fontSize: 'var(--text-3xl)',
    marginBottom: 'var(--space-xl)',
  },
  courseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 'var(--space-xl)',
  },
  certificateGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 'var(--space-lg)',
  },
  certificateCard: {
    textAlign: 'center',
    padding: 'var(--space-xl)',
  },
  certificateIcon: {
    fontSize: '4rem',
    marginBottom: 'var(--space-md)',
  },
  certificateName: {
    fontSize: 'var(--text-xl)',
    marginBottom: 'var(--space-sm)',
  },
  certificateInstructor: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-gray-300)',
    marginBottom: 'var(--space-xs)',
  },
  certificateDate: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-gray-400)',
    marginBottom: 0,
  },
  emptyState: {
    padding: 'var(--space-3xl)',
    textAlign: 'center',
  },
  emptyIcon: {
    fontSize: '5rem',
    display: 'block',
    marginBottom: 'var(--space-lg)',
  },
  settingsCard: {
    padding: 'var(--space-2xl)',
    maxWidth: '600px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-lg)',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-sm)',
  },
  label: {
    fontSize: 'var(--text-sm)',
    fontWeight: 600,
    color: 'var(--color-gray-300)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  input: {
    padding: 'var(--space-md)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'var(--color-white)',
    fontSize: 'var(--text-base)',
  },
  formActions: {
    display: 'flex',
    gap: 'var(--space-md)',
    marginTop: 'var(--space-lg)',
  },
};