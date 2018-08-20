/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have a url defined that is not empty', function(){
            allFeeds.forEach(function(item){
                expect(item.url).toBeDefined();
                expect(item.url).not.toBe('');
            });

        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have a name defined and it should not be empty', function(){
            allFeeds.forEach(function(item) {
                expect(item.name).toBeDefined();
                expect(item.name).not.toBe('');
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden by default', function(){
            let body = $('body');
            let menuHidden = body.hasClass('menu-hidden');
            expect(menuHidden).toBeTruthy();
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('should show when menu icon is clicked and hide when clicked again', function(){
             let body = $('body');
             let bodyHasClass;
             let btn = $('.menu-icon-link');

             btn.trigger('click');
             bodyHasClass = body.hasClass('menu-hidden');
             expect(bodyHasClass).toBeFalsy();

             btn.trigger('click');
             bodyHasClass = body.hasClass('menu-hidden');
             expect(bodyHasClass).toBeTruthy();

         });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        var entries;

        beforeEach(function(done){
            setTimeout(function(){
                entries = $('.feed')[0].children.length;
                done();
            },1000);
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('should call the loadFeed function and load atleast one entry', function(done){
            expect(entries).toBeGreaterThan(1);
            done();

        });


    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        let currentSelection = $('.header-title').text();

        beforeEach(function(done){
            setTimeout(function(){
                done();
            },1000);
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('should load a new feed and the content should change', function(done){

            let btns = $('.feed-list').find('a');
            $(btns[1]).trigger('click');
            setTimeout(function(){
                let selection = $('.header-title').text();
                expect(currentSelection).not.toBe(selection);
                done();
            },1000);
        });

    });

}());
