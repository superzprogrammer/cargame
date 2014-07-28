var app = angular.module('carpro', []);

app.controller('CargameController', function ($scope, $timeout){
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
		{image: 'images/image13.jpg', description: 'Ford Raptor'},
		{image: 'images/image14.jpg', description: 'Aston Martin Vanquish'},
		{image: 'images/image15.jpg', description: 'lamborghini ferruccio concept'},
		{image: 'images/image16.jpg', description: 'peugeot sr1 concept'},
		{image: 'images/image17.jpg', description: 'lamborghini huracan'},
		{image: 'images/image18.jpg', description: '2014 rolls royce wraith'},
		{image: 'images/image19.jpg', description: 'mercedes benz concept style coupe'},
		{image: 'images/image20.jpg', description: 'tesla model s'},
		{image: 'images/image21.jpg', description: 'citroen survolt'},
		{image: 'images/image22.jpg', description: 'batmobile'},
		{image: 'images/image23.jpg', description: 'bmw i8'},
		{image: 'images/image24.jpg', description: 'volvo concept coupe'},
		{image: 'images/image25.jpg', description: 'camaro transformers 4'}
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
            $scope.nextSlide();
            $scope.second=30;
            if($scope.answer == $scope.slides[$scope.currentIndex].description){
	        $scope.points++;
        
	    }
        };
        $scope.promise = $timeout($scope.cycle, 1000);
//http://onehungrymind.com/build-sweet-photo-slider-angularjs-animate/

});

