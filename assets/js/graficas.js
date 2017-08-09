var graficaUno = new ProgressBar.Circle(grafica1, {
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
  from: { color: '#000', width: 1 },
  to: { color: '#FACC2E', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + "%");
    }

  }
});


var graficaDos = new ProgressBar.Circle(grafica2, {
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
  from: { color: '#000', width: 1 },
  to: { color: '#FACC2E', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + "%");
    }

  }
});



var graficaTres = new ProgressBar.Circle(grafica3, {
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
  from: { color: '#000', width: 1 },
  to: { color: '#FACC2E', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + "%");
    }

  }
});


graficaUno.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
graficaUno.text.style.fontSize = '3rem';
graficaUno.text.style.color = 'black';
graficaUno.animate(0.5);  // Number from 0.0 to 1.0

graficaDos.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
graficaDos.text.style.fontSize = '3rem';
graficaDos.text.style.color = 'black';
graficaDos.animate(0.7);  // Number from 0.0 to 1.0

graficaTres.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
graficaTres.text.style.fontSize = '3rem';
graficaTres.text.style.color = 'black';
graficaTres.animate(0.6);  // Number from 0.0 to 1.0