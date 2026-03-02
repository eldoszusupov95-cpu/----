import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ProductsPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)