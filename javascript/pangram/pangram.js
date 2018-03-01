class Pangram {

  constructor(input = '') {
    this.input = input;
  }

  isPangram() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.input.toLowerCase().split('').forEach(function(letter){
      alphabet = alphabet.replace(letter, '');
    })
    return alphabet.length === 0
  }
}

module.exports = Pangram;