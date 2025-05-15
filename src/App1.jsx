import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./Components/Navbar";
import Background from "./Components/Background/Background";
import Footer from "./Components/Footer";
import Home from "./pages/home";
import Dataset from "./pages/dataset";
import About from "./pages/about";
import Services from "./pages/services";
import Login from "./pages/SignIn"
import Register from './pages/SignUp';
import Contacts from "./pages/contact";
import Documentation from "./pages/documentation"
import DatasetDetails from './pages/DatasetDetails';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthSuccess from './pages/AuthSuccess';
import AuthError from './pages/AuthError';
import Blog1 from "./pages/blog1"
import Blog2 from "./pages/blog2"
import CaseStudies from './pages/CaseStudies';
// ... other imports




const App = () => {
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>

    <Router>
      <div className="min-h-screen flex flex-col relative">
        {/* Background will be behind all content */}
        <Background playStatus={playStatus} heroCount={heroCount} />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home 
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
                setPlayStatus={setPlayStatus}
              />} />
              <Route path="/dataset" element={<Dataset />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/apireference" element={<Documentation />} />
              <Route path="/datasets/:id" element={<DatasetDetails />} />
              <Route path="/auth/success" element={<AuthSuccess />} />
              <Route path="/auth/error" element={<AuthError />} />
              <Route path="/blog1" element={<Blog1 />} />
              <Route path="/blog2" element={<Blog2 />} />
              <Route path="/case-studies" element={<CaseStudies />} />


              


            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
    </GoogleOAuthProvider>

  );
};

export default App;