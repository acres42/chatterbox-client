var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {

    MessagesView.$chats.html('');
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    // Get username from data attribute
    var username = $(event.target).data('username');
    if (username === undefined) {
      return;
    }

    Friends.toggleStatus(username, MessagesView.render);
  }

};



// var singleMessage = $(MessageView.render(message)); //wrapped this in $()
// if (message.username) { //ignore messages with no username
//   MessagesView.$chats.append(singleMessage); //pass link along with Jquery when appending message/ modify render???
// }

// renderAllMessages: function(results, roomName) { //app.js data.results
//   // console.log(results);
//   // if (Array.isArray(results)) {
//   //   for (var i = 0; i < results.length; i++) {
//   //     if (results[i].roomname !== undefined && results[i].roomname !== null && results[i].text !== null && results[i].roomname !== '' && !_.contains(Rooms.chatRoom, results[i].roomname)) {
//   //       Rooms.add(results[i].roomname);
//   //     }

//   //     if (results[i].roomname) {
//   //       // if (results[i].roomname === roomName){
//   //       MessagesView.renderMessage(results[i], false);
//   //     }
//   //   }
//   // }
// },



// addFriend: function() {
//   $('.username').on('click', function() {
//     console.log(this);
//     Friends.addFriend(this.username);
//   });
// }
// };