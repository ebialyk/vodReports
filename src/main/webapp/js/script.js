var app = angular.module('TenBestApp', []);

app.controller(
				'template1Controller',
				[
						'$scope',
						'$location',
						'$window',
						function($scope, $location, $window) {
							$scope.items = [
									{
										"editorPick" : true,
										"bestValue" : false,
										"title" : "Mamas & Papas",
										"subtitle" : "Sola",
										"img" : "images/temp/baby1-1.jpg",
										"weight" : 4.5,
										"weight_unit" : "Pounds",
										"size" : "90x40x30",
										"size_unit" : "Inches",
										"stars" : 3.5,
										"the_good" : [ "Lightweight",
												"Durable", "Spacious",
												"3 parts for all stages of growth" ],
										"the_bad" : [ "Lightweight", "Durable",
												"Spacious", "Rubber wheels", ],
										"best_deal" : {
											"name" : "amazon",
											"price" : "$1020",
											"lnk" : "https://google.com",
											"img" : "images/amazonlogo.png",
											"bigImg" : "images/amazon-biglogo.png"

										},
										"deals" : [ {
											"name" : "ebay",
											"price" : "$1029",
											"lnk" : null,
											"img" : ""
										}, {
											"name" : "xndoo",
											"price" : "$1035",
											"lnk" : null,
											"img" : ""
										}, {
											"name" : "zappos",
											"price" : "$1035",
											"lnk" : null,
											"img" : ""
										} ],
										"pictures" : [
												"images/temp/baby1-1.jpg",
												"images/temp/baby1-2.jpg",
												"images/temp/baby1-3.jpg",
												"images/temp/baby1-4.jpg" ],
										"noteBody" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
												+ "Fusce fermentum mauris vel nisl faucibus, posuere consectetur sem "
												+ "bibendum. Nulla eget enim consectetur, sollicitudin massa vitae, auctor "
												+ "lorem. Nulla tincidunt porta vulputate. Etiam sit amet justo "
												+ "pellentesque, semper mi id, bibendum ex. "
												+ "Praesent ut gravida nisl, in bibendum magna. "
												+ "Sed viverra ac dolor vitae molestie. Nullam fermentum, "
												+ "libero eu tristique consectetur, libero ex consequat erat, "
												+ "vitae dignissim felis justo vel metus. Maecenas maximus mollis tempus. "
												+ "Donec tempor auctor tempus. Duis aliquam pulvinar felis ut facilisis. "
												+ "Mauris faucibus laoreet velit et feugiat.\nSuspendisse eget ipsum "
												+ "convallis, vehicula urna vitae, dapibus justo. Integer eget dui ac nisl "
												+ "eleifend sollicitudin a eu eros. Phasellus mauris erat, gravida nec mi "
												+ "ac, posuere faucibus urna. Vestibulum ante ipsum primis in faucibus "
												+ "orci luctus et ultrices posuere cubilia Curae; Sed sed dolor "
												+ "sollicitudin, dignissim orci quis, auctor eros. Quisque id egestas "
												+ "lacus. Donec non erat sodales, fringilla libero ut, aliquam ex. "
												+ "Maecenas a sollicitudin enim, sed imperdiet leo. "
									},

									{
										"editorPick" : false,
										"bestValue" : false,
										"title" : "Baby Jogger",
										"subtitle" : "City mini",
										"img" : "images/temp/baby2-1.jpg",
										"weight" : 5.2,
										"weight_unit" : "Pounds",
										"size" : "80x42x35",
										"size_unit" : "Inches",
										"stars" : 4,
										"the_good" : [ "Durable", "Spacious",
												"Rubber wheels" ],
										"the_bad" : [ "Durable", "Spacious",
												"Rubber wheels" ],
										"best_deal" : {
											"name" : "amazon",
											"price" : "$1016",
											"lnk" : "https://google.com",
											"img" : "images/amazonlogo.png",
											"bigImg" : "images/amazon-biglogo.png"

										},
										"deals" : [ {
											"name" : "ebay",
											"price" : "$1029",
											"lnk" : null,
											"img" : ""
										}, {
											"name" : "xndoo",
											"price" : "$1035",
											"lnk" : null,
											"img" : ""
										}, {
											"name" : "zappos",
											"price" : "$1035",
											"lnk" : null,
											"img" : ""
										} ],
										"pictures" : [
												"images/temp/baby2-1.jpg",
												"images/temp/baby2-2.jpg",
												"images/temp/baby2-3.jpg",
												"images/temp/baby2-4.jpg" ],
										"noteBody" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
												+ "Fusce fermentum mauris vel nisl faucibus, posuere consectetur sem "
												+ "bibendum. Nulla eget enim consectetur, sollicitudin massa vitae, auctor "
												+ "lorem. Nulla tincidunt porta vulputate. Etiam sit amet justo "
												+ "pellentesque, semper mi id, bibendum ex. "
												+ "Praesent ut gravida nisl, in bibendum magna. "
												+ "Sed viverra ac dolor vitae molestie. Nullam fermentum, "
												+ "libero eu tristique consectetur, libero ex consequat erat, "
												+ "vitae dignissim felis justo vel metus. Maecenas maximus mollis tempus. "
												+ "Donec tempor auctor tempus. Duis aliquam pulvinar felis ut facilisis. "
												+ "Mauris faucibus laoreet velit et feugiat.\nSuspendisse eget ipsum "
												+ "convallis, vehicula urna vitae, dapibus justo. Integer eget dui ac nisl "
												+ "eleifend sollicitudin a eu eros. Phasellus mauris erat, gravida nec mi "
												+ "ac, posuere faucibus urna. Vestibulum ante ipsum primis in faucibus "
												+ "orci luctus et ultrices posuere cubilia Curae; Sed sed dolor "
												+ "sollicitudin, dignissim orci quis, auctor eros. Quisque id egestas "
												+ "lacus. Donec non erat sodales, fringilla libero ut, aliquam ex. "
												+ "Maecenas a sollicitudin enim, sed imperdiet leo. "
									},
									{
										"editorPick" : false,
										"bestValue" : false,
										"title" : "Bugabo",
										"subtitle" : "Bee",
										"img" : "images/temp/baby3-1.jpg",
										"weight" : 4.0,
										"weight_unit" : "Pounds",
										"size" : "80x42x35",
										"size_unit" : "Inches",
										"stars" : 3,
										"the_good" : [ "Lightweight",
												"Durable", "Spacious",
												"Rubber wheels" ],
										"the_bad" : [ "Lightweight", "Durable",
												"Spacious", "Rubber wheels" ],
										"best_deal" : {
											"name" : "amazon",
											"price" : "$1047",
											"lnk" : "https://google.com",
											"img" : "images/amazonlogo.png",
											"bigImg" : "images/amazon-biglogo.png"

										},
										"deals" : [ {
											"name" : "ebay",
											"price" : "$1029",
											"lnk" : null,
											"img" : ""
										}, {
											"name" : "xndoo",
											"price" : "$1035",
											"lnk" : null,
											"img" : ""
										}, {
											"name" : "zappos",
											"price" : "$1035",
											"lnk" : null,
											"img" : ""
										} ],
										"pictures" : [
												"images/temp/baby3-1.jpg",
												"images/temp/baby3-2.jpg",
												"images/temp/baby3-3.jpg",
												"images/temp/baby3-4.jpg" ],
										"noteBody" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
												+ "Fusce fermentum mauris vel nisl faucibus, posuere consectetur sem "
												+ "bibendum. Nulla eget enim consectetur, sollicitudin massa vitae, auctor "
												+ "lorem. Nulla tincidunt porta vulputate. Etiam sit amet justo "
												+ "pellentesque, semper mi id, bibendum ex. "
												+ "Praesent ut gravida nisl, in bibendum magna. "
												+ "Sed viverra ac dolor vitae molestie. Nullam fermentum, "
												+ "libero eu tristique consectetur, libero ex consequat erat, "
												+ "vitae dignissim felis justo vel metus. Maecenas maximus mollis tempus. "
												+ "Donec tempor auctor tempus. Duis aliquam pulvinar felis ut facilisis. "
												+ "Mauris faucibus laoreet velit et feugiat.\nSuspendisse eget ipsum "
												+ "convallis, vehicula urna vitae, dapibus justo. Integer eget dui ac nisl "
												+ "eleifend sollicitudin a eu eros. Phasellus mauris erat, gravida nec mi "
												+ "ac, posuere faucibus urna. Vestibulum ante ipsum primis in faucibus "
												+ "orci luctus et ultrices posuere cubilia Curae; Sed sed dolor "
												+ "sollicitudin, dignissim orci quis, auctor eros. "
									},
									{
										"editorPick" : false,
										"bestValue" : true,
										"title" : "Brevi",
										"subtitle" : "OVO",
										"img" : "images/temp/baby4-1.jpg",
										"weight" : 5.5,
										"weight_unit" : "Pounds",
										"size" : "75x52x28",
										"size_unit" : "Inches",
										"stars" : 3,
										"the_good" : [ "Durable", "Spacious",
												"Rubber wheels",
												"3 parts for all stages of growth" ],
										"the_bad" : [ "Lightweight",
												"Spacious", "Rubber wheels",
												"3 parts for all stages of growth" ],
										"best_deal" : {
											"name" : "amazon",
											"price" : "$1017",
											"lnk" : "https://google.com",
											"img" : "images/amazonlogo.png",
											"bigImg" : "images/amazon-biglogo.png"

										},
										"deals" : [ {
											"name" : "ebay",
											"price" : "$1029",
											"lnk" : null,
											"img" : ""
										}, {
											"name" : "xndoo",
											"price" : "$1035",
											"lnk" : null,
											"img" : ""
										}, {
											"name" : "zappos",
											"price" : "$1035",
											"lnk" : null,
											"img" : ""
										} ],
										"pictures" : [
												"images/temp/baby4-1.jpg",
												"images/temp/baby4-2.jpg",
												"images/temp/baby4-3.jpg",
												"images/temp/baby4-4.jpg" ],
										"noteBody" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
												+ "Fusce fermentum mauris vel nisl faucibus, posuere consectetur sem "
												+ "bibendum. Nulla eget enim consectetur, sollicitudin massa vitae, auctor "
												+ "lorem. Nulla tincidunt porta vulputate. Etiam sit amet justo "
												+ "pellentesque, semper mi id, bibendum ex. "
												+ "Praesent ut gravida nisl, in bibendum magna. "
												+ "Sed viverra ac dolor vitae molestie. Nullam fermentum, "
												+ "libero eu tristique consectetur, libero ex consequat erat, "
												+ "vitae dignissim felis justo vel metus. Maecenas maximus mollis tempus. "
												+ "Donec tempor auctor tempus. Duis aliquam pulvinar felis ut facilisis. "
												+ "Mauris faucibus laoreet velit et feugiat.\nSuspendisse eget ipsum "
												+ "convallis, vehicula urna vitae, dapibus justo. Integer eget dui ac nisl "
												+ "eleifend sollicitudin a eu eros. Phasellus mauris erat, gravida nec mi "
												+ "ac, posuere faucibus urna. Vestibulum ante ipsum primis in faucibus "
												+ "orci luctus et ultrices posuere cubilia Curae; Sed sed dolor "
												+ "sollicitudin, dignissim orci quis, auctor eros. "
									},
									{
										"editorPick" : false,
										"bestValue" : false,
										"title" : "Bugabo",
										"subtitle" : "Camilian 3",
										"img" : "images/temp/baby5-1.jpg",
										"weight" : 6,
										"weight_unit" : "Pounds",
										"size" : "100x45x29",
										"size_unit" : "Inches",
										"stars" : 3.5,
										"the_good" : [ "Lightweight",
												"Durable", "Rubber wheels",
												"3 parts for all stages of growth" ],
										"the_bad" : [ "Lightweight", "Durable",
												"Spacious", "Rubber wheels" ],
										"best_deal" : {
											"name" : "amazon",
											"price" : "$1004",
											"lnk" : "https://google.com",
											"img" : "images/amazonlogo.png",
											"bigImg" : "images/amazon-biglogo.png"
										},
										"deals" : [ {
											"name" : "ebay",
											"price" : "$1029",
											"lnk" : null,
											"img" : ""
										}, {
											"name" : "xndoo",
											"price" : "$1035",
											"lnk" : null,
											"img" : ""
										}, {
											"name" : "zappos",
											"price" : "$1035",
											"lnk" : null,
											"img" : ""
										} ],
										"pictures" : [
												"images/temp/baby5-1.jpg",
												"images/temp/baby5-2.jpg",
												"images/temp/baby5-3.jpg",
												"images/temp/baby5-4.jpg" ],
										"noteBody" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
												+ "Fusce fermentum mauris vel nisl faucibus, posuere consectetur sem "
												+ "bibendum. Nulla eget enim consectetur, sollicitudin massa vitae, auctor "
												+ "lorem. Nulla tincidunt porta vulputate. Etiam sit amet justo "
												+ "pellentesque, semper mi id, bibendum ex. "
												+ "Praesent ut gravida nisl, in bibendum magna. "
												+ "Sed viverra ac dolor vitae molestie. Nullam fermentum, "
												+ "libero eu tristique consectetur, libero ex consequat erat, "
												+ "vitae dignissim felis justo vel metus. Maecenas maximus mollis tempus. "
												+ "Donec tempor auctor tempus. Duis aliquam pulvinar felis ut facilisis. "
												+ "Mauris faucibus laoreet velit et feugiat.\nSuspendisse eget ipsum "
												+ "convallis, vehicula urna vitae, dapibus justo. Integer eget dui ac nisl "
												+ "eleifend sollicitudin a eu eros. Phasellus mauris erat, gravida nec mi "
												+ "ac, posuere faucibus urna. Vestibulum ante ipsum primis in faucibus "
												+ "orci luctus et ultrices posuere cubilia Curae; Sed sed dolor "
												+ "sollicitudin, dignissim orci quis, auctor eros. Quisque id egestas "
												+ "lacus. Donec non erat sodales, fringilla libero ut, aliquam ex. "
												+ "Maecenas a sollicitudin enim, sed imperdiet leo. Curabitur eget "
												+ "efficitur erat. Mauris in nunc est. Nam non maximus erat."
									} ];

							$scope.notes = [];
							$scope.notes.push(($scope.items.filter(function(i) {
								return (i.editorPick == true);
							}))[0]);
							$scope.notes.push(($scope.items.filter(function(i) {
								return (i.bestValue == true);
							}))[0]);

							for (var i = 0; i < $scope.notes.length; i++) {
								$scope.notes[i].fullstars = [];
								$scope.notes[i].halfstars = [];
								$scope.notes[i].emptystars = [];

								var stars = $scope.notes[i].stars;
								fulls = Math.floor(stars);
								for (var j = 0; j < fulls; j++) {
									$scope.notes[i].fullstars.push("*");
								}
								half = stars % 1;
								if (half != 0) {
									$scope.notes[i].halfstars.push("*");
								}
								empties = 5 - ($scope.notes[i].fullstars.length + $scope.notes[i].halfstars.length);
								for (var k = 0; k < empties; k++) {
									$scope.notes[i].emptystars.push("*");
								}

							}
							$scope.showPic = function(picId, carouselId) {
								try {
									var id = /-(\d+)$/.exec(picId)[1];
									console.log(picId, id);
									jQuery('#' + carouselId).carousel(
											parseInt(id));
								} catch (e) {
									console.log('Regex failed!', e);
								}
							}
							$scope.resizeMe = function() {
								$('.noteContent, .carousel-inner')
										.equalizeHeights();
							}

							$.fn.equalizeHeights = function() {
								return this.height(Math.max.apply(this, $(this)
										.map(function(i, e) {
											return $(e).width()
										}).get()))
							}

							$scope.lastViewed = Date.now();
							$scope.sendTo = function(href) {
								$window.open(href, '_blank');
							}

						} ]);
app.directive('myRepeatDirective', function() {
	return function(scope, element, attrs) {
		
		if (scope.$last) {
			var maxH = $('.thumbnailWrapper').width();
			$('.thumbnail').height(maxH);
		}
	};
})