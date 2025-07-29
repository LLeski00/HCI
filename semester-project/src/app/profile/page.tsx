"use client";

import { deleteImageFromSupabase, uploadImageToSupabase } from "@/actions/image-actions";
import { updateUserProfile } from "@/actions/user-action";
import { useAuth } from "@/context/AuthContext";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function Profile() {
    const { user } = useAuth();
    const imageInputRef = useRef<HTMLInputElement>(null);

    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [profileImage, setProfileImage] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        if (user) {
            setName(user.name || '');
            setBio(user.bio || 'Write something about yourself!');
            setProfileImage(user.profile_image || '/images/profile.png');
        }
    }, [user]);

    if (!user) return null;

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log("form", form);

        let imageUrl;

        if (imageFile) {
            const { publicUrl } = await uploadImageToSupabase({
                file: imageFile,
                bucketName: "user-images",
            });
            imageUrl = publicUrl;
            setProfileImage(publicUrl)

            console.log("profile url", user.profile_image);
            if (user.profile_image) {
                await deleteImageFromSupabase({
                    filePath: user.profile_image,
                    bucketName: "user-images"
                });
            }
        }
        const updatedData = {
            userId: user.id,
            name,
            bio,
            profile_image: imageUrl
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
                        src={profileImage}
                        alt={`${user.name}'s profile picture`}
                        style={{ width: 50, height: 50 }}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        ref={imageInputRef}
                        onChange={handleImageChange}
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