import { useState } from 'react';
import CourseCard from '../components/CourseCard';

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [selectedLevel, setSelectedLevel] = useState('Tümü');
  const [priceRange, setPriceRange] = useState('Tümü');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Course data
  const allCourses = [
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
    {
      id: 4,
      title: 'UI/UX Tasarım Masterclass',
      instructor: 'Can Özdemir',
      thumbnail: '/placeholder-course.png',
      rating: 4.6,
      students: 1823,
      price: 349,
      category: 'Tasarım',
      level: 'Başlangıç',
    },
    {
      id: 5,
      title: 'Excel ile Veri Analizi ve Raporlama',
      instructor: 'Zeynep Arslan',
      thumbnail: '/placeholder-course.png',
      rating: 4.5,
      students: 4102,
      price: 199,
      category: 'İş Becerileri',
      level: 'Başlangıç',
    },
    {
      id: 6,
      title: 'Dijital Pazarlama Stratejileri',
      instructor: 'Ali Yurt',
      thumbnail: '/placeholder-course.png',
      rating: 4.8,
      students: 2891,
      price: 279,
      category: 'Pazarlama',
      level: 'Orta',
    },
    {
      id: 7,
      title: 'Node.js Backend Geliştirme',
      instructor: 'Deniz Kaya',
      thumbnail: '/placeholder-course.png',
      rating: 4.7,
      students: 1654,
      price: 329,
      category: 'Web Geliştirme',
      level: 'İleri',
    },
    {
      id: 8,
      title: 'Figma ile Modern UI Tasarımı',
      instructor: 'Selin Tekin',
      thumbnail: '/placeholder-course.png',
      rating: 4.9,
      students: 2156,
      price: 0,
      category: 'Tasarım',
      level: 'Başlangıç',
    },
  ];

  const categories = ['Tümü', 'Web Geliştirme', 'Veri Bilimi', 'Tasarım', 'Pazarlama', 'Dil Eğitimi', 'İş Becerileri'];
  const levels = ['Tümü', 'Başlangıç', 'Orta', 'İleri'];
  const priceRanges = ['Tümü', 'Ücretsiz', '0-200 TL', '200-400 TL', '400+ TL'];

  // Filter and sort courses
  const filteredCourses = allCourses
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Tümü' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'Tümü' || course.level === selectedLevel;

      let matchesPrice = true;
      if (priceRange === 'Ücretsiz') matchesPrice = course.price === 0;
      else if (priceRange === '0-200 TL') matchesPrice = course.price > 0 && course.price <= 200;
      else if (priceRange === '200-400 TL') matchesPrice = course.price > 200 && course.price <= 400;
      else if (priceRange === '400+ TL') matchesPrice = course.price > 400;

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'popular') return b.students - a.students;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <main style={styles.main}>
      <div className="container">
        {/* Page Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>📚 Tüm Eğitimler</h1>
          <p style={styles.subtitle}>
            {filteredCourses.length} eğitim bulundu
          </p>
        </div>

        {/* Search Bar */}
        <div style={styles.searchSection}>
          <div style={styles.searchWrapper}>
            <span style={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Eğitim veya eğitmen ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>

        <div style={styles.content}>
          {/* Sidebar Filters */}
          <aside style={styles.sidebar} className="glass">
            <h3 style={styles.filterTitle}>🎯 Filtreler</h3>

            {/* Category Filter */}
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Kategori</label>
              <div style={styles.filterOptions}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      ...styles.filterBtn,
                      ...(selectedCategory === cat ? styles.filterBtnActive : {}),
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Seviye</label>
              <div style={styles.filterOptions}>
                {levels.map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    style={{
                      ...styles.filterBtn,
                      ...(selectedLevel === level ? styles.filterBtnActive : {}),
                    }}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Fiyat Aralığı</label>
              <div style={styles.filterOptions}>
                {priceRanges.map(range => (
                  <button
                    key={range}
                    onClick={() => setPriceRange(range)}
                    style={{
                      ...styles.filterBtn,
                      ...(priceRange === range ? styles.filterBtnActive : {}),
                    }}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSelectedCategory('Tümü');
                setSelectedLevel('Tümü');
                setPriceRange('Tümü');
                setSearchQuery('');
              }}
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: 'var(--space-lg)' }}
            >
              Filtreleri Temizle
            </button>
          </aside>

          {/* Course Grid */}
          <div style={styles.coursesSection}>
            {/* Toolbar */}
            <div style={styles.toolbar}>
              <div style={styles.sortWrapper}>
                <label style={styles.sortLabel}>Sırala:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={styles.sortSelect}
                >
                  <option value="popular">En Popüler</option>
                  <option value="rating">En Yüksek Puan</option>
                  <option value="price-low">Fiyat (Düşük-Yüksek)</option>
                  <option value="price-high">Fiyat (Yüksek-Düşük)</option>
                </select>
              </div>

              <div style={styles.viewToggle}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    ...styles.viewBtn,
                    ...(viewMode === 'grid' ? styles.viewBtnActive : {}),
                  }}
                >
                  ⊞
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  style={{
                    ...styles.viewBtn,
                    ...(viewMode === 'list' ? styles.viewBtnActive : {}),
                  }}
                >
                  ☰
                </button>
              </div>
            </div>

            {/* Courses */}
            {filteredCourses.length > 0 ? (
              <div style={viewMode === 'grid' ? styles.courseGrid : styles.courseList}>
                {filteredCourses.map((course, idx) => (
                  <div key={course.id} className="stagger-item" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            ) : (
              <div style={styles.noResults} className="glass">
                <span style={styles.noResultsIcon}>😕</span>
                <h3 style={styles.noResultsTitle}>Eğitim Bulunamadı</h3>
                <p style={styles.noResultsText}>
                  Arama kriterlerinize uygun eğitim bulunamadı. Filtreleri değiştirmeyi deneyin.
                </p>
              </div>
            )}
          </div>
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
  searchSection: {
    marginBottom: 'var(--space-2xl)',
  },
  searchWrapper: {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto',
  },
  searchIcon: {
    position: 'absolute',
    left: 'var(--space-lg)',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: 'var(--text-xl)',
  },
  searchInput: {
    width: '100%',
    padding: 'var(--space-lg) var(--space-lg) var(--space-lg) calc(var(--space-lg) * 3)',
    fontSize: 'var(--text-lg)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'var(--color-white)',
    backdropFilter: 'var(--blur-sm)',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    gap: 'var(--space-2xl)',
  },
  sidebar: {
    padding: 'var(--space-xl)',
    height: 'fit-content',
    position: 'sticky',
    top: '100px',
  },
  filterTitle: {
    fontSize: 'var(--text-2xl)',
    marginBottom: 'var(--space-xl)',
    color: 'var(--color-white)',
  },
  filterGroup: {
    marginBottom: 'var(--space-xl)',
  },
  filterLabel: {
    display: 'block',
    fontSize: 'var(--text-sm)',
    fontWeight: 600,
    color: 'var(--color-gray-300)',
    marginBottom: 'var(--space-sm)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  filterOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-xs)',
  },
  filterBtn: {
    padding: 'var(--space-sm) var(--space-md)',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 'var(--radius-md)',
    color: 'var(--color-white)',
    fontSize: 'var(--text-sm)',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all var(--transition-base)',
    textAlign: 'left',
  },
  filterBtnActive: {
    background: 'var(--gradient-primary)',
    borderColor: 'transparent',
    fontWeight: 600,
  },
  coursesSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-xl)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'var(--space-md)',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 'var(--radius-lg)',
    flexWrap: 'wrap',
    gap: 'var(--space-md)',
  },
  sortWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-sm)',
  },
  sortLabel: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-gray-300)',
    fontWeight: 600,
  },
  sortSelect: {
    padding: 'var(--space-sm) var(--space-md)',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: 'var(--radius-md)',
    color: 'var(--color-white)',
    fontSize: 'var(--text-sm)',
    cursor: 'pointer',
  },
  viewToggle: {
    display: 'flex',
    gap: 'var(--space-xs)',
  },
  viewBtn: {
    padding: 'var(--space-sm) var(--space-md)',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: 'var(--radius-md)',
    color: 'var(--color-white)',
    fontSize: 'var(--text-xl)',
    cursor: 'pointer',
    transition: 'all var(--transition-base)',
  },
  viewBtnActive: {
    background: 'var(--gradient-primary)',
    borderColor: 'transparent',
  },
  courseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 'var(--space-xl)',
  },
  courseList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-lg)',
  },
  noResults: {
    padding: 'var(--space-3xl)',
    textAlign: 'center',
  },
  noResultsIcon: {
    fontSize: '5rem',
    display: 'block',
    marginBottom: 'var(--space-lg)',
  },
  noResultsTitle: {
    fontSize: 'var(--text-2xl)',
    marginBottom: 'var(--space-md)',
  },
  noResultsText: {
    fontSize: 'var(--text-base)',
    color: 'var(--color-gray-300)',
  },
};

// Responsive styles
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(max-width: 1024px)');
  if (mediaQuery.matches) {
    styles.content.gridTemplateColumns = '1fr';
    styles.sidebar.position = 'static';
  }
}
