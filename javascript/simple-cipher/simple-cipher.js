class Cipher {

  constructor(key = 'abcabcabcabc') {
    if (key === '' || /[A-Z\d]/.test(key)) { throw new Error('Bad key'); }
    this.key = key;
  }

  encode(message) {
    var key = this.key.length < message.length ?
      this.extendKey(message.length) : this.key;
    return message.split('').map(function(letter, i){
        var keyShift = key.charCodeAt(i) - 97;
        return ((message.charCodeAt(i) + keyShift) > 122) ?
          String.fromCharCode(((message.charCodeAt(i) + keyShift) - 122) + 96) :
          String.fromCharCode(message.charCodeAt(i) + keyShift)
      }).join('');
  }

  decode(message) {
    var key = this.key.length < message.length ?
      this.extendKey(message.length) : this.key;
    return message.split('').map(function(letter, i){
      var keyShift = key.charCodeAt(i) - 97;
      return ((message.charCodeAt(i) - keyShift) < 97) ?
        String.fromCharCode(((message.charCodeAt(i) - keyShift) + 26)) :
        String.fromCharCode(message.charCodeAt(i) - keyShift)
      }).join('');
  }

  extendKey(len) {
    return this.key.repeat( Math.floor(len/this.key.length) + 1 );
  }
}

module.exports = Cipher;