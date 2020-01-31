const form = document.getElementById('addMovieForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const Title = document.getElementById('Title').value;
  const Description = document.getElementById('Description').value;
  const Rating = document.getElementById('Rating').value;
  const Cast = document.getElementById('Cast').value;
  const Year = document.getElementById('Year').value;
  fetch('https://i9tsozqn90.execute-api.ap-south-1.amazonaws.com/beta/UpdateMovie01', {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'PUT',
    body: JSON.stringify({
      title: Title,
       year:Year,
      description: Description,
      rating: Rating,
      cast:Cast
    })
  }).then(() => {
    form.reset();
    alert('data has been submitted!');
  });
});
