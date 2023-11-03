/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import PriceOptions from './Component/PriceOptions/PriceOptions'
import ReChert from './Component/ReChert/ReChert'
import StackedBarChart from './Component/StackedBarChart/StackedBarChart'
import PieCharts from './Component/PieChart/PieCharts'
import SpecifiedDomainRadarChart from './Component/SpecifiedDomainRadarChart/SpecifiedDomainRadarChart'
import Phones from './Component/Phones/Phones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto mt-7'>
        <NavBar></NavBar>
        <PriceOptions></PriceOptions>
        <div className='md:flex items-baseline'>
          <div className='md:flex-1'><ReChert></ReChert></div>
          <div className='md:flex-1'><StackedBarChart></StackedBarChart></div>
        </div>
        <div>
          <PieCharts></PieCharts>
          {/* <SpecifiedDomainRadarChart></SpecifiedDomainRadarChart> */}
        </div>
        <Phones></Phones>

      </div>

    </>
  )
}

export default App
