import App from 'app/App'
import { Home } from 'features/startPage/Home'
import { AUTH, MAIN_PAGE } from 'app/paths'
import { Auth } from 'features/auth/Auth'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: MAIN_PAGE,
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: AUTH, Component: Auth },
    ],
  },
])
