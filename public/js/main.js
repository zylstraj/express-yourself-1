$('document').ready(function(){

  var displayInventory = function() {
    $.get( "api/inventory", function(inventory) {
      for (var i = 0; i < inventory.length; i++) {
        console.log(inventory[i]);
        $('#inventory_header').after('<li id="' + inventory[i]._id + '" class="inventory_list"><span class="span_description">' + inventory[i].itemName + '</span><span class="span_price">$' + inventory[i].price + '.00</span><span class="span_qty"><input type="number" name="' + inventory[i]._id + '" value="' + inventory[i].quantity + '"><button class="delete" value="' + inventory[i]._id + '">X</button></span></li>')
      };
    });
  };
  displayInventory();

  $('#post_inventory_item').on('submit', function(){
    var form = $(this);
    var postData = form.serialize();
    $.ajax({
      type        :   'POST',
      url         :   'api/inventory',
      data        :   postData,
      dataType    :   "json",
      success     :   function successful(data) {
        console.log("Request was successful");
        console.log(data);
      }
    });
    form.trigger('reset');
    displayInventory();
  });

  $('.delete').on('click', function(inventory_id){
    inventory_id = $(this).val();
    $.ajax({
      type: 'DELETE',
      url: 'api/inventory',
      data: inventory_id,
      success     :   function successful(data) {
        console.log("Request was successful");
        console.log(data);
      }
    });
  });

});
