"use client";
import { useState } from "react";
import '../signup/signup.css';
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    
    const signIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        try {
          await authClient.signIn.email(
            { email, password },
            {
              onSuccess: () => {
                const redirectTo = searchParams.get("redirectTo");
                const decodedRedirectTo = redirectTo
                  ? decodeURIComponent(redirectTo)
                  : "/";
    
                if (decodedRedirectTo.includes("/signin")) {
                  router.push("/");
                } else {
                  router.push(decodedRedirectTo);
                }
              },
              onError: (ctx) => {
                alert(ctx.error.message);
              },
            }
          );
        } catch (error) {
          console.error("Sign in error:", error);
        } finally {
          setLoading(false);
        }
      };   

    return (
        <div className="auth-container">
            <div className="auth-box login">
                <h1>Sign in</h1>
                <form className="auth-info" onSubmit={signIn}>

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
                
            </div>
        </div>
        
    );
}
