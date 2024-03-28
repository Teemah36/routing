import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ContactPage from './pages/ContactPage';
// import FaqsPage from './pages/FaqsPage';
// import TermsConditionPage from './pages/TermsConditionPage';



 function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/faq" element={<FaqsPage/>}/>
      <Route path="/terms" element={<TermsConditionPage/>}/>
    </Routes>
    
  );
}

export default App;

