import { useState } from 'react';

export default function Admin() {
  const [activeSection, setActiveSection] = useState('dashboard');

  // Mock data
  const stats = {
    totalUsers: 10234,
    totalCourses: 543,
    totalRevenue: 1567890,
    newUsersThisMonth: 432,
  };

  const recentActivities = [
    { id: 1, action: 'Yeni kullanıcı kaydı', user: 'Ahmet Y.', time: '5 dk önce' },
    { id: 2, action: 'Eğitim satın alımı', user: 'Zeynep K.', time: '12 dk önce' },
    { id: 3, action: 'Yeni eğitim eklendi', user: 'Admin', time: '1 saat önce' },
    { id: 4, action: 'Sertifika verildi', user: 'Can D.', time: '2 saat önce' },
  ];

  const topCourses = [
    { name: 'React & Next.js', students: 2547, revenue: 761530 },
    { name: 'Python Veri Bilimi', students: 3821, revenue: 1524599 },
    { name: 'İngilizce Konuşma', students: 5234, revenue: 1303266 },
  ];

  return (
    <main style={styles.main}>
      <div className="container">
        {/* Page Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>🛠️ Yönetim Paneli</h1>
          <p style={styles.subtitle}>Platform yönetimi ve istatistikler</p>
        </div>

        {/* Navigation */}
        <div style={styles.nav}>
          <button
            onClick={() => setActiveSection('dashboard')}
            style={{
              ...styles.navBtn,
              ...(activeSection === 'dashboard' ? styles.navBtnActive : {}),
            }}
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => setActiveSection('users')}
            style={{
              ...styles.navBtn,
              ...(activeSection === 'users' ? styles.navBtnActive : {}),
            }}
          >
            👥 Kullanıcılar
          </button>
          <button
            onClick={() => setActiveSection('courses')}
            style={{
              ...styles.navBtn,
              ...(activeSection === 'courses' ? styles.navBtnActive : {}),
            }}
          >
            📚 Eğitimler
          </button>
          <button
            onClick={() => setActiveSection('reports')}
            style={{
              ...styles.navBtn,
              ...(activeSection === 'reports' ? styles.navBtnActive : {}),
            }}
          >
            📈 Raporlar
          </button>
        </div>

        {/* Dashboard Content */}
        {activeSection === 'dashboard' && (
          <div>
            {/* Stats Grid */}
            <div style={styles.statsGrid}>
              <div className="glass card" style={styles.statCard}>
                <div style={styles.statIcon}>👥</div>
                <div style={styles.statContent}>
                  <div style={styles.statValue}>{stats.totalUsers.toLocaleString('tr-TR')}</div>
                  <div style={styles.statLabel}>Toplam Kullanıcı</div>
                  <div style={styles.statChange}>
                    <span style={{ color: 'var(--color-accent-green)' }}>↑ {stats.newUsersThisMonth}</span> bu ay
                  </div>
                </div>
              </div>

              <div className="glass card" style={styles.statCard}>
                <div style={styles.statIcon}>📚</div>
                <div style={styles.statContent}>
                  <div style={styles.statValue}>{stats.totalCourses.toLocaleString('tr-TR')}</div>
                  <div style={styles.statLabel}>Toplam Eğitim</div>
                  <div style={styles.statChange}>
                    <span style={{ color: 'var(--color-accent-green)' }}>↑ 12</span> bu ay
                  </div>
                </div>
              </div>

              <div className="glass card" style={styles.statCard}>
                <div style={styles.statIcon}>💰</div>
                <div style={styles.statContent}>
                  <div style={styles.statValue}>₺{(stats.totalRevenue / 1000).toFixed(0)}K</div>
                  <div style={styles.statLabel}>Toplam Gelir</div>
                  <div style={styles.statChange}>
                    <span style={{ color: 'var(--color-accent-green)' }}>↑ 15%</span> bu ay
                  </div>
                </div>
              </div>

              <div className="glass card" style={styles.statCard}>
                <div style={styles.statIcon}>⭐</div>
                <div style={styles.statContent}>
                  <div style={styles.statValue}>4.8</div>
                  <div style={styles.statLabel}>Ortalama Puan</div>
                  <div style={styles.statChange}>
                    <span style={{ color: 'var(--color-accent-green)' }}>↑ 0.3</span> geçen aya göre
                  </div>
                </div>
              </div>
            </div>

            {/* Charts and Activity Section */}
            <div style={styles.contentGrid}>
              {/* Chart Placeholder */}
              <div className="glass" style={styles.chartCard}>
                <h3 style={styles.cardTitle}>📈 Gelir Grafiği</h3>
                <div style={styles.chartPlaceholder}>
                  <div style={styles.barChart}>
                    {[65, 45, 80, 60, 95, 70, 85].map((height, i) => (
                      <div key={i} style={styles.barWrapper}>
                        <div style={{ ...styles.bar, height: `${height}%` }} />
                        <span style={styles.barLabel}>{['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass" style={styles.activityCard}>
                <h3 style={styles.cardTitle}>🔔 Son Aktiviteler</h3>
                <div style={styles.activityList}>
                  {recentActivities.map(activity => (
                    <div key={activity.id} style={styles.activityItem}>
                      <div style={styles.activityDot} />
                      <div style={styles.activityContent}>
                        <div style={styles.activityAction}>{activity.action}</div>
                        <div style={styles.activityMeta}>
                          {activity.user} • {activity.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Courses */}
            <div className="glass" style={styles.topCoursesCard}>
              <h3 style={styles.cardTitle}>🏆 En Popüler Eğitimler</h3>
              <div style={styles.topCoursesList}>
                {topCourses.map((course, idx) => (
                  <div key={idx} style={styles.topCourseItem}>
                    <div style={styles.courseRank}>#{idx + 1}</div>
                    <div style={styles.courseInfo}>
                      <div style={styles.courseName}>{course.name}</div>
                      <div style={styles.courseStats}>
                        {course.students.toLocaleString('tr-TR')} öğrenci •
                        ₺{course.revenue.toLocaleString('tr-TR')} gelir
                      </div>
                    </div>
                    <div style={styles.courseProgress}>
                      <div style={{ ...styles.progressBar, width: `${(course.students / 6000) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Users Section */}
        {activeSection === 'users' && (
          <div className="glass" style={styles.sectionCard}>
            <h2 style={styles.sectionTitle}>👥 Kullanıcı Yönetimi</h2>
            <p style={styles.sectionText}>Kullanıcı listesi ve yönetim araçları burada görünecek.</p>
            <button className="btn btn-primary">Yeni Kullanıcı Ekle</button>
          </div>
        )}

        {/* Courses Section */}
        {activeSection === 'courses' && (
          <div className="glass" style={styles.sectionCard}>
            <h2 style={styles.sectionTitle}>📚 Eğitim Yönetimi</h2>
            <p style={styles.sectionText}>Eğitim listesi ve düzenleme araçları burada görünecek.</p>
            <button className="btn btn-accent">Yeni Eğitim Ekle</button>
          </div>
        )}

        {/* Reports Section */}
        {activeSection === 'reports' && (
          <div className="glass" style={styles.sectionCard}>
            <h2 style={styles.sectionTitle}>📈 Raporlar</h2>
            <p style={styles.sectionText}>Detaylı gelir ve performans raporları burada görünecek.</p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
              <button className="btn btn-primary">Gelir Raporu İndir</button>
              <button className="btn btn-secondary">Kullanıcı Raporu İndir</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    padding: 'var(--space-2xl) 0',
  },
  header: {
    textAlign: 'center',
    marginBottom: 'var(--space-2xl)',
  },
  title: {
    fontSize: 'var(--text-5xl)',
    marginBottom: 'var(--space-md)',
  },
  subtitle: {
    fontSize: 'var(--text-xl)',
    color: 'var(--color-gray-300)',
  },
  nav: {
    display: 'flex',
    gap: 'var(--space-sm)',
    marginBottom: 'var(--space-2xl)',
    flexWrap: 'wrap',
  },
  navBtn: {
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
  navBtnActive: {
    background: 'var(--gradient-primary)',
    borderColor: 'transparent',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 'var(--space-lg)',
    marginBottom: 'var(--space-2xl)',
  },
  statCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-lg)',
    padding: 'var(--space-xl)',
  },
  statIcon: {
    fontSize: '3.5rem',
  },
  statContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-xs)',
  },
  statValue: {
    fontSize: 'var(--text-4xl)',
    fontWeight: 800,
    color: 'var(--color-white)',
    fontFamily: 'var(--font-display)',
  },
  statLabel: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-gray-400)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  statChange: {
    fontSize: 'var(--text-xs)',
    color: 'var(--color-gray-500)',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 'var(--space-xl)',
    marginBottom: 'var(--space-2xl)',
  },
  chartCard: {
    padding: 'var(--space-xl)',
  },
  activityCard: {
    padding: 'var(--space-xl)',
  },
  cardTitle: {
    fontSize: 'var(--text-2xl)',
    marginBottom: 'var(--space-lg)',
  },
  chartPlaceholder: {
    height: '300px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  barChart: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 'var(--space-md)',
    height: '100%',
    width: '100%',
  },
  barWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--space-sm)',
    height: '100%',
  },
  bar: {
    width: '100%',
    background: 'var(--gradient-success)',
    borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
    transition: 'all var(--transition-base)',
    minHeight: '20px',
  },
  barLabel: {
    fontSize: 'var(--text-xs)',
    color: 'var(--color-gray-400)',
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-md)',
  },
  activityItem: {
    display: 'flex',
    gap: 'var(--space-md)',
    alignItems: 'flex-start',
  },
  activityDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'var(--color-accent-green)',
    marginTop: 'var(--space-xs)',
    flexShrink: 0,
  },
  activityContent: {
    flex: 1,
  },
  activityAction: {
    fontSize: 'var(--text-base)',
    color: 'var(--color-white)',
    marginBottom: 'var(--space-xs)',
  },
  activityMeta: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-gray-400)',
  },
  topCoursesCard: {
    padding: 'var(--space-xl)',
  },
  topCoursesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-lg)',
  },
  topCourseItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-lg)',
    padding: 'var(--space-md)',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 'var(--radius-lg)',
  },
  courseRank: {
    fontSize: 'var(--text-3xl)',
    fontWeight: 800,
    color: 'var(--color-accent-yellow)',
    fontFamily: 'var(--font-display)',
    minWidth: '60px',
    textAlign: 'center',
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: 'var(--text-lg)',
    fontWeight: 600,
    color: 'var(--color-white)',
    marginBottom: 'var(--space-xs)',
  },
  courseStats: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-gray-400)',
  },
  courseProgress: {
    width: '100px',
    height: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 'var(--radius-full)',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    background: 'var(--gradient-primary)',
    borderRadius: 'var(--radius-full)',
  },
  sectionCard: {
    padding: 'var(--space-3xl)',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 'var(--text-4xl)',
    marginBottom: 'var(--space-lg)',
  },
  sectionText: {
    fontSize: 'var(--text-lg)',
    color: 'var(--color-gray-300)',
    marginBottom: 'var(--space-xl)',
  },
};