import { createBrowserRouter } from 'react-router-dom'

import { Fulampo } from './pages/app/fulampos'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Fulampo />,
  },
])
