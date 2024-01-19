// app.js
const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://Neem:2002Neem@cluster0.mpobhoh.mongodb.net/?retryWrites=true&w=majority')
if(mongoose.connection == true){
  console.log("connected")
}
const userSchema = new mongoose.Schema({
  name:{
    type:String,
},
email:{
  type:String,
}
});
const User = mongoose.model('User', userSchema);
module.exports.create = async (event) => {

  try {
  const newUser = await User.create(data);
     
  return {
    statusCode: 200,
    body: JSON.stringify(newUser)
  };
}catch (error) {
  console.log(error)
  return {
    statusCode: 500,
    body: JSON.stringify({error})
  }
}
};

module.exports.read = async (event) => {
  
try {
  const newUser = await User.find();
     
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: error.message
    })
  }
}catch (error) {
  console.log(error)
  return {
    statusCode: 500,
    body: JSON.stringify({newUser})
  }
}
};

module.exports.update = async (event) => {
  const { id } = event.pathParameters;
  const data = JSON.parse(event.body);


try {
  const newUser = await User.findOneAndUpdate({
    _id: id

  },{
    $set: { data }
  },{new: true});
     
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: error.message
    })
  }
}catch (error) {
  console.log(error)
  return {
    statusCode: 500,
    body: JSON.stringify({newUser})
  }
}
};

module.exports.delete = async (event) => {
  const { id } = event.pathParameters;

try {
   await User.findByIdAndDelete(id);
     
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "User deleted"
    })
  };
}catch (error) {
  console.log(error)
  return {
    statusCode: 500,
    body: JSON.stringify({newUser})
  }
}
};

const express = require('express')
const sls = require('serverless-http')
const { type } = require("os")
const app = express()
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello World!')
})
module.exports.server = sls(app)