import hackerImage from './assets/hacker-kid.png';

function UserProfile() {
  const name = "Baptiste Williams";
  const bio = `Former Navy servicemember and professional arena football player.
Born and raised in Chicago, now living in Los Angeles for the past 2 years.
Currently pursuing a cybersecurity certification while attending Santa Monica College.
Dedicated to becoming a full-time web developer and using tech to inspire others.`;
  const phrase = "Get in where you fit in!";
  const profileImage = hackerImage;

  return (
    <div
      style={{
        maxWidth: '420px',
        margin: '30px auto',
        padding: '28px',
        borderRadius: '16px',
        background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)',
        boxShadow: `
          0 0 12px rgba(255, 85, 0, 0.6),
          0 0 24px rgba(255, 0, 0, 0.4),
          0 0 48px rgba(255, 85, 0, 0.3)
        `,
        fontFamily: 'Segoe UI, sans-serif',
        textAlign: 'center',
        color: '#e0e0e0',
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
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '4px solid #00fff7',
          boxShadow: '0 0 12px #00fff7',
          marginBottom: '16px',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
      <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#ffffff' }}>{name}</h1>
      <p style={{ fontSize: '16px', color: '#cccccc', whiteSpace: 'pre-line' }}>{bio}</p>
      <p
        style={{
          marginTop: '24px',
          fontSize: '18px',
          fontStyle: 'italic',
          color: '#ff5722',
          textShadow: '0 0 6px #ff5722',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        “{phrase}”
      </p>
    </div>
  );
}

export default UserProfile;
