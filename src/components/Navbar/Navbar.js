'use client'
import './Navbar.scss';

const Navbar = () => {
    const scrollToBlock = (blockId) => {
        const block = document.getElementById(blockId);
        block.scrollIntoView({ block: "nearest", inline: "start", behavior: 'smooth' });
    }
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><button onClick={() => {scrollToBlock('start')}}>Start</button></li>
                    <li><button onClick={() => {scrollToBlock('about')}}>About</button></li>
                    <li><button onClick={() => {scrollToBlock('works')}}>Works</button></li>
                </ul>
                <ol>
                    <li>
                        <a href="mailto:ana0203tir@gmail.com">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_137_61)">
                                    <path
                                        d="M16 0C7.16344 0 0 7.16345 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16454 24.8366 0 16 0Z"
                                        fill="white"/>
                                    <path
                                        d="M16.0002 15.586L25.1952 10.74C25.0692 10.238 24.6342 9.85498 24.0942 9.85498H7.90618C7.36618 9.85498 6.93018 10.238 6.80518 10.74L16.0002 15.586Z"
                                        fill="#0E0E0E"/>
                                    <path
                                        d="M15.936 16.513L13.633 15.299L8.759 22.145H23.227L18.354 15.306L16 16.547L15.936 16.513ZM19.113 14.907L24.247 22.114C24.522 22.0796 24.7753 21.9467 24.9597 21.7398C25.1442 21.5329 25.2473 21.2662 25.25 20.989V11.672L19.113 14.907ZM7.74 22.111L12.875 14.9L6.75 11.672V20.988C6.75 21.566 7.185 22.027 7.74 22.111Z"
                                        fill="#0E0E0E"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_137_61">
                                        <rect width="32" height="32" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Lyrismet" target="_blank">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 0C7.164 0 0 7.27618 0 16.2505C0 23.8653 5.16267 30.2368 12.1227 32C12.048 31.7806 12 31.526 12 31.2105V28.433C11.3507 28.433 10.2627 28.433 9.98933 28.433C8.89467 28.433 7.92133 27.955 7.44933 27.0666C6.92533 26.0794 6.83467 24.5694 5.536 23.6459C5.15067 23.3385 5.444 22.9877 5.888 23.0351C6.708 23.2708 7.388 23.8422 8.028 24.69C8.66533 25.5391 8.96533 25.7314 10.156 25.7314C10.7333 25.7314 11.5973 25.6975 12.4107 25.5675C12.848 24.4394 13.604 23.4008 14.528 22.9105C9.2 22.354 6.65733 19.6618 6.65733 16.0068C6.65733 14.4332 7.31733 12.911 8.43867 11.6286C8.07067 10.3556 7.608 7.75963 8.58 6.77105C10.9773 6.77105 12.4267 8.35006 12.7747 8.77664C13.9693 8.3609 15.2813 8.12527 16.66 8.12527C18.0413 8.12527 19.3587 8.3609 20.556 8.77935C20.9 8.35548 22.3507 6.77105 24.7533 6.77105C25.7293 7.76098 25.2613 10.3678 24.8893 11.6381C26.004 12.9178 26.66 14.4359 26.66 16.0068C26.66 19.6591 24.1213 22.3499 18.8013 22.9092C20.2653 23.6851 21.3333 25.8654 21.3333 27.5081V31.2105C21.3333 31.3513 21.3027 31.4529 21.2867 31.5734C27.5213 29.3539 32 23.3412 32 16.2505C32 7.27618 24.836 0 16 0Z"
                                    fill="white"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/lyrismet" target="_blank">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 0C24.8367 0 32 7.16329 32 16C32 24.8367 24.8367 32 16 32C7.16329 32 0 24.8367 0 16C0 7.16329 7.16329 0 16 0ZM21.5191 22.5224C21.8127 21.6198 23.1925 12.6202 23.3619 10.8471C23.4136 10.3096 23.2433 9.95294 22.912 9.79388C22.5101 9.60094 21.9144 9.69694 21.2235 9.94635C20.2758 10.288 8.16376 15.4306 7.46353 15.7289C6.80094 16.0113 6.17224 16.3181 6.17224 16.7642C6.17224 17.0776 6.35859 17.2536 6.87059 17.4362C7.40329 17.6264 8.74541 18.0329 9.53788 18.2513C10.3012 18.4621 11.1699 18.2795 11.6565 17.9765C12.1722 17.6555 18.1299 13.6696 18.5572 13.3205C18.9845 12.9713 19.3252 13.4184 18.976 13.7685C18.6268 14.1176 14.5384 18.0866 13.9981 18.6362C13.3431 19.3035 13.808 19.9944 14.2475 20.272C14.7492 20.5882 18.3558 23.0071 18.8998 23.3958C19.4438 23.7835 19.9934 23.9595 20.4988 23.9595C21.0033 23.9586 21.2678 23.2932 21.5191 22.5224Z"
                                    fill="white"/>
                            </svg>
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default Navbar;
