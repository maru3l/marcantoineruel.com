(function () {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const maxParticules = 200;
  let particules = [];
  const c = document.getElementById("space");
  const ctx = c.getContext('2d');
  const preCanvas = document.createElement('canvas');
  const preContext = preCanvas.getContext('2d');
  c.width = windowWidth;
  c.height = windowHeight;
  preCanvas.width = windowWidth;
  preCanvas.height = windowHeight;

  class Star {
    constructor (context) {
      this.context = context;
      this.y = Math.floor(Math.random() * window.innerHeight);
      this.x = Math.floor(Math.random() * window.innerWidth);
      this.radius = Math.floor((Math.random() * (4 - 1)) + 1);
      this.color = `hsla(1, 92%, ${Math.floor((Math.random() * (80 - 65)) + 65)}%, 1)`;
      this.vx = ((Math.random() * (4 - .3)) + .3);
      this.tx = 0;
      this.ty = 0;
    }

    move () {
      this.x = this.x + this.vx;

      if (this.x > windowWidth + this.radius) {
        this.x = 0 - this.radius;
      }

      this.render();

      return true;
    }

    render () {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      this.context.fillStyle = this.color;
      this.context.fill();
      this.context.closePath();
    }
  }

  const populate = function (num) {
    for (let i = 0; i < num; i++) {
      particules.push( new Star(preContext));
    }
  }

  const clear = function (context) {
    context.clearRect(0, 0, windowWidth, windowHeight);
  }

  const animate = function () {
    clear(preContext);
    clear(ctx);
    particules.filter(function(p) { return p.move() });
    ctx.drawImage(preCanvas, 0, 0);
    window.requestAnimationFrame(animate);
  }

  populate(maxParticules);
  animate();
})()
