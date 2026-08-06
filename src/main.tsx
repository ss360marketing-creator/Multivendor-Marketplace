import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CatalogProvider } from './state/catalog-store'
import { MarketplaceProvider } from './state/marketplace-store'
import { SessionProvider } from './state/session-store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SessionProvider>
      <MarketplaceProvider>
        <CatalogProvider>
          <App />
        </CatalogProvider>
      </MarketplaceProvider>
    </SessionProvider>
  </React.StrictMode>,
)
