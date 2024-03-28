import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage'; 
import FaqsPage from './Pages/FaqsPage';
import TermsConditionPage from './Pages/TermsConditionPage';



 function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage/>} />
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/faq" element={<FaqsPage/>}/>
      <Route path="/terms" element={<TermsConditionPage/>}/>
    </Routes>
    
  );
}

export default App;

