import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import ServiceDetail from './ServiceDetail';
import AboutUs from "./AboutUs";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Policies from "./Policies";
import News from "./News";
import Trainings from "./Trainings";
import Footer from "./Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/client" element={<Dashboard />} />
          <Route path="/dashboard/employee" element={<Dashboard />} />
          <Route path="/policy/:policyId" element={<Policies />} />
          <Route path="/mission" element={<Policies />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<News />} />
          <Route path="/trainings" element={<Trainings />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
