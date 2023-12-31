import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Payment from './pages/Payments';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import Form from './pages/Form';
import { Toolbar } from './components';
import Privacy from './components/Privacy';
import { logo } from './assets';
import { Link } from 'react-router-dom';
import { navVariants, staggerContainer } from './utils/motion';

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
      <div>
        <div className=" w-[10%] inset-0 gradient" />
      </div>

      <div className="max-w-[100%] overflow-x-hidden min-h-[100vh] px-4 md:px-16 text-[#000000] z-10">
        <motion.nav
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Link to="/">
            <motion.img
              variants={navVariants}
              src={logo}
              alt="logo"
              className="w-[150px] h-[140px] "
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
