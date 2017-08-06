((document) => {
  const sentences = [
    {
      text: 'En gros, ',
      time: 10
    },
    {
      text: 'En gros, je programme des site web.',
      time: 2000
    },
    {
      text: 'En gros, je développe des applications.',
      time: 2000
    },
    {
      text: 'En gros, je gère des serveurs.',
      time: 2000
    },
    {
      text: 'En gros, j’intègre des idées folles',
      time: 2000
    },
    {
      text: 'En gros, je fais du vélo (gratuitement)',
      time: 1000
    },
    {
      text: 'En gros, je regarde Mr. Robot (je sais, c’est geek)',
      time: 1000
    },
    {
      text: 'En gros, je fais un cube Rubik en 60 secondes',
      time: 1000
    },
    {
      text: 'T\'es encore là? ',
      time: 100
    },
    {
      text: 'T\'es encore là? Qu’est-ce que tu attends pour me contacter?',
      time: 6000
    },
  ];

  let current = 0;
  const area = document.querySelector('.site-home__typing');

  // erase everything
  area.innerHTML = '';

  const setNextCurrent = function () {
    if (current < sentences.length - 1) {
      current = current + 1;
    } else {
      current = 0;
    }
  }

  const type = function (str, callback) {
    const innerLength = area.innerHTML.length + 1;
    area.innerHTML = str.substr(0, innerLength);

    if (innerLength < str.length) {
      setTimeout(function(){
        type(str, callback);
      }, 75);
    } else if (callback && typeof(callback) === "function") {
      callback();
    }
  }

  const erase = function (callback) {
    const innnerStr = area.innerHTML;
    const innerLength = innnerStr.length - 1;
    const newInner = innnerStr.substr(0, innerLength);
    const futureInner = sentences[current].text.substr(0, innerLength);
    area.innerHTML = newInner;

    if (innerLength > 0 && newInner != futureInner) {
      setTimeout(function(){
        erase(callback);
      }, 30);
    } else if (callback && typeof(callback) === "function") {
      setTimeout(function(){
        callback();
      }, 250);
    }
  }

  const replace = function () {
    type(sentences[current].text, function () {
      setTimeout(function () {
        setNextCurrent();
        erase(replace);
      }, sentences[current].time)
    });
  }

  replace();

})(document);
