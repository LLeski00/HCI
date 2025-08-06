"use client"

import { getFavouriteResortsByUserId } from '@/app/api/favourite-resort';
import { useAuth } from '@/context/AuthContext';
import { ResortInfoWithoutCoordinates } from '@/types/resort';
import React, { useEffect, useState } from 'react';
import styles from './favourites.module.css';
import ResortPreview from '../../../../components/resort-preview/ResortPreview';
import Loading from '@/components/loading/Loading';

export default function Favourites() {
    const { user } = useAuth();
    const [userFavorites, setUserFavorites] = useState<ResortInfoWithoutCoordinates[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!user?.id) return;

        const fetchFavourites = async () => {
            try {
                const fav = await getFavouriteResortsByUserId(user.id);
                setUserFavorites(fav);
            } catch (error) {
                console.error("Error fetching favourites:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFavourites();
    }, [user]);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className={styles.favoritesSection}>
            <h2>Favourite resorts</h2>
            <div className={styles.resortsSection}>

                {userFavorites.length === 0 ? (
                    <p>No favourite resorts found.</p>
                ) : (
                    userFavorites.map(resort => (
                        <ResortPreview
                            resort={resort}
                            isFavourite={true}
                            user={user} />
                    ))
                )}
            </div>

        </div>
    )
}