import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header style={styles.header}>
            <div className="container">
                <div style={styles.headerContent}>
                    {/* Logo */}
                    <Link href="/" style={styles.logo}>
                        <span style={styles.logoIcon}>🎓</span>
                        <span style={styles.logoText}>Dream<span style={{ color: 'var(--color-accent-yellow)' }}>Hack</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav style={styles.desktopNav}>
                        <Link href="/" style={styles.navLink}>
                            Ana Sayfa
                        </Link>
                        <Link href="/courses" style={styles.navLink}>
                            Eğitimler
                        </Link>
                        <Link href="/profile" style={styles.navLink}>
                            Profilim
                        </Link>
                        <Link href="/admin" style={styles.navLink}>
                            Yönetim
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div style={styles.actions}>
                        <button className="btn btn-secondary btn-sm">Giriş Yap</button>
                        <button className="btn btn-primary btn-sm">Kayıt Ol</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        style={styles.mobileMenuBtn}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div style={styles.mobileMenu} className="glass">
                        <Link href="/" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                            🏠 Ana Sayfa
                        </Link>
                        <Link href="/courses" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                            📚 Eğitimler
                        </Link>
                        <Link href="/profile" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                            👤 Profilim
                        </Link>
                        <Link href="/admin" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                            🛠️ Yönetim
                        </Link>
                        <div style={styles.mobileBtns}>
                            <button className="btn btn-secondary" style={{ width: '100%' }}>Giriş Yap</button>
                            <button className="btn btn-primary" style={{ width: '100%' }}>Kayıt Ol</button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

const styles = {
    header: {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'rgba(30, 60, 114, 0.85)',
        backdropFilter: 'var(--blur-lg)',
        WebkitBackdropFilter: 'var(--blur-lg)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        padding: 'var(--space-md) 0',
    },
    headerContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-xl)',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        textDecoration: 'none',
        fontSize: 'var(--text-2xl)',
        fontWeight: 800,
        fontFamily: 'var(--font-display)',
        color: 'var(--color-white)',
        transition: 'transform var(--transition-base)',
        cursor: 'pointer',
    },
    logoIcon: {
        fontSize: 'var(--text-3xl)',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
    },
    logoText: {
        background: 'linear-gradient(135deg, #fff 0%, #a5b8fc 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    desktopNav: {
        display: 'flex',
        gap: 'var(--space-lg)',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    navLink: {
        color: 'var(--color-white)',
        textDecoration: 'none',
        fontSize: 'var(--text-base)',
        fontWeight: 600,
        padding: 'var(--space-sm) var(--space-md)',
        borderRadius: 'var(--radius-md)',
        transition: 'all var(--transition-base)',
        position: 'relative',
    },
    actions: {
        display: 'flex',
        gap: 'var(--space-sm)',
        alignItems: 'center',
    },
    mobileMenuBtn: {
        display: 'none',
        background: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'var(--color-white)',
        fontSize: 'var(--text-2xl)',
        padding: 'var(--space-sm) var(--space-md)',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
    },
    mobileMenu: {
        display: 'none',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
        marginTop: 'var(--space-lg)',
        padding: 'var(--space-lg)',
        borderRadius: 'var(--radius-xl)',
        animation: 'fadeIn 0.3s ease-out',
    },
    mobileNavLink: {
        color: 'var(--color-white)',
        textDecoration: 'none',
        fontSize: 'var(--text-lg)',
        fontWeight: 600,
        padding: 'var(--space-md)',
        borderRadius: 'var(--radius-md)',
        transition: 'all var(--transition-fast)',
        background: 'rgba(255, 255, 255, 0.05)',
    },
    mobileBtns: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
        marginTop: 'var(--space-md)',
    },
};

// Add responsive styles via CSS-in-JS
if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
        styles.desktopNav.display = 'none';
        styles.actions.display = 'none';
        styles.mobileMenuBtn.display = 'block';
        styles.mobileMenu.display = 'flex';
    }
}
