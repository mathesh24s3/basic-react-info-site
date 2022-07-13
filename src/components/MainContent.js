import React from "react"
import "../styles.css"

export default function MainContent() {
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ul className="facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}