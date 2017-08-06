const app = app || {};

((document) => {
  app.siteTitle = {
    el: document.querySelector('.site-header__site-title-link'),
    setShort() {
      const that = this;
      const removeCaracter = () => {
        const name = 'Marc';
        const length = that.el.innerHTML.length;

        if (that.el.innerHTML !== name) {
          that.el.innerHTML = that.el.innerHTML.slice(0, length - 1);
        }
        if (that.el.innerHTML !== name) {
          setTimeout(removeCaracter, 75);
        }
      };

      removeCaracter();
    },
    setLong() {
      const that = this;
      const addCaracter = () => {
        const name = 'Marc-Antoine Ruel';
        const length = that.el.innerHTML.length;

        if (that.el.innerHTML !== name) {
          that.el.innerHTML = name.slice(0, length + 1);
        }
        if (that.el.innerHTML !== name) {
          setTimeout(addCaracter, 75);
        }
      };

      addCaracter();
    },
    startShort() {
      this.el.innerHTML = "Marc";
    },
    startLong() {
      this.el.innerHTML = "Marc-Antoine Ruel";
    }
  };
})(document);
