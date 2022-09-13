const User= require('../models/User')

const createNewUser = async(req,res) => {
    console.log(req.body)
    try{
        const user = await User.create(req.body);
        await user.generateToken();
        res.send(user)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
}

const loginUser = async(req,res) => {
    const {email, password} = req.body;
    console.log(email,password)
    try{
        const user= await User.findByCredentials(email, password);
        await user.generateToken();
        res.status(200).send(user)
    }catch (e) {
        console.log(e);
        res.status(500).send()
    }
}

const autoLogin = async(req,res) => {
    res.send(req.user)

}

const logoutUser = async(req,res) =>{
    const user = req.user;
    user.token = '';
    await user.save();
    res.status(200).send()

}

const addToRecipes = async(req,res) => {
    const {detailDataID} = req.body;
    const user = req.user;
    user.favoriteRecipes.push(detailDataID)
    await user.save();
    res.status(200).send()
}

module.exports ={
    createNewUser,
    loginUser,
    autoLogin,
    logoutUser,
    addToRecipes,
}