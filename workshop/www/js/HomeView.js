var HomeView = function (service) {


    var employeeListView;

    //  Module 9  Creating View Classes
    //  Move the renderHomeView() function from app.js to the HomeView class
    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(employeeListView.$el);
        return this;
    };

    // Move the findByName() function from app.js to HomeView and adjust it to work with the nested view.
    this.findByName = function() {
      service.findByName($('.search-key').val()).done(function(employees) {
          employeeListView.setEmployees(employees);
      });
    };

    // Module 9   Creating View CLasses
    // Define a div wrapper for the view. The div wrapper is used to attach the view-related events.
    // Instantiate the nested view (you'll define EmployeeListView in step 2).
    // Finally, invoke the initialize() function inside the HomeView constructor function.

    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
        employeeListView = new EmployeeListView();
        this.render();
    };

    this.initialize();


};
