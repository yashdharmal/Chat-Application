const bcrypt = require('bcrypt')
const userModel = require('../model/user')
const { failure, success } = require('../constants/validationMessages')
const { hashPassword, isPasswordCorrect, createdToken } = require('../constants/utils')


const signUp = async (req, res) => {
    try {
        const { password, email, ...data } = req.body;

        const emailExist = await userModel.User.exists({ email })

        if (emailExist) {
            return res.send({ message: failure.emailAlreadyExists.message })
        }
        const hashedPassword = await hashPassword(password);

        const dataToAdd = {
            email,
            password: hashedPassword,
            ...data
        }
        const addData = await userModel.User.create(dataToAdd)

        const token = createdToken({ email, _id: addData._id })

        res.send({ message: success.signUpSuccess.message, token, data: addData, })
    } catch (error) {
        res.status(500).send({ message: failure.internalServerError, error })
    }


}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {

        const user = await userModel.User.findOne({ email })

        if (!user || !await isPasswordCorrect(password, user.password)) {
            return res.send({ message: failure.invalidCredentials.message })
        }

        const token = createdToken({ email, _id: user._id })

        res.send({ message: success.logInSuccess.message, token })

    } catch (error) {
        res.status(500).send({ message: failure.internalServerError, error })
    }


}


module.exports = { signUp, login }