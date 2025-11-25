function Footer() {
  const data = new Date
  let year = data.getFullYear()
  return (
    <footer className="bg-blue-200">
      <div className="container mx-auto px-10 flex items-center justify-center flex-col text-gray-500 py-5">
        <h1 className="text-2xl font-bold uppercase">© {year} all rights reserved</h1>
        <p>Contact us: <a className="text-blue-500" target="_blank" href="https://t.me/ABUBAKR_WEB">@ABUBAKR_WEB</a></p>
      </div>
    </footer>
  )
}

export default Footer
