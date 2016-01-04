
var app = angular.module('submitExample', []);

app.controller('ExampleController', ['$scope', '$http', function($scope, $http) {

    //add quotes from data.json
    $http.get("data.json").
        then(function(response) {
            for( i=0 ; i < response.data.length; i++) {
                var quote = {};
                quote.book = response.data[i].titleBook;
                quote.author = response.data[i].author;
                quote.quotation = response.data[i].textQuote;
                addNewQuote(quote);
            }
        }, function() {
            //Fail to load data
        });

    var quote = {};
    $scope.submit = function() {
        //if ($scope.text && $scope.book && $scope.author) {
        if(1) {
            //send to database
            //show the new quote
            quote.book = $scope.book;
            quote.author = $scope.author;
            quote.quotation = $scope.text;
            addNewQuote(quote);
        }
        var intialize = function() {
            $scope.book = "";
            $scope.author = "";
            $scope.text = "";
        }();

    };
}]);

var addNewQuote = function(quote) {
    //console.log(quote);
    var newQuoteNode =
        '<div class="panel panel-info">' +
            '<div class="panel-body">' +
                '<div class="media">' +
                    '<div class="media-left">' +
                        '<a href="#">' +
                            '<img class="media-object" src="img/user_32.png" alt="...">' +
                        '</a>' +
                    '</div>' +
                    '<div class="media-body">' +
                        '<blockquote>' +
                            '<p>' + quote.quotation + '</p>' +
                            '<footer>' + quote.author + ' in <cite title="Source Title">' + quote.book + '</cite></footer>' +
                        '</blockquote>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    $("#afterThis").after(newQuoteNode);

};



