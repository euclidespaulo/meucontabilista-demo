import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import './components/translation/i18n.jsx'
import LoadingSpinner from './Components/common/Loading.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
  <React.StrictMode>
    <React.Suspense fallback={<LoadingSpinner/>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
</Router>
);
