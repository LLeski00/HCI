"use client";

import '../styles/auth.css';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthFormButton, AuthFormInput, AuthLayout } from "../components";
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';
import Loading from '@/components/loading/Loading';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { signUp } = useAuth();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            await signUp(name, email, password);
            toast.success("Signup success!");
            router.push("/");
        } catch (error) {
            toast.error("Signup failed: " + (error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <h1>Sign up</h1>
            <form className="auth-info" onSubmit={handleSignup}>
                <AuthFormInput
                    id="name"
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <AuthFormInput
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <AuthFormInput
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <AuthFormInput
                    id="confirm-password"
                    label="Confirm Password"
                    type="password"
                    name="confirm-password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <AuthFormButton
                    loading={loading}
                    loadingText="Signing in..."
                    defaultText="Sign up"
                    linkText="Already have an account?"
                    linkHref="/auth/signin"
                    linkLabel="Sign in here!"
                />
            </form>
        </AuthLayout>
    );
}
