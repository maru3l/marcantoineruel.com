app.siteMain = {
  el: document.querySelector('.site-main__header'),
  header: document.querySelector('.site-main__header'),
  headerContainer: document.querySelector('.site-main__header-container'),
  content: document.querySelector('.site-main__content'),
  skewEl: document.querySelector('.site-main__skew'),
  contentContainer: document.querySelector('.site-main__container'),
  windowHeight: window.innerHeight,
  degree: 4,
  lastScroll: 0,
  top: 0,

  scrollEvent: function (evt) {

    app.siteMain.lastScroll = evt.currentTarget.scrollY;
    app.siteMain.degree = ((6 / app.siteMain.windowHeight) * app.siteMain.lastScroll) + 4;
    app.siteMain.top = 45 - ((40 / app.siteMain.windowHeight) * app.siteMain.lastScroll);

    app.siteMain.animate();


  },
  animate: function() {
    app.siteMain.skewEl.style.transform = `skewY(-${app.siteMain.degree}deg)`;
    if (app.siteMain.top >= 20) {
      app.siteMain.header.style.transform = `translate(-50%, ${app.siteMain.top}vh)`;
    }
  },
  init: function () {
    window.addEventListener('scroll', app.siteMain.scrollEvent);
  }
};

app.siteMain.init();

console.log(app.siteMain.windowHeight);
