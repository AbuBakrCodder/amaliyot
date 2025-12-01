function Footer() {
  const data = new Date()
  const year = data.getFullYear()

  return (
    <footer role="contentinfo" className="bg-blue-200">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-8 flex flex-col md:flex-row items-center md:justify-between gap-3 text-gray-700">
        <h1 className="text-base md:text-2xl font-bold uppercase text-center md:text-left">
          © {year} all rights reserved
        </h1>

        <p className="text-sm md:text-base text-center md:text-right">
          Contact us:{' '}
          <a
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/ABUBAKR_WEB"
            aria-label="Contact ABUBAKR_WEB on Telegram"
          >
            @ABUBAKR_WEB
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
