export default function Hero(){
    return(
        <>
            <section className="gradient-bg min-h-screen flex items-center pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sell Your Art Like Never Before</h1>
                            <p className="text-xl mb-8 text-purple-100">
                                Transform your handmade products into market-ready masterpieces with AI-powered posters and storytelling videos.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <button className="create-btn text-white px-8 py-4 rounded-full font-semibold text-lg">
                                    Create Your First AI Poster
                                </button>
                                <button className="glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg">
                                    Make Story Video <i className="fas fa-play ml-2"></i>
                                </button>
                                <div className="mt-8 flex items-center text-purple-100">
                                    <div className="flex -space-x-2 mr-4">
                                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/321a2ede-1d2b-4b19-8b4d-b0194e98484d.png" alt="Artist profile portrait with creative expression" className="w-10 h-10 rounded-full border-2 border-white"/>
                                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/81c069f2-99a8-4cff-8e58-c1188b1a3ed1.png" alt="Photographer with camera and artistic background" className="w-10 h-10 rounded-full border-2 border-white"/>
                                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4ba110c6-f6a9-4273-ba84-22d550ae654c.png" alt="Digital artist working on tablet in studio" className="w-10 h-10 rounded-full border-2 border-white"/>
                                    </div>
                                    <span>Join 10,000+ creators already using ArtisanAI</span>
                                </div>
                            </div>
                            

                        </div>
                        <div className="relative">
                            <div className="bg-white rounded-3xl p-6 shadow-2xl animate-float">
                                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e8d3833-671c-4c05-9f6b-97602ff90f30.png" alt="AI-generated product poster showing handmade pottery with elegant typography and professional layout" className="w-full h-auto rounded-2xl" />
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Ready to upload</span>
                                    <div className="flex space-x-2">
                                        <button className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                                            <i className="fab fa-amazon"></i>
                                        </button>
                                        <button className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                            <i className="fab fa-instagram"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}