$(function () {
  read_recipies();
});
function read_recipies() {
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "GET",
    success: function (response) {
      console.log(response);
      var recipes = $(".recipies-main");
      recipes.empty();
      for (var i = 0; i < response.length; i++) {
        var temp = response[i];
        recipes.append(
          `<div class="recipie"><h3>${temp.title}</h3><button class="btn btn-warning btn-sm float-right">Update</button><button class="btn  btn-danger btn-sm float-right">Delete</button> <p>${temp.body}</p></div>`
        );
      }
    },
  });
}
