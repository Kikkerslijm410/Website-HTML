$(function() {
    // Alle soorten kaartjes
  var jsonData = [
    {
        title: "Volwassenen (vanaf 18 jaar)",
        price: 15,
        quantity: 0,
        total: 0
    },
    {
        title: "Kinderen (12 t/m 17 jaar)",
        price: 10,
        quantity: 0,
        total: 0
    },
    {
        title: "Kinderen (onder 12 jaar)",
        price: 5,
        quantity: 0,
        total: 0
    }
  ];
  
  // Maak een template van de kaartjes
  var html = "<tbody>";
  $.each(jsonData, function() {
    html +=
      '<tr class="cart-item">' +
      "        <td>" +
      "        </td>" +
      "        <td>" +
      "          " +
      this.title +
      "        </td>" +
      "        <td>" +
      this.price +
      "</td>" +
      "        <td>" +
      '          <input class="input is-primary cart-item-qty" style="width:100px" type="number" min="0" max="15" value="' +
      this.quantity +
      '" data-price="' +
      this.price +
      '">' +
      "        </td>" +
      '        <td class="cart-item-total">' +
      this.total +
      "</td>" +
      "        <td>" +
      "        </td>" +
      "      </tr>";
  });
  html += "</tbody>";
  $(".shopping-cart").append(html);
  
  recalculateCart();

  $(".cart-item-qty").change(function() {
    var $this = $(this);
    var parent = $this.parent().parent();
    var price = $this.attr("data-price");
    var quantity = $this.val();
    var total = price * quantity;
    parent.find(".cart-item-total").html(total.toFixed(2));
    recalculateCart();
  });

  $(".button").click(function() {
    var parent = $(this)
      .parent()
      .parent();
    parent.remove();
    recalculateCart();
  });
});


function recalculateCart() {
  var subTotal = 0;
  var grandTotal = 0;
  var tax = 0;
  var items = $(".cart-item");
  $.each(items, function() {
    var itemQuantity = $(this).find(".cart-item-qty");
      var itemTotal = itemQuantity.val() * itemQuantity.attr("data-price");
      subTotal += itemTotal;
  });
  if (subTotal > 0) {
    grandTotal = subTotal ;
    $(".totals,.checkout").show();
  } else {
    $(".totals,.checkout").hide();
  }
  $("#cart-total").html(grandTotal.toFixed(2));
}