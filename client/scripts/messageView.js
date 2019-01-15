var MessageView = {

  render: _.template(`
       <div class="chat">
        <div onclick="Friends.toggleStatus(event)" class="username"><%- username %></div>
        <div class="text"><%- text %></div>
      </div>
    `)
};

//changed these back to username and text and added = signs






// <div class="chat">
//         <div onclick = "Friends.toggleStatus(event)" class="username"><%= username %></div>
//         <div class="text"><%= text %></div>
//       </div>



// <div class="chat">
//         <div class="username"><a href="#"><%= username %></a></div>
//         <div class="text"><%= text %></div>
//       </div>