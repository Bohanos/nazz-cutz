import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ServicesGrid from "./components/ServicesGrid";
import BookingModal from "./components/BookingModal";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="App">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      <Hero onBookClick={() => setIsBookingOpen(true)} />
      <Gallery />
      <ServicesGrid onBookClick={() => setIsBookingOpen(true)} />
      {isBookingOpen && (
        <BookingModal onClose={() => setIsBookingOpen(false)} />
      )}
      <LocationMap />
      <Footer />
    </div>
  );
}

export default App;