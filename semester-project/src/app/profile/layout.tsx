"use client"

import { Navbar } from "@/components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import './profile.css';

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="profile-layout">
            <Navbar />
            <div className="profile-content">
                <Sidebar />
                <main className="main-content">{children}</main>
            </div>
        </div>
    );
}