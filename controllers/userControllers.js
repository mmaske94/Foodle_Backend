const User= require('../models/User')
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;



async function createNewUser(req, res) {
    const user = new User(req.body);
    try {
      await user.save();
      const token = createJWT(user);
      res.json({ token });
    } catch (err) {
      res.status(400).json(err);
    }
  }



async function loginUser(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(401).json({ err: "bad credentials" });
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch) {
          const token = createJWT(user);
          res.json({ token });
        } else {
          return res.status(401).json({ err: "bad credentials" });
        }
      });
    } catch (err) {
      return res.status(401).json({message:'username/password incorrect'});
    }
  }

function createJWT(user) {
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    )
}
// const createNewUser = async(req,res) => {
//     console.log(req.body)
//     try{
//         const user = await User.create(req.body);
//         res.send(user)
//     } catch (e) {
//         console.log(e)
//         res.status(500).send()
//     }
// }

// const loginUser = async(req,res) => {
//     const {email, password} = req.body;
//     console.log(email,password)
//     try{
//         const user= await User.findByCredentials(email, password);
//         res.status(200).send(user)
//     }catch (e) {
//         console.log(e);
//         res.status(500).send()
//     }
// }

// const loginUser = (req,res) => {
//     User.findOne({email: req.body.email}, (error, user)=>{
//         if(error){
//             res.status(400).json(error)
//             return
//         }
//         if(!user){
//             res.status(400).json({msg: 'Given Email Does Not Exist'})
//             return
//         }
//         if(bcrypt.compareSync(req.body.password, user.password)){
//             delete user.password
//             res.json({user})
//         }else{
//             res.status(204).json({msg: 'Incorrect Password'})
//         }
//     })
// }



module.exports ={
    createNewUser,
    loginUser
}