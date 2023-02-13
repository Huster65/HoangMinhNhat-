import express from 'express'
import {getAllUser, registerUser, login, DeleteUser,UpdateUser, findUserById, AddUser,} from '../controllers/UserController.js'
const UserRouter = express.Router()
import {isAuth, isAdmin} from '../untils/until.js'

UserRouter.post('/register', registerUser)
UserRouter.post('/login', login)

UserRouter.get('/', getAllUser)
UserRouter.delete('/delete/:id', DeleteUser)
UserRouter.post(
    "/createUser",
    AddUser
  );

UserRouter.put( '/Updateuser', UpdateUser);
UserRouter.get('/detailUser/:id', findUserById);

export default UserRouter
