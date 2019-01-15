var Rooms = {
  add: function(roomName){
    RoomsView.renderRoom(roomName);
    Rooms.chatRoom.push(roomName);
  },
  chatRoom: []
};