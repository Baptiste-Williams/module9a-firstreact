function ContactCard({ name, email, phone }) {
  return (
    <div
      style={{
        maxWidth: '420px',
        margin: '20px auto',
        padding: '24px',
        backgroundColor: '#111',
        borderRadius: '12px',
        boxShadow: `
          0 0 12px rgba(255, 85, 0, 0.6),
          0 0 24px rgba(255, 0, 0, 0.4),
          0 0 48px rgba(255, 85, 0, 0.3)
        `,
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#eee',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = `
          0 0 16px rgba(255, 85, 0, 0.8),
          0 0 32px rgba(255, 0, 0, 0.5),
          0 0 60px rgba(255, 85, 0, 0.4)
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = `
          0 0 12px rgba(255, 85, 0, 0.6),
          0 0 24px rgba(255, 0, 0, 0.4),
          0 0 48px rgba(255, 85, 0, 0.3)
        `;
      }}
    >
      <h2 style={{ fontSize: '20px', color: '#ff5722' }}>Contact Info</h2>
      <p><strong>Name:</strong> <span style={{ color: '#ccc' }}>{name}</span></p>
      <p>
        <strong>Email:</strong>{' '}
        <a
          href={`mailto:${email}`}
          style={{
            color: '#99cfff',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5722')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#99cfff')}
        >
          {email}
        </a>
      </p>
      <p><strong>Phone:</strong> <span style={{ color: '#99cfff' }}>{phone}</span></p>
    </div>
  );
}

export default ContactCard;
