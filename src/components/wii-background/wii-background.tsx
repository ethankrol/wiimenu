import './wii-background.css';

function WiiBackground() {
    return (
        <div className='wii-container'>
            <div className='background'></div>
            <div className = 'bottom-section'>
                <div className='bottom-bar'></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 25" className="bar-trans" stroke= "#02CDF1" strokeWidth="0.6" preserveAspectRatio="none">
                        <path d="m 32 25 l -32 0 l 0 -25 q 6 0 15 7 q 9 7 17 7"/>
                        
                    </svg>
                <div className='bottom-tile'></div>
                <div className='bottom-bar'></div>
            </div>
        </div>
        
    )
}

export default WiiBackground;