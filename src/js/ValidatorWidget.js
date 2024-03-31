import Debauncer from "./Debauncer";
import isValidCardNumber from "./utils";

export default class ValidatorWidget {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this.element = element;

    this.submit = element.querySelector(".submit");
    this.input = element.querySelector(".number");
    this.cards = Array.from(element.querySelectorAll(".card"));

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);

    this.submit.addEventListener("click", this.onSubmit);
    this.input.addEventListener("input", this.onInput);
    this.inputDebauncer = new Debauncer(300);
  }



  onSubmit(event) {
    event.preventDefault();

  }

  onInput(event) {
    const widget = this;
    this.inputDebauncer.exec((number) => {
      console.log(isValidCardNumber(number));
    }, this.input.value)
  }


}
