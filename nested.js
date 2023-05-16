function extractNameandStreet(person){
    const{name, address:{street}} = person;
    return{name,street};
  }

  const person = {
    name : "Mohammad Areeb" ,
    age :24,
    address :{
        street : "Mohalla Rajdepur",
        city : "Ghazipur" ,
        country : "India" }
    };

 const results = extractNameandStreet(person);
 console.log(results);   
  
  