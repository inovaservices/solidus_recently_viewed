Spree.fetch_recently_viewed_products = function(productId){
  if (productId == null) { productId = ""; }
  return Rails.ajax({
    url: Spree.pathFor("recently_viewed_products?product_id=" + productId),
    success: function(data) {
      return document.getElementById("#recently_viewed_container").html(data);
    },
    error: function(data) {
      console.log("error" + data);
    }
  });
};
