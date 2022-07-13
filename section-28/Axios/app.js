// axios
//   .get("https://swapi.dev/api/people/1/") //gets you a promise
//   .then((res) => {                        
//     console.log("RESPONSE: ", res);       //gets you response object with data filled in. with parsed results
//   .catch((e) => {                        
//     console.log("ERROR! ", e);            //gets you error, if failed.
//   });


//async function
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`); //replaced with string template to input id 
    //in the beginning of the function when inputting.
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPerson(5); //Leia Organa
getStarWarsPerson(10); //Obi-Wan Kenobi
