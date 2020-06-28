$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        var newState = {
            devoured: "true"
        };
       
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(
            function () {
                console.log("burger was devoured", newDevoured);
                
                location.reload();
            }
        );
    });

    $("#add-burger").on("submit", function (event) {
    
      event.preventDefault();
      if ($("#burger-name").val().trim() === "") {
        alert("Please enter a burger name");
        return false;
      } else {
        
        var newBurger = {
          burger_name: $("#burger-name").val().trim(),
          devoured: 0,
        };

        
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger,
        }).then(function () {
          console.log("created new burger");
          
          location.reload();
        });
      }
    });
  
  $(".delete").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id,
    }).then(function () {
      location.reload();
    });
  });
});