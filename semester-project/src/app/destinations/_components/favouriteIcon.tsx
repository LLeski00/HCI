import { useAuth } from "@/context/AuthContext";

const FavouriteIcon = () => {
    const { user } = useAuth();
    if (!user) return null;

    return <></>;
};

export default FavouriteIcon;
