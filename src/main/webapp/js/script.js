var app = angular.module('TenBestApp', []);
app.controller('template1Controller',
		[
				'$scope',
				function($scope) {
					$scope.items = [
							{
								"editorPick" : true,
								"bestValue" : false,
								"title" : "Mama",
								"subtitle" : "Sola",
								"img" : "images/temp/baby1.jpg",
								"link" : null,
								"weight" : 4.5,
								"weight_unit" : "Pounds",
								"size" : "90x40x30",
								"size_unit" : "Inches",
								"the_good" : [ "Lightweight", "Durable",
										"Spacious", 
										"3 parts for all stages of growth" ],
								"the_bad" : [ "Lightweight", "Durable",
										"Spacious", "Rubber wheels",
										 ],
								"best_deal" : {
									"name" : "amazon",
									"price" : "$1017",
									"link:" : null,
									"img" : "images/amazonlogo.png"
								},
								"deals" : [ {
									"name" : "ebay",
									"price" : "$1029",
									"link:" : null,
									"img" : ""
								}, {
									"name" : "xndoo",
									"price" : "$1035",
									"link:" : null,
									"img" : ""
								}, {
									"name" : "zappos",
									"price" : "$1035",
									"link:" : null,
									"img" : ""
								} ]
							},
							{
								"editorPick" : false,
								"bestValue" : false,
								"title" : "Baby Jogger",
								"subtitle" : "City mini",
								"img" : "images/temp/baby2.jpg",
								"link" : null,
								"weight" : 5.2,
								"weight_unit" : "Pounds",
								"size" : "80x42x35",
								"size_unit" : "Inches",
								"the_good" : [ "Durable", "Spacious",
										"Rubber wheels" ],
								"the_bad" : [ "Durable", "Spacious",
										"Rubber wheels" ],
								"best_deal" : {
									"name" : "amazon",
									"price" : "$1017",
									"link:" : null,
									"img" : "images/amazonlogo.png"
								},
								"deals" : [ {
									"name" : "ebay",
									"price" : "$1029",
									"link:" : null,
									"img" : ""
								}, {
									"name" : "xndoo",
									"price" : "$1035",
									"link:" : null,
									"img" : ""
								}, {
									"name" : "zappos",
									"price" : "$1035",
									"link:" : null,
									"img" : ""
								} ]
							},
							{
								"editorPick" : false,
								"bestValue" : false,
								"title" : "Bugabo",
								"subtitle" : "Bee",
								"img" : "images/temp/baby3.jpg",
								"link" : null,
								"weight" : 4.0,
								"weight_unit" : "Pounds",
								"size" : "80x42x35",
								"size_unit" : "Inches",
								"the_good" : [ "Lightweight", "Durable",
										"Spacious", "Rubber wheels" ],
								"the_bad" : [ "Lightweight", "Durable",
										"Spacious", "Rubber wheels" ],
								"best_deal" : {
									"name" : "amazon",
									"price" : "$1017",
									"link:" : null,
									"img" : "images/amazonlogo.png"
								},
								"deals" : [ {
									"name" : "ebay",
									"price" : "$1029",
									"link:" : null,
									"img" : ""
								}, {
									"name" : "xndoo",
									"price" : "$1035",
									"link:" : null,
									"img" : ""
								}, {
									"name" : "zappos",
									"price" : "$1035",
									"link:" : null,
									"img" : ""
								} ]
							},
							{
								"editorPick" : false,
							"bestValue" : true,
								"title" : "Brevi",
								"subtitle" : "OVO",
								"img" : "images/temp/baby4.jpg",
								"link" : null,
								"weight" : 5.5,
								"weight_unit" : "Pounds",
								"size" : "75x52x28",
								"size_unit" : "Inches",
								"the_good" : [ "Durable",
										"Spacious", "Rubber wheels",
										"3 parts for all stages of growth" ],
								"the_bad" : [ "Lightweight",
										"Spacious", "Rubber wheels",
										"3 parts for all stages of growth" ],
								"best_deal" : {
									"name" : "amazon",
									"price" : "$1017",
									"link:" : null,
									"img" : "images/amazonlogo.png"
								},
								"deals" : [ {
									"name" : "ebay",
									"price" : "$1029",
									"link:" : null,
									"img" : ""
								}, {
									"name" : "xndoo",
									"price" : "$1035",
									"link:" : null,
									"img" : ""
								}, {
									"name" : "zappos",
									"price" : "$1035",
									"link:" : null,
									"img" : ""
								} ]
							},
							{
								"editorPick" : false,
							"bestValue" : false,
								"title" : "Bugabo",
								"subtitle" : "Camilian 3",
								"img" : "images/temp/baby5.jpg",
								"link" : null,
								"weight" : 6,
								"weight_unit" : "Pounds",
								"size" : "100x45x29",
								"size_unit" : "Inches",
								"the_good" : [ "Lightweight", "Durable",
										 "Rubber wheels",
										"3 parts for all stages of growth" ],
								"the_bad" : [ "Lightweight", "Durable",
										"Spacious", "Rubber wheels"
										],
								"best_deal" : {
									"name" : "amazon",
									"price" : "$1017",
									"link:" : null,
									"img" : "images/amazonlogo.png"
								},
								"deals" : [ {
									"name" : "ebay",
									"price" : "$1029",
									"link:" : null,
									"img" : ""
								}, {
									"name" : "xndoo",
									"price" : "$1035",
									"link:" : null,
									"img" : ""
								}, {
									"name" : "zappos",
									"price" : "$1035",
									"link:" : null,
									"img" : ""
								} ],
							} ];
				} ]);