export const validation = ( email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; // Minimum eight characters, at least one letter and one number

    

    if (!emailRegex.test(email)) {
        return { message: "Invalid email format." };
    }

    if (!passwordRegex.test(password)) {
        return { message: "Password must be at least 8 characters long and include at least one letter and one number." };
    }

    return null;
}