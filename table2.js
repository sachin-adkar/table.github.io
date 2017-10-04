var table = document.createElement("table");
var thead = document.createElement("thead");
var headrow = document.createElement("tr");
var head1 = document.createElement("th");
head1.innerHTML = "Add Row";
var head2 = document.createElement("th");
head2.innerHTML = "Remove Row";
headrow.appendChild(head1);
headrow.appendChild(head2);
thead.appendChild(headrow);
table.appendChild(thead);

var tbody = document.createElement("tbody");
table.appendChild(tbody);
document.body.appendChild(table);

function AddRow() {
  //this.disabled = true;
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var add = document.createElement("button");
  add.appendChild(document.createTextNode("Add"));
  add.onclick = AddRow;
  var td2 = document.createElement("td");
  var remove = document.createElement("button");
  remove.onclick = RemoveRow;
  remove.appendChild(document.createTextNode("Remove"));
  remove.setAttribute("class", "remove-button");
  remove.disabled = true;
  td1.appendChild(add);
  td2.appendChild(remove);
  tr.appendChild(td1);
  tr.appendChild(td2);
  document.getElementsByTagName("tbody")[0].appendChild(tr);
  if (document.getElementsByTagName("tbody")[0].children.length > 1) {
    var removebuttons = document.getElementsByClassName("remove-button");
    for (var i = 0; i < removebuttons.length; ++i) {
      removebuttons[i].disabled = false;
    }
  }
}

function RemoveRow() {
  if (document.getElementsByTagName("tbody")[0].children.length > 1) {
    this.parentElement.parentElement.remove();
    if (document.getElementsByTagName("tbody")[0].children.length == 1) {
      console.log(document.getElementsByClassName("remove-button")[0].disabled);
      document.getElementsByClassName("remove-button")[0].disabled = true;
    }
  }
}

AddRow();
