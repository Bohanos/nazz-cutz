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
      <Navbar />
      <Hero />
      <Gallery />
      {/* Pass the function to trigger the modal */}
      <ServicesGrid onBookClick={() => setIsBookingOpen(true)} />
      
      {/* Conditionally render the modal based on state */}
      {isBookingOpen && <BookingModal onClose={() => setIsBookingOpen(false)} />}
      
      <LocationMap />
      <Footer />
    </div>
  );
}

export default App;