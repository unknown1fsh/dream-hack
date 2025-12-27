import Image from 'next/image';
import Link from 'next/link';

export default function CourseCard({ course, showProgress = false }) {
    const {
        id,
        title,
        instructor,
        thumbnail,
        rating = 4.5,
        students = 0,
        price,
        category,
        level = 'Başlangıç',
        progress = 0,
    } = course;

    return (
        <Link href={`/courses/${id}`} style={{ textDecoration: 'none' }}>
            <div className="card hover-glow" style={styles.card}>
                {/* Thumbnail */}
                <div style={styles.thumbnailWrapper}>
                    <Image
                        src={thumbnail || '/placeholder-course.png'}
                        alt={title}
                        width={400}
                        height={225}
                        style={styles.thumbnail}
                    />
                    {category && (
                        <span style={styles.badge} className="glass">
                            {category}
                        </span>
                    )}
                    {level && (
                        <span style={{ ...styles.levelBadge, ...getLevelColor(level) }}>
                            {level}
                        </span>
                    )}
                </div>

                {/* Content */}
                <div style={styles.content}>
                    <h3 style={styles.title}>{title}</h3>

                    <div style={styles.instructor}>
                        <span style={styles.instructorIcon}>👨‍🏫</span>
                        <span style={styles.instructorName}>{instructor}</span>
                    </div>

                    {/* Rating & Students */}
                    <div style={styles.meta}>
                        <div style={styles.rating}>
                            <span style={styles.star}>⭐</span>
                            <span style={styles.ratingValue}>{rating.toFixed(1)}</span>
                        </div>
                        <span style={styles.divider}>•</span>
                        <span style={styles.students}>
                            {formatStudentCount(students)} öğrenci
                        </span>
                    </div>

                    {/* Progress Bar (if applicable) */}
                    {showProgress && progress > 0 && (
                        <div style={styles.progressWrapper}>
                            <div style={styles.progressBar}>
                                <div style={{ ...styles.progressFill, width: `${progress}%` }} />
                            </div>
                            <span style={styles.progressText}>{progress}% tamamlandı</span>
                        </div>
                    )}

                    {/* Price */}
                    <div style={styles.footer}>
                        {price === 0 || price === '0' ? (
                            <span style={styles.freePrice}>ÜCRETSİZ</span>
                        ) : (
                            <span style={styles.price}>₺{price}</span>
                        )}
                        <button className="btn btn-primary btn-sm" style={styles.ctaBtn}>
                            {showProgress && progress > 0 ? 'Devam Et' : 'İncele'}
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

// Helper functions
function formatStudentCount(count) {
    if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count;
}

function getLevelColor(level) {
    const colors = {
        'Başlangıç': { background: 'rgba(6, 214, 160, 0.2)', color: 'var(--color-accent-green)' },
        'Orta': { background: 'rgba(255, 210, 63, 0.2)', color: 'var(--color-accent-yellow)' },
        'İleri': { background: 'rgba(255, 107, 53, 0.2)', color: 'var(--color-accent-orange)' },
    };
    return colors[level] || colors['Başlangıç'];
}

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'pointer',
        height: '100%',
        transition: 'all var(--transition-base)',
    },
    thumbnailWrapper: {
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        marginBottom: 'var(--space-md)',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform var(--transition-slow)',
    },
    badge: {
        position: 'absolute',
        top: 'var(--space-md)',
        left: 'var(--space-md)',
        padding: 'var(--space-xs) var(--space-md)',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--text-xs)',
        fontWeight: 700,
        color: 'var(--color-white)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    levelBadge: {
        position: 'absolute',
        top: 'var(--space-md)',
        right: 'var(--space-md)',
        padding: 'var(--space-xs) var(--space-sm)',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--text-xs)',
        fontWeight: 600,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
        flex: 1,
    },
    title: {
        fontSize: 'var(--text-lg)',
        fontWeight: 700,
        color: 'var(--color-white)',
        marginBottom: 'var(--space-xs)',
        lineHeight: 1.3,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
    instructor: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-xs)',
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-300)',
    },
    instructorIcon: {
        fontSize: 'var(--text-base)',
    },
    instructorName: {
        fontWeight: 500,
    },
    meta: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-300)',
    },
    rating: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-xs)',
    },
    star: {
        fontSize: 'var(--text-sm)',
    },
    ratingValue: {
        fontWeight: 600,
        color: 'var(--color-accent-yellow)',
    },
    divider: {
        color: 'var(--color-gray-600)',
    },
    students: {
        fontSize: 'var(--text-sm)',
    },
    progressWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-xs)',
        marginTop: 'var(--space-sm)',
    },
    progressBar: {
        width: '100%',
        height: '6px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 'var(--radius-full)',
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        background: 'var(--gradient-success)',
        borderRadius: 'var(--radius-full)',
        transition: 'width var(--transition-slow)',
    },
    progressText: {
        fontSize: 'var(--text-xs)',
        color: 'var(--color-gray-400)',
        fontWeight: 500,
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 'auto',
        paddingTop: 'var(--space-md)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    price: {
        fontSize: 'var(--text-2xl)',
        fontWeight: 800,
        color: 'var(--color-white)',
        fontFamily: 'var(--font-display)',
    },
    freePrice: {
        fontSize: 'var(--text-lg)',
        fontWeight: 800,
        color: 'var(--color-accent-green)',
        fontFamily: 'var(--font-display)',
    },
    ctaBtn: {
        padding: 'var(--space-sm) var(--space-lg)',
    },
};
