// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = 
                res.firstname + " " + res.secondName
              if (res.likegames) {
                message += " likes paling computer games";
              }
              else {
                message += " doesn't like Chinese food";
              }
              message += " and you are ";
              message += res.age;
              message += " y.o.";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);





