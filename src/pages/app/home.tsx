import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export function Home() {
  const numberOfBallots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  function binarySearch(array: number[], x: number) {
    // eslint-disable-next-line prefer-const
    let start = 0
    let end = array.length - 1

    while (start <= end) {
      // eslint-disable-next-line prefer-const
      let mid = Math.floor((start + end) / 2)

      if (array[mid] === x) {
        return mid
      } else if (array[mid] < x) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }

    return false
  }

  return (
    <div
      className="flex flex-col
    "
    >
      <Helmet title="Home" />
      <h1>Home</h1>
      <Link to="/fulampo">Fulampo</Link>
      <span>
        A posição do suspeito é a posição: {binarySearch(numberOfBallots, 7)}
      </span>
    </div>
  )
}
