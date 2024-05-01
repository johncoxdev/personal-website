import StarEffect from "@/components/StarEffect"


export default function Page404() {
  return (
    <main id="404" className="bg-off-black text-white font-julius text-xl min-h-screen">
      <div className='z-20 flex flex-col items-center justify-center min-h-screen'>
        <p className="pb-10">Page Not Found</p>
        <a href="/" className="pl-2 group text-white transition duration-700 hover:text-light-orange">
          {"Return to Home"}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-light-orange"></span>
        </a>
      </div> 
    </main>
  )
}