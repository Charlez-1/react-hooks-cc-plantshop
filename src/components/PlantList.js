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
  
  if (!plants) {
    return null; // Return null instead of undefined
  }
  
  return (
    <div className="row "> 
      {plants.map((plant) => (
        
          <div  className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
        <PlantCard   key={plant.id} plant={plant} />
        </div>

      ))}
    </div>
  );
}

export default PlantList;