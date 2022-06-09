class Form {
  #fields;
  #currentIndex;
  constructor(fields) {
    this.#fields = fields;
    this.#currentIndex = 0;
  }

  currPrompt() {
    return this.#fields[this.#currentIndex].getDescription();
  }

  areQueriesOver() {
    return this.#fields.every(field => field.isFilled());
  }

  getEntries() {
    const entries = {};
    this.#fields.forEach(({ property, response }, index) => {
      entries[property] = this.#fields[index].parser(response);
    })
    return entries;
  }

  fillCurrentField(response) {
    const currentField = this.#fields[this.#currentIndex];
    if (currentField.validate(response)) {
      currentField.fill(response);
      if (currentField.isFilled()) {
        this.#currentIndex++;
      }
      return true;
    }
  };
}
exports.Form = Form;
