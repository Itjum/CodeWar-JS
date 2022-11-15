class InvalidUsernameError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidUsernameError";
    }
}

class InvalidPasswordError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidPasswordError";
    }
}

class InvalidYearOfBirthError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidYearOfBirthError";
    }
}

module.exports = {
    InvalidPasswordError,
    InvalidYearOfBirthError,
    InvalidUsernameError,
}