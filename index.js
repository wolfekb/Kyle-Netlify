const app = angular.module('groupPage', ['ngRoute', 'ngSanitize']);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'landing.html'
        })
        .when("/home", {
            templateUrl: 'landing.html'
        })
        .when("/about", {
            templateUrl: 'about.html'
        })
        .when("/samplePost", {
            templateUrl: 'sample-post.html'
        })
        .when("/contact", {
            templateUrl: 'contact.html'
        });

});

app.controller("groupCtrl", function ($scope) {
    let initUser = netlifyIdentity.currentUser();
    netlifyIdentity.on('init', () => {
        initUser = netlifyIdentity.currentUser();
    });
    
    netlifyIdentity.on('login', () => {
        if (initUser == null) {
            window.location.replace('#!landing')
        }
        netlifyIdentity.close();
    });
    
    netlifyIdentity.on('logout', () => {
        netlifyIdentity.close();
        window.location.replace('/')
            
    });
});