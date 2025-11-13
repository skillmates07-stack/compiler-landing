const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Features', 'Demo', 'Pricing', 'Docs'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Help Center', 'Community', 'Tutorials', 'API'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  };

  return (
    <footer style={{
      background: '#000000',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '80px 24px 40px 24px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '64px',
        }}>
          {/* Brand Column */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: '#ffffff',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="18" height="18" fill="#000000" viewBox="0 0 24 24">
                  <path d="M9 4.804A7.968 7.968 0 0 0 5.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 0 1 5.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0 1 14.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0 0 14.5 4c-1.255 0-2.443.29-3.5.804V19a1 1 0 1 1-2 0V4.804Z"/>
                </svg>
              </div>
              <span style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#ffffff',
              }}>
                CodeFlow
              </span>
            </div>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.4)',
              lineHeight: 1.6,
              maxWidth: '280px',
            }}>
              Master programming through visual learning and intelligent guidance
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {category}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: '12px' }}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.5)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.3)',
          }}>
            © {currentYear} CodeFlow. All rights reserved.
          </p>

          <div style={{
            display: 'flex',
            gap: '24px',
          }}>
            {['Twitter', 'GitHub', 'Discord'].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.4)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
