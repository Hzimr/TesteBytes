import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <Helmet title="Home" />
      <h1>Home</h1>
      <Link to="/fulampo">Fulampo</Link>
    </div>
  )
}
