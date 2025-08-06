import styles from "@/components/footer/footer.module.css"
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaPhone, } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <h3>SNOWFLOW</h3>
                <div className={styles.icons}>
                    <FaInstagram />
                    <FaFacebookF />
                    <FaTwitter />
                </div>
            </div>

            <div className={styles.content}>
                <h3>Informations</h3>
                <ul>
                    <li>
                        <Link href="/" >Home</Link>
                    </li>
                    <li>
                        <Link href="/destinations">Destinations</Link>
                    </li>
                    <li>
                        <Link href="/planner">Planner</Link>
                    </li>
                    <li>
                        <Link href="/info">Info</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <p>Copyright @ 2024 FESB. All rights reserved</p>
            </div>

            <div className={styles.content}>
                <h3>Contact Info</h3>
                <ul>
                    <li>Ruđera Boškovića 32</li>
                    <li>21000, Split, Croatia</li>
                    <li>
                        <FaPhone />+385 99 260 8000
                    </li>
                    <li>
                        <FiMail />snowflow@gmail.com
                    </li>
                </ul>

            </div>

        </footer>
    );
}
