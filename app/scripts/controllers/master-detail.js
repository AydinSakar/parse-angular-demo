angular.module('demo')

.controller('MasterDetailController', ['$rootScope', '$scope', '$state', 'MonsterService', function($rootScope, $scope, $state, MonsterService) {
  
  $scope.masterDetailCtrl = {
    menu : [
      {
        title: "CRUD Example",
        icon: "icon-th-list",
        path: "#/",
        state: "demo.crud"

      },
      {
        title: "Share",
        icon: "icon-share",
        path: "#/demo/share",
        state: "demo.share"

      }

    ]
  };

  // get the collection from our data definitions
  var Monsters = MonsterService.collection;

  // new up a collection
  $scope.masterDetailCtrl.collection = new Monsters;

  // use the extended Parse SDK to load the whole collection
  $scope.fetchMonstersPromise = $scope.masterDetailCtrl.collection.load();



  $scope.transitionTo = function(state) {
    $state.transitionTo(state);
  }

  $scope.isActiveState = function(state) {

    if(state == $state.current.name) {
      return 'light-back';
    } else {
      return
    }
  }



  $scope.createMonster = function() {
    // new up the model
    $scope.masterDetailCtrl.collection.addMonster('Joe', 'exploding feces').then(function() {

      alert('OMG you created a monster named: ' + $scope.masterDetailCtrl.collection.last().get('name'));

    });

  }


}]);