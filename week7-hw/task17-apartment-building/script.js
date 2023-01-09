const Human = function (name, gender) {
  this.name = name;
  this.gender = gender;

  this.getInfo = () => {
    console.log("Name: ", this.name, "Gender", this.gender);
  };
};

const Flat = function () {
  this.owners = [];
  this.addElement = (owner) => {
    if (owner.constructor.name !== "Human") {
      console.log("Owner is not a human");
      return;
    }

    this.owners.push(owner);
  };
};

const Building = function (flatsMaxNumber) {
  this.flats = [];
  this.flatsMaxNumber = flatsMaxNumber;

  this.addFlat = (flat) => {
    if (flat.constructor.name !== "Flat") {
      console.log("Flat is not a flat");
    }
    
    if (this.flats.length < this.flatsMaxNumber) {
      this.flats.push(flat);
    } else {
      console.error("Max flats number succeeded");
    }
  };
};

const john = new Human("John", "Male");
const vivienne = new Human("Vivenne", "Female");

const flat1 = new Flat();
const flat2 = new Flat();

flat1.addElement(john);
flat2.addElement(vivienne);

const building = new Building(1);
building.addFlat(flat1);
building.addFlat(flat2);
