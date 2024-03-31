import Debauncer from "./Debauncer";
import isValidCardNumber, { determineCardType } from "./utils";

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
    this.onKeyDown = this.onKeyDown.bind(this);

    this.submit.addEventListener("click", this.onSubmit);
    this.input.addEventListener("input", this.onInput);
    this.input.addEventListener("keydown", this.onKeyDown);
    this.inputHandleDebauncer = new Debauncer(300);
  }

  onSubmit(event) {
    event.preventDefault();
    this.updateValidity(isValidCardNumber(this.input.value));
  }

  onInput(event) {
    const widget = this;
    this.inputHandleDebauncer.exec((numberStr) => {
      widget.resetValidity();
      widget.updateCardTypeActivity(numberStr);
    }, this.input.value);
  }

  onKeyDown(event) {
    if (event.key === "Enter") {
      this.updateValidity(isValidCardNumber(this.input.value));
    }
  }

  updateValidity(isValid) {
    this.submit.setAttribute("valid", String(isValid));
  }

  resetValidity() {
    this.submit.removeAttribute("valid");
  }

  updateCardTypeActivity(numberStr) {
    const cardType = determineCardType(numberStr);
    for (const card of this.cards) {
      if (cardType === card.dataset["type"]) {
        card.setAttribute("inactive", "false");
      } else {
        card.setAttribute("inactive", "true");
      }
    }
  }
}
