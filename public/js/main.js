$('document').ready(function(){

  //when new holiday donut is submitted
  $('#new_donut').on('submit', function(e){
    e.preventDefault();
    var form = $(this);
    var donutData = form.serialize();
  $.ajax({
    type: 'POST',
    url: '/donuts',
    data: donutData
    }).done(function(data, status){
      console.log(data.name + ', ' + data.description + ', ' + status);
      form.trigger('reset');
    });
  });

  //when daily menu dropdown is submitted
  $('#daily_donut').on('submit', function(e){
    e.preventDefault();
    var form = $(this);
    var getDay = $('#get-select_day option:selected').val();
    var thisURL = '/donuts/' + getDay;
    $.ajax({
      type: 'GET',
      url: thisURL
    }).done(function(data, status){
      console.log(data);
      form.trigger('reset');
    });
  });

  //when daily menu dropdown is submitted
  $('#update_donut').on('submit', function(e){
    e.preventDefault();
    var form = $(this);
    var getDay = $('#update-select_day option:selected').val();
    var donutData = form.serialize();
    var thisURL = '/donuts/' + getDay;
    console.log("updating menu for: ", getDay);
    $.ajax({
      type: 'PUT',
      url: thisURL
    }).done(function(data, status){
      console.log(data);
      form.trigger('reset');
    });
  });

  //when daily menu dropdown is submitted
  $('#delete_donut').on('submit', function(e){
    e.preventDefault();
    var getDay = $('#delete-select_day option:selected').val();
    var thisURL = '/donuts/' + getDay;
    console.log("deleting on:", getDay);
    $.ajax({
      type: 'DELETE',
      url: thisURL
    }).done(function(data, status){
      console.log(data);
      form.trigger('reset');
    });
  });
});
