import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
//import store from './topics/topic13/store/store.js'
import store from './topics/project5_stateManage/store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider /*store={store}*/ store={store}>
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
  </Provider>,
)
