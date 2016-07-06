var addButton = $('.add');
// var deleteButton = $('.delete');

$.ajax({
  type: 'GET',
  dataType: 'json',
  url: 'http://tiny-za-server.herokuapp.com/collections/amanda',
  success: function (response) {
    console.log(response);
    response.forEach(function(item, i, arr) {
      var li = $('<li></li>');
      var deleteButton = $('<input class="delete" type="button" value="Delete">');
      li.text(item.task).attr('data-id', item._id);
      $('.compiled-items').append(li);
      li.append(deleteButton);
      deleteButton.on('click', function() {
        $(li).hide();
      $.ajax({
        type: 'DELETE',
        url: 'http://tiny-za-server.herokuapp.com/collections/amanda/'+ item._id,
        dataType: 'json',
        success: function (response) {
          console.log(response);
        }
      });
      }
    );
  });
}
});

addButton.on('click', function() {
  // console.log($('.task').val());
  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: 'http://tiny-za-server.herokuapp.com/collections/amanda',
    success: function (response) {
      console.log(response);
      // response.forEach(function(item, i, arr) {
      //   $('.compiled-items').append($('.task').val());
      // });
    },
    data: {
      task: $('.task').val()
    }
  });
});

// $.ajax({
//   type: 'POST',
//  dataType: 'json'
//   url: 'http://tiny-za-server.herokuapp.com/collections/amanda',
//   success: function (response) {
//     console.log(response);
//   },
//   data: {
//     "task": "Clean house",
//     "due": "Saturday"
//   }
// });

// $.ajax({
//   type: 'DELETE',
//   url: 'http://tiny-za-server.herokuapp.com/collections/amanda/577d4a1169837d0300d19138',
//   dataType: 'json',
//   success: function (response) {
//     console.log(response);
//   },
// });
