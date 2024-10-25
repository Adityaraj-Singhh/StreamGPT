
export const checkValidData = (name,email,password) => {

    const emailValidation = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const nameValidation = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!emailValidation) return "Email is not valid";
    if(!passwordValidation) return "Password is not valid";
    if(!nameValidation) return "Name is not valid";

    return null;
}