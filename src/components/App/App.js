import data from '../../data/data';
import AnimalCard from '../AnimalCard/AnimalCard';
import { showAdditional } from '../services/renderFunctions'
import './App.scss';

function App() {
  return (
    <>
    <header>
    </header>
    <div className="container-flex main-container">
    <div className="img-container">
    <img src="https://static.vecteezy.com/system/resources/previews/024/361/112/non_2x/waterfall-in-a-tropical-jungle-generative-ai-free-photo.jpg" alt="" />
    </div> 
    <div className="col align-self-center" id="cards-container">
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
    </div>
    </>
  )
}

export default App;
