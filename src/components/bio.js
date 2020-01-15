import React from "react"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from "../styles/bio.module.css"
import bioPic from "../../static/bioPic.svg"

export default () => (
    <div className={styles.bio}>
        <div className={styles.info}>
            <h1>Collin Werner</h1>

            <img src={bioPic} alt="me" />
            
            <p>Software Developer</p>
            <p>Musician</p>
            <p>Coffee Addict</p>

            <span>
                <a href="https://github.com/collinw9898" target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{fontSize: '1.5em', color: 'black', margin: '5px'}} />
                </a>

                <a href="https://linkedin.com/in/collin-werner-505954135/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{fontSize: '1.5em', color: 'black', margin: '5px'}} />
                </a>
            </span>
        </div>

        <div className={styles.about}>
            <h1>About me</h1>
            <p>Hi there, my name is Collin</p>
            <p>I'm currently a student at Kent State University</p>
            <p>I currently do work as a full-stack developer</p>
            <p>I also play the french horn with the Kent State orchestra</p>
            <p>This website is still a work in progress, so please excuse the mess</p>
        </div>
    </div>
)
