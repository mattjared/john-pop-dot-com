import Image from 'next/image'
import Tiles from "./Tiles"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Home() {
  return (
    <main className='bg-purple-100'>
      <section className="py-10 md:pt-24 md:pb-12 container max-w-screen-xl mx-auto px-4 text-center">
        <Image src="/profilep.jpg" alt="" width="250" height="250" className="mx-auto mb-16 rounded.sm-full" />
        <h1 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">{`John Popovich`}</h1>
        <h2 className='text-6xl font-bold'>Sales @ Vercel</h2>
        <p className="font-normal text-gray-500 text-md md:text-x2 my-16">Enabling software developers via Next.js</p>
      </section>
      <Contact />
      <Tiles />
      <Footer />
    </main>
  )
}
