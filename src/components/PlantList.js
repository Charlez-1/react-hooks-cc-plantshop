import React,{useEffect,useState} from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(plants => setPlants(plants))
    .catch(error => console.error("Error fetching data" ,error))
    }, [])
  
  if (!plants) {
    return null; // Return null instead of undefined
  }
  
  return (
    <div>
      {plants.map((plant) => (
        
          <div >
        <PlantCard   key={plant.id} plant={plant} />
        </div>

      ))}
    </div>
  );
}

export default PlantList;