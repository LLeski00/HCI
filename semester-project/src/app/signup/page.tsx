"use client";
import { useState } from "react";
import './signup.css';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    
    const signUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            if(password !== confirmPassword){
                alert("Passwords do not match");
                setLoading(false);
                return;
            }

            await authClient.signUp.email({ name, email, password },
                {
                  onSuccess: () => {
                    router.replace("/");
                  },
                  onError: (ctx) => {
                    alert(ctx.error.message);
                    setPassword("");
                    setConfirmPassword("");
                  },
                });

        } catch (error: any) {
            console.error("Sign up error:", error);
          
        } finally {
            setLoading(false);
        }
      };
        

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>Sign up</h1>
                <form className="auth-info" onSubmit={signUp}>
                    <div> 
                        <label>Name</label>
                        <input id="name"
                            type="text"
                            name="name"
                            required placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="info-box" />
                    </div>

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

                    <div>
                        <label>Confirm Password</label>
                        <input id="confirm-password"
                            type="password"
                            name="confirm-password"
                            required
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="info-box" />
                    </div>

                    <div className="button-container">
                        <button type="submit" className="auth-button" disabled={loading}>
                            {loading ? "Signing up..." : "Sign up"}
                        </button>
                    </div>

                </form>
                
            </div>
        </div>
        
    );
}
