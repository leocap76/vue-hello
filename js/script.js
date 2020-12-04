// Con Vue,
//stampare a schermo un messaggio all’interno di un h1,
//  utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data.

// var app = new Vue(
// {
// el: '#root',
//   data: {
//     message:'hi!!'
//   }
// });

var app = new Vue(
  {
    el: "#container",
    data: {
      message: "",
      text:"",
      immagine:"img/Tesla-Elon-Musk.jpg",
    }
  }
);
