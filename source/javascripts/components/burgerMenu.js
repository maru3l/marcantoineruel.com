const app = app || {};

((document) => {
  app.burgerMenu = {
    el: document.querySelector('.burger-menu'),
    select() {
      this.el.classList.add('burger-menu--is-selected','burger-menu--is-dark','burger-menu--is-on-top');
    },
    unselect() {
      this.el.classList.remove('burger-menu--is-selected','burger-menu--is-dark','burger-menu--is-on-top');
    },
    bind() {
      const that = this;
      this.el.addEventListener('click', function () {
        if (that.el.classList.contains('burger-menu--is-selected')) {
          that.unselect();
          app.siteNavigation.close();
          console.log(app.siteNavigation);
        } else {
          that.select();
          app.siteNavigation.open();
          console.log(app.siteNavigation);
        }
      })
    }
  };

  app.burgerMenu.bind()
})(document);
