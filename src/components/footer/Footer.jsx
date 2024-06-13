import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* footer */}
            <footer className="text-gray-600 body-font bg-blue-600">
                {/* main */}
                <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                    {/* logo */}
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="text-xl font-bold">Modern Electronics</span>
                    </a>
                    {/* para */}
                    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024 codex —
                        <Link
                            to={'/'}
                            className="text-gray-100 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @codex
                        </Link>
                    </p>
                    {/* phone number */}
                    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        Contact us: <a href="tel:02 27300162" className="text-gray-100 ml-1">+123-456-7890</a>
                    </p>
                    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        Contact us: <a href="phone:+20125150404" className="text-gray-100 ml-1">+123-456-7890</a>
                    </p>
                    {/* media icons */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {/* facebook */}
                        <a href="https://www.facebook.com/people/Modern-Electorincs-Elec/61551582407657/?mibextid=ZbWKwL" className="text-gray-100 cursor-pointer">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        {/* instagram */}
                        <a href="https://www.instagram.com/modernelectronics23/?igsh=eXg2aWF2ejdtaGhx" className="ml-3 text-gray-100 cursor-pointer">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
