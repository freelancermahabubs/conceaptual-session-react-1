import './App.css';
import Card from './components/Card/Card';
import ArrayExample from './components/Events/ArrayExample';
import Basic from './components/Events/Basic';
import UseEffectExample from './components/UseEffectExample/UseEffectExample';
import ObjectExample from './ObjectExample/ObjectExample';
import {guns} from './test';


function App() {

  return (
  <>
    <div className="App ">
    
   <div className='grid grid-cols-3 gap-4 px-12 mt-5 pt-7'>
   {
      guns.map(gun => <Card {...gun} key={gun.id}/>)
    }
   </div>

   <Basic/>
   <ArrayExample/>
   <ObjectExample/>
   <UseEffectExample/>
    </div>
  </>
  );
}

export default App;
