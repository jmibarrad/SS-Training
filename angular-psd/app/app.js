var app = angular.module('app', []);

app.controller('MainController', ['$scope', function ($scope){
  var ctrl = this;

  ctrl.toolbar = {
    user: {username: 'Me', img_scr: ''},
    options: [
              {title: 'Settings', icon: 'cog' },
              {title: 'Account', icon: 'user'},
              {title: 'Messages', icon: 'envelope', badge: 5 },
              {title: 'Favorites', icon: 'star-o' }
            ]
    };

  ctrl.newsletter = {
    title: "Join the newsletter"
  };

  ctrl.profileCard = {
    user: {
            username: 'Anne Hathaway',
            img_scr: '',
            user_description: 'Lorem ipsum dolor sit amet consectetuer adipiscing'
          },
    buttons: [
              { icon: 'comment-o', views: 23, color: 'rgb(230, 78, 101)'},
              { icon: 'eye', views: 841, color: 'rgb(17, 168, 171)'},
              { icon: 'heart-o', views: 49, color: 'rgb(252, 177, 80)'}
             ]
  };

  ctrl.menuBox = {
    title: 'Menu Box',
    items: [
              { title: 'Messages', icon: 'envelope-o', badge: 24},
              { title: 'Invites', icon: 'paper-plane-o', badge: 3},
              { title: 'Events', icon: 'calendar', badge: 5},
              { title: 'Account Settings', icon: 'cog'},
              { title: 'Statistics', icon: 'line-chart'}
          ]
  };

  $('.password').verifyPasswordStrength();

}]);
