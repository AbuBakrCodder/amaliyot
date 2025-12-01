import { FaTelegram, FaInstagram, FaGithub, FaPhone } from 'react-icons/fa';

function Contact() {
    return (
        <div className="min-h-screen px-5 pt-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                Contact
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
                Sobitob Abu Bakr
            </p>

            <div className="flex gap-3 sm:gap-5 justify-center flex-wrap max-w-2xl mx-auto">
                <a href="https://telegram.me/ABUBAKR_WEB" target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:opacity-80 transition">
                    <FaTelegram className="text-2xl sm:text-3xl mr-2" />
                    <span className="hidden sm:inline">Telegram</span>
                </a>
                <a href="https://instagram.com/abubakr.s14" target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-pink-500 hover:opacity-80 transition">
                    <FaInstagram className="text-2xl sm:text-3xl mr-2" />
                    <span className="hidden sm:inline">Instagram</span>
                </a>
                <a href="https://github.com/AbuBakrCodder" target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-gray-800 hover:opacity-80 transition">
                    <FaGithub className="text-2xl sm:text-3xl mr-2" />
                    <span className="hidden sm:inline">GitHub</span>
                </a>
                <a href="tel:+998337505030"
                    className="flex items-center text-black hover:opacity-80 transition">
                    <FaPhone className="text-2xl sm:text-3xl mr-2" />
                    <span className="hidden sm:inline">Phone</span>
                </a>
            </div>
        </div>
    )
}

export default Contact
