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
                                <a className="create-btn text-white px-8 py-4 rounded-full font-semibold text-lg" href="/signup">
                                    Create Your First AI Poster
                                </a>
                                <a className="glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg" href="/signup">
                                    Make Story Video <i className="fas fa-play ml-2"></i>
                                </a>
                                <div className="mt-8 flex items-center text-purple-100">
                                    <div className="flex -space-x-2 mr-4">
                                        <img src="/image/users1.png" alt="Artist profile portrait with creative expression" className="w-10 h-10 rounded-full border-2 border-white"/>
                                        <img src="/image/users2.png" alt="Photographer with camera and artistic background" className="w-10 h-10 rounded-full border-2 border-white"/>
                                        <img src="/image/users3.png" alt="Digital artist working on tablet in studio" className="w-10 h-10 rounded-full border-2 border-white"/>
                                    </div>
                                    <span>Join 10,000+ creators already using ArtisanAI</span>
                                </div>
                            </div>
                        </div>

                        <div class="relative">
                            <div class="video-container animate-float">
                                <img src="/image/heroImage.png" alt="AI-generated video creation interface showing before and after transformation of artistic content" class="w-full h-auto rounded-2xl"/>
                            </div>
                            <div class="absolute -bottom-4 -left-4 glass-effect p-4 rounded-2xl backdrop-blur-sm">
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                                        <i class="fas fa-check text-white"></i>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-white font-semibold">AI Video Ready</p>
                                        <p class="text-purple-100 text-sm">In 60 seconds</p>
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