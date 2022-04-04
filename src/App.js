
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import data from './data';
function App() {
const datas=data.map(e=>{
  return <Card 
  key={e.id}
  {...e}
  />
})
  return (
    <div className="App">
      <Navbar/>
     {datas}
    </div>
  );
}

export default App;
