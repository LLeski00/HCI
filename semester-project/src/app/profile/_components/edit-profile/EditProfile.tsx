'use client';

import {
  deleteImageFromSupabase,
  uploadImageToSupabase,
} from '@/actions/image-actions';
import { updateUserProfile } from '@/actions/user-action';
import { useAuth } from '@/context/AuthContext';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './editProfile.module.css';
import toast from 'react-hot-toast';

export default function EditProfile() {
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (user) {
      setProfileImage(user.profile_image || '/images/profile.png');
    }
  }, [user]);

  if (!user) return null;

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newName = formData.get('name')?.toString();
    const newBio = formData.get('bio')?.toString();
    let imageUrl;

    if (imageFile) {
      const { publicUrl } = await uploadImageToSupabase({
        file: imageFile,
        bucketName: 'user-images',
      });
      imageUrl = publicUrl;

      if (user.profile_image) {
        await deleteImageFromSupabase({
          filePath: user.profile_image,
          bucketName: 'user-images',
        });
      }
    }
    const updatedData = {
      userId: user.id,
      name: newName,
      bio: newBio,
      profile_image: imageUrl,
    };

    try {
      await updateUserProfile(updatedData);
      toast.success('Successfully updated profile!');
    } catch (error) {
      toast.error("This didn't work.");
    }
  };

  return (
    <div className={styles.editSection}>
      <form onSubmit={handleUpdateProfile} className={styles.editForm}>
        <div className={styles.profileImageContainer}>
          <div className={styles.imageContent} onClick={handleImageClick}>
            <img
              src={profileImage}
              alt="Profile picture"
              className={styles.profileImage}
            />
            <div className={styles.imageOverlay}>Change Photo</div>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
            ref={fileInputRef}
          />
        </div>

        <div className={styles.formFields}>
          <div className={styles.inputContent}>
            <label className={styles.label}>Email</label>
            <input
              value={user.email}
              disabled
              className={styles.input}
              style={{ color: '#b0afafff' }}
            />
          </div>

          <div className={styles.inputContent}>
            <label className={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.name}
              className={styles.input}
            />
          </div>

          <div className={styles.inputContent}>
            <label className={styles.label}>Bio</label>
            <input
              type="text"
              name="bio"
              defaultValue={user.bio || 'Write something about yourself!'}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}
