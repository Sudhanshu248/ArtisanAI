export default function Work(){
    return(
        <>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Create & Sell in 3 Simple Steps</h2>
                        <p className="text-xl text-gray-600">
                            From product idea to marketplace-ready content in minutes
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                                    <i className="fas fa-upload"></i>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Upload & Describe</h3>
                            <p className="text-gray-600">Upload product images and tell us about your creation</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                                    <i className="fas fa-magic"></i>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. AI Creates Content</h3>
                            <p className="text-gray-600">Our AI generates professional posters and storytelling videos</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl">
                                    <i className="fas fa-share-alt"></i>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Publish Everywhere</h3>
                            <p className="text-gray-600">Upload directly to marketplaces and social media</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="creation-flow">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white mr-4">
                                    <i className="fas fa-image"></i>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800">AI Poster Creation</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-3 mt-1">
                                        <i className="fas fa-camera"></i>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Upload Product Photos</p>
                                        <p className="text-gray-600 text-sm">Showcase your handmade products from multiple angles</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-3 mt-1">
                                        <i className="fas fa-edit"></i>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Add Product Description</p>
                                        <p className="text-gray-600 text-sm">Tell us about materials, craftsmanship, and unique features</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-3 mt-1">
                                        <i className="fas fa-robot"></i>
                                    </div>
                                    <div>
                                        <p className="font-semibold">AI Designs Poster</p>
                                        <p className="text-gray-600 text-sm">Professional layouts, typography, and color schemes</p>
                                    </div>
                                </div>
                            </div>
                            <button className="create-btn text-white px-6 py-3 rounded-lg font-semibold mt-6 w-full">
                                Create Product Poster
                            </button>
                        </div>

                        <div className="creation-flow">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
                                    <i className="fas fa-video"></i>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800">Story Video Generator</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-1">
                                        <i className="fas fa-book"></i>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Share Your Story</p>
                                        <p className="text-gray-600 text-sm">Describe the history, culture, and making process</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-1">
                                        <i className="fas fa-microphone"></i>
                                    </div>
                                    <div>
                                        <p className="font-semibold">AI Voice Narration</p>
                                        <p className="text-gray-600 text-sm">Natural-sounding storytelling in multiple languages</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-1">
                                        <i className="fas fa-film"></i>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Visual Storytelling</p>
                                        <p className="text-gray-600 text-sm">Animated sequences showing creation process</p>
                                    </div>
                                </div>
                            </div>
                            <button className="create-btn text-white px-6 py-3 rounded-lg font-semibold mt-6 w-full">
                                Generate Story Video
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}