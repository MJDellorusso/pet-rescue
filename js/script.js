const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: "name",
    species: "species",
    isTired: 5,
    sleep: function () {
      `${this.name} needs a nap. Zzz...`;
      this.isTired = 1;
    },
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
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");
