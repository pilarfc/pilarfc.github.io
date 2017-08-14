var graficaHtml = new ProgressBar.Circle(containerHtml, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#FFBF00', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});


var graficaCss = new ProgressBar.Circle(containerCss, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#FFBF00', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});


var graficaJavascript = new ProgressBar.Circle(containerJavascript, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#FFBF00', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});


graficaHtml.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
graficaHtml.text.style.fontSize = '3rem';
graficaHtml.text.style.color = 'black';
graficaHtml.animate(0.7);  // Number from 0.0 to 1.0

graficaCss.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
graficaCss.text.style.fontSize = '3rem';
graficaCss.text.style.color = 'black';
graficaCss.animate(0.6);  // Number from 0.0 to 1.0

graficaJavascript.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
graficaJavascript.text.style.fontSize = '3rem';
graficaJavascript.text.style.color = 'black';
graficaJavascript.animate(0.5);  // Number from 0.0 to 1.0