import styles from "./notFound.module.css";
import { Button } from "@/components/button/button";

interface NotFoundProps {
    title?: string;
    message?: string;
    buttonText?: string;
    buttonHref?: string;
}

const NotFound = ({
    title = "404 - Not Found",
    message = "The page you are looking for does not exist.",
    buttonText = "Go to Home",
    buttonHref = "/",
}: NotFoundProps) => {
    return (
        <div className={styles.notFoundPage}>
            <h1>{title}</h1>
            <p>{message}</p>
            <Button text={buttonText} href={buttonHref} />
        </div>
    );
};

export default NotFound;
