/*function checkpassword(password) {
    let text = password.length
    if (text < 8) {
        return ('invalid password')
    } else {
        return ('valid')
    } 

}
console.log(checkpassword(""))*/
const checkpassword = (password) => {
    const minlength = password.length >= 8
    const maxlength = password.length <= 64
    const upercase = /[A-Z]/.test(password)
    const lowcase = /[a-z]/.test(password)
    const specialchar = /[!@#$%^&*]/.test(password)
    const numbers = /[0-9]/.test(password)
    if (minlength && maxlength && lowcase && specialchar && numbers) {
        return ('strong,Great password!')
    } else {
        return ('weak , Add uppercase, numbers, and special characters')
    }
};
console.log(checkpassword(''));