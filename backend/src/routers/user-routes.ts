import {Router} from 'express'
import { UserLogin, getAllUsers, userSignup, verifyUser } from '../controllers/user-controller.js';
import {validate, signupValidator } from '../utils/validators.js'
import { loginValidator} from '../utils/validators.js'
import { verifyToken } from '../utils/token-manager.js';

const userRoutes = Router();

userRoutes.get("/", getAllUsers); 
userRoutes.post("/signup",validate(signupValidator) , userSignup );
userRoutes.post("/login",validate(loginValidator) , UserLogin );
userRoutes.get("/auth-status", verifyToken,  verifyUser );

export default userRoutes;


