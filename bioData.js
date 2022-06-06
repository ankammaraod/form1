class BioData {
  constructor() {
    this.name = '';
    this.dob = '';
    this.hobbies = [];
  }

  toString() {
    return {
      name: this.name,
      dob: this.dob,
      hobbies: this.hobbies,
    }
  }
}
exports.BioData = BioData;