"use client";
import { useState } from "react";
import '../signup/signup.css';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "../_lib/authApi";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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
    <div className="auth-container">
      <div className="auth-box login">
        <h1>Sign in</h1>
        <form className="auth-info" onSubmit={handleSignin}>

          <div>
            <label>Email</label>
            <input id="email"
              type="email"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="info-box" />
          </div>

          <div>
            <label>Password</label>
            <input id="password"
              type="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="info-box" />
          </div>

          <div className="button-container">
            <button type="submit" className="auth-button">
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>

        </form>

        <p className="auth-text">Forgotten password?</p>
        <p className="auth-text">Don't have account yet? <Link href="/auth/signup">Sign up here!</Link></p>

      </div>
    </div>

  );
}
