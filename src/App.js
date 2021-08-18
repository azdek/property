import clx from 'classnames'

const TOTAL = 2816105
const FIRST_PAYMENT = 503865
const MONTHLY_PAYMENT = 128500

const GRAPH = [FIRST_PAYMENT]
const monthNames = ["Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь", "Февраль", "Март", "April", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь"
];

for (let i = 0; i < 17; i++) {
  GRAPH.push(MONTHLY_PAYMENT)
}
GRAPH.push(TOTAL - GRAPH.reduce((a, b) => a + b, 0))


function App() {
  const PAYED = Number(window.prompt('Введите сумму').replace(/\D/g, ''))
  const table = []
  let totalGraph = 0

  GRAPH.forEach((sum, i) => {
    totalGraph += sum
    table.push(
      <tr key={i} className={clx({ payed: totalGraph <= PAYED })}>
        <td>{monthNames[i]}</td>
        <td>{sum}</td>
        <td>{PAYED - totalGraph}</td>
      </tr>
    )
  })

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Месяц</th>
            <th>Нужно</th>
            <th>Остаток</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>
    </>
  );
}

export default App;
