const obj = {
  x: 10,
  y: 20,
  sign: "/",
};

class SuperMath {
  constructor(object) {
    this.object = object;
  }

  allowedOperands = ["+", "-", "/", "*", "%"];

  check() {
    let isAgree = confirm("Agree?");

    if (!isAgree) {
      this.input()
      this.check()
      return;
    }

    if (!this.object.sign || !this.allowedOperands.includes(this.object.sign)) {
      alert("Incorrect sign value");
      throw new Error("Incorrect sign value");
    }

    if (!Number(this.object.x) && Number(this.object.x) !== 0) {
      alert("Incorrect x value");
      throw new Error("Incorrect x value");
    }

    if (!Number(this.object.y) && Number(this.object.y) !== 0) {
      alert("Incorrect y value");
      throw new Error("Incorrect y value");
    }

    const result = eval(
      `${this.object.x} ${this.object.sign} ${this.object.y}`
    );
    console.log(result);
  }

  input() {
    const x = Number(prompt("Enter new x value"));
    const y = Number(prompt("Enter new y value"));
    const sign = prompt("Enter new sign value");

    const newObj = {
      x,
      y,
      sign,
    };

    this.object = newObj;
  }
}

const superMath = new SuperMath();
superMath.check();
