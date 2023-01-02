import express from 'express';
import basicAuth from 'express-basic-auth';

const router = express.Router();

function myAuthorizer(username, password) {
    
}

router.use(basicAuth({
    users: { 'dellros': '1111' }
}))

router.route('/').post((req, res) => {
    console.log('test')
})

export default router;