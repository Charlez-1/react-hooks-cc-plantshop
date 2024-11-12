import React,{useEffect,useState} from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('https://react-hooks-cc-plantshop-cdsk.onrender.com/plants')
    .then(response => response.json())
    .then(plants => setPlants(plants))
    .catch(error => console.error("Error fetching data" ,error))
    }, [])
  console.log(plants)
  if (!plants) {
    return null; // Return null instead of undefined
  }
  
  return (
    <div className="row " key={plants.id}> 
      {plants.map((plant) => (
        
          <div>
        <PlantCard   key={plant.id} plant={plant} />
        </div>

      ))}
    </div>
  );
}

export default PlantList;