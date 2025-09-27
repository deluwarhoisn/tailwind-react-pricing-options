
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOption from  './components/pricingOptions/pricingOption'
const PricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {


  return (
    <>
      
      <header>
        <NavBar></NavBar>
        <DaisyNav></DaisyNav>
      </header>
   <main>
    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <PricingOption PricingPromise={PricingPromise}></PricingOption>
    </Suspense>
   </main>
    </>
  )
}

export default App
