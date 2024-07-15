import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { i18n, t } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLang(lng);
        closeDropdown();
    };

    useEffect(() => {
        setCurrentLang(i18n.language);
    }, [i18n.language]);

    return (
        <div>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="md:max-w-screen-lg lg:max-w-screen-lg sm:max-w-lg flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{t('logo-title')}</span>
                    </a>
                    <div className="items-center justify-center text-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <div className="flex flex-col justify-center items-center text-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <div className="relative inline-block text-left">
                                <button
                                    id="dropdownHoverButton"
                                    onClick={toggleDropdown}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button"
                                >
                                    {currentLang === 'en' ? 'English' : currentLang === 'hi' ? 'हिंदी' : 'অসমীয়া'}
                                    <svg
                                        className="w-2.5 h-2.5 ms-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {isOpen && (
                                    <div
                                        id="dropdownHover"
                                        className="z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                    >
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                            <li>
                                                <p onClick={() => changeLanguage('en')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    English
                                                </p>
                                            </li>
                                            <li>
                                                <p onClick={() => changeLanguage('hi')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    हिंदी
                                                </p>
                                            </li>
                                            <li>
                                                <p onClick={() => changeLanguage('ass')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    অসমীয়া
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
