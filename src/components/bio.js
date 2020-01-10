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
                <a href="https://github.com/collinw9898">
                    <FaGithub style={{fontSize: '1.5em', color: 'black', margin: '5px'}} />
                </a>

                <a href="https://linkedin.com/in/collin-werner-505954135/">
                    <FaLinkedin style={{fontSize: '1.5em', color: 'black', margin: '5px'}} />
                </a>
            </span>
        </div>

        <div className={styles.about}>
            <h1>About me</h1>
            <p>Hi there, my name is Collin.</p>
            <p>I'm currently a student at Kent State University.</p>
            <p>I'm a full-stack developer based out of Cleveland, Ohio.</p>
        </div>
    </div>
)
