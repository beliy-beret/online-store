import { AUTH } from 'app/paths'
import { Navigate, Outlet } from 'react-router-dom'

const App = () => {
  const isLogged = true

  if (!isLogged) {
    return <Navigate to={AUTH} />
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
