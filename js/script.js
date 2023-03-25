// Button that will display the pets and thier status
const statusButton = document.querySelector("button");
// The ul of pets and pet status
const pets = document.querySelector(".all-pets");

// A factory function to create pet objects using the parameters name, and species for the pet property values.
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    // A method that when called, logs out a message and changes the isTired value to 1
    sleep: function () {
      `${this.name} needs a nap. Zzz...`;
      this.isTired = 1;
    },
    // A method that when called, checks the value of the isTired property, logs out a message and adds 1 to the isTired property if the pet is not too tired to play.
    play: function () {
      if (this.isTired === 10) {
        `${this.name} is too tired to play`;
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    },
  };
  //   Makes the pet objects available to the rest of the code
  return pet;
};
// Pet objects created with the factory function parameters
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

// console.log(sora, cleo, clover, baxter, francine);

// clover.sleep();
// baxter.play();

// console.log(clover);
// console.log(baxter);
// Changing the value of the pets isTired property
clover.isTired = 8;
francine.isTired = 9;

// An array holding all the pet objects
const allPets = [sora, clover, baxter, cleo, francine];

// console.log(allPets);

// A function that uses the petsArray as a parameter to populate the pets ul w/ the pet name, species and status.
const showPets = function (petArray) {
  // Clears list whenever showPets is run
  pets.innerHTML = "";
  //   for each pet of the perArray
  for (let pet of petArray) {
    // Status of pet declared with let to allow it to change with the value of the isTired property
    let status = "Ready to play!";
    // Unless isTired is greater than or equal to 7
    if (pet.isTired >= 7) {
      // Change status value to sleeping
      status = "Sleeping";
    }
    // for each pet of petArray create a li populate the HTML w/ the message and add it to the pets ul
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}.`;
    pets.append(li);
  }
};
// When the status button is clicked call the showPets() function
statusButton.addEventListener("click", function () {
  showPets(allPets);
});
