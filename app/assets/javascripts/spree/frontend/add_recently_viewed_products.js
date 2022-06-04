Spree.fetch_recently_viewed_products = function(productId){
  if (productId == null) { productId = ""; }
  return $.ajax({
    url: Spree.pathFor("recently_viewed_products?product_id=" + productId),
    success(data) {
      return $("#recently_viewed_container").html(data);
    }
  });
};
