var app = angular.module('carpro', [
  'ngRoute',
  'appControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/game', {
        templateUrl: 'templates/game.html',
        controller: 'CargameController'
      }).
      when('/end',{
	templateUrl: 'templates/end.html',
	controller: 'EndController'
      }).
      otherwise({
        redirectTo: '/game'
      });
  }]);

var appControllers = angular.module('appControllers', []);

appControllers.controller('MainController',function($scope){
   $scope.$on('submit', function (data){
   		$scope.points = data;
   	});
});

appControllers.controller('CargameController', function ($scope, $timeout,$location){
	$scope.slides=[
		{image: 'images/image1.jpg', description: 'Lotus Elan'},
		{image: 'images/image2.jpg', description: '2014 corvette Stingray'},
		{image: 'images/image3.jpg', description: '2015 jeep grand cherokee srt8 tailhawk'},
		{image: 'images/image4.jpg', description: 'lexus lfa'},
		{image: 'images/image5.jpg', description: 'jeep grand cherokee'},
		{image: 'images/image6.jpg', description: 'Lamborgini Aventor'},
		{image: 'images/image7.jpg', description: 'Lotus Elise'},
		{image: 'images/image8.jpg', description: 'Rolls Royce Wraith'},
		{image: 'images/image9.jpg', description: 'Mercades-Benz G-force'},
		{image: 'images/image10.jpg', description: 'Mercedes-Benz F125'},
		{image: 'images/image11.jpg', description: 'mercedes s coupe'},
		{image: 'images/image12.jpg', description: '2015 ford Mustang'},
		{image: 'images/image13.jpg', description: 'Gmc sierra'},
		{image: 'images/image14.jpg', description: 'Aston Martin Vanquish'},
		{image: 'images/image15.jpg', description: 'Ford focus'},
		{image: 'images/image16.jpg', description: 'peugeot sr1 concept'},
		{image: 'images/image17.jpg', description: 'lamborghini huracan'},
		{image: 'images/image18.jpg', description: '2014 rolls royce wraith'},
		{image: 'images/image19.jpg', description: 'mercedes benz concept style coupe'},
		{image: 'images/image20.jpg', description: 'tesla model s'},
		{image: 'images/image21.jpg', description: 'citroen survolt'},
		{image: 'images/image22.jpg', description: 'Tumbler'},
		{image: 'images/image23.jpg', description: 'bmw i8'},
		{image: 'images/image24.jpg', description: 'volvo concept coupe'},
		{image: 'images/image25.jpg', description: 'camaro transformers 4'},
		{image: 'images/image26.jpg', description: 'Ferrari laferrari'},
		{image: 'images/image27.jpg', description: 'hyundai hnd 9'},
		{image: 'images/image28.jpg', description: 'Mercedes-Benz concept'},
		{image: 'images/image29.jpg', description: 'dodge dart'},
		{image: 'images/image30.jpg', description: 'bugatti veyron'},
		{image: 'images/image31.jpg', description: 'Mclaren P1'},
		{image: 'images/image32.jpg', description: 'hotwheels Lotus'},
		{image: 'images/image33.jpg', description: '2016 Mercedes-Benz GT AMG '},
		{image: 'images/image34.jpg', description: 'citroen gt'},
		{image: 'images/image35.jpg', description: 'chrysler firepower'},
		{image: 'images/image36.jpg', description: 'i8 bmw'},
		{image: 'images/image37.jpg', description: 'bmw i1'},
		{image: 'images/image38.jpg', description: 'audi r8 '},
		{image: 'images/image39.jpg', description: 'Aston Martin One 77'},
		{image: 'images/image40.jpg', description: 'aston martin gauntlet'},
		{image: 'images/image41.jpg', description: 'Ford Raptor'},
		{image: 'images/image42.jpg', description: '2015 barracuda'},
		{image: 'images/image43.jpg', description: '2015 lotus'},
		{image: 'images/image44.jpg', description: '2015 bmw m4'},
		{image: 'images/image45.jpg', description: 'volvo xc90 2014'}
		];
	$scope.currentIndex = 0;
        $scope.points=0;
	$scope.second=30;	

	$scope.cycle= function (){
		$scope.second--;
		if($scope.second==0){
			$scope.nextSlide()
			$scope.second=30;
		}	
                $scope.promise = $timeout($scope.cycle, 1000);
                console.log($scope.second);
	}; 

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex == index;
        };
        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
            
        };
        
        $scope.onClick = function () {
        	if ($scope.answer == '' || $scope.answer == undefined) {return;}
            $scope.nextSlide();
            $scope.second=30;
            if($scope.answer == $scope.slides[$scope.currentIndex].description){
	        	$scope.points++;
	    	}
	    	$scope.answer = '';
	    	if ($scope.currentIndex == 0) {
	    		$scope.$broadcast('submit',$scope.points);
	    		$location.path('/end');

	    	};
        };
        $scope.promise = $timeout($scope.cycle, 1000);
});

appControllers.controller('EndController', function ($scope){
        window.alert($scope.points);
});





