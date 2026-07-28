import React from 'react';

function App() {
  return (
    <>
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 bg-black">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://assets.framerate.space/templates/Orange%20Furry%20Creature/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Page Wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col px-10 lg:px-20 pb-20">
        
        {/* Navigation */}
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center gap-8">
            <span className="font-inter font-bold text-2xl tracking-tighter">FableForge</span>
            <nav className="hidden md:flex items-center gap-5 text-sm text-white/80 font-space">
              <a href="#" className="hover:text-white transition-colors">Showcase</a>
              <span className="opacity-40 text-xs">·</span>
              <a href="#" className="hover:text-white transition-colors">Features</a>
              <span className="opacity-40 text-xs">·</span>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
            </nav>
          </div>
          <div>
            <button className="bg-black/40 backdrop-blur-md border border-white/10 text-white px-6 py-2.5 rounded-lg font-space text-sm hover:bg-white/10 hover:border-white/30 transition-all shadow-lg cursor-pointer">
              Book a Demo
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 relative flex items-center">
          <div className="-mt-16">
            <div className="flex items-center gap-3 text-sm font-space text-white/90 mb-5 tracking-wide">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                {/* Heart-like butterfly icon */}
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>Characters you can <span className="italic">almost</span> touch.</span>
            </div>
            <h1 className="font-space font-black text-6xl lg:text-8xl xl:text-[6.5rem] leading-[0.95] tracking-tighter uppercase drop-shadow-2xl">
              BRING YOUR<br />IMAGINATION<br />TO LIFE
            </h1>
          </div>

          <div className="absolute bottom-10 right-0 flex flex-col items-start gap-6 max-w-[320px]">
            <p className="text-sm font-space leading-relaxed text-white/90 drop-shadow-lg">
              Create adorable 3D characters, direct<br />funny little scenes, and generate<br />surreal animations in seconds.
            </p>
            <button className="flex items-center gap-5 bg-[#1a1a1a]/70 backdrop-blur-xl border border-white/10 rounded-lg p-2 pr-7 text-white font-space text-sm hover:bg-[#2a2a2a]/80 hover:border-white/30 transition-all shadow-2xl group">
              <div className="bg-black/60 p-2 rounded-md flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="1.5"/> <circle cx="10" cy="4" r="1.5"/> <circle cx="16" cy="4" r="1.5"/> <circle cx="22" cy="4" r="1.5"/>
                  <circle cx="4" cy="10" r="1.5"/> <circle cx="10" cy="10" r="1.5"/> <circle cx="16" cy="10" r="1.5"/> <circle cx="22" cy="10" r="1.5"/>
                  <circle cx="4" cy="16" r="1.5"/> <circle cx="10" cy="16" r="1.5"/> <circle cx="16" cy="16" r="1.5"/> <circle cx="22" cy="16" r="1.5"/>
                  <circle cx="4" cy="22" r="1.5"/> <circle cx="10" cy="22" r="1.5"/> <circle cx="16" cy="22" r="1.5"/> <circle cx="22" cy="22" r="1.5"/>
                </svg>
              </div>
              <span className="font-bold tracking-wide group-hover:translate-x-1 transition-transform">Start Creating</span>
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
