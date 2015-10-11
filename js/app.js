
var app = angular.module('submitExample', []);

app.controller('ExampleController', ['$scope', function($scope) {

    var quote = {};
    $scope.submit = function() {
        //if ($scope.text && $scope.book && $scope.author) {
        if(1) {
            //send to database
            //show the new citation
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
    console.log(quote);
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



