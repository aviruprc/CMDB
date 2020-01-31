const form = document.getElementById('addmovieform');



form.addEventListener('submit', e => {



  e.preventDefault();



  const Title = document.getElementById('Title').value;



  const Description = document.getElementById('Description').value;



  const Rating = document.getElementById('Rating').value;



  const Cast = document.getElementById('Cast').value;



  const Year = document.getElementById('Year').value;



  fetch('https://i9tsozqn90.execute-api.ap-south-1.amazonaws.com/add_movie/AddMovie01', {



    headers: { 'Content-Type': 'application/json; charset=utf-8' },



    method: 'POST',



    body: JSON.stringify({



      title: Title,



       year:Year,



      description: Description,



      rating: Rating,



      cast:Cast



     

    })



  }).then(() => {



    form.reset();



    alert('Movie has been added!');



  });



});