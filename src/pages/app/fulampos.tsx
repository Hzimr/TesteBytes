import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

interface Suspect {
  id: number
  numberOfBallots: number
  amountMoney: number
}

export function Fulampo() {
  const [quantitySuspects, setQuantitySuspects] = useState(0)
  const [suspects, setSuspects] = useState<Suspect[]>([])

  function handleCreatedNumberSuspects() {
    setQuantitySuspects(Math.round(Math.random() * (12 - 2) + 2))
  }

  function generateRandomSuspects(quantity: number): Suspect[] {
    const newSuspects: Suspect[] = []
    for (let i = 0; i < quantity; i++) {
      const randomBallotValue = Math.round(Math.random() * 20 + 2)

      const suspect: Suspect = {
        id: i + 1,
        numberOfBallots: randomBallotValue,
        amountMoney: randomBallotValue,
      }
      newSuspects.push(suspect)
    }
    return newSuspects
  }

  useEffect(() => {
    setSuspects(generateRandomSuspects(quantitySuspects))
  }, [quantitySuspects])

  return (
    <div className="p-12 flex items-center justify-center h-screen w-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Helmet title="Fulampo" />
      <div className="gap-7 flex flex-col items-center justify-start h-full w-full max-w-[1024px] mx-auto">
        <h1 className="text-black text-2xl">Investigação</h1>
        <button
          onClick={handleCreatedNumberSuspects}
          className="p-3 border-separate border-[1px] border-black rounded-3xl bg-transparent"
        >
          Gerar suspeitos
        </button>
        <span>São {quantitySuspects} suspeitos</span>
        <div className="flex flex-col justify-start">
          <table className="w-96">
            <thead className="gap-5 justify-start ">
              <th className="w-20 border-r-2 border-foreground">ID:</th>
              <th className="w-20 border-r-2 border-foreground">Cédulas:</th>
              <th>Valor Total:</th>
            </thead>
            <tbody>
              {suspects.map((suspect) => (
                <tr key={suspect.id}>
                  <td className="w-20 border-r-2 border-foreground">
                    {suspect.id}
                  </td>
                  <td className="w-20 border-r-2 border-foreground">
                    {suspect.numberOfBallots}
                  </td>
                  <td>{suspect.amountMoney}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span>Os Provaveis suspeitos são</span>
      </div>
    </div>
  )
}
