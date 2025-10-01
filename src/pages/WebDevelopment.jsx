      
      
export default function WebDevelopment() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-white via-slate-50 to-slate-200 overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--brand-accent)] opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--brand-text)] opacity-10 rounded-full blur-2xl -z-10 animate-pulse"></div>
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-center gap-10 rounded-2xl shadow-2xl pt-8 pb-12 bg-white/80 backdrop-blur-md border border-slate-100">
            {/* Left Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-xl aspect-video flex flex-col justify-center bg-white rounded-2xl  h-full  animate-fade-in">
                <span className="inline-block px-5 py-2 mb-4 rounded-full bg-[var(--brand-accent)] text-white text-base font-semibold tracking-wide shadow">SME CUBE</span>
                <h1 className="text-5xl md:text-4xl font-serif font-bold text-[var(--brand-text)] leading-tight mb-6 drop-shadow-lg">
                  আপনার ব্র্যান্ডের জন্য <span className="text-[var(--brand-accent)]">আকর্ষণীয়</span> ল্যান্ডিং পেজ 🚀
                </h1>
                <hr className="w-20 border-t-4 border-[var(--brand-accent)] mb-8 mx-0" />
                <p className="text-xl md:text-2xl mb-8 text-slate-700 font-medium">
                  দৃষ্টিনন্দন <span className="font-semibold">Design</span> আর কার্যকরী <span className="font-semibold">Conversion</span> এর সমন্বয়ে,<br />
                  আমরা তৈরি করি আপনার ব্র্যান্ডের <span className="text-[var(--brand-accent)] font-bold">Growth</span> এর পথ।
                </p>
                <a
                  className="btn-primary mt-auto rounded-full text-xl font-bold px-8 py-4 shadow-xl hover:bg-[var(--brand-accent)] hover:text-white transition w-fit"
                  href="#contact"
                >
                  যোগাযোগ করুন
                </a>
              </div>
            </div>

            {/* Right Video */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-lg animate-fade-in">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/MZnyjXSUX3Q"
                  title="Instructional Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Business Website Designing Section */}
      <section className="py-16 bg-slate-50">
        <div className="container-max flex flex-col md:flex-row items-center gap-10">
          {/* Image Div */}
          <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
            <img src="/SME-Cube-logo.png" alt="Business Website Design" className="w-64 h-64 object-contain rounded-xl shadow-lg" />
          </div>
          {/* Content Div */}
          <div className="flex-1 bg-white rounded-xl shadow-soft p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-accent)] mb-4">আপনার ব্যবসার জন্য ওয়েবসাইট ডিজাইনিং</h2>
            <p className="text-lg mb-6">আপনার ব্যবসার High-End Premium উপস্থিতি নিশ্চিত করতে আজই আমাদের সাথে কাজ শুরু করুন।</p>
            <ul className="list-disc pl-5 space-y-2 text-base text-slate-700">
              <li>পার্সোনালাইজড ডিজাইন</li>
              <li>হাই এন্ড প্রিমিয়াম লোক</li>
              <li>সহজ ও সময়মত কাজ সম্পন্ন</li>
              <li>৫+ বছরের অভিজ্ঞতা</li>
              <li>সেরা Post Sale Service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Website Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--brand-accent)]">
            আমাদের ওয়েবসাইট গ্যালারি
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "/SME-Cube-logo.png",
              "/5721525.jpg",
              "/SME-Cube-logo.png",
              "/5261632.jpg",
              "/SME-Cube-logo.png",
              "/5721525.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-56 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-10 bg-gradient-to-r from-[var(--brand-accent)] via-[var(--brand-bg)] to-slate-200 flex items-center justify-center">
        <div className="container-max flex items-center justify-center">
          <div className="w-full max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-5 text-center border border-[var(--brand-accent)] backdrop-blur-md animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--brand-accent)] mb-6 drop-shadow">এখনই যোগাযোগ করুন এবং আপনার <span className="text-[var(--brand-text)]">Dream Website</span> তৈরি করুন!</h2>
            <p className="text-lg md:text-xl text-slate-700 mb-10 font-medium">আপনার ব্যবসার জন্য প্রিমিয়াম ওয়েবসাইট পেতে আজই আমাদের সাথে যোগাযোগ করুন।</p>
            <a
              href="#contact"
              className="btn-primary bg-[var(--brand-accent)] text-white font-bold text-xl px-10 py-5 rounded-full shadow-xl hover:bg-[var(--brand-text)] hover:text-[var(--brand-accent)] transition border-2 border-white"
            >
              যোগাযোগ করুন
            </a>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 bg-slate-50">
        <div className="container-max">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--brand-text)]">
              কেন SME CUBE?
            </h2>
            <ul className="mt-8 grid md:grid-cols-3 gap-6 text-left">
              <li className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition">
                <h3 className="font-semibold text-lg mb-2">বিজনেস-ফার্স্ট ডিজাইন 🎨</h3>
                <p className="text-slate-600">কনভার্সন-ড্রিভেন UI/UX, SEO প্রস্তুত স্ট্রাকচার।</p>
              </li>
              <li className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition">
                <h3 className="font-semibold text-lg mb-2">পারফরম্যান্স ও সিকিউরিটি 🔒</h3>
                <p className="text-slate-600">আধুনিক ফ্রেমওয়ার্ক ও হোস্টিং বেস্ট-প্র্যাকটিস।</p>
              </li>
              <li className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition">
                <h3 className="font-semibold text-lg mb-2">স্কেলেবল সল্যুশন 📈</h3>
                <p className="text-slate-600">আপনার গ্রোথের সাথে স্কেল করবে এমন আর্কিটেকচার।</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
