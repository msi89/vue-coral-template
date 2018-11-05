import $ from "jquery";

$(document).ready(function() {
  alert("hello");

  getDatas();
  $("#myDatatable").DataTable();
});

function getDatas() {
  var dt =
    "<tr><td>Assie marc</td><td>Abidjan</td> <td>58min 40s</td> <td>1h23 58min 40s</td> <td>2eme</td></tr>";
  var dt2 =
    '<tr> <td data-label="Nom">Assie marc</td><td data-label="Ville">Abidjan</td><td data-label="Tour 1">58min 40s</td><td data-label="Tour 2">1h23 58min 40s</td><td data-label="Position">2eme</td> </tr>';

  for (let i = 0; i < 5; i++) {
    $("#table_responsive tbody").append(dt);
    $("#table_responsive_datagrid tbody").append(dt);
    $("#table_default tbody").append(dt);
    $("#tb_resp tbody").append(dt2);
  }
  for (let i = 0; i < 200; i++) {
    $("#myDatatable tbody").append(
      "<tr><td>" +
        i +
        "</td> <td>Oreli</td><td>oreli@mail.ci</td> <td>+22507836510</td> <td>Cocody, 7me tranche</td></tr>"
    );
  }
}
