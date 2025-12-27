export default function Rating({ value = 0, max = 5, size = 'md', showValue = true, interactive = false, onChange }) {
    const stars = Array.from({ length: max }, (_, i) => i + 1);

    const handleClick = (rating) => {
        if (interactive && onChange) {
            onChange(rating);
        }
    };

    const sizeStyles = {
        sm: { fontSize: 'var(--text-sm)', gap: 'var(--space-xs)' },
        md: { fontSize: 'var(--text-lg)', gap: 'var(--space-xs)' },
        lg: { fontSize: 'var(--text-2xl)', gap: 'var(--space-sm)' },
    };

    return (
        <div style={{ ...styles.container, ...sizeStyles[size] }}>
            <div style={{ ...styles.stars, ...sizeStyles[size] }}>
                {stars.map((star) => (
                    <span
                        key={star}
                        style={{
                            ...styles.star,
                            color: star <= value ? 'var(--color-accent-yellow)' : 'rgba(255, 255, 255, 0.2)',
                            cursor: interactive ? 'pointer' : 'default',
                        }}
                        onClick={() => handleClick(star)}
                    >
                        {star <= value ? '⭐' : '☆'}
                    </span>
                ))}
            </div>
            {showValue && (
                <span style={styles.value}>{value.toFixed(1)}</span>
            )}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    stars: {
        display: 'flex',
        alignItems: 'center',
    },
    star: {
        transition: 'all var(--transition-fast)',
        userSelect: 'none',
    },
    value: {
        fontSize: 'var(--text-base)',
        fontWeight: 600,
        color: 'var(--color-white)',
        marginLeft: 'var(--space-sm)',
    },
};
