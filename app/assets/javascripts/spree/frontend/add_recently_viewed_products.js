Spree.fetch_recently_viewed_products = function(productId) {
  if (productId == null) { productId = ""; }

  Rails.ajax({
    url: Spree.pathFor("recently_viewed_products?product_id=" + productId),
    type: "get",
    success: function(data) {
      return document.getElementById("#recently_viewed_container").innerHTML(data);
    },
    error: function(data) {
      console.log("error" + data);
    }
  });
};
