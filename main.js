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
        //when user clicks on 'delete' button...
        $(li).hide();
        //hide li when delete button is clicked
      $.ajax({
        //DELETE from server
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
  //when user clicks on 'add' button...
  // console.log($('.task').val());
  console.log($('.task'));
  $.ajax({
    //POST to server
    type: 'POST',
    dataType: 'json',
    url: 'http://tiny-za-server.herokuapp.com/collections/amanda',
    success: function (response) {
      console.log(response);
        var li = $('<li></li>');
        var deleteButton = $('<input class="delete" type="button" value="Delete">');
        li.text('•' + ' ' + $('.task').val());
        //task.val same as li.text above in get request
        $('.compiled-items').append(li);
        //append newly added item to ul
        li.append(deleteButton);
        deleteButton.on('click', function(item) {
          $(li).hide();
          //hide li when delete button is clicked
        });
    },
    data: {
      task: $('.task').val()
    }
    //this data is sent to server when 'add' button is clicked
  });
});

//declare delete function in global to call in both requests.
//had trouble with finding 'item._id' in global. only works under forEach function
