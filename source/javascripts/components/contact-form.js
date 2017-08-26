const app = app || {};
(document => {
  app.contactForm = {
    text: '',
    error: false,
    getContent () {
      app.contactForm.text = app.contactForm.textArea.innerHTML
      app.contactForm.textArea.innerHTML = ''
    },
    bind () {
      app.contactForm.textArea = document.getElementById('js-contact-form-textarea')
      app.contactForm.form = document.getElementById('js-contact-form-form')
      app.contactForm.errorArea = document.getElementById('js-contact-form-errorArea')

      app.contactForm.form.addEventListener('submit', (e) => {
        e.preventDefault();
        app.contactForm.submit()
      })
    },
    typing (callback) {
      const innerLength = app.contactForm.textArea.innerHTML.length + 1;
      app.contactForm.textArea.innerHTML = app.contactForm.text.substr(0, innerLength);

      if (innerLength < app.contactForm.text.length) {
        setTimeout(function(){
          app.contactForm.typing(callback)
        }, 75);
      } else if (callback && typeof(callback) === "function") {
        callback();
      }
    },
    selectTextArea () {
      app.contactForm.textArea.focus()
    },
    validate () {
      const re = '([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)';
      const email = app.contactForm.textArea.value.match(re)
      return email ? true:false
    },
    send () {
      const xhr = new XMLHttpRequest()
      const message = app.contactForm.textArea.value
      const data = new FormData(app.contactForm.form)

      xhr.open('POST', 'https://formspree.io/hello@marcantoineruel.com')
      xhr.setRequestHeader('Accept', 'application/json')

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
          console.log('message envoyer')
        }
      });
      xhr.send(data)
    },
    submit () {
      if (app.contactForm.validate()) {
        app.contactForm.hideError()
        app.contactForm.send()
      } else {
        app.contactForm.showError('Oups! T\'as oublié de me donner ton courriel pour que je te contact &#128075;')
      }
    },
    showError (message) {
      app.contactForm.errorArea.innerHTML = message
      app.contactForm.errorArea.classList.add('contact-form__alert--show')
      app.contactForm.errorArea.classList.remove('contact-form__alert--animate')
      setTimeout(() => {
        app.contactForm.errorArea.classList.add('contact-form__alert--animate')
      }, 1);
    },
    hideError () {
      app.contactForm.errorArea.classList.remove('contact-form__alert--animate')
      app.contactForm.errorArea.classList.remove('contact-form__alert--show')
    },
    init () {
      app.contactForm.bind()
      app.contactForm.getContent()
      app.contactForm.typing(app.contactForm.selectTextArea)
    }
  }

  app.contactForm.init()
})(document)
