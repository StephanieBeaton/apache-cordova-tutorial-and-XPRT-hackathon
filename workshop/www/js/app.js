// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */

    // from Module 8  Using Handlebars as Templates
    // var homeTpl = Handlebars.compile($("#home-tpl").html());
    // var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());

    // Module 9
    // Instead of declaring templates as local variables,
    // add them to the prototype of their respective classes:
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EmployeeListView.prototype.template =
                Handlebars.compile($("#employee-list-tpl").html());
    EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());

    // when the service has been successfully initialized,
    // call the renderHomeView() function to programmatically display the Home View.

    var service = new EmployeeService();

    // Module 9
    // display the Home View when the service has been successfully initialized.
    // service.initialize().done(function () {
    //     $('body').html(new HomeView(service).render().$el);
    // });

    // Module 10  Routing
    service.initialize().done(function () {
      router.addRoute('', function() {
          $('body').html(new HomeView(service).render().$el);
      });

      //  the route immediately below is triggered when user clicks on an employeee
      //  ... in the employee list
      //  index.html   <script id="employee-list-tpl"
      //  <a href="#employees/{{ id }}">

      //  the hash "#" preceding in the href is the reason this client side route is called

      router.addRoute('employees/:id', function(id) {
          service.findById(parseInt(id,10)).done(function(employee) {
              $('body').html(new EmployeeView(employee).render().$el);
          });
      });

      router.start();
    });

    // service.initialize().done(function () {
    //     console.log("Service initialized");
    //     renderHomeView();
    // });

    /* --------------------------------- Event Registration -------------------------------- */
    // $('.search-key').on('keyup', findByName);
    // $('.help-btn').on('click', function() {
    //     alert("Employee Directory v3.4");
    // });

    document.addEventListener('deviceready', function () {
        FastClick.attach(document.body);  // Exercise 6  Avoid 300ms Click Delay
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    // function findByName() {
    //     service.findByName($('.search-key').val()).done(function (employees) {
    //         var l = employees.length;
    //         var e;
    //         $('.employee-list').empty();
    //         for (var i = 0; i < l; i++) {
    //             e = employees[i];
    //             $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
    //         }
    //     });
    // }

    //  Module 8  use Handlebars Templates
    //  Modify findByName() to use the employeeListTpl template instead of the inline HTML

    //  Module 9  move to HomeView.js
    // function findByName() {
    //     service.findByName($('.search-key').val()).done(function (employees) {
    //         $('.content').html(employeeListTpl(employees));
    //     });
    // }

    /*  Exercise 7  change to Single Page App */
    /*  programmatically add the Home View markup to the body element  */

    //  Module 9   move to HomeView.js
    // function renderHomeView() {

    //     var html =
    //         "<p><button class='help-btn'>Help</button></p>" +
    //         "<div class='header'><h1>Directory</h1></div>" +
    //         "<div class='search-view'>" +
    //             "<input class='search-key' type='search' placeholder='Enter name'/>" +
    //             "<ul class='list employee-list'></ul>" +
    //         "</div>";


    //     var html =
    //       "<h1>Directory</h1>" +
    //       "<input class='search-key' type='search' placeholder='Enter name'/>" +
    //       "<ul class='employee-list'></ul>";


    //     // Modify renderHomeView() to use the homeTpl template instead of the inline HTML:

    //     $('body').html(homeTpl());
    //     // $('body').html(html);
    //     $('.search-key').on('keyup', findByName);

    //     //  remove help button
    //     // $('.help-btn').on('click', function() {
    //     //     alert("Employee Directory v3.4");
    //     // });
    // }


}());
