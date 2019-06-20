// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    Rooms.items().forEach(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function() {
    var $option = $('<option>')
      .val(roomname)
      .text(roomname);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.selected = RoomsView.$select.val();
    w;
    MessagesView.render();
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var roomname = prompt('Enter a room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }
};
