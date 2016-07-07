var addButton = $('.add');

$.ajax({
  type: 'GET',
  //make get request to get information from the server
  dataType: 'json',
  url: 'http://tiny-za-server.herokuapp.com/collections/amanda',
  success: function (response) {
    console.log(response);
    response.forEach(function(item, i, arr) {
      //declare forEach function to iterate through each item in stored array
      var li = $('<li></li>');
      var deleteButton = $('<input class="delete" type="button" value="Delete">');
      //declare variables to put info into DOM
      li.text('•' + ' ' + item.task).attr('data-id', item._id);
      //adding text to li which includes what is entered into input field
      $('.compiled-items').append(li);
      li.append(deleteButton);
      //appending li's and deletebutton to ul
      //DELETE request
      deleteButton.on('click', function() {
        $(li).hide();
        //hide li when delete button is clicked
      $.ajax({
        type: 'DELETE',
        url: 'http://tiny-za-server.herokuapp.com/collections/amanda/'+ item._id,
        dataType: 'json',
        success: function (response) {
          console.log(response);
          //delete from server
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
        var li = $('<li></li>');
        var deleteButton = $('<input class="delete" type="button" value="Delete">');
        var liText = li.text('•' + ' ' + $('.task').val());
        $('.compiled-items').append(li);
        li.append(deleteButton);
        // $('.compiled-items').append($('.task').val());
        deleteButton.on('click', function(item) {
          $(li).hide();
          //hide li when delete button is clicked
        });
    },
    data: {
      task: $('.task').val()
    }
  });
});
