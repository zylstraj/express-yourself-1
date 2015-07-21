$('document').ready(function(){

  //when new donut is submitted
  $('#new_donut').on('submit', function(e){
    e.preventDefault();
    var form = $(this);
    var donutData = form.serialize();
  $.ajax({
    type: 'POST', url: '/donuts', data: donutData
    }).done(function(donutName, donutDescription){
      console.log(donutName.name + ', ' + donutName.description + ', ' + donutDescription);
      form.trigger('reset');
    });
  });

  //when daily dropdown is submitted
  $('#daily_donut').on('submit', function(e){
    e.preventDefault();
    var getDay = $('#select_day option:selected').val();
    var thisURL = '/donuts/' + getDay;
    $.ajax({
      type: 'GET', url: thisURL
    }).done(function(data, status){
      console.log(data);
    });
  });

});
