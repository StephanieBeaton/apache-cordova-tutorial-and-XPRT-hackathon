var EmployeeService = function() {

    var url;


    this.initialize = function(serviceURL) {

       // url = serviceURL ? serviceURL : "http://192.168.1.65:5000/employees";
       url = serviceURL ? serviceURL : "http://192.168.0.69:5000/employees";


        // url = serviceURL ? serviceURL : "http://localhost:5000/employees";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.ajax({url: url + "/" + id});
    }

    this.findByName = function(searchKey) {
        console.log("inside EmployeeService.js findByName");
        console.log(url + "?name=" + searchKey);
        var temp = $.ajax({url: url + "?name=" + searchKey});

        return temp;
    }


}
