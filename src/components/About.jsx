import React from 'react';

function About() {
    return (
        <section className="py-20 bg-white px-6 w-full">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-6 underline decoration-blue-500 decoration-4 underline-offset-8">
                        About the Conference
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        The International Conference on Future Tech 2026 is a premier gathering designed to 
                        bridge the gap between academia and industry. Hosted by NSRIT, we aim to 
                        showcase cutting-edge research and foster global collaborations.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                        <h3 className="font-bold text-blue-900 mb-3">Our Objective</h3>
                        <ul className="text-gray-700 space-y-3 text-sm">
                            <li className="flex gap-2">
                                <span className="text-blue-600">•</span>
                                <span>To provide a platform for researchers to share innovative ideas.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600">•</span>
                                <span>To discuss the impact of AI and Sustainable Tech on society.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600">•</span>
                                <span>To facilitate networking between students and global experts.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-200">
                        <span className="text-blue-400 italic">Conference Image</span>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
                </div>
            </div>
        </section>
    );
}

export default About;