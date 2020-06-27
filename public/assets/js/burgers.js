// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-burg").on("click", function(event) {
        event.preventDefault();
      let id = $(this).data("id");
    //   var newEaten = $(this).data("devoured");
  
      var newEatenStatus = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenStatus
      }).then(
        function() {
          console.log("changed sleep to", newEatenStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".delete-class").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the PUT request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE",
    //   }).then(
    //     function() {
    //       console.log("Deleted Cat ", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });