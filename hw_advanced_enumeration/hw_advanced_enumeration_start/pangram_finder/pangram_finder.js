const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  const thePhrase = this.phrase.toLowerCase();
  return this.alphabet.every((letter) => {
    return thePhrase.includes(letter);
  })
}

module.exports = PangramFinder;
