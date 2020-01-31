const form = document.getElementById('searchForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const Title = document.getElementById('Title').value;
  const Year = document.getElementById('Year').value;
  fetch('https://i9tsozqn90.execute-api.ap-south-1.amazonaws.com/add_get_search/get-a-movie', {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'POST',
    body: JSON.stringify({
      title: Title,
      year:Year,
    })
  })
  .then(response => response.json())
  .then(data => displayData(data));
const MovieContainer = document.getElementById('MovieContainer');
const displayData = data => {
  
  const m = data.Item;
  if (!m) {
    alert('Movie Not Found!');
  } else {
    const Title = m.title.S;
    const Year = m.year.S;
    const Description = m.description.S;
    const Rating = m.rating.S;
    const Cast = m.cast.S;
    MovieContainer.innerHTML = `
      <tr>
        <th>${Title}</th>
        <td>${Description}</td>
 	<td>${Rating}</td>
	<td>${Cast}</td>
        <td>${Year}</td>
      </tr>
    `;
  
  }
  
    
}
})