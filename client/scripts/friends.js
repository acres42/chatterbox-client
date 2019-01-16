var Friends = {


  _data: new Set,

  items: function() {
    return _.chain([...Friends._data]);
  },

  isFriend: function(name) {
    return Friends._data.has(name);
  },

  toggleStatus: function(name, callback = ()=>{}) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  }

};

// var Friends = {

//   toggleStatus: function(event) {
//     // var friend = event.target.innerText;
//     // if (friend === App.username) {
//     //   return;
//     // }

//     // $(`div div:contains('${friend}')`).children('.username').toggleClass('friend');

//     // friend = friend.split(' ').join('');
//     // if (Friends.friends[friend] === undefined) {
//     //   Friends.friends[friend] = true;
//     // } else {
//     //   delete Friends.friends[friend];
//     // }
//   },

//   friends: {}

//   // addFriend: function(username){
//   //    $('.addFriend').on('click', function(){
//   //     // event.preventDefault();
//   //   //   console.log(this);
//   //   //   Friends.addFriend(this.username);
//   //   // });
//   //   Friends.friends.push(username);
//   //   console.log('friends array: ' + friends);
//   //   Friends.toggleStatus(false);
//   // });
//   //  },

// };