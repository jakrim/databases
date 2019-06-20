// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {
  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  selected: "lobby",

  items: function() {
    return [...Rooms._data];
  },

  isSelected: function(roomname = "lobby") {
    return roomname === Rooms.selected;
  },

  add: function(roomname, callback = () => {}) {
    Rooms._data.add(roomname);
    Rooms.selected = room;
    callback(Rooms.items());
  },

  update: function(messages, callback = () => {}) {
    messages.forEach(message => {
      Rooms.add(message.roomname);
    });
    callback(Rooms.items());
  }
};
