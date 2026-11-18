function Footer() {
  return (
    <footer className="bg-[#17324D] dark:bg-[#0B1625] py-3 px-2 md:px-4 ">
      <div className="max-w-6xl mx-auto text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-row lg:justify-between">
        <div>
        <div className="flex flex-row items-center mb-2">
          <a href="#home">
          <img
            className="w-16 h-16"
            src="https://res.cloudinary.com/ggqklbyt/image/upload/file_0000000013f082089f202b030a19dda3.png"
            alt="Logo"
          />
          </a>
            <div>
                <a href="#about" className="text-3xl font-semibold">Bolly<span className="text-[#1769AA]">Scapes</span></a>
                <p className="md:text-lg whitespace-nowrap">Discover places. Create memories</p>
            </div>
        </div>
        <p className="sm:max-w-md max-sm:text-center">Your trusted travel companion for unforgettable journeys around the world.</p>
        <hr className="sm:hidden my-5"/>
        </div>
        <div className="lg:border-l-2 border-l-white lg:pl-8">
            <h3 className="font-medium text-2xl mb-2">Quick Links</h3>
            <ul className="flex flex-col space-y-2">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#destination">Destination</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <hr className="sm:hidden my-5"/>

        <div className="lg:border-l-2 border-l-white lg:pl-8">
            <h3 className="font-medium text-2xl mb-2">Top Destinations</h3>
            <ul className="flex flex-col space-y-2">
                <li>Eiffel Tower</li>
                <li>Niagara Hills</li>
                <li>Maldives</li>
                <li>Great Wall of China</li>
                <li>Victoria Falls</li>
            </ul>
        </div>

        <hr className="sm:hidden my-5"/>

        <div className="flex flex-row max-sm:justify-center items-center gap-3 lg:border-l-2 border-l-white lg:pl-8">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" role="img" aria-label="Instagram">
  <defs>
    <radialGradient id="ig-gradient-1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#fd5"/>
      <stop offset=".328" stopColor="#ff543f"/>
      <stop offset=".348" stopColor="#fc5245"/>
      <stop offset=".504" stopColor="#e64771"/>
      <stop offset=".643" stopColor="#d53e91"/>
      <stop offset=".761" stopColor="#cc39a4"/>
      <stop offset=".841" stopColor="#c837ab"/>
    </radialGradient>
    <radialGradient id="ig-gradient-2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#4168c9"/>
      <stop offset=".999" stopColor="#4168c9" stopOpacity="0"/>
    </radialGradient>
  </defs>
  <path fill="url(#ig-gradient-1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"/>
  <path fill="url(#ig-gradient-2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"/>
  <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/>
  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/>
  <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/>
        </svg></a>
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" role="img" aria-label="Facebook">
        <circle cx="12" cy="12" r="12" fill="#0866FF"/>
        <path fill="#FFFFFF" d="M16.67 15.47l.53-3.47h-3.33V9.75c0-.95.46-1.87 1.95-1.87h1.51V4.92s-1.37-.23-2.68-.23c-2.74 0-4.53 1.66-4.53 4.67V12H7.08v3.47h3.04v8.38a12.1 12.1 0 0 0 3.75 0v-8.38h2.8z"/>
        </svg></a>
        <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org" aria-label="X">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#ffffff"/>
        </svg></a>
        <a href="#"><svg xmlns="http://w3.org" viewBox="0 0 28.57 20" width="36" height="34" role="img" aria-label="YouTube">
        <path fill="#FF0000" d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"/>
        <path fill="#FFFFFF" d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"/>
        </svg></a>
        </div>

        </div>
        <hr className="my-4"/>
        <div className="flex flex-col md:flex-row md:justify-between">
        <p className="max-md:text-center mb-2">&copy; 2026 BollyScapes. All Rights Reserved.</p>
        <ul className="flex flex-row max-md:justify-center md:gap-3">
            <li>Privacy Policy</li>
            <li className="border-l-2 pl-2">Terms of Service</li>
            <li className="border-l-2 pl-2">Cookie Policy</li>
        </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
