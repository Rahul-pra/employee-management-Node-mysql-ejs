const db = require("../models");
const config = require("../config");
const Leave = db.leave;
const User = db.user;
const moment = require('moment');


const Op = db.Sequelize.Op;

/**
 * leaveApply 
 * @param {*} req 
 * @param {*} res 
 */
 exports.leaveApply = (req, res) => {
    console.log("req.body ==>", req.body)
    console.log("req.body ==>", req.app)
    let bodyData = req.body;
    let dateSlice = bodyData.daterange.split('-');
    dateSlice = dateSlice.map(element => {
        return element.trim()
    });
    console.log(dateSlice)
    let days = moment(dateSlice[1],"DD/MM/YYYY").diff(moment(dateSlice[0],"DD/MM/YYYY"),'days') + 1;
    console.log()
    let setNewData = {};
    switch(bodyData.leaveType) {
        case 'cl':
          // code block
          setNewData.casual_leave = days;
          break;
        case 'sl':
          // code block
          setNewData.sick_leave = days;
            break;
        case 'pl':
            setNewData.paid_leave = days;
            // code block
            break;
        case 'lwp':
        setNewData.lwp = days;
        // code block
        break;
        default:
            setNewData.lwp = days;
          // code block
      }
      setNewData.userId = parseInt(bodyData.userId);
      setNewData.days = days;
      setNewData.daterange = bodyData.daterange;
      console.log("setNewData ==>", setNewData)
      Leave.create(setNewData).then(data => {
        req.app.set('loginData',{data: req.app.get('loginData').data, status: true,message: "leave applied successfully!"})

        res.redirect('/dashboard')
      })
   
 };

 /**
 * edit 
 * @param {*} req 
 * @param {*} res 
 */
  exports.edit = (req, res) => {
    console.log("req.body ==>", req.params)
    Leave.findOne({
      where: {
        id: parseInt(req.params.id)
      }
    }).then( data => {
      console.log("data 1111==>", data)
      req.app.set('leaveData',{data: data, status: true,message: "leave data get successfully!"})
      res.redirect('/edit')
    })
   
 };

 exports.leaveUpdate = (req, res) => {
  console.log("req.body ==>", req.body)
  let data = {
    leave_status: req.body.action,
    reason: req.body.reason
  }
  let query = {
    where: { id: parseInt(req.body.leaveId) },
    returning: true,
  }

  Leave.update(data, query).then(updatedTask => {
    if(req.body.action === 'approved'){
      User.findOne({
        where: {
          id: parseInt(req.body.userId)
        }
      }).then(userData =>{
        let dataUser = {
          casual_leave: parseInt(req.body.casual_leave) > 0 ? (parseInt(userData.casual_leave) - parseInt(req.body.casual_leave)) : parseInt(userData.casual_leave),
          sick_leave: parseInt(req.body.sick_leave)> 0 ? (parseInt(userData.sick_leave) - parseInt(req.body.sick_leave)) : parseInt(userData.sick_leave),
          paid_leave:parseInt(req.body.paid_leave) > 0 ? (parseInt(userData.paid_leave) - parseInt(req.body.paid_leave)) : parseInt(userData.paid_leave),
          lwp:parseInt(userData.lwp) + parseInt(req.body.lwp),
        }
        let queryUser = {
          where: { id: parseInt(userData.id) },
          returning: true,
        }
        User.update(dataUser, queryUser).then(Data =>{
          console.log("user updated ")
        })
      })
    }
    Leave.findAll().then(leave => {
      console.log("leave ==>", leave)
      if (leave.length > 0) {
        req.app.set('loginData',{data: req.app.get('loginData').data, leaveData: leave, status: true,message: "update leave status successfully!"})
        res.redirect('/dashboard')
      }
     
    })
  })
 };