export default function Features(){
    return(
        <>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Everything Local Artists Need</h2>
                        <p className="text-xl text-gray-600">
                            Designed specifically for handmade product creators
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="feature-card bg-white p-8 rounded-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-shopping-cart text-3xl text-purple-600"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">E-commerce Ready</h3>
                            <p className="text-gray-600 mb-6">
                                Perfectly sized posters optimized for Amazon, Flipkart, and other marketplaces with built-in pricing and detail templates.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Amazon</span>
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Flipkart</span>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Etsy</span>
                            </div>
                        </div>

                        <div className="feature-card bg-white p-8 rounded-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-share-alt text-3xl text-blue-600"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Social Media Integration</h3>
                            <p className="text-gray-600 mb-6">
                                One-click sharing to Instagram, Facebook, and other platforms with optimized formats for each network.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Instagram</span>
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Facebook</span>
                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Pinterest</span>
                            </div>
                        </div>

                        <div className="feature-card bg-white p-8 rounded-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-history text-3xl text-green-600"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cultural Storytelling</h3>
                            <p className="text-gray-600 mb-6">
                                AI-powered video creation that captures the heritage, techniques, and stories behind your handmade products.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Heritage</span>
                                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">Technique</span>
                                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">Story</span>
                            </div>
                        </div>

                        <div className="feature-card bg-white p-8 rounded-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-palette text-3xl text-orange-600"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Artistic Styles</h3>
                            <p className="text-gray-600 mb-6">
                                Choose from various artistic styles that complement your product's aesthetic and cultural background.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Traditional</span>
                                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Modern</span>
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Minimalist</span>
                            </div>
                        </div>

                        <div className="feature-card bg-white p-8 rounded-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-download text-3xl text-red-600"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instant Export</h3>
                            <p className="text-gray-600 mb-6">
                                Download in multiple formats or upload directly to your preferred platforms with automatic optimization.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">PNG</span>
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">JPEG</span>
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">MP4</span>
                            </div>
                        </div>

                        <div className="feature-card bg-white p-8 rounded-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-users text-3xl text-indigo-600"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Local Community</h3>
                            <p className="text-gray-600 mb-6">
                                Connect with other local artists, share techniques, and get inspired by traditional craftsmanship stories.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Workshops</span>
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Network</span>
                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}