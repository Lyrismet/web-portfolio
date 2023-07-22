import './Marquee.scss'
const Marquee = () => {
    return (
        <div className="marquee">
            <marquee scrollamount="8" behavior="" direction="left">
                <p className="marquee__front-text">react javascript next.js typescript json api</p>
                <p className="marquee__back-text">react javascript next.js typescript json api</p>
            </marquee>
            <marquee scrollamount="8" behavior="" direction="right">
                <p className="marquee__front-text">html5 css3 scss git semantic adaptive module.css</p>
                <p className="marquee__back-text stroke-blue">html5 css3 scss git semantic adaptive module.css</p>
            </marquee>
            <marquee scrollamount="8" behavior="" direction="left">
                <p className="marquee__front-text">git webpack prettier npm turbopack</p>
                <p className="marquee__back-text">git webpack prettier npm turbopack</p>
            </marquee>
            <div className="marquee-mobile">
                <p className="marquee__front-text">react javascript next.js typescript json api html5 css3 scss git semantic
                adaptive module.css git webpack prettier npm turbopack</p>
                <p className="marquee__back-text">react javascript next.js typescript json api html5 css3 scss git semantic
                adaptive module.css git webpack prettier npm turbopack</p>
                </div>
        </div>
    );
};

export default Marquee;
