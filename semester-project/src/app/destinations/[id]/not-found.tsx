import NotFound from "@/components/notFound/NotFound";

const NotFoundPage = () => {
    return (
        <NotFound
            message="The destination does not exist."
            buttonText="Go to Destinations"
            buttonHref="/destinations"
        />
    );
};

export default NotFoundPage;
