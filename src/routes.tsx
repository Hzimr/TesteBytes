import { createBrowserRouter } from 'react-router-dom'

import { Fulampo } from './pages/app/fulampos'
import { Home } from './pages/home/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/fulampos',
        element: <Fulampo />,
      },
    ],
  },
])
