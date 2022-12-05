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

function createAnimalItem(thumbnail, name, id) {
    // div to contain the elements
  
    let rootDiv = document.createElement("ol");
    rootDiv.setAttribute("id", id);
  
    // animal image-the zoo
    let animalImage = document.createElement("img");
    animalImage.src = thumbnail;
    animalImage.alt = `${name} image`;
    animalImage.style.height = "150px";
    animalImage.style.width = "200px";
  
    // animal name -the zoo
    let animalTitle = document.createElement("h5");
    animalTitle.innerHTML = name;
  
  
  
    // appending the image and text to root element
    rootDiv.append(animalImage);
    rootDiv.append(animalTitle);
  
  
    // returns the element
    return rootDiv;
  }
  
 