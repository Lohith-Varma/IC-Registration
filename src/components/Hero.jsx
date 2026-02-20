import React from 'react';

function Hero() {
    return (
        <header className="bg-blue-200 text-white py-20 px-4 text-center w-full block">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                International Tech Conference 2026
            </h1>

            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
                Exploring the future of Innovation at NSRIT.
                Connect with global experts and peers.
            </p>

            <div className="mt-8 flex justify-center gap-6 text-sm font-medium">
                <div className="flex flex-col items-center">
                    <span className="text-blue-400 uppercase text-xs">Location</span>
                    <span className="text-blue-900">NSRIT, Visakhapatnam</span>
                </div>
                <div className="w-px h-10 bg-blue-300"></div>
                <div className="flex flex-col items-center">
                    <span className="text-blue-400 uppercase text-xs">Date</span>
                    <span className="text-blue-900">20-23 February 2026</span>
                </div>
            </div>
        </header>
    );
}

export default Hero;