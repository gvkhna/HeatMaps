app.directive("requireInput",function(){return{link:function($scope,$element,$attrs){console.log($attrs.requireInput),$scope.$watch($attrs.requireInput,function(value){value&&$element.attr("ng-repeat","data in input")})}}});