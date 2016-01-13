

//initialize tooltips for existing quotes
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


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

    //generate a random number {0..9} to choose a random user picture
    var randNbr = Math.floor(Math.random() * 10);
    var newQuoteNode =
        '<div class="panel panel-info">' +
            '<div class="panel-body">' +
                '<div class="media">' +
                    '<div class="media-left">' +
                        '<a href="#">' +
                            '<img class="media-object" src="img/lego/lego' + randNbr + '_50.jpg" alt="...">' +
                        '</a>' +
                    '</div>' +
                    '<div class="media-body">' +
                        '<blockquote>' +
                            '<p>' + quote.quotation + '</p>' +
                            '<footer vocab="http://schema.org/" resource="#record" typeof="Book Product">' +
                                '<span property="author" role="button" data-toggle="tooltip" data-html="true" data-placement="top" title=' +
                                '"<strong>' + quote.author + '</strong> (1829-1883)<br>' +
                                '<u>Nationality</u>: French<br>' +
                                '<u>Genre</u>: Novel, dramaturgy, theatre, poetry, essay, drawing<br>' +
                                '">' + quote.author + '</span>'
                                + ' in ' +
                                '<cite title="Source Title">' +
                                    '<span  property="name" role="button" data-container="body" data-toggle="popover" data-html="true" data-placement="top" data-content="<a href=#>Buy on Amazon..</a>">' + quote.book + '</span>' +
                                '</cite>' +
                            '</footer>' +
                        '</blockquote>' +
                        '<div class="btn-group" role="group">' +
                            '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>' +
                            '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>' +
                            '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span></button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    $("#afterThis").after(newQuoteNode);

    //initialize the tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    //initialize the popover
    $(function () {
        $('[data-toggle="popover"]').popover()
    })

};



