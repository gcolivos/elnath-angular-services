app.controller('CarController', ['CarService', function(CarService){
    var self = this;
    self.message = 'What about them tacos??';
    self.cars = CarService.cars;
    console.log(self.cars);
}]);