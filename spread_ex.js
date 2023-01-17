const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
   const update2 ={
       color: "green"
   }
  
  const myUpdatedVehicle = {
    ...myVehicle,
     ...updateMyVehicle, 
     ...update2,
     color:"blue"
    }
  
  //Check the result object in the console:


 
  
  const {brand,color} = myUpdatedVehicle;
  
  console.log(brand, color);
  console.log(myUpdatedVehicle);


  