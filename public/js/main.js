$('document').ready(function(){

  // $('#form_donut').on('submit', function(e){
  //   e.preventDefault();
  //   var form = $(this);
  //   var donutData = form.serialize();
  // $.ajax({
  //   type: 'POST', url: '/donuts', data: donutData
  //   }).done(function(donutName, donutDescription){
  //     console.log(donutName.name + ', ' + donutName.description + ', ' + donutDescription);
  //     form.trigger('reset');
  //   });
  // });

  // $('#today_donut').on('submit', function(e){
  //   e.preventDefault();
  //   var getDay = $('#select_day option:selected').val();
  //   var thisURL = '/donuts/' + getDay;
  //   $.ajax({
  //     type: 'GET', url: thisURL
  //   }).done(function(data, status){
  //     console.log(data);
  //   });
  // });
  $('#post_inventory_item').on('submit', function(e){
    e.preventDefault();
    var form = $(this);
    var postData = form.serialize();
    $.ajax({
      type        :   'POST',
      url         :   'api/inventory',
      data        :   postData,
      dataType    :   "json",
      success     :   function successful(data) {
        console.log("Request was successful");
        console.log(data)
      }
    });
    form.trigger('reset');
  });

});
