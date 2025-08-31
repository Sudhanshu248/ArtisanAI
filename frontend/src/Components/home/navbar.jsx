export default function Navbar(){
    return(
        <>
            <nav className="fixed w-full bg-white shadow-md z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className="text-2xl font-bold text-purple-600">ArtisanAI</h1>
                            </div>
                        </div>
                        <div className="md:block">
                            <a className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition" href="/signup">
                                Start Creating
                            </a>
                        </div>
                        <div className="md:hidden">
                            <button className="text-gray-700" >
                                <i className="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}