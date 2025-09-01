export default function Footer(){
    return(
        <>
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">ArtisanAI</h3>
                            <p className="text-gray-400">
                                Empowering local artists with AI-powered marketing tools for handmade products.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Create</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">AI Posters</a></li>
                                <li><a href="#" className="hover:text-white">Story Videos</a></li>
                                <li><a href="#" className="hover:text-white">Product Templates</a></li>
                                <li><a href="#" className="hover:text-white">Style Library</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Sell</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Amazon Integration</a></li>
                                <li><a href="#" className="hover:text-white">Flipkart Ready</a></li>
                                <li><a href="#" className="hover:text-white">Social Media</a></li>
                                <li><a href="#" className="hover:text-white">Export Options</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Community</h4>
                            <div className="flex space-x-4 mb-4">
                                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram text-xl"></i></a>
                                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook text-xl"></i></a>
                                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube text-xl"></i></a>
                                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-whatsapp text-xl"></i></a>
                            </div>
                            <p className="text-gray-400 text-sm">Supporting local artisans worldwide</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>© 2024 ArtisanAI. Preserving traditions through technology.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}