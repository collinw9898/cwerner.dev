import React from "react"
import { Link } from "gatsby"
import styles from "../styles/layout.module.css"

export default ({children}) => (
    <div>
        <header className={styles.header}>
            <ul className={styles.headerLinks}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
        </header>

        {children}
    </div>
)
