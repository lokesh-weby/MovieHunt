import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './scrollToTop.jsx';
import Loader from './components/loader.jsx';

const App=React.lazy(()=>import("./App.jsx") )


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ScrollToTop/>
      <Suspense fallback={<Loader/>}>
        <App />
    </Suspense>
  </BrowserRouter>
);


