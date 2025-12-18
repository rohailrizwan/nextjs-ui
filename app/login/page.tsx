"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const baseUrl = "http://localhost:3000";

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const obj = {
            email: email,
            password: password
        }
        const response = await axios.post(`${baseUrl}/users/login`, obj);
        if (response) {
            localStorage.setItem(
                "user",
                JSON.stringify(response?.data?.data?.user)
            );

            localStorage.setItem(
                "token",
                response?.data?.data?.accessToken
            );
            router.push('/')
        }
        // Add login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                <form onSubmit={handleLogin} className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 
            transition-all duration-200"
                    >
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}
