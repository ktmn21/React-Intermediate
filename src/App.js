import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import BlogPostPage from "./components/PropsPracticePage";
import RouterBasics from './components/RouterBasics';
import ShoppingCart from './components/ShoppingCard';
import FetchData from './components/FetchData';
import FormValidation from './components/FormValidation';
import EmployeeCard from "./components/ResusableComponentsPage";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/card" element={<EmployeeCard />} />
            <Route path="/blog" element={<BlogPostPage />} />
          <Route path="/router" element={<RouterBasics />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/fetch" element={<FetchData />} />
          <Route path="/form" element={<FormValidation />} />
        </Routes>
      </Router>
  );
};

export default App;
