var app = angular
		.module('adminVOD', [ 'ngResource', 'ngCookies', 'ui.bootstrap',
				'ui.router', 'ngAnimate', 'ngSanitize', 'ngInputDate' ]);
app.config(function($stateProvider) {
	$stateProvider.state("dailyReport", {
		url : "/dailyReport",
		templateUrl : "dailyReport.html"
	}).state("affiliates", {
		url : "/affiliates",
		templateUrl : "affiliates.html"
	}).state("clicksReport", {
		url : "/clicksReport",
		templateUrl : "login.html"
	})

});

app.controller("tabsController", function($scope, $state) {
	$scope.tabs = [ {
		title : "Daily Report",
		action : "dailyReport",
		icon : "icon-tab1",
		active : true
	}, {
		title : "Affiliates",
		action : "affiliates",
		icon : "icon-tab2",
		active : false
	}, {
		title : "Clicks Report",
		action : "clicksReport",
		icon : "icon-tab3",
		active : false
	} ];

	var activeTab;
	for (var i = 0; i < $scope.tabs.length; i++) {
		if ($scope.tabs[i].active) {
			activeTab = $scope.tabs[i];
			break;
		}
	}

	if (activeTab) {
		$state.go(activeTab.action);
	}
});

app
		.factory(
				'Api',
				[
						'$http',
						'$resource',
						'$q',
						function($http, $resource, $q) {
							function apiError(data) {
								var msg = 'Error accessing: ' + data.config.url
										+ '\nServer said: ' + data.status + ' '
										+ data.statusText;
								$q.reject(data);
								console.log(msg, data);
								alert('Error:' + '' + msg);

							}
							return {
								LoginService : $resource(
										'rest/checkUser',
										{},
										{
											post : {
												method : 'POST',
												headers : {
													'Content-Type' : 'application/x-www-form-urlencoded'
												},
												interceptor : {
													responseError : function(
															data) {
														apiError(data);
													}
												},
												isArray : false
											},
										}),
								DailyReportService : $resource(
										'rest/dailyReport',
										{},
										{
											post : {
												method : 'POST',
												headers : {
													'Content-Type' : 'application/x-www-form-urlencoded'
												},
												interceptor : {
													responseError : function(
															data) {
														apiError(data);
													}
												},
												isArray : true
											},
										}),
								AffiliateService : $resource(
										'rest/tables/affiliates', {}, {
											get : {
												method : 'GET',
												interceptor : {
													responseError : function(
															data) {
														apiError(data);
													}
												},
												isArray : true
											},
										})
							}
						} ]);

app
		.controller(
				'mainController',
				[
						'$scope',
						'$location',
						'$window',
						'Api',
						'$cookies',
						function($scope, $location, $window, Api, $cookies) {
							$scope.msg = "Hi";
							$scope.authenticated = $cookies
									.get('authenticated');
							$scope.role = $cookies.get('role');
							$scope.checkAutha = function() {
								if ($scope.authenticated) {
									$scope.currentTab = 'reports.html';
								} else {
									$scope.currentTab = 'login.html';
								}
							}
							$scope.login = function(u) {
								$scope.message = "Please wait";
								var data = 'usr=' + u.username + '&psw='
										+ u.password;
								Api.LoginService.post(data).$promise
										.then(function(result) {
											if (result.auth) {
												$scope.message = "";

												$scope.authenticated = true;

												var expireDate = new Date();
												expireDate.setDate(expireDate
														.getDate() + 1);
												$cookies
														.put(
																'authenticated',
																true,
																{
																	'expires' : expireDate
																});
												$cookies
														.put(
																'role',
																result.role,
																{
																	'expires' : expireDate
																});
												$scope.currentTab = 'reports.html';
											} else {
												$scope.message = "User not found, please check your data and try again";
												$scope.authenticated = false;
											}
										})
							}
							$scope.logout = function() {
								var expireDate = new Date();
								expireDate.setDate(expireDate.getDate() + 1);
								$cookies.remove('authenticated');
								$cookies.remove('role');
								$scope.currentTab = 'login.html';
							}
						} ]);

app
		.controller(
				'reportController',
				[
						'$scope',
						'$location',
						'$window',
						'Api',
						'$cookies',
						'$filter',
						function($scope, $location, $window, Api, $cookies,
								$filter) {
							$scope.exportData = function() {
								var blob = new Blob(
										[ document.getElementById('exportable').innerHTML ],
										{
											type : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
										});
								saveAs(blob, "Report.xls");
							};

							$scope.message = "";
							$scope.items = [];
							$scope.fdt = $filter('date')(new Date(),
									'yyyy-MM-dd');
							$scope.tdt = $scope.fdt;

							$scope.tomorrow = new Date();
							$scope.tomorrow
									.setDate($scope.tomorrow.getDate() + 1);
							$scope.tdt = $filter('date')($scope.tomorrow,
									'yyyy-MM-dd');
							$scope.affiliates = [];

							$scope.createReport = function(f, t, a) {
								var fromDt = $filter('date')(f, 'yyyy-MM-dd');
								var toDt = $filter('date')(t, 'yyyy-MM-dd');
								var data = 'strDt=' + fromDt + '&endDt=' + toDt
										+ '&aff=' + a;
								$scope.items = [];
								$scope.message = "calculate, please wait";
								Api.DailyReportService.post(data).$promise
										.then(function(result) {
											if (result) {
												for ( var r in result) {
													if (result[r].clicks != "0") {
														result[r].leadsRate = result[r].leads
																* 100
																/ result[r].clicks;
													}
												}

												$scope.items = result;
												$scope.message = "";
											} else {
												$scope.message = "no records found";
											}
										})
							}
							$scope.getAffiliates = function() {
								Api.AffiliateService.get().$promise
										.then(function(result) {
											$scope.affiliates = result;
										})
							}

							$scope.getAffiliates();

							$scope.endDateBeforeRender = endDateBeforeRender
							$scope.endDateOnSetTime = endDateOnSetTime
							$scope.startDateBeforeRender = startDateBeforeRender
							$scope.startDateOnSetTime = startDateOnSetTime

							function startDateOnSetTime() {
								$scope.$broadcast('start-date-changed');
							}

							function endDateOnSetTime() {
								$scope.$broadcast('end-date-changed');
							}

							function startDateBeforeRender($dates) {
								if ($scope.dateRangeEnd) {
									var activeDate = moment($scope.dateRangeEnd);

									$dates
											.filter(
													function(date) {
														return date
																.localDateValue() >= activeDate
																.valueOf()
													}).forEach(function(date) {
												date.selectable = false;
											})
								}
							}

							function endDateBeforeRender($view, $dates) {
								if ($scope.dateRangeStart) {
									var activeDate = moment(
											$scope.dateRangeStart).subtract(1,
											$view).add(1, 'minute');

									$dates
											.filter(
													function(date) {
														return date
																.localDateValue() <= activeDate
																.valueOf()
													}).forEach(function(date) {
												date.selectable = false;
											})
								}
							}

						} ]);

app.controller('affiliatesController', function($scope, $window) {
	
})
app.controller('TabsDemoCtrl', function($scope, $window) {
	$scope.tabs = [ {
		title : 'Report',
		content : '<div ng-include="currentTable"></div>'
	}, {
		title : 'Dynamic Title 2',
		content : 'Dynamic content 2'
	} ];

	$scope.currentTable = "login.html";
	$scope.model = {
		name : 'Tabs'
	};
});
