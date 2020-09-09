function newtask() {
  var item = document.createElement("li");
  var task = document.getElementById("task").value;
  var x = document.createTextNode(task);
  document.getElementById("task").value = "";

  var del = document.createElement("BUTTON");
  del.className = "remove";

  var done = document.createElement("BUTTON");
  done.className = "finish";

  var edit = document.createElement("BUTTON");
  edit.className = "editing";

  // Some styling for the buttons
  del.style.backgroundColor = "rgb(212, 42, 42)";
  del.innerHTML = "Delete";
  del.style.padding = "5px";
  del.style.width = "100px";
  del.style.marginLeft = "20px";
  del.style.borderRadius = "10px";
  done.style.backgroundColor = "rgb(67, 121, 223)";
  done.innerHTML = "Done";
  done.style.padding = "5px";
  done.style.width = "100px";
  done.style.marginLeft = "20px";
  done.style.borderRadius = "10px";
  edit.style.backgroundColor = "rgb(21, 192, 21)";
  edit.innerHTML = "Edit";
  edit.style.padding = "5px";
  edit.style.width = "100px";
  edit.style.marginLeft = "20px";
  edit.style.borderRadius = "10px";

  // We are checking if the user has entered any task in input or not
  if (task == "") {
    alert("Please enter some task !!!");
  } else {
    // To add the task
    item.appendChild(x);
    document.getElementById("list").appendChild(item);
    item.appendChild(done);
    item.appendChild(edit);
    item.appendChild(del);

    // To delete the task
    var remove = document.getElementsByClassName("remove");
    for (var i = 0; i < remove.length; i++) {
      remove[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }

    // To strike off the task that are completed
    var finish = document.getElementsByClassName("finish");
    for (var i = 0; i < finish.length; i++) {
      finish[i].onclick = function () {
        var div = this.parentElement;
        div.style.textDecoration = "line-through";
      };
    }

    // To edit the task
    var editing = document.getElementsByClassName("editing");
    for (var i = 0; i < editing.length; i++) {
      editing[i].onclick = function () {
        var p = prompt("Edit your task");
        this.parentElement.innerText = p;
        item.appendChild(done);
        item.appendChild(edit);
        item.appendChild(del);
      };
    }
  }
}
