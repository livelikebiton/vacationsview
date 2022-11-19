const Joi = require("joi");

class UserModel {
    constructor (user) {
        this.userId = user.userId;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username;
        this.password = user.password;
        this.isAdmin = user.isAdmin;
    }

    static #loginValidationSchema = Joi.object({
        userId: Joi.forbidden(),
        firstName: Joi.forbidden(),
        lastName: Joi.forbidden(),
        username: Joi.string().required().min(4).max(30),
        password: Joi.string().required().min(6).max(20),
        isAdmin: Joi.forbidden()
    });

    static #registerValidationSchema = Joi.object({
        userId: Joi.forbidden(),
        firstName: Joi.string().required().min(2).max(25),
        lastName: Joi.string().required().min(2).max(25),
        username: Joi.string().required().min(4).max(30),
        password: Joi.string().required().min(6).max(20),
        isAdmin: Joi.forbidden()
    });

    static #editValidationSchema = Joi.object({
        userId: Joi.number().required().positive().integer(),
        firstName: Joi.string().required().min(2).max(25),
        lastName: Joi.string().required().min(2).max(25),
        username: Joi.string().required().min(4).max(30),
        password: Joi.string().required().min(6).max(20),
        isAdmin: Joi.forbidden()
    });

    validateRegister() {
        const result = UserModel.#registerValidationSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.message : null;
    }

    validateLogin() {
        const result = UserModel.#loginValidationSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.message : null;
    }

    validateEdit() {
        const result = UserModel.#editValidationSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.message : null;
    }

}
module.exports = UserModel;