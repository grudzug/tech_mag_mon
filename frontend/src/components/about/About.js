import './about.css'
import { useTransition, animated } from 'react-spring'

export default function About( {showAbout} ) {

    const transition = useTransition(showAbout, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: -100, y: 0, opacity: 0 }
    })

    return (
        <>
            {transition((style, showAbout) => showAbout ?
                <animated.div style={style} className="about">
                    <p>
                        A techgereblye nem valódi hírportál, csupán 
                        a hazai híroldalak legfrissebb híreirt listázza.
                    </p>
                </animated.div>
                : ''
            )}
        </>
    )
}