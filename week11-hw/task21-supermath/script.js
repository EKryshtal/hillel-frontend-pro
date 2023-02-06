class SuperMath {
  allowedOperands = ["+", "-", "/", "*", "%"];

  check() {
    let isAgree = this.requestAgree();

    if (!isAgree) {
      this.input();
      this.check();
      return;
    }

    if (!this.object.sign || !this.allowedOperands.includes(this.object.sign)) {
      alert("Incorrect sign value");
      throw new Error("Incorrect sign value");
    }

    if (Number.isNaN(this.object.x)) {
      alert("Incorrect x value");
      throw new Error("Incorrect x value");
    }

    if (
      Number.isNaN(this.object.y) ||
      (this.object.y === 0 && this.object.sign === "/")
    ) {
      alert("Incorrect y value");
      throw new Error("Incorrect y value");
    }

    let result = null;
    switch (this.object.sign) {
      case "+":
        result = this.object.x + this.object.y;
      case "-":
        result = this.object.x - this.object.y;
      case "/":
        result = this.object.x / this.object.y;
      case "*":
        result = this.object.x * this.object.y;
      case "%":
        result = this.object.x % this.object.y;
    }

    console.log(result);
  }

  requestAgree() {
    return confirm("Agree?");
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
superMath.input();
superMath.check();
