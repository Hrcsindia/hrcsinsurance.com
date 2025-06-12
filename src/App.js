import './App.css';
import Navbar from './componnents/Navbar';
import Herosection from './componnents/Herosection';
import Compareform from './componnents/Compareform';
import InsuranceCalculator from './componnents/Insurancecalculator';
import Info from './componnents/Info';
import InsuranceAdviceForm from './componnents/Insuranceadviceform';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div id="home" className='scroll-section'>
        <Herosection />
      </div>
      <div id="compare" className='scroll-section'>
        <Compareform />
      </div>
      <div id="calculator" className='scroll-section'>
        <InsuranceCalculator />
      </div>
      <div id="info" className='scroll-section'>
        <Info />
      </div>
      <div id="support" className='scroll-section'>
        <InsuranceAdviceForm />
      </div>
    </div>
  );
}

export default App;
