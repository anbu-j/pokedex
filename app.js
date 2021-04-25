// need link for api for pokemon
// document.ready function
// onclick function to search for info
// be able to input users search into the api
//set a variable for user input
// fetch the data
// async await to grab data
// change the data to json data
// prevent default info from populating

//document.ready function




$(()=>{
    //onclick function to search for info
    $('form').on("submit",(event)=>{
    event.preventDefault()
    
 //set a variable for the user
    const userInput= $('input[id="inpText"]').val()
   
    console.log(userInput)
    

    async function getPokeData() {
        // async await to grab data
        // fetch the data
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    // change the data to Json data
    const data = await response.json()
   // return data
    //grab pokemon by number and type
    $('#pokeName').html(data.forms[0].name);
    //$('#pokeName').html(data.abilities[0].ability.url)
    $('#pokeType').html(data.types[0].type.name);
    $('#pokeNumber').html(data.id);

    }

    async function changeColor(){
        const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
        
    const data1 = await response1.json()

    if (data1.types[0].type.name == "normal") {
        $("body").css ("background-color", "green");
    
    }
    else if (data1.types[0].type.name == "fire") {
        $("body").css ("background-color", "orange");
    }
    else if (data1.types[0].type.name == "water") {
        $("body").css ("background-color", "blue");
    }
    else if (data1.types[0].type.name == "grass") {
        $("body").css ("background-color", "lime");
    }
    else if (data1.types[0].type.name == "electric") {
        $("body").css ("background-color", "red");
    }
    else if (data1.types[0].type.name == "ice") {
        $("body").css ("background-color", "magenta");
    }
    else if (data1.types[0].type.name == "fighting") {
        $("body").css ("background-color", "yellow");
    }
    else if (data1.types[0].type.name == "poison") {
        $("body").css ("background-color", "violet");
    }
    else if (data1.types[0].type.name == "ground") {
        $("body").css ("background-color", "grey");
    }
    else if (data1.types[0].type.name == "flying") {
        $("body").css ("background-color", "skyblue");
    }
    else if (data1.types[0].type.name == "psychic") {
        $("body").css ("background-color", "teal");
    }
    else if (data1.types[0].type.name == "bug") {
        $("body").css ("background-color", "brown");
    }
    else if (data1.types[0].type.name == "rock") {
        $("body").css ("background-color", "silver");
    }
    else if (data1.types[0].type.name == "ghost") {
        $("body").css ("background-color", "purple");
    }
    else if (data1.types[0].type.name == "dark") {
        $("body").css ("background-color", "black");
    }
    else if (data1.types[0].type.name == "dragon") {
        $("body").css ("background-color", "goldenrod");
    }
    else if (data1.types[0].type.name == "steel") {
        $("body").css ("background-color", "gray");
    }
    else if (data1.types[0].type.name == "fairy") {
        $("body").css ("background-color", "salmon");
    }
    }
    getPokeData()
    changeColor()

})
    


   
})
