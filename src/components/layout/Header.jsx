import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });

    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScroll && currentScroll > 80) {
        gsap.to(headerRef.current, { y: -100, duration: 0.3, ease: 'power2.inOut' });
      } else {
        gsap.to(headerRef.current, { y: 0, duration: 0.3, ease: 'power2.inOut' });
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={headerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: '#000000',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo - Left */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
        }}>
          <div style={{
            width: '28px',
            height: '28px',
            background: '#ffffff',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="16" height="16" fill="#000000" viewBox="0 0 24 24">
              <path d="M9 4.804A7.968 7.968 0 0 0 5.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 0 1 5.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0 1 14.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0 0 14.5 4c-1.255 0-2.443.29-3.5.804V19a1 1 0 1 1-2 0V4.804Z"/>
            </svg>
          </div>
          <span style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#ffffff',
            letterSpacing: '-0.01em',
          }}>
            CodeFlow
          </span>
        </div>

        {/* Center - Desktop Navigation (Hidden on mobile) */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '32px',
        }}
        className="md:flex"
        >
          {['Features', 'Demo', 'Pricing', 'Docs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Side - Desktop Buttons (Hidden on mobile) */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '16px',
        }}
        className="md:flex"
        >
          {/* Submit Button with Icon */}
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            padding: '8px 12px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Submit
          </button>

          {/* Sign in */}
          <button style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            padding: '8px 16px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.color = '#ffffff'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            Sign in
          </button>

          {/* Create Account - White Button */}
          <button style={{
            background: '#ffffff',
            color: '#000000',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#ffffff';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            Create Account
          </button>
        </div>

        {/* Mobile Menu Toggle (Visible only on mobile) */}
        <button 
          style={{
            display: 'block',
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px',
          }}
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu (Only visible on mobile when open) */}
      {isOpen && (
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '24px 32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: '#000000',
        }}
        className="md:hidden"
        >
          {['Features', 'Demo', 'Pricing', 'Docs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontWeight: '500',
              }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'left',
            padding: '8px 0',
            cursor: 'pointer',
          }}>
            Submit
          </button>
          <button style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'left',
            padding: '8px 0',
            cursor: 'pointer',
          }}>
            Sign in
          </button>
          <button style={{
            background: '#ffffff',
            color: '#000000',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            marginTop: '8px',
            cursor: 'pointer',
          }}>
            Create Account
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
