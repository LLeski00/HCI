"use client";

import { updateUserProfile } from "@/actions/userAction";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

export default function Profile() {
    const { user } = useAuth();
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [profileImage, setProfileImage] = useState('');

    if (!user) return null;

    useEffect(() => {
        if (user) {
            setName(user.name || '');
            setBio(user.bio || 'Write something about yourself!');
            setProfileImage(user.profile_image || '/images/profile.png');
        }
    }, [user]);

    const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedData = {
            userId: user.id,
            name,
            bio,
            profile_image: profileImage
        };

        try {
            await updateUserProfile(updatedData);
            alert("Successfuly changed the profile");
        } catch (error) {
            alert("Something went wrong.");
        }
    }

    return (
        <div>

            <div>
                <label>Email</label>
                <input
                    type="text"
                    placeholder={user.email}
                />
            </div>

            <form onSubmit={handleUpdateProfile}>
                <div>
                    <img
                        src={user.profile_image || "/images/profile.png"}
                        alt={`${user.name}'s profile picture`}
                        style={{ width: 50, height: 50 }}
                    />
                </div>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Bio</label>
                    <input
                        type="text"
                        value={bio ?? ''}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

