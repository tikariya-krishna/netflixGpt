export const validation = ( email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number

    

    if (!emailRegex.test(email)) {
        return { valid: false, message: "Invalid email format." };
    }

    if (!passwordRegex.test(password)) {
        return { valid: false, message: "Password must be at least 8 characters long and include at least one letter and one number." };
    }

    return {valid: true};
}