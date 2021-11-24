
/*********************************************************************************************************** */
//                                  This is API Router for APP                                     //
/********************************************************************************************************* */


const apiEndpint = "/api/v1";
const userController = require('./../controllers/user');
const leaveController = require('./../controllers/leave');



module.exports.set = (app) => {
    app.post(apiEndpint + '/login', userController.signin);
    app.post(apiEndpint + '/leave-apply', leaveController.leaveApply);
    app.get(apiEndpint + '/edit/:id', leaveController.edit);
    app.post(apiEndpint + '/leave-update', leaveController.leaveUpdate);
    // app.post(apiEndpint + '/saveUser', userController.saveUser);
    // app.get(apiEndpint + '/getUsers', userController.getUsers);
    // app.put(apiEndpint + '/updateUser', userController.updateUser);
    // app.delete(apiEndpint + '/deleteUser', userController.deleteUser);
}