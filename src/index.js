import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


document.title = "Self Study Library";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <BrowserRouter>
 <Header />
 <span className="flex items-center">
  <span className="h-px flex-1 bg-gray-300"></span>

  <span className="shrink-0 px-4 text-gray-900">
    <div className="py-6 sm:py-8 md:py-10 lg:py-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-center animate-fadeInUp">
        Self Study Library
      </h2>
    </div>
  </span>

  <span className="h-px flex-1 bg-gray-300"></span>
</span>


    <App />
    <Footer />
    </BrowserRouter>
);

