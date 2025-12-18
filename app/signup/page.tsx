"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface UserForm {
    username: string;
    email: string;
    password: string;
    avatar: string;
}

export default function Signup() {
    const [userForm, setUserForm] = useState<UserForm>({
        username: '',
        email: '',
        password: '',
        avatar: ''
    });

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>("");
    const router = useRouter()

    const fillModel = (key: keyof UserForm, value: string) => {
        setUserForm(prev => ({ ...prev, [key]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const baseUrl = "http://localhost:3000";

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!imageFile) {
            alert("Image is required!");
            return;
        }

        try {
            // Upload image
            const formData = new FormData();
            formData.append("image", imageFile);

            const imageResponse = await axios.post<{ imageUrl: string }>(`${baseUrl}/uploads/image`, formData);
            console.log(imageResponse);

            const imageUrl = imageResponse.data.imageUrl;

            // Submit user data
            const newUser = { ...userForm, avatar: imageUrl };
            const response = await axios.post(`${baseUrl}/users/register`, newUser);

            localStorage.setItem(
                "user",
                JSON.stringify(response?.data?.data?.user)
            );

            localStorage.setItem(
                "token",
                response?.data?.data?.accessToken
            );
            router.push('/')
        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Sign up</h2>

                {/* Image Upload */}
                <div className="flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-gray-200 border flex items-center justify-center overflow-hidden relative">
                        {imagePreview ? (
                            <img src={imagePreview} alt="preview" className="w-full h-full object-cover" />
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                    </div>
                </div>

                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First name</label>
                        <input
                            type="text"
                            required
                            placeholder="John"
                            className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={(e) => fillModel("username", e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={(e) => fillModel("email", e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            required
                            placeholder="Enter password"
                            className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={(e) => fillModel("password", e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
}
