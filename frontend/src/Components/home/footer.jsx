export default function Footer(){
    return(
        <>
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">ArtisanAI</h3>
                            <p className="text-gray-400">
                                Empowering local artists with AI-powered marketing tools for handmade products.
                            </p>
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
                        <p>© 2025 ArtisanAI. Preserving traditions through technology.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}