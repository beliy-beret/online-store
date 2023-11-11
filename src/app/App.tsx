import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'app/model/store'

const App = () => {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  )
}

export default App
