const PASSWORD_RULE = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const REGEX = {PASSWORD_RULE};

const PASSWORD_MESSAGE = "Password should have 1 uppercase, lowercase along with a number and special character"

export const MESSAGE = { PASSWORD_MESSAGE }