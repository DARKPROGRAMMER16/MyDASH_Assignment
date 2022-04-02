import React, { Fragment } from 'react'
import ChartComponent from './components/ChartComponent'

const App = () => {

  const data = [
    {value: 30,text:"Dog"},
    {value: 15,text:"Cat"},
    {value: 10,text:"Bird"},
    {value: 20,text:"Fish"},
    {value: 12,text:"Rabbit"},
    {value: 13,text:"Snake"},
  ]

  return (
    <Fragment>
      <div className="App">
        <ChartComponent data={data}/>
      </div>
    </Fragment>
  )
}

export default App