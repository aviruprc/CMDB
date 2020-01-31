fetch('https://i9tsozqn90.execute-api.ap-south-1.amazonaws.com/add_and_get/get-movies')
  .then(response => response.json())
  .then(data => displayData(data));
const MovieContainer = document.getElementById('MovieContainer');
const displayData = data => {
  const items = data.Items;
  items.forEach(m => {
    const Title = m.title.S;
    const Year = m.year.S;
    const Description = m.description.S;
    const Rating = m.rating.S;
    const Cast = m.cast.S;
    MovieContainer.insertAdjacentHTML('beforeend', `
      <tr>
        <th>${Title}</th>
        <td>${Description}</td>
 	<td>${Rating}</td>
	<td>${Cast}</td>
        <td>${Year}</td>
      </tr>
    `);
  });
}
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
     one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}