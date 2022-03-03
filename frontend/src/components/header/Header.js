import './header.css'
import About from '../about/About'
import { useState } from "react"
import Logo from '../logo/Logo'

export default function Header() {
    
    const [showAbout, setShowAbout] = useState(false)

    return (
        <header>
            <button onClick={()=>setShowAbout(!showAbout)}>
                <Logo showAbout={showAbout} />
            </button>
            <About showAbout={showAbout}/>
        </header>
    )
}