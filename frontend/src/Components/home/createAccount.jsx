export default function CreateAccount(){
    return(
        <>
            <section className="gradient-bg py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white mb-6">Start Your Artistic Journey Today</h2>
                    <p className="text-xl text-purple-100 mb-8">
                        Join thousands of local artists who are transforming their traditional crafts into successful online businesses.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a className="create-btn text-white px-8 py-4 rounded-full font-semibold text-lg" href="/signup">
                            Create Free Account
                        </a>
                    </div>
                    <p className="text-purple-100 mt-6">No design skills needed • Free templates • Direct platform uploads</p>
                </div>
            </section>
        </>
    )
}