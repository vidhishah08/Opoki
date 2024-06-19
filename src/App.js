import './App.css';
import Four from './Comonents/Four';
import Navbar from './Comonents/Navbar';
import One from './Comonents/One';
import Sidebar from './Comonents/Sidebar';
import Three from './Comonents/Three';
import Two from './Comonents/Two';


function App() {
  return (
    <div >
      <div className='bg-[#171717] w-full h-[1075px]'>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <One></One>
        <Two></Two>
        <Three></Three>
        <Four></Four>
      </div>
    </div>
  );
}

export default App;
