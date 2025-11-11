// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store ,persistor } from '../src/store/store.js'
// import InterviewQuestion from './page/InterviewQuestion.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>

        <App />

      </BrowserRouter>

    </PersistGate>

  </Provider>,
)
