import './logo.css'
import { useSpring, animated, config } from 'react-spring'

export default function Logo( {showAbout} ) {

    const drop = useSpring({
        from: { y: -300, opacity: 0 },
        to: { y: 0, opacity: 1 },
        config: config.gentle
    })

    const paint = useSpring({
        color: showAbout ? 'deeppink' : 'deepskyblue',
        config: config.molasses
    })

    return (
        <animated.div style={drop} className="logo_wrapper">
            <div className="title">
                <h1>tech<animated.span style={paint}>gereblye</animated.span></h1>
                <h4>Technológiai hírek egy helyen</h4>
            </div>
            <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path className="logo" d="M103.27,19.29,213.69,274a41.07,41.07,0,0,1,12.49-6.85,40.59,40.59,0,0,1,11.06-2.19c1.15-.05,2.32-.05,3.49,0L134.39,19.29ZM239.55,282.92a14.5,14.5,0,0,0-1.47,0,21.88,21.88,0,0,0-6,1.2,22.78,22.78,0,0,0-9.3,6,10.14,10.14,0,0,0-1.26,1.77l21.08,44.46,6-.43,23.93-3.28-19.39-40.33c-2.84-5.54-6-7.66-9.42-8.74a15.53,15.53,0,0,0-4.15-.66Zm-18.05,9-.19-.4C221.46,291.84,221.43,292,221.5,291.9ZM467.92,326a15.58,15.58,0,0,0-3.16.33L36.28,383.14c-9.59,1.73-8,26,.23,29.81,24,15.5,23,79.76,38.9,79.76,6.29,0,2.06-75.13-7.08-84.12l22-3c22.61,17,21.91,78.79,37.51,78.79,6.1,0,2.32-70.45-6.23-83.07L142,398.51c23,16.58,22.23,79.1,37.94,79.1,6.15,0,2.24-71.78-6.48-83.41l21.25-2.9c21.78,17.88,21.28,78.14,36.7,78.14,6,0,2.44-68.09-5.81-82.37l20.85-2.85c22.16,17.49,21.57,78.46,37.07,78.46,6,0,2.39-69.2-6-82.72l22.75-3.11c21.1,18.56,20.77,77.59,36,77.59,5.91,0,2.53-66.31-5.49-81.77l21.21-2.9c21.48,18.19,21.06,77.9,36.41,77.9,5.95,0,2.47-67.29-5.67-82.1l21.82-3c20.38,19.25,20.23,76.93,35.32,76.93,5.82,0,2.63-64.35-5.13-81.06l21.59-3c20.72,18.92,20.49,77.25,35.65,77.25,10.89-34-1.78-72.33-15.29-102-1.36-2.71-4.5-4.75-8.81-4.76Z"/>
            </svg>
        </animated.div>
    )
}