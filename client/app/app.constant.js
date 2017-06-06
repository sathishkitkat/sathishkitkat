(function(angular, undefined) {
  angular.module("ticketbookingApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);