app.controller('CompanyController', ['CompanyService', function(CompanyService){
    var self = this;
    self.message = 'What up homie??';
    self.companies = CompanyService.companies; //so on company.html, vm.comanies.list refers to this (self.companies)
    //which then equals CompanyService.companies, which refers back to company.service
    //this works because CompanyService is a dependency injection here (see above, Line 1)
    console.log(self.companies);
}]);

