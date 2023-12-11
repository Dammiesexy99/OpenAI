import { body, validationResult } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const error = validationResult(req);
        if (error.isEmpty()) {
            return next();
        }
        return res.status(422).json({ error: error.array() });
    };
};
export const loginValidator = [
    // body("name").notEmpty(). withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({ min: 6 }).withMessage("password must be at least 6 characters"),
];
const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator,
];
export const chatCompletionValidator = [
    body("message").notEmpty().withMessage("message is required"),
];
export { signupValidator, validate };
//# sourceMappingURL=validators.js.map