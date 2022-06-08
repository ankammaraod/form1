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

  nextPrompt() {
    this.#currentIndex++;
  }

  areQueriesOver() {
    return this.#currentIndex === this.#fields.length;
  }

  getEntries() {
    const entries = {};
    this.#fields.forEach(({ property, response }, index) => {
      entries[property] = this.#fields[index].parser(response);
    })
    return entries;

  }

  fillCurrentField(response) {
    if (this.#fields[this.#currentIndex].validate(response)) {
      this.#fields[this.#currentIndex].fill(response);
      return true;
    }
  };
}
exports.Form = Form;
