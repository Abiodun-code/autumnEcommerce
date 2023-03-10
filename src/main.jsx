import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './contexts/ProductContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ProductProvider>
  
)
