export default function SuccessStories(){
    return(
        <>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories from Local Artists</h2>
                        <p className="text-xl text-gray-600">
                            See how traditional artisans are reaching global audiences
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <div className="flex items-center mb-4">
                                <img src="/image/users1.png" alt="Traditional pottery artist smiling with handmade clay pots" className="w-12 h-12 rounded-full"/>
                                <div className="ml-4">
                                    <h4 className="font-semibold">Rajesh Pottery</h4>
                                    <p className="text-purple-600 text-sm">3x sales increase</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">"The AI posters helped my pottery stand out on Amazon, and the story videos made customers appreciate our 200-year-old techniques."</p>
                            <div className="flex space-x-2">
                                <img src="/image/product1.png" alt="Handmade pottery collection with traditional patterns" className="w-16 h-16 rounded object-cover" />
                                <img src="/image/product2.png" alt="Traditional pottery making process video still" className="w-16 h-16 rounded object-cover"/>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <div className="flex items-center mb-4">
                                <img src="/image/users3.png" alt="Textile weaver with handloom and colorful fabrics" className="w-12 h-12 rounded-full"/>
                                <div className="ml-4">
                                    <h4 className="font-semibold">Weaves of India</h4>
                                    <p className="text-purple-600 text-sm">5k Instagram followers</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">"The storytelling videos about our weaving tradition went viral on Instagram, bringing international orders for our handloom fabrics."</p>
                            <div className="flex space-x-2">
                                <img src="/image/product3.png" alt="Colorful handloom textiles with traditional patterns" className="w-16 h-16 rounded object-cover"/>
                                <img src="/image/product4.png" alt="Weaving process video showing traditional techniques" className="w-16 h-16 rounded object-cover"/>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <div className="flex items-center mb-4">
                                <img src="/image/users2.png" alt="Jewelry maker with handmade silver ornaments" className="w-12 h-12 rounded-full"/>
                                <div className="ml-4">
                                    <h4 className="font-semibold">Silver Crafts</h4>
                                    <p className="text-purple-600 text-sm">2.5x conversion rate</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">"Customers love seeing the story behind each piece. The AI-generated videos showing our crafting process increased trust and sales."</p>
                            <div className="flex space-x-2">
                                <img src="/image/product5.png" alt="Handcrafted silver jewelry collection" className="w-16 h-16 rounded object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}