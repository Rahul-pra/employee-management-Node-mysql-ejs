const db = require("../models");
const config = require("../config");
const User = db.user;
const Leave = db.leave;


const Op = db.Sequelize.Op;

/**
 * sign-in 
 * @param {*} req 
 * @param {*} res 
 */
 exports.signin = (req, res) => {
     console.log("req.body ==>", req.body)
    User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(user => {
        console.log("user ==>", user)
      if (!user) {
        return res.status(404).send({ status: false, message: "User Not found." });
      }

  
    //   var passwordIsValid = bcrypt.compareSync(
    //     req.body.password,
    //     user.password
    //   );
  
      if (req.body.password !== user.password) {
        return res.status(401).send({
          status: false,
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      if(user.role === "hr"){
        Leave.findAll().then(leave => {
          console.log("leave ==>", leave)
          if (leave.length > 0) {
            req.app.set('loginData',{data: user, leaveData: leave, status: true,message: "User login successfully!"})
            res.redirect('/dashboard')
          }
         
        })
      } else {
        req.app.set('loginData',{data: user, status: true,message: "User login successfully!"})
        res.redirect('/dashboard')
      }
  
    //   var token = jwt.sign({ id: user.id }, config.jwtSecret, {
    //     expiresIn: 86400 // 24 hours
    //   });
      
    //   res.status(200).send({
    //     status: true,
    //     message: "User login successfully!",
    //     data: user,
    //   });
    
    // res.render('dashboard.ejs',{data: user, status: true,message: "User login successfully!"});
    })
    .catch(err => {
      res.status(500).send({ status: false, message: err.message });
    });
  };