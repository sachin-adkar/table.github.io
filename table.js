var counter = 0;
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
tbl.className = "tab";
tbl.style.width = "20%";
var tbdy = document.createElement("tbody");
window.onload = function updateRow() {
  ++counter;
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  var plus = document.createElement("BUTTON");
  plus.id = "btn";
  var minus = document.createElement("BUTTON");
  minus.id = "btn";
  plus.appendChild(document.createTextNode("Add"));
  plus.onclick = updateRow;
  /* if(counter == 1){
        minus.disabled = true;
        }*/
  minus.onclick = removeRow;
  minus.appendChild(document.createTextNode("Delete"));
  td.appendChild(plus);
  td.appendChild(minus);
  tr.appendChild(td);
  tbdy.appendChild(tr);
  function removeRow() {
    if (counter >= 2) {
      tr.removeChild(td);
      --counter;
    } else {
      alert("Sorry Can't perform the operation");
    }
  }

  tbl.appendChild(tbdy);
  body.appendChild(tbl);
};
