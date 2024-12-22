import data from '../../data/data';
import AnimalCard from '../AnimalCard/AnimalCard';
import { showAdditional } from '../services/renderFunctions'
import './App.css';

function App() {
  return (
    <div className="container text-center">
      <div className="row">
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
            href={animal.href}
            imgurl={animal.imgurl}
            description={animal.description}
          />
        )
      })}
      </div>
    </div>
  )
}

export default App;
