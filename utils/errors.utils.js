module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: ''}

    if(err.message.includes('pseudo'))
    errors.pseudo = "Incorrect Pseudo or already taken";

    if(err.message.includes('email'))
    errors.email = "Incorrect email";

    if(err.message.includes('password'))
    errors.password = "Incorrect password, must be at least 8 characters";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Pseudo already taken";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Email already taken";

    return errors;
}