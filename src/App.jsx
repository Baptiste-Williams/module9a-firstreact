import UserProfile from './UserProfile';
import ContactCard from './ContactCard';

function App() {
  return (
    <div>
      <UserProfile />
      <ContactCard
        name="Baptiste Williams"
        email="baptiste.williams@example.com"
        phone="+1 (310) 555-1234"
      />
    </div>
  );
}

export default App;
