import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            <div className="container">
                <div style={styles.footerContent}>
                    {/* Brand Column */}
                    <div style={styles.column}>
                        <div style={styles.brand}>
                            <span style={styles.brandIcon}>🎓</span>
                            <span style={styles.brandText}>DreamHack</span>
                        </div>
                        <p style={styles.description}>
                            Türkiye'nin en kapsamlı online eğitim platformu. Uzmanlardan öğren, kariyerini ilerlet.
                        </p>
                        <div style={styles.social}>
                            <a href="#" style={styles.socialLink} aria-label="Twitter">🐦</a>
                            <a href="#" style={styles.socialLink} aria-label="LinkedIn">💼</a>
                            <a href="#" style={styles.socialLink} aria-label="Instagram">📸</a>
                            <a href="#" style={styles.socialLink} aria-label="YouTube">📺</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div style={styles.column}>
                        <h4 style={styles.columnTitle}>Hızlı Erişim</h4>
                        <div style={styles.links}>
                            <Link href="/courses" style={styles.link}>Tüm Eğitimler</Link>
                            <Link href="/about" style={styles.link}>Hakkımızda</Link>
                            <Link href="/instructors" style={styles.link}>Eğitmen Ol</Link>
                            <Link href="/corporate" style={styles.link}>Kurumsal</Link>
                        </div>
                    </div>

                    {/* Support */}
                    <div style={styles.column}>
                        <h4 style={styles.columnTitle}>Destek</h4>
                        <div style={styles.links}>
                            <Link href="/help" style={styles.link}>Yardım Merkezi</Link>
                            <Link href="/faq" style={styles.link}>SSS</Link>
                            <Link href="/contact" style={styles.link}>İletişim</Link>
                            <Link href="/terms" style={styles.link}>Kullanım Koşulları</Link>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div style={styles.column}>
                        <h4 style={styles.columnTitle}>Bülten</h4>
                        <p style={styles.newsletterText}>
                            Yeni eğitimler ve fırsatlardan haberdar ol!
                        </p>
                        <div style={styles.newsletter}>
                            <input
                                type="email"
                                placeholder="E-posta adresin"
                                style={styles.newsletterInput}
                            />
                            <button className="btn btn-accent" style={styles.newsletterBtn}>
                                Abone Ol
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={styles.bottom}>
                    <p style={styles.copyright}>
                        © {currentYear} DreamHack. Tüm hakları saklıdır.
                    </p>
                    <div style={styles.bottomLinks}>
                        <Link href="/privacy" style={styles.bottomLink}>Gizlilik Politikası</Link>
                        <span style={styles.separator}>•</span>
                        <Link href="/cookies" style={styles.bottomLink}>Çerez Politikası</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        background: 'rgba(17, 24, 39, 0.9)',
        backdropFilter: 'var(--blur-md)',
        WebkitBackdropFilter: 'var(--blur-md)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: 'var(--space-3xl)',
        padding: 'var(--space-3xl) 0 var(--space-xl)',
    },
    footerContent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--space-2xl)',
        marginBottom: 'var(--space-2xl)',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)',
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        marginBottom: 'var(--space-sm)',
    },
    brandIcon: {
        fontSize: 'var(--text-3xl)',
    },
    brandText: {
        fontSize: 'var(--text-2xl)',
        fontWeight: 800,
        fontFamily: 'var(--font-display)',
        color: 'var(--color-white)',
    },
    description: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-300)',
        lineHeight: 1.6,
        marginBottom: 0,
    },
    social: {
        display: 'flex',
        gap: 'var(--space-sm)',
        marginTop: 'var(--space-sm)',
    },
    socialLink: {
        fontSize: 'var(--text-2xl)',
        padding: 'var(--space-sm)',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(255, 255, 255, 0.1)',
        transition: 'all var(--transition-base)',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
    },
    columnTitle: {
        fontSize: 'var(--text-lg)',
        fontWeight: 700,
        color: 'var(--color-white)',
        marginBottom: 'var(--space-sm)',
        fontFamily: 'var(--font-display)',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
    },
    link: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-300)',
        textDecoration: 'none',
        transition: 'color var(--transition-fast)',
        padding: 'var(--space-xs) 0',
    },
    newsletterText: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-300)',
        marginBottom: 0,
    },
    newsletter: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
    },
    newsletterInput: {
        padding: 'var(--space-md)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'var(--color-white)',
        fontSize: 'var(--text-sm)',
    },
    newsletterBtn: {
        fontSize: 'var(--text-sm)',
        padding: 'var(--space-md)',
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 'var(--space-xl)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        flexWrap: 'wrap',
        gap: 'var(--space-md)',
    },
    copyright: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-400)',
        margin: 0,
    },
    bottomLinks: {
        display: 'flex',
        gap: 'var(--space-md)',
        alignItems: 'center',
    },
    bottomLink: {
        fontSize: 'var(--text-sm)',
        color: 'var(--color-gray-400)',
        textDecoration: 'none',
        transition: 'color var(--transition-fast)',
    },
    separator: {
        color: 'var(--color-gray-600)',
    },
};
