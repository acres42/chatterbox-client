var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', () => {
      var roomName = $('#roomName').val();
      if (!_.contains(Rooms.chatRoom, roomName)) {
        Rooms.add(roomName);
      }
    });
    RoomsView.$select.change(function() { //passed in data with line RoomsView.data = data.results; in appjs fetch method
      MessagesView.renderAllMessages(Messages.data, $('#rooms select option:selected').text());

    });

  },

  renderRoom: function(room) {
    var roomComponent = `<option value="${room}">${room}</option>`;
    RoomsView.$select.append(roomComponent);
    // $('#rooms select').append(`<option value="${room}">${room}</option>`);
    // //figure out how to change option val dynamically as we add more rooms
    // MessagesView.renderAllMessages(singleMessage); //this used to be room
  }
};
