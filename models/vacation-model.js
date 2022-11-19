const Joi = require("joi");

class VacationModel {

    constructor (vacation) {
        this.vacationId = vacation.vacationId;
        this.destination = vacation.destination;
        this.dateFrom = vacation.dateFrom;
        this.dateTo = vacation.dateTo;
        this.vacationPrice = vacation.vacationPrice;
        this.description = vacation.description;
        this.imageName = vacation.imageName;
    }

    static #postValidationSchema = Joi.object({
        vacationId: Joi.number().positive().forbidden().integer(),
        destination: Joi.string().required().min(5).max(25),
        dateFrom: Joi.date().required(),
        dateTo: Joi.date().required(),
        vacationPrice: Joi.number().required().min(1).max(50000),
        description: Joi.string().required().min(3).max(250),
        imageName: Joi.optional()
    });

    static #putValidationSchema = Joi.object({
        vacationId: Joi.number().required().positive().integer(),
        destination: Joi.string().required().min(5).max(25),
        dateFrom: Joi.date().required(),
        dateTo: Joi.date().required(),
        vacationPrice: Joi.number().required().min(1).max(50000),
        description: Joi.string().required().min(3).max(250),
        imageName: Joi.optional()
    });

    validatePost() {
        const result = VacationModel.#postValidationSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.message : null;
    }

    validatePut() {
        const result = VacationModel.#putValidationSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.message : null;
    }
}

module.exports = VacationModel;