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
  
  function nameItem(name, id) {
    const nmeTimes = document.createElement("li");
    nmeTimes.setAttribute("id", id);
    let names = document.createElement("h5");
  names.innerHTML = name;

  nmeTimes.append(names);

  return nmeTimes;
}


function votesItem(id, name, image, votes) {

    let rootDiv = document.querySelector("ol");

    let voteClick = document.createElement("p");
    voteClick.addEventListener('click',(votes)=>{
        let voting = document.getElementById("tally")
        valueOfVotes = voting.innerHTML
        console.log(valueOfVotes)
        voting.innerHTML = ++valueOfVotes
        
       // }
        //let options = {
          //  method: "PATCH",
            //characters:JSON.stringify(payload),
        //}
        fetch(`http://localhost:3000/characters/${id}`,{
          method: "PATCH",

          body:JSON.stringify({
            votes: `${valueOfVotes}`,            

          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          
          
        
        })
        .then((response) => response.json())
        .then((json)=>console.log(json))



        
        

        
        console.log(votes)
        return votes
        

        
        
        
    
      //votesCount(voteHere.getAttribute("id"))
      
    })
    voteClick.setAttribute("id","voteClick")
    voteClick.style.color = "red"
    voteClick.innerHTML = "vote";
  
  
  
    let votesDiv = document.createElement("p");
    votesDiv.setAttribute("id","tally")
    votesDiv.innerHTML = votes;

    let voteString = document.createElement('p')
    voteString.innerHTML = "votes"





    rootDiv.append(voteClick)
    rootDiv.append(votesDiv);
    rootDiv.append(voteString)
  
    return rootDiv;
}

// append item to an element
function appendElement(element, id = "animal-item-body") {
  const rootElement = document.getElementById(id);
  rootElement.append(element);
}

//chmge variable 
const API = "http://localhost:3000/characters";

//chmge variable 
function namesList() {
  const name = fetch(API);
  name
    .then((res) => {
      return res.json();
    })
    .then((names) => {
      //chmge variable 
      let listNames = names;

      for (let i = 0; i < listNames.length; i++) {
        //chmge variable item n nameitem
        const nOfAnimal = listNames[i];
        const nOfItem = nameItem(nOfAnimal.name, nOfAnimal.id);

        appendElement(nOfItem, "display");


        nOfItem.addEventListener("click", (id) => {
            
          animalsContainer(nOfItem.getAttribute("id"));
          count(nOfItem.getAttribute("id"))
          document.querySelector("ol").remove()                                                                                                                                                                                                                                                                         
        });
      }
    });
}

//change variable 
function animalsContainer(id) {
  //change variable animalsPromise
  const promise = fetch(API);
  promise
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data + "john");
      const animal = data[id - 1];
      const animalssItem = createAnimalItem(
        animal.image,
        animal.name,
        animal.votes,
        animal.id
      );
      appendElement(animalssItem, "block");
      console.log(animal.id);

      //}
    });
}

function count(id){

    let count = fetch(API)
    count.then((res)=>{
        return res.json()
    }).then((data)=>{
        let votes = data[id-1]
        let votesDataBase = votesItem(votes.id, votes.name, votes.image, votes.votes,)
        appendElement(votesDataBase, "block");
        


        console.log(votesDataBase)
    })

}

document.addEventListener("DOMContentLoaded", (event) => {
  print(`Event loaded: ${event.type}`);


  print(namesList());
});