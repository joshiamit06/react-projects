import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import expensesStore from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={expensesStore}>
    <App />
    </Provider>
  </StrictMode>,
)
