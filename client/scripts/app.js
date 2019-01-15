var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  currentRoomName: $('#rooms select option:selected').text(),

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log("This is from app.js: " +data);
      Messages.data = data.results;
      RoomsView.data = data.results;
      // console.log(this.currentRoomName);
      MessagesView.renderAllMessages(data.results, this.currentRoomName);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  // addFriend: function(){
  //   MessagesView.addFriend();
  // }

};
