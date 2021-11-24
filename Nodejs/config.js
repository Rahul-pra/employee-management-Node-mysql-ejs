module.exports = {
	port: 5050,
	name: 'employee-leave-management',
	dbHost: 'localhost',
	dbUserName: 'root',
	dbPassword: '',
	dbName: 'employee_leave_management',
	saltRounds: 2,
	jwtSecret: 'employee_leave_management@159*',
	domain: 'http://localhost:5050',
	getServerUrl(req) {
		var serverURL = 'http://localhost:5050/';
		return serverURL;
	}
}