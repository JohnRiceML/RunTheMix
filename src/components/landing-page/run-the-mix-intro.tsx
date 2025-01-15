import Image from 'next/image'

export default function RunTheMixIntro() {
    const foundingYear = 2018 // Replace with the actual founding year

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Welcome to Run The Mix</h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">


                        <p className="text-lg">
                            Run The Mix is proud to announce its new home in the heart of the Twin Cities.
                            With deep Minnesota roots, we've been a cornerstone of the local gaming community,
                            and our new location allows us to serve you even better.
                        </p>
                        <p className="text-lg">
                            Our passion for fighting games drives everything we do. We've created a space where
                            gamers of all levels can come together, compete, and grow. From casual players to
                            tournament champions, everyone has a place at Run The Mix.
                        </p>
                        <p className="text-lg">
                            Every week, we host fighting game events featuring titles like <em>Street Fighter 6</em>,
                            <em>Guilty Gear Strive</em>, <em>Melty Blood Type Lumina</em>, and <em>Tekken 7</em>.
                            But we're not just limited to these—any fighting game that comes through our doors is welcome!
                        </p>


                        <p className="text-lg font-semibold">
                            Run The Mix is more than just a venue—it's a community hub for the Twin Cities gaming scene.
                            Join us and be a part of something amazing!            </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <Image
                            src="/about/main.png"
                            alt="Venue interior"
                            width={800}
                            height={800}
                            className="rounded-lg col-span-2 row-span-3"
                        />
                        <Image
                            src="/about/image2.png"
                            alt="Players competing"
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />
                        <Image
                            src="/about/image3.png"
                            alt="Local tournament moment"
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />
                        <Image
                            src="/about/image4.png"
                            alt="Community gathering"
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />

                    </div>

                </div>

                <p className="text-xl font-bold text-center mt-8">
                    Proudly bringing the Minnesota gaming community together since {foundingYear}.
                </p>
            </div>
        </section>
    )
}

