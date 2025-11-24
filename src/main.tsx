import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
// import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
