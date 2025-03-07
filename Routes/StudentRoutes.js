import express from 'express'
const router = express.Router();

import {  
    loginUser,
    logoutUser,
    getUser,
    getUserFees,
    choosePlan,
    getUserPlans
} from '../Controller/StudentController.js'


router.post('/login-user', loginUser)
router.post('/logout-user', logoutUser)
router.get("/get-user/:userId", getUser);
router.get("/fees/:userId", getUserFees);
router.post("/choose-plan/:userId", choosePlan);
router.get("/my-plans/:userId", getUserPlans);























export default router