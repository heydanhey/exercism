var reverseString = function (input) {
  var inputArray = input.split(''),
    reversed = [];
  for (var i = inputArray.length; i >= 0; i--){
    reversed.push(inputArray[i]);
  }
  return reversed.join('');
};

module.exports = reverseString;