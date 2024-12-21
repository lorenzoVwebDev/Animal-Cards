import data from '../../data/data';
import AnimalCard from '../AnimalCard/AnimalCard';
import { showAdditional } from '../services/renderFunctions'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      {data.map(animal=> {
        return (
          <AnimalCard 
            key={animal.key}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditional}
          />
        )
      })}
    </div>
  )
}

export default App;
