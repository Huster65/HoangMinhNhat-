import {UserModel} from '../models/UserModel.js'
import {generateToken} from '../untils/until.js'
import expressAsyncHandler from 'express-async-handler'

export const getAllUser = (req, res) => {
    UserModel.find({})
        .then(user => res.send(user))
        .catch(err => console.log(err))
}

export const registerUser = expressAsyncHandler(async (req, res) => {
    const user = new UserModel({
        // _id: req.body._id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        phone: req.body.phone,
        isAdmin: false,
    })
    const createUser = user.save();
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        address: user.address ,
        phone: user.phone,
        token: generateToken(user),
    });
})

export const login = expressAsyncHandler(async (req, res) => {
    const user = await  UserModel.findOne({email: req.body.email, password: req.body.password})
    if(user){ 
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address ,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token: generateToken(user),
        });
    }else{
        res.status(401).send({message: "invalid email or password"})
    }
})

export const DeleteUser = expressAsyncHandler(async (req, res) => {
    const user = await UserModel.findById({_id: req.params.id})

    if(user){
        await user.remove()
        res.send({message: 'user deleted'})
    }else{
        res.send({message: 'user not exists'})
    }
})
export const UpdateUser = expressAsyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.body._id);
  if (user) {
    //user._id =req.body._id;
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.address = req.body.address;
    user.phone = req.body.phone;
    const updateUser = await user.save();
    if (updateUser) {  
      res.send("update success"); 
    }
  }
  return res.send("update fail");
  });


export const findUserById = expressAsyncHandler(async (req, res) => {
    const user = await UserModel.findById({_id: req.params.id})
    
    if(user){
        res.send(user)
    }else{
        res.send({message: 'user not found'})
    }
})

export const AddUser = expressAsyncHandler(async (req, res) => {
    
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        phone: req.body.phone,
        isAdmin: false,
      
    });
    const newUser = await user.save();
  
    if (newUser) {
      return res
        .status(201)
        .send({ message: "New User Created", data: newUser });
    } else {
      res.send("error add user");
    }
  });