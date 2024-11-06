import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/AboutUs";
import OurServices from "./routes/OurServices";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import Modal from "./components/Modal";
import Crafter from "./routes/Vehicles/Crafter";
import Kombi from "./routes/Vehicles/Kombi";
import Quantum from "./routes/Vehicles/Quantum";

// import ServiceSection from "./components/HomeSections/ServiceSection";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/crafter01" element={<Crafter />} />
      <Route path="/kombi01" element={<Kombi />} />
      <Route path="/crafter01" element={<Crafter />} />
      <Route path="/quantum01" element={<Quantum />} />
      {/* <Route path="/busy" element={<ServiceSection />} /> */}
      <Route path="*" element={<Home />} />
    </Routes>
    <Footer />
    {/* <WhatsAppWidget
      phoneNo="27670285744"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      autoOpen={true}
      autoOpenTimer={60000}
      messageBox={true}
      messageBoxTxt="Hi there..."
      iconSize="50"
      iconColor="white"
      iconBgColor="green"
      headerIcon="images/whatsapp.png"
      headerTitle="Exploring SA"
      headerCaption="Online"
      chatPersonName="Support"
      chatMessage={
        <>
          Welcome to Exploring Sa <br />
          <br />
          <br /> How can we be of assistance?
        </>
      }
      placeholder="Type a message.."
      btnTxt="Start Chat"
    /> */}
  </>
);

export default App;
