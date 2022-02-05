$(document).ready(function() {
    $("#retrieve-resources,#retrieve-resources1 ").click(function() {
      var displayResources = $("#display-resources");
      
      displayResources.text("Loading data from JSON source...");
  
      $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users", 
        success: function(result) {
            debugger;
          var x=document.getElementById("nav-ul");
          var div=document.createElement("div");
          var output ="<table><thead><tr><th>name</th><th>username</th><th>email</th></thead><tbody>";
          for (var i in result) {
            output +="<tr><td>" + result[i].name +"</td><td>" +result[i].username +"</td><td>" +result[i].email +"</td></tr>";
            var li=document.createElement("li");
            li.className="nav-item dropdown";
            var btn = document.createElement("a");
            var ul = document.createElement("a");
            btn.className="nav-link dropdown-toggle";
            btn.innerHTML=result[i].name;
           div.appendChild(li);
            div.appendChild(btn);
            x.appendChild(div);
            
          }
          output += "</tbody></table>";
  
          displayResources.html(output);
          $("table").addClass("table");
        }
      });
    });
  });