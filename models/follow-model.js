const Joi = require("joi");

class FollowModel {
    constructor(follow) {
        this.userId = follow.userId;
        this.vacationId = follow.vacationId;
    }

    static #followValidationSchema = Joi.object({
        userId: Joi.forbidden(),
        vacationId: Joi.number().required()
    });

    validateFollow() {
        const result = FollowModel.#followValidationSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.message : null;
    }
}

module.exports = FollowModel;