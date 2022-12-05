// printing utility
function print(value) {
    console.log(value);
  }
  //fetch data
function fetchData(){
    fetch(`http://localhost:3000/characters`)
    .then((response) => response.json())
    .then((json)=>console.log(json))
}

