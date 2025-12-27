import { useRouter } from 'next/router';
import { useState } from 'react';
import Rating from '../../components/Rating';

export default function CourseDetail() {
    const router = useRouter();
    const { id } = router.query;

    const [activeTab, setActiveTab] = useState('overview');
    const [userRating, setUserRating] = useState(0);

    // Mock course data
    const course = {
        id: id || '1',
        title: 'Modern Web Geliştirme: React & Next.js Masterclass',
        instructor: {
            name: 'Ayşe Yılmaz',
            avatar: '👩‍💻',
            bio: '10 yıllık deneyimli Full Stack Developer. Google ve Meta\'da çalışmış, 50,000+ öğrenci eğitmiş.',
            courses: 12,
            students: 45000,
        },
        thumbnail: '/placeholder-course.png',
        videoPreview: '/placeholder-course.png',
        rating: 4.8,
        reviewCount: 1247,
        students: 2547,
        price: 299,
        originalPrice: 499,
        category: 'Web Geliştirme',
        level: 'Orta',
        duration: '42 saat',
        language: 'Türkçe',
        lastUpdated: 'Kasım 2024',
        description: 'React ve Next.js ile modern, profesyonel web uygulamaları geliştirmeyi öğrenin. Sıfırdan ileri seviyeye kapsamlı eğitim.',
        whatYouLearn: [
            'React temellerinden ileri konularına kadar her şey',
            'Next.js ile server-side rendering ve static site generation',
            'Modern state management (Context API, Zustand)',
            'API entegrasyonu ve veri yönetimi',
            'Responsive ve erişilebilir UI geliştirme',
            'Production-ready proje deployment',
        ],
        requirements: [
            'Temel HTML, CSS ve JavaScript bilgisi',
            'Kod editörü (VS Code önerilir)',
            'İnternet bağlantısı',
        ],
        curriculum: [
            {
                title: 'React Temelleri',
                lessons: [
                    { title: 'React Nedir ve Neden Kullanmalıyız?', duration: '12:34', isPreview: true },
                    { title: 'İlk React Projesi', duration: '18:45', isPreview: false },
                    { title: 'Components ve Props', duration: '25:12', isPreview: false },
                    { title: 'State ve Lifecycle', duration: '22:08', isPreview: false },
                ],
            },
            {
                title: 'Hooks Derinlemesine',
                lessons: [
                    { title: 'useState Hook', duration: '15:30', isPreview: false },
                    { title: 'useEffect Hook', duration: '20:15', isPreview: false },
                    { title: 'Custom Hooks', duration: '18:42', isPreview: false },
                ],
            },
            {
                title: 'Next.js ile SSR ve SSG',
                lessons: [
                    { title: 'Next.js Kurulumu', duration: '10:20', isPreview: false },
                    { title: 'Pages ve Routing', duration: '16:35', isPreview: false },
                    { title: 'getServerSideProps', duration: '22:10', isPreview: false },
                    { title: 'getStaticProps ve getStaticPaths', duration: '25:45', isPreview: false },
                ],
            },
        ],
        reviews: [
            {
                id: 1,
                user: 'Mehmet Demir',
                avatar: '👨‍💼',
                rating: 5,
                date: '15 Kasım 2024',
                comment: 'Harika bir eğitim! Ayşe hoca anlatımı çok net ve örnekler çok pratik. Kesinlikle tavsiye ederim.',
            },
            {
                id: 2,
                user: 'Zeynep Kaya',
                avatar: '👩‍🎓',
                rating: 4,
                date: '10 Kasım 2024',
                comment: 'İçerik çok kapsamlı. Bazı kısımlar hızlı ilerliyor ama genel olarak çok faydalı.',
            },
        ],
    };

    const ratingDistribution = [
        { stars: 5, count: 890, percentage: 71 },
        { stars: 4, count: 250, percentage: 20 },
        { stars: 3, count: 80, percentage: 6 },
        { stars: 2, count: 20, percentage: 2 },
        { stars: 1, count: 7, percentage: 1 },
    ];

    return (
        <main style={styles.main}>
            {/* Hero Section */}
            <div style={styles.hero}>
                <div className="container">
                    <div style={styles.heroContent}>
                        <div style={styles.heroLeft}>
                            <div style={styles.breadcrumb}>
                                <span>Ana Sayfa</span> / <span>Eğitimler</span> / <span>{course.category}</span>
                            </div>
                            <h1 style={styles.courseTitle}>{course.title}</h1>
                            <p style={styles.courseDescription}>{course.description}</p>

                            <div style={styles.courseMeta}>
                                <div style={styles.metaItem}>
                                    <Rating value={course.rating} size="sm" />
                                    <span style={styles.reviewCount}>({course.reviewCount} değerlendirme)</span>
                                </div>
                                <span style={styles.divider}>•</span>
                                <div style={styles.metaItem}>
                                    👥 {course.students.toLocaleString('tr-TR')} öğrenci
                                </div>
                                <span style={styles.divider}>•</span>
                                <div style={styles.metaItem}>
                                    🎓 {course.level}
                                </div>
                            </div>

                            <div style={styles.instructor}>
                                <span style={styles.instructorAvatar}>{course.instructor.avatar}</span>
                                <span>Eğitmen: <strong>{course.instructor.name}</strong></span>
                            </div>
                        </div>

                        <div style={styles.heroRight}>
                            <div className="glass" style={styles.purchaseCard}>
                                <div style={styles.videoPreview}>
                                    <div style={styles.playButton}>▶</div>
                                    <span style={styles.previewText}>Önizleme</span>
                                </div>

                                <div style={styles.priceSection}>
                                    <div style={styles.currentPrice}>₺{course.price}</div>
                                    <div style={styles.originalPrice}>₺{course.originalPrice}</div>
                                    <div style={styles.discount}>%{Math.round((1 - course.price / course.originalPrice) * 100)} İndirim!</div>
                                </div>

                                <button className="btn btn-accent btn-lg" style={{ width: '100%' }}>
                                    🛒 Satın Al
                                </button>
                                <button className="btn btn-secondary" style={{ width: '100%' }}>
                                    ❤️ Favorilere Ekle
                                </button>

                                <div style={styles.includes}>
                                    <h4 style={styles.includesTitle}>Bu eğitim şunları içerir:</h4>
                                    <div style={styles.includesList}>
                                        <div style={styles.includeItem}>📹 {course.duration} video içerik</div>
                                        <div style={styles.includeItem}>📱 Mobil erişim</div>
                                        <div style={styles.includeItem}>🎓 Tamamlama sertifikası</div>
                                        <div style={styles.includeItem}>♾️ Ömür boyu erişim</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Tabs */}
            <div className="container">
                <div style={styles.tabs}>
                    <button
                        onClick={() => setActiveTab('overview')}
                        style={{ ...styles.tab, ...(activeTab === 'overview' ? styles.tabActive : {}) }}
                    >
                        📖 Genel Bakış
                    </button>
                    <button
                        onClick={() => setActiveTab('curriculum')}
                        style={{ ...styles.tab, ...(activeTab === 'curriculum' ? styles.tabActive : {}) }}
                    >
                        📚 Müfredat
                    </button>
                    <button
                        onClick={() => setActiveTab('instructor')}
                        style={{ ...styles.tab, ...(activeTab === 'instructor' ? styles.tabActive : {}) }}
                    >
                        👨‍🏫 Eğitmen
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        style={{ ...styles.tab, ...(activeTab === 'reviews' ? styles.tabActive : {}) }}
                    >
                        ⭐ Değerlendirmeler
                    </button>
                </div>

                {/* Tab Content */}
                <div style={styles.tabContent}>
                    {activeTab === 'overview' && (
                        <div className="glass" style={styles.overviewSection}>
                            <h2 style={styles.sectionTitle}>Neler Öğreneceksiniz?</h2>
                            <div style={styles.learningGrid}>
                                {course.whatYouLearn.map((item, idx) => (
                                    <div key={idx} style={styles.learningItem}>
                                        <span style={styles.checkmark}>✓</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h2 style={{ ...styles.sectionTitle, marginTop: 'var(--space-2xl)' }}>Gereksinimler</h2>
                            <ul style={styles.requirementsList}>
                                {course.requirements.map((req, idx) => (
                                    <li key={idx} style={styles.requirementItem}>{req}</li>
                                ))}
                            </ul>

                            <h2 style={{ ...styles.sectionTitle, marginTop: 'var(--space-2xl)' }}>Açıklama</h2>
                            <p style={styles.longDescription}>
                                Bu kapsamlı eğitimde React ve Next.js kullanarak modern web uygulamaları geliştirmeyi sıfırdan ileri seviyeye kadar öğreneceksiniz.
                                Eğitim boyunca gerçek dünya projeleri yapacak ve production ortamına nasıl deploy edeceğinizi öğreneceksiniz.
                            </p>
                        </div>
                    )}

                    {activeTab === 'curriculum' && (
                        <div className="glass" style={styles.curriculumSection}>
                            {course.curriculum.map((module, idx) => (
                                <details key={idx} style={styles.moduleDetails} open={idx === 0}>
                                    <summary style={styles.moduleSummary}>
                                        <span style={styles.moduleTitle}>{module.title}</span>
                                        <span style={styles.lessonCount}>{module.lessons.length} ders</span>
                                    </summary>
                                    <div style={styles.lessonsList}>
                                        {module.lessons.map((lesson, lessonIdx) => (
                                            <div key={lessonIdx} style={styles.lessonItem}>
                                                <span style={styles.lessonIcon}>▶</span>
                                                <span style={styles.lessonTitle}>{lesson.title}</span>
                                                {lesson.isPreview && <span style={styles.previewBadge}>Önizleme</span>}
                                                <span style={styles.lessonDuration}>{lesson.duration}</span>
                                            </div>
                                        ))}
                                    </div>
                                </details>
                            ))}
                        </div>
                    )}

                    {activeTab === 'instructor' && (
                        <div className="glass" style={styles.instructorSection}>
                            <div style={styles.instructorHeader}>
                                <div style={styles.instructorAvatarLarge}>{course.instructor.avatar}</div>
                                <div>
                                    <h2 style={styles.instructorName}>{course.instructor.name}</h2>
                                    <p style={styles.instructorBio}>{course.instructor.bio}</p>
                                    <div style={styles.instructorStats}>
                                        <div style={styles.instructorStat}>
                                            <strong>{course.instructor.courses}</strong> Eğitim
                                        </div>
                                        <div style={styles.instructorStat}>
                                            <strong>{course.instructor.students.toLocaleString('tr-TR')}</strong> Öğrenci
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="glass" style={styles.reviewsSection}>
                            <div style={styles.reviewsHeader}>
                                <div style={styles.ratingOverview}>
                                    <div style={styles.overallRating}>{course.rating}</div>
                                    <Rating value={course.rating} size="lg" showValue={false} />
                                    <div style={styles.totalReviews}>{course.reviewCount} değerlendirme</div>
                                </div>

                                <div style={styles.ratingBars}>
                                    {ratingDistribution.map((dist) => (
                                        <div key={dist.stars} style={styles.ratingRow}>
                                            <span style={styles.starLabel}>{dist.stars} ⭐</span>
                                            <div style={styles.ratingBarBg}>
                                                <div style={{ ...styles.ratingBarFill, width: `${dist.percentage}%` }} />
                                            </div>
                                            <span style={styles.ratingPercentage}>{dist.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={styles.reviewsList}>
                                {course.reviews.map((review) => (
                                    <div key={review.id} style={styles.reviewItem}>
                                        <div style={styles.reviewHeader}>
                                            <div style={styles.reviewerInfo}>
                                                <span style={styles.reviewerAvatar}>{review.avatar}</span>
                                                <div>
                                                    <div style={styles.reviewerName}>{review.user}</div>
                                                    <div style={styles.reviewDate}>{review.date}</div>
                                                </div>
                                            </div>
                                            <Rating value={review.rating} size="sm" showValue={false} />
                                        </div>
                                        <p style={styles.reviewComment}>{review.comment}</p>
                                    </div>
                                ))}
                            </div>

                            <div style={styles.addReview}>
                                <h3 style={styles.addReviewTitle}>Yorumunuzu Paylaşın</h3>
                                <Rating
                                    value={userRating}
                                    size="lg"
                                    interactive={true}
                                    onChange={setUserRating}
                                    showValue={false}
                                />
                                <textarea
                                    placeholder="Eğitim hakkındaki düşüncelerinizi paylaşın..."
                                    style={styles.reviewTextarea}
                                    rows={4}
                                />
                                <button className="btn btn-primary">Yorum Gönder</button>
                            </div>
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
    },
    hero: {
        background: 'linear-gradient(135deg, rgba(30, 60, 114, 0.95) 0%, rgba(42, 82, 152, 0.95) 100%)',
        padding: 'var(--space-3xl) 0 var(--space-2xl)',
        marginBottom: 'var(--space-3xl)',
    },
    heroContent: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: 'var(--space-3xl)',
        alignItems: 'start',
    },
    heroLeft: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-lg)',
    },
    breadcrumb: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-300)',
    },
    courseTitle: {
        fontSize: 'var(--text-5xl)',
        lineHeight: 1.2,
        marginBottom: 0,
    },
    courseDescription: {
        fontSize: 'var(--text-xl)',
        color: 'var(--color-gray-200)',
        lineHeight: 1.6,
    },
    courseMeta: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        flexWrap: 'wrap',
        fontSize: 'var(--text-base)',
    },
    metaItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-xs)',
    },
    reviewCount: {
        color: 'var(--color-gray-300)',
    },
    divider: {
        color: 'var(--color-gray-600)',
    },
    instructor: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        fontSize: 'var(--text-base)',
    },
    instructorAvatar: {
        fontSize: 'var(--text-2xl)',
    },
    heroRight: {
        position: 'sticky',
        top: '100px',
    },
    purchaseCard: {
        padding: 'var(--space-xl)',
    },
    videoPreview: {
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        background: 'var(--gradient-dark)',
        borderRadius: 'var(--radius-xl)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'var(--space-lg)',
        cursor: 'pointer',
        overflow: 'hidden',
    },
    playButton: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--text-2xl)',
        transition: 'all var(--transition-base)',
    },
    previewText: {
        position: 'absolute',
        bottom: 'var(--space-md)',
        right: 'var(--space-md)',
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
    },
    priceSection: {
        marginBottom: 'var(--space-xl)',
    },
    currentPrice: {
        fontSize: 'var(--text-5xl)',
        fontWeight: 900,
        color: 'var(--color-white)',
        fontFamily: 'var(--font-display)',
    },
    originalPrice: {
        fontSize: 'var(--text-xl)',
        color: 'var(--color-gray-400)',
        textDecoration: 'line-through',
    },
    discount: {
        display: 'inline-block',
        padding: 'var(--space-xs) var(--space-md)',
        background: 'var(--color-accent-orange)',
        color: 'white',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--text-sm)',
        fontWeight: 700,
        marginTop: 'var(--space-sm)',
    },
    includes: {
        marginTop: 'var(--space-xl)',
        paddingTop: 'var(--space-xl)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    includesTitle: {
        fontSize: 'var(--text-base)',
        fontWeight: 700,
        marginBottom: 'var(--space-md)',
    },
    includesList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
    },
    includeItem: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-300)',
    },
    tabs: {
        display: 'flex',
        gap: 'var(--space-sm)',
        marginBottom: 'var(--space-2xl)',
        borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
        flexWrap: 'wrap',
    },
    tab: {
        padding: 'var(--space-md) var(--space-xl)',
        background: 'transparent',
        border: 'none',
        borderBottom: '3px solid transparent',
        color: 'var(--color-gray-400)',
        fontSize: 'var(--text-base)',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
        marginBottom: '-2px',
    },
    tabActive: {
        color: 'var(--color-white)',
        borderBottomColor: 'var(--color-primary-500)',
    },
    tabContent: {
        marginBottom: 'var(--space-3xl)',
    },
    overviewSection: {
        padding: 'var(--space-2xl)',
    },
    sectionTitle: {
        fontSize: 'var(--text-3xl)',
        marginBottom: 'var(--space-xl)',
    },
    learningGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--space-md)',
    },
    learningItem: {
        display: 'flex',
        gap: 'var(--space-md)',
        alignItems: 'flex-start',
        fontSize: 'var(--text-base)',
    },
    checkmark: {
        color: 'var(--color-accent-green)',
        fontSize: 'var(--text-xl)',
        fontWeight: 700,
    },
    requirementsList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
    },
    requirementItem: {
        fontSize: 'var(--text-base)',
        paddingLeft: 'var(--space-lg)',
        position: 'relative',
    },
    longDescription: {
        fontSize: 'var(--text-lg)',
        lineHeight: 1.8,
        color: 'var(--color-gray-200)',
    },
    curriculumSection: {
        padding: 'var(--space-xl)',
    },
    moduleDetails: {
        marginBottom: 'var(--space-lg)',
        borderRadius: 'var(--radius-lg)',
        background: 'rgba(255, 255, 255, 0.05)',
    },
    moduleSummary: {
        padding: 'var(--space-lg)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 'var(--text-lg)',
        fontWeight: 700,
    },
    moduleTitle: {},
    lessonCount: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-400)',
    },
    lessonsList: {
        padding: '0 var(--space-lg) var(--space-lg)',
    },
    lessonItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-md)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    },
    lessonIcon: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-500)',
    },
    lessonTitle: {
        flex: 1,
        fontSize: 'var(--text-base)',
    },
    previewBadge: {
        padding: 'var(--space-xs) var(--space-sm)',
        background: 'var(--color-accent-green)',
        color: 'white',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--text-xs)',
        fontWeight: 600,
    },
    lessonDuration: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-400)',
    },
    instructorSection: {
        padding: 'var(--space-2xl)',
    },
    instructorHeader: {
        display: 'flex',
        gap: 'var(--space-xl)',
        alignItems: 'flex-start',
    },
    instructorAvatarLarge: {
        fontSize: '5rem',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'var(--gradient-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    instructorName: {
        fontSize: 'var(--text-3xl)',
        marginBottom: 'var(--space-md)',
    },
    instructorBio: {
        fontSize: 'var(--text-lg)',
        color: 'var(--color-gray-200)',
        marginBottom: 'var(--space-lg)',
    },
    instructorStats: {
        display: 'flex',
        gap: 'var(--space-xl)',
    },
    instructorStat: {
        fontSize: 'var(--text-base)',
        color: 'var(--color-gray-300)',
    },
    reviewsSection: {
        padding: 'var(--space-2xl)',
    },
    reviewsHeader: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 'var(--space-3xl)',
        marginBottom: 'var(--space-3xl)',
        paddingBottom: 'var(--space-3xl)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    ratingOverview: {
        textAlign: 'center',
    },
    overallRating: {
        fontSize: '5rem',
        fontWeight: 900,
        color: 'var(--color-accent-yellow)',
        fontFamily: 'var(--font-display)',
        marginBottom: 'var(--space-sm)',
    },
    totalReviews: {
        fontSize: 'var(--text-base)',
        color: 'var(--color-gray-400)',
        marginTop: 'var(--space-sm)',
    },
    ratingBars: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
    },
    ratingRow: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
    },
    starLabel: {
        fontSize: 'var(--text-sm)',
        minWidth: '50px',
    },
    ratingBarBg: {
        flex: 1,
        height: '8px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 'var(--radius-full)',
        overflow: 'hidden',
    },
    ratingBarFill: {
        height: '100%',
        background: 'var(--color-accent-yellow)',
        borderRadius: 'var(--radius-full)',
    },
    ratingPercentage: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-400)',
        minWidth: '40px',
        textAlign: 'right',
    },
    reviewsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-xl)',
        marginBottom: 'var(--space-3xl)',
    },
    reviewItem: {
        padding: 'var(--space-xl)',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 'var(--radius-lg)',
    },
    reviewHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 'var(--space-md)',
    },
    reviewerInfo: {
        display: 'flex',
        gap: 'var(--space-md)',
        alignItems: 'center',
    },
    reviewerAvatar: {
        fontSize: 'var(--text-3xl)',
    },
    reviewerName: {
        fontSize: 'var(--text-base)',
        fontWeight: 700,
    },
    reviewDate: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-400)',
    },
    reviewComment: {
        fontSize: 'var(--text-base)',
        lineHeight: 1.6,
        color: 'var(--color-gray-200)',
    },
    addReview: {
        padding: 'var(--space-xl)',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-lg)',
    },
    addReviewTitle: {
        fontSize: 'var(--text-2xl)',
        marginBottom: 0,
    },
    reviewTextarea: {
        width: '100%',
        padding: 'var(--space-md)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'var(--color-white)',
        fontSize: 'var(--text-base)',
        fontFamily: 'var(--font-sans)',
        resize: 'vertical',
    },
};
