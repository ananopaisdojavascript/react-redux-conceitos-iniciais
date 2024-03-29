import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from "./app/Store";
// Estado global do projeto
import { Provider } from "react-redux";
import { fetchUsers } from './features/users/UserSlice.jsx';

store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
