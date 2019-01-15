var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

    var fetchCallback = function() {
      //define message
      var message = {
        username: App.username,
        text: 'user input null' || $('#message').val(),
        roomname: 'lobby' || $('#rooms select option:selected').text(),
        createdAt: Date.now()
      };

      //define successCB
      var successCB = () => {
        MessagesView.renderMessage(message);
        Messages.data.push(message);
      };
      //maybe define errorCB? null now in parse.js
      var errorCB = () => {
        console.log('There was an error. Please try again later');
      };

      Parse.create(message, successCB, errorCB);
    };

    FormView.$form.find('input[type=submit]').on('click', fetchCallback);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {
      roomname: 'lobby',
      text: FormView.$form.find('#message').val(),
      username: App.username
    };

    Parse.create(message, () => {
      Messages.add(message);
      MessagesView.renderMessage();
    });
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};