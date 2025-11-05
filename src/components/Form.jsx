import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Form = () => {
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(username);
        const usernameRegex = /^[a-zA-Z_]/;
        const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        const auth = getAuth();
        if (username && email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    logger.error("Error code:", errorCode, "Error message:", errorMessage);
                })
        }


        if (!usernameRegex.test(username)) {
            setError("Please enter your full name!");
            return;
        }
        if (!EmailRegex.test(email)) {
            setError("Please enter your valid email!");
            return;
        }

        if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
            return;
        }
        // toast.success('Form submitted successfully!');

        alert('Successfully submitted your Form!');

    }


    return (
        <div className="flex justify-center items-center mb-20">
            <form onSubmit={handleSubmit} className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

                <input
                    id="username"
                    name="username"
                    className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => e.target.value}
                />

                <input
                    id="email"
                    name="email"
                    className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => e.target.value}
                />

                <input
                    id="password"
                    name="password"
                    className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => e.target.value}
                />

                <button type="submit" className="w-full mb-3 bg-primary hover:bg-[#a31452] transition-all active:scale-95 py-2.5 rounded text-white font-medium cursor-pointer">Create Account</button>

                <p className="text-center mt-4">Already have an account? <a href="#" className="text-blue-500 underline">Log In</a></p>

                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </form>
        </div>
    )
}

export default Form;
