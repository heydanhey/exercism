class Bob {
  hey(str) {
    str = str.trim();
    switch(true) {
      case (this.isNotSyaingAnything(str)):
        return 'Fine. Be that way!';
      case (this.isYellingAtMe(str)):
        return 'Whoa, chill out!'
      case (this.isQuestioningMe(str)):
        return 'Sure.'
      default:
        return 'Whatever.'
    }
  }

  isNotSyaingAnything(str) {
    return str.replace(/\s/g, '') === '';
  }

  isYellingAtMe(str) {
    if (!str.replace(/[^a-zA-Z]/g, '')) { return false; }
    return str.toUpperCase() === str;
  }

  isQuestioningMe(str) {
    return str.slice(-1) === '?';
  }
}

module.exports = Bob;