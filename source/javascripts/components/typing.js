const typingArea = document.querySelector('.typing-area');

typingArea.typing = function (sentence, speed, callback) {
  speed = speed || 75;
  const that = this;
  that.innerHTML += sentence.slice(0, 1);
  const newSentence = sentence.slice(1);


  if (newSentence.length > 0) {
    setTimeout(() => {
      that.typing(newSentence, speed);
    }, speed);
  } else {
    console.log('typing over');
  }
};

typingArea.erase = function (characterLeftLength, speed, callback) {

  characterLeftLength = characterLeftLength || 0;
  speed = speed || 30;
  const that = this;
  const areaLength = this.innerHTML.length;
  const newAreaLength = areaLength - 1;

  that.innerHTML = that.innerHTML.slice(0, newAreaLength);

  if (newAreaLength > characterLeftLength) {
    setTimeout(() => {
      that.erase(characterLeftLength, speed);
    }, speed);
  } else {
    console.log(typeof callback);
    callback();
  }
};

typingArea.replaceString = function (sentence) {
  // Evalute bolt string
  const that = this;
  const originalSentence = that.innerHTML;
  let sameValueLength = 0;
  let originalSentenceSliced = originalSentence.slice(0, sameValueLength + 1);
  let newSentenceSliced = sentence.slice(0, sameValueLength + 1);

  while (originalSentenceSliced === newSentenceSliced) {
    sameValueLength += 1;
    originalSentenceSliced = originalSentence.slice(0, sameValueLength + 1);
    newSentenceSliced = sentence.slice(0, sameValueLength + 1);
  }

  console.log(sentence.slice(sameValueLength));

  that.erase(sameValueLength, function () { console.log('callbackcalled')});
};
