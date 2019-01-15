var MessagesView = {
  $chats: $('#chats'),
  //this MessagesView.initilize is being called in app.js

  initialize: function() {
    $('form'.submit).on('click', Parse.create());
    // $('.username').on('click', )
  },
  renderMessage: function(message) {
    // console.log(message);
    var singleMessage = $(MessageView.render(message)); //wrapped this in $()

    // if (Friends.friend[message.username] !== undefined) {
    //   singleMessage.find('.username').addClass('friend');
    // } else if (message.username === App.username) {
    //   messageComponent.addClass('me');
    // }

    if (message.username) { //ignore messages with no username
      MessagesView.$chats.append(singleMessage); //pass link along with Jquery when appending message/ modify render???
    }
    //pmpulate the messageView template
    //append the template to chats on index.html
  },
  renderAllMessages: function(results, roomName) { //app.js data.results
    console.log(results);
    if (Array.isArray(results)) {
      for (var i = 0; i < results.length; i++) {
        if (results[i].roomname !== undefined && results[i].roomname !== null && results[i].text !== null && results[i].roomname !== '' && !_.contains(Rooms.chatRoom, results[i].roomname)) {
          Rooms.add(results[i].roomname);
        }

        if (results[i].roomname) {
          // if (results[i].roomname === roomName){
          MessagesView.renderMessage(results[i], false);
        }
      }
    }
  },



  // addFriend: function() {
  //   $('.username').on('click', function() {
  //     console.log(this);
  //     Friends.addFriend(this.username);
  //   });
  // }
};