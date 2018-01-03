var DnaTranscriber = function () {
  this.dnaToRna = {
    'C' : 'G',
    'G' : 'C',
    'A' : 'U',
    'T' : 'A'
  };
}

DnaTranscriber.prototype.toRna = function (dna) {
  var dnaToRna = this.dnaToRna;
  var rna = dna.split('').map(function(char){
      return dnaToRna[char];
  })
  if (rna.includes(undefined)) { throw new Error('Invalid input') }
  return rna.join('');
};

module.exports = DnaTranscriber;

