import React from "react"
import { FaHeart } from 'react-icons/fa';
import styles from "../styles/layout.module.css"

export default ({children}) => (
    <div>
        <header className={styles.header}>
            <ul style={{listStyle: 'none' }}>
                <li style={{ display: `inline-block`, marginLeft: `1rem` }}>Home</li>
                <li style={{ display: `inline-block`, marginLeft: `1rem` }}>Projects</li>
                <li style={{ display: `inline-block`, marginLeft: `1rem` }}>Resume</li>
            </ul>
        </header>

        {children}

        <footer className={styles.footer}>
            Made with <FaHeart /> in Cleveland
        </footer>
    </div>
)
