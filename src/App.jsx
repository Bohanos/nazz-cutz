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
      
      {/* Passing the handler to open the modal */}
      <Hero onBookClick={() => setIsBookingOpen(true)} />
      
      <Gallery />
      
      {/* Passing the handler to open the modal */}
      <ServicesGrid onBookClick={() => setIsBookingOpen(true)} />
      
      {/* Render the modal ONLY ONCE here */}
      {isBookingOpen && (
        <BookingModal onClose={() => setIsBookingOpen(false)} />
      )}
      
      <LocationMap />
      <Footer />
    </div>
  );
}

export default App;