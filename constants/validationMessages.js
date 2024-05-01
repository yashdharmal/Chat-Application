const { signUp, login } = require("../controller/user");

module.exports = {
    //failure
    failure: {
        firstNameShort: {
            message: `First Name should have a minimum length of {#limit}.`,
            code: '0001',
        },
        firstNameLong: {
            message: `First Name should have a maximum length of {#limit}.`,
            code: '0002'
        },
        firstNameIsRequired: {
            message: `First Name is required.`,
            code: '0003'
        },
        lastNameShort: {
            message: `Last Name should have a minimum length of {#limit}.`,
            code: '0004',
        },
        lastNameLong: {
            message: `Last Name should have a maximum length of {#limit}.`,
            code: '0005'
        },
        lastNameIsRequired: {
            message: `Last Name is required.`,
            code: '0006'
        },
        emailIsRequired: {
            message: `Email Id is required.`,
            code: '0007'
        },
        emailIsRequired: {
            message: `Please enter a valid email address.`,
            code: '0008'
        },
        internalServerError: {
            message: `Internal server error.`,
            code: '0009'
        },
        emailAlreadyExists: {
            message: `Account with this email Id already exists.`,
            code: '0010'
        },
        passwordRequired: {
            message: `Password is required.`,
            code: '0011'
        },
        passwordShort: {
            message: `Password must be greater that  {#limit}.`,
            code: '0012'
        },
        passwordLong: {
            message: `Password not be greater that  {#limit}.`,
            code: '0013'
        },
        invalidCredentials: {
            message: `Invalid Credentials`,
            code: '0014'
        }

    },

    // success
    success: {
        signUpSuccess: {
            message: `Congratulations account has been crated successfully`,
            code: '0001'
        },
        logInSuccess: {
            message: `You have successfully logged in.`,
            code: '0002'
        },
    }

}