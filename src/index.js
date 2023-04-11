import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import App from './App';
import Services from './Pages/Services/Services'
import Offerings from './Pages/Offerings/Offerings'
import Locations from './Pages/Locations/Locations';
import Contacts from './Pages/Contacts/Contacts'
import NoPage from './Pages/No Page/NoPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Header/>
        <Sidebar/>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/educational-web' element={<App/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </>
    </BrowserRouter>
  </React.StrictMode>
);