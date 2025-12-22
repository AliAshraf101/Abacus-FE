export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
      {/* Decorative lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-white/40" />
      <div className="hidden lg:block absolute left-[120px] top-0 bottom-0 w-px bg-white/40" />
      <div className="hidden lg:block absolute right-[120px] top-0 bottom-0 w-px bg-white/40" />
      
      {/* Decorative dots */}
      <div className="hidden lg:block absolute left-[117px] top-0">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="black"/>
          <circle cx="4" cy="4" r="3.5" stroke="white" strokeOpacity="0.4"/>
        </svg>
      </div>
      <div className="hidden lg:block absolute right-[117px] top-0">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="black"/>
          <circle cx="4" cy="4" r="3.5" stroke="white" strokeOpacity="0.4"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        {/* Top section with logo and links */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pb-12 border-b border-white/40">
          {/* Logo and description */}
          <div className="flex-1 max-w-md">
            <div className="mb-6">
              <svg width="143" height="32" viewBox="0 0 143 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.1429 23.8335L7.01248 31.5117H0L9.1429 1.59766H18.0195L27.2955 31.5117H20.0167L17.7088 23.8335H9.1429ZM16.7323 18.7739L14.8683 12.4271C14.3357 10.6518 13.8031 8.43258 13.3592 6.65728H13.2704C12.8266 8.43258 12.3828 10.6962 11.8946 12.4271L10.1193 18.7739H16.7323Z" fill="white"/>
                <path d="M28.8483 31.5118C28.937 30.0915 29.0258 27.473 29.0258 25.0319V0H35.772V12.3827H35.8608C37.1479 10.5187 39.4114 9.32031 42.4294 9.32031C47.6223 9.32031 51.4392 13.6255 51.3948 20.283C51.3948 28.0943 46.4239 32 41.4531 32C38.9232 32 36.4821 31.068 34.9287 28.4938H34.84L34.5737 31.5118H28.8483ZM35.772 22.2802C35.772 22.724 35.8164 23.1235 35.9052 23.4785C36.349 25.2983 37.9024 26.6741 39.8552 26.6741C42.7401 26.6741 44.5155 24.455 44.5155 20.5493C44.5155 17.1761 43.0064 14.5131 39.8552 14.5131C38.0355 14.5131 36.349 15.8891 35.9052 17.8418C35.8164 18.2413 35.772 18.6408 35.772 19.0846V22.2802Z" fill="white"/>
                <path d="M66.1293 31.5118L65.7298 29.3371H65.5968C64.1765 31.068 61.9573 32 59.3831 32C54.9892 32 52.3706 28.8045 52.3706 25.3426C52.3706 19.706 57.4302 16.9987 65.1085 17.043V16.7323C65.1085 15.5784 64.4872 13.9363 61.1584 13.9363C58.9393 13.9363 56.5869 14.6907 55.1668 15.5784L53.924 11.2288C55.433 10.3855 58.4067 9.32031 62.3568 9.32031C69.5912 9.32031 71.8992 13.5811 71.8992 18.6851V26.2303C71.8992 28.3162 71.9879 30.3136 72.2098 31.5118H66.1293ZM65.3304 21.2594C61.7798 21.215 59.0281 22.0583 59.0281 24.6769C59.0281 26.4078 60.182 27.2511 61.6911 27.2511C63.3777 27.2511 64.7535 26.1414 65.1973 24.7656C65.286 24.4105 65.3304 24.0112 65.3304 23.6117V21.2594Z" fill="white"/>
                <path d="M91.7381 30.9793C90.5398 31.5118 88.2762 31.9556 85.7021 31.9556C78.6895 31.9556 74.2069 27.695 74.2069 20.8599C74.2069 14.5131 78.5564 9.32031 86.6341 9.32031C88.4094 9.32031 90.3623 9.63108 91.7825 10.1636L90.7174 15.1789C89.9185 14.8239 88.7201 14.5131 86.9448 14.5131C83.3942 14.5131 81.0862 17.043 81.1307 20.5936C81.1307 24.588 83.7936 26.6741 87.078 26.6741C88.6757 26.6741 89.9185 26.4078 90.9393 26.0084L91.7381 30.9793Z" fill="white"/>
                <path d="M114.151 24.5437C114.151 27.3842 114.24 29.6921 114.328 31.5118H108.47L108.159 28.4494H108.026C107.183 29.7808 105.141 32 101.235 32C96.8415 32 93.6016 29.2483 93.6016 22.5464V9.80859H100.392V21.4812C100.392 24.6325 101.413 26.5409 103.765 26.5409C105.629 26.5409 106.695 25.2537 107.138 24.1885C107.316 23.7892 107.36 23.2565 107.36 22.724V9.80859H114.151V24.5437Z" fill="white"/>
                <path d="M117.745 25.6089C118.988 26.3633 121.562 27.2511 123.559 27.2511C125.601 27.2511 126.444 26.5409 126.444 25.4313C126.444 24.3218 125.778 23.7892 123.249 22.946C118.766 21.4369 117.035 18.9959 117.079 16.4216C117.079 12.3827 120.541 9.32031 125.912 9.32031C128.441 9.32031 130.705 9.89734 132.037 10.5631L130.838 15.2232C129.862 14.6907 127.998 13.9806 126.134 13.9806C124.491 13.9806 123.559 14.6463 123.559 15.7559C123.559 16.7768 124.403 17.3093 127.066 18.2413C131.193 19.6616 132.924 21.7475 132.969 24.9432C132.969 28.9819 129.773 31.9556 123.559 31.9556C120.719 31.9556 118.189 31.3343 116.547 30.4466L117.745 25.6089Z" fill="white"/>
                <path d="M134.344 27.9167C134.344 25.52 135.986 23.7891 138.339 23.7891C140.691 23.7891 142.289 25.4755 142.289 27.9167C142.289 30.2689 140.691 31.9998 138.294 31.9998C135.986 31.9998 134.344 30.2689 134.344 27.9167Z" fill="#645AFF"/>
              </svg>
            </div>
            
            <p className="text-white/60 text-xs leading-4 tracking-tight mb-6">
              Enterprise AI infrastructure for regulated industries. Secure, compliant, and powerful. Built for organizations that demand the highest standards of security and compliance.
            </p>
            
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0)">
                    <path d="M0.561025 3.23141C0.186336 2.88353 0 2.45291 0 1.94055C0 1.42819 0.187333 0.97863 0.561025 0.629748C0.935714 0.281862 1.41803 0.107422 2.00896 0.107422C2.59989 0.107422 3.06328 0.281862 3.43697 0.629748C3.81166 0.977633 3.998 1.41523 3.998 1.94055C3.998 2.46587 3.81067 2.88353 3.43697 3.23141C3.06228 3.5793 2.58694 3.75374 2.00896 3.75374C1.43098 3.75374 0.935714 3.5793 0.561025 3.23141ZM3.68311 5.22702V15.8929H0.313892V5.22702H3.68311Z" fill="white" fillOpacity="0.6"/>
                    <path d="M14.8989 6.28064C15.6333 7.07809 16 8.17259 16 9.56612V15.7045H12.8002V9.99874C12.8002 9.29599 12.6179 8.74973 12.2541 8.36098C11.8904 7.97222 11.4001 7.77685 10.7863 7.77685C10.1724 7.77685 9.68212 7.97122 9.3184 8.36098C8.95467 8.74973 8.77231 9.29599 8.77231 9.99874V15.7045H5.55359V5.19711H8.77231V6.59065C9.09817 6.12613 9.53765 5.75932 10.0897 5.48918C10.6418 5.21905 11.2626 5.08447 11.9532 5.08447C13.1829 5.08447 14.1654 5.48319 14.8989 6.27964V6.28064Z" fill="white" fillOpacity="0.6"/>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
              
              <button className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12.2175 1.26904H14.4665L9.5531 6.8847L15.3333 14.5264H10.8075L7.26265 9.89173L3.20659 14.5264H0.956247L6.21158 8.51977L0.666626 1.26904H5.30737L8.51156 5.50526L12.2175 1.26904ZM11.4282 13.1802H12.6744L4.63022 2.54446H3.29293L11.4282 13.1802Z" fill="white" fillOpacity="0.6"/>
                </svg>
              </button>
              
              <button className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M9.23162 16V7.99906H11.4402L11.7329 5.2419H9.23162L9.23537 3.86191C9.23537 3.1428 9.3037 2.75748 10.3366 2.75748H11.7173V0H9.50836C6.85509 0 5.92121 1.33752 5.92121 3.58682V5.24221H4.26733V7.99938H5.92121V16H9.23162Z" fill="white" fillOpacity="0.6"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Links columns */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16">
            {/* Products */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white/60 text-sm leading-5 tracking-tight">Products</h3>
              <nav className="flex flex-col gap-5">
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">Abbi Assist™</a>
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">AbacusOS™</a>
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">Abacus Studio</a>
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">Decentralized Indexer</a>
              </nav>
            </div>
            
            {/* Solutions */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white/60 text-sm leading-5 tracking-tight">Solutions</h3>
              <nav className="flex flex-col gap-5">
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">Financial Services</a>
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">Insurance</a>
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">Healthcare</a>
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">Professional Services</a>
              </nav>
            </div>
            
            {/* Resources */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white/60 text-sm leading-5 tracking-tight">Resources</h3>
              <nav className="flex flex-col gap-5">
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">AI Safety Guidelines</a>
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">Ethics Framework</a>
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">Responsible AI</a>
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">Help Center</a>
                <a href="#" className="text-white text-sm leading-5 tracking-tight hover:text-white/80 transition-colors">Enterprise Support</a>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-10">
          <p className="text-white/60 text-xs leading-4 tracking-tight">
            © 2025 Go Abacus Corporation. All rights reserved.
          </p>
          
          <nav className="flex flex-wrap items-center gap-8">
            <a href="#" className="text-white/60 text-xs leading-4 tracking-tight hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 text-xs leading-4 tracking-tight hover:text-white/80 transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 text-xs leading-4 tracking-tight hover:text-white/80 transition-colors">Cookie Policy</a>
            <a href="#" className="text-white/60 text-xs leading-4 tracking-tight hover:text-white/80 transition-colors">System Status</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

