$('document').ready(function(){

  //GET
  //when daily menu dropdown is submitted
  $('#daily_donut').on('submit', function(e){
    e.preventDefault();
    var form = $(this);
    var thisDay = $('#get-select_day option:selected').val();
    var thisURL = '/donuts/' + thisDay;
    $.ajax({
      type: 'GET',
      url: thisURL
    }).done(function(data, status){
      console.log("in GET done");
      console.log("data is: ", data);
      form.trigger('reset');
    });
  });

  //POST
  //when new holiday donut is submitted
  $('#new_donut').on('submit', function(e){
    e.preventDefault();
    var form = $(this);
    var formData = form.serialize();
  $.ajax({
    type: 'POST',
    url: '/donuts',
    data: formData
    }).done(function(data, status){
      console.log("in POST done");
      console.log("data is: ", data.name + ', ' + data.description + ', ' + status);
      form.trigger('reset');
    });
  });

  //PUT
  //when daily menu dropdown is submitted
  $('#update_donut').on('submit', function(e){
    e.preventDefault();
    var form = $(this);
    var thisDay = $('#update-select_day option:selected').val();
    var formData = form.serialize();
    var thisURL = '/donuts/' + thisDay;
    console.log("formData", formData);
    console.log("updating menu for: ", thisDay);
    $.ajax({
      type: 'PUT',
      url: thisURL,
      data: formData
    }).done(function(data, status){
      console.log("in PUT done");
      console.log("data is: ", data.name + ', ' + data.description + ', ' + status);
      form.trigger('reset');
    });
  });

  //DELETE
  //when daily menu dropdown is submitted
  $('#delete_donut').on('submit', function(e){
    e.preventDefault();
    var form = $(this);
    var formData = form.serialize();
    var getDay = $('#delete-select_day option:selected').val();
    var thisURL = '/donuts/' + getDay;
    console.log("deleting on:", getDay);
    $.ajax({
      type: 'DELETE',
      url: thisURL,
      data: formData
    }).done(function(data, status){
      console.log("in DELETE done");
      console.log("data is: ", data);
      form.trigger('reset');
    });
  });
});
