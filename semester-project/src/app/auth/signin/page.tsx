"use client";

import '../styles/auth.css';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthFormButton, AuthFormInput, AuthLayout } from "../components";
import { useAuth } from '@/context/AuthContext';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signIn } = useAuth();

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(email, password);
      router.push("/");
    } catch (error) {
      alert("Signin failed: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h1>Sign in</h1>

      <form className="auth-info" onSubmit={handleSignin}>
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
        <p className="forgot-password">Forgotten password?</p>

        <AuthFormButton
          loading={loading}
          loadingText="Signing in..."
          defaultText="Sign in"
          linkText="Don't have account yet?"
          linkHref="/auth/signup"
          linkLabel="Sign up here!"
        />
      </form>
    </AuthLayout>
  );
}
