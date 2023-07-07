import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Payment from './pages/Payments';
import Footer from './components/Footer';
import Form from './pages/Form';
import Privacy from './components/Privacy';
import { logo } from './assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navVariants } from './utils/motion';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const updateName = (val) => {
    setName(val);
  };
  const updateEmail = (val) => {
    setEmail(val);
  };
  const updatePhone = (val) => {
    setPhone(val);
  };
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="max-w-[100%] min-h-[100vh] px-4 md:px-16 text-[#000000]">
        <div className="absolute w-[50%] -inset-3 gradient" />
        <motion.nav variants={navVariants} initial="hidden" whileInView="show">
          <div className="absolute w-[50%] inset-0 gradient" />
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[150px] h-[140px] lg:h-[130px]  lg:w-[180px]"
            />
          </Link>
        </motion.nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/form"
            element={
              <Form
                updateName={updateName}
                updatePhone={updatePhone}
                updateEmail={updateEmail}
              />
            }
          />
          <Route
            path="/Payment"
            element={<Payment name={name} phone={phone} email={email} />}
          />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </main>
  );
}

export default App;
