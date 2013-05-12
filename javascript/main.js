var app = angular.module("mail",[]);

app.directive('mail', function(){
  console.log(app.$scope);
  return {
    restrict: 'E',
    scope: {
      subject: "@",
      content: "="
    },
    templateUrl: 'partials/mail.html',
    replace: true
  };

});

function MailController($scope){
  console.log("initializing mail controller");

  var conversation1 = {
    time: "3:50AM",
    contacts: "Me, Zhong Yuan",
    subject: "Call for service at any time.",
    content: "Call for service at any time. Sorry to have kept you waiting....",
    count: 20
  };

  var conversation2 = {
    time: "5:50PM",
    contacts: "Xiaoju, Zhong Yuan",
    subject: "Family Day on Next Friday",
    content: "Wa. Please make sure there are two lines of content so that \
              there changed....",
    count: 20
  };

  var conversation3 = {
    time: "5:50PM",
    contacts: "Xiaoju, Zhong Yuan",
    subject: "Family Day on Next Friday",
    content: "Wa. Please make sure there are two lines of content so that \
              there changed....",
    count: 2
  };


  $scope.conversations = [conversation1, conversation2, conversation3];

}