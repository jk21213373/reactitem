import { createRoot } from 'react-dom/client'
import './index.scss'
import { RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import router from './router/index.tsx'
import store from './store'
import 'normalize.css'
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
  // </StrictMode>,
)
