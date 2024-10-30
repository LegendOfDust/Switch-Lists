console.log('connected');
//List of land animals
landAnimals = ['Cat', 'Chicken', 'Hamster', 'Elephant'];
//List of water animals
waterAnimals = ['Narwhal', 'Axolotl', 'Orca', 'Jellyfish'];
showList = () => {
    const land = document.getElementById('land');
    const water = document.getElementById('water');

    //if land dwellers is selected
    if(land.checked){
        //runs through full land animal array
        for(let i = 0; i < landAnimals.length; i++){
            //logs the animal
            console.log(landAnimals[i]);
            //displays current element of land animal array
            //I have no idea how this works or what it's doing
            const newEl = document.createElement('li');
            const newText = document.createTextNode(landAnimals[i]);
            newEl.appendChild(newText);
            const position = document.getElementsByTagName('ul')[0];
            position.appendChild(newEl);
        }
    }
    //if water dwellers is selected
    else if (water.checked){
        //runs through full water animal array
        for(let i = 0; i < waterAnimals.length; i++){
            //displays current element of water animal array
            //I have no idea how this works or what it's doing
            console.log(waterAnimals[i]);
            const newEl = document.createElement('li');
            const newText = document.createTextNode(waterAnimals[i]);
            newEl.appendChild(newText);
            const position = document.getElementsByTagName('ul')[0];
            position.appendChild(newEl);
        }
    }
    //if nothing is selected
    else {
        //displays message to select something
        console.log("nothing");
    }
}