export const checkValidate = (email: string,password: string)=>{
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^()\-_=+])[A-Za-z\d@$!%*?#&^()\-_=+]{8,}$/.test(password);
    if(!isValidEmail) return "Email id is invalid"
    if(!isValidPassword) return "Password should contain:\n• One lowercase (a-z)\n• One uppercase (A-Z)\n• One special character\n• Minimum 8 characters";

    return null;

}