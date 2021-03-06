const express=require('express');
const router=express.Router();
const userController=require('../controller/user_controller');

router.get('/signup',userController.signup);
router.get('/signin',userController.signin);
router.post('/create',userController.create);
router.get('/profile',userController.profile);

module.exports=router;