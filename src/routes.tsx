import { createBrowserRouter } from 'react-router-dom'

import { Fulampo } from './pages/app/fulampos'
import { Home } from './pages/app/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/fulampo',
    element: <Fulampo />,
  },
])
