import React from 'react'
import { useTheme } from '../Context/ThemeContext'

const STAR_COUNT = 5
const FILLED_STARS = 4

export default function Card() {
    const { themeMode } = useTheme()

    const renderStars = () => {
        return Array.from({ length: STAR_COUNT }).map((_, index) => (
            <svg
                key={index}
                className={`w-4 h-4 mr-1 ${
                    index < FILLED_STARS
                        ? 'text-yellow-300'
                        : 'text-gray-200 dark:text-gray-600'
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
            >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        ))
    }

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 theme-transition hover:shadow-lg dark:hover:shadow-gray-700">
            <a href="/" className="block">
                <img
                    className="p-8 rounded-t-lg w-full h-64 object-cover"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Apple Watch Series 7"
                />
            </a>
            <div className="px-5 pb-5">
                <a href="/" className="block">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>

                <div className="flex items-center mt-2.5 mb-5">
                    {renderStars()}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <button
                        onClick={() => console.log('Add to cart')}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}