const app = app || {};

((document) => {
  app.siteNavigation = {
    el: document.querySelector('.site-navigation'),
    open() {
      this.el.classList.add('site-navigation--is-open');
    },
    close() {
      this.el.classList.remove('site-navigation--is-open');
    },
  };
})(document);
