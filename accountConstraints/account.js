"use strict";

const { InvalidUsernameError, InvalidPasswordError, InvalidYearOfBirthError } = require("./accountError");

function check_username(username)
{
    if (username !== "")
    {
        for (let i = 0; i < username.length; i++)
        {
            if (username.charAt(i) >= 'A' && username.charAt(i) <= 'Z')
            {
                continue;
            }
            else if (username.charAt(i) >= 'a' && username.charAt(i) <= 'z')
            {
                continue;
            }
            else if (username.charAt(i) === '_' || username.charAt(i) === "-")
            {
                continue;
            }
            else if (username.charAt(i) <= '9' && username.charAt(i) >= 0)
            {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }
    return false;
}

function check_password(password)
{
    if (password.length >= 8 && password.length <= 100)
    {
        let verifnumber = false;
        let verifuppercase = false;
        let veriflowercase = false;
        for (let i = 0; i < password.length; i++)
        {
            if (password.charAt(i) >= '0' && password.charAt(i) <= '9')
            {
                verifnumber = true;
            }
            if (password.charAt(i) >= 'A' && password.charAt(i) <= 'Z')
            {
                verifuppercase = true;
            }
            if (password.charAt(i) >= 'a' && password.charAt(i) <= 'z')
            {
                veriflowercase = true;
            }
        }
        if (veriflowercase === true && verifnumber === true && verifuppercase === true)
        {
            return true;
        }
    }
    return false;
}

function check_yearOfBirth(yearOfBirth)
{
    if (yearOfBirth > 1800 && yearOfBirth <= 2022)
    {
        return true;
    }
    return false;
}

class Account {
    // FIXME: A constructor was deleted here
    constructor(username, password, yearOfBirth) {
        if (check_username(username))
        {
            this.username = username;
        }
        else
        {
            throw new InvalidUsernameError("invalid username !");
        }
        if (check_password(password))
        {
            this.password = password;
        }
        else
        {
            throw new InvalidPasswordError("password is invalid !");
        }
        if (check_yearOfBirth(yearOfBirth))
        {
            this.yearOfBirth = yearOfBirth;
        }
        else
        {
            throw new InvalidYearOfBirthError("date of birth is invalid !");
        }
    }
}

module.exports = {
    Account
}

//let test = new Account("login_x]", "myPassword123", 1990);
//let test2 = new Account("login_x", "modpas", 1990);
let test3 = new Account("login_x", "myPassword123", 2000);