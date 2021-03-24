$(function () {
  $("#btn-primary").click(read_recipies);
});
function read_recipies() {
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "GET",
    success: function (response) {
      console.log(response);
      var recipes = $("#recipies-main");
      recipes.empty();
      for (var i = 0; i < response.length; i++) {
        var temp = response[i];
        recipes.append(
          '<div class="recipie"><h3>${temp.title}</h3><p>${temp.body}</p></div>'
        );
      }
    },
  });
}
