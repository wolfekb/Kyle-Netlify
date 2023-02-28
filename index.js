const app = angular.module('groupPage', ['ngRoute']);


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
        .when("/sample", {
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
            window.location.replace('/home')
        }
        netlifyIdentity.close();
    });
    
    netlifyIdentity.on('logout', () => {
        netlifyIdentity.close();
        window.location.replace('/')
            
    });
});