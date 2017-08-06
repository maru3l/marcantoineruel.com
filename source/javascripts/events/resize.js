(function () {
  let oldSize = window.innerWidth;

  if (oldSize < 800) {
    app.siteTitle.startShort();
  } else {
    app.siteTitle.startLong();
  }

  // window.addEventListener('resize', function (evt) {
  //   console.log(evt);
  // });
})()
