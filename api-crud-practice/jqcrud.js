$(function () {
  read_product();
  $(".product-main").on("click", ".btn-danger", delete_product);
});
function read_product() {
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/products",
    method: "GET",
    success: function (response) {
      console.log(response);
      var product = $(".product-main");
      product.empty();
      for (var i = 0; i < response.length; i++) {
        var temp = response[i];
        product.append(
          `<div class="product" data-id="${temp._id}"><h3>${temp.name}</h3><button class="btn btn-warning btn-sm float-right">Update</button><button class="btn  btn-danger btn-sm float-right">Delete</button> <h4>${temp.price}</h4><h4>${temp.color}</h4><h4>${temp.department}</h4><p>${temp.description}</p></div>`
        );
      }
    },
  });
}
function delete_product() {
  var btn = $(this);
  var parent = btn.closest(".product");
  let id = parent.attr("data-id");
  console.log(id);
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/products/" + id,
    method: "DELETE",
    success: function (response) {
      read_product();
    },
  });
}
