export default function WebDevelopment() {
  return (
    <div>
      <section className="bg-[var(--brand-bg)] py-12 md:py-16">
        <div className="container-max text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--brand-text)]">ওয়েবসাইট ডেভেলপমেন্ট</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">আপনার ব্র্যান্ডের জন্য দ্রুত, সিকিউর এবং ইউজার-ফ্রেন্ডলি ওয়েবসাইট তৈরি করি। SME-দের জন্য অপ্টিমাইজড ডিজাইন ও টেক স্ট্যাক।</p>
          <div className="mt-8 flex justify-center gap-4">
            <a className="btn-primary" href="#contact">কোট রিকোয়েস্ট করুন</a>
            <a className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-[var(--brand-accent)] text-[var(--brand-accent)] font-semibold hover:bg-[var(--brand-accent)] hover:text-white transition" href="#portfolio">পোর্টফোলিও দেখুন</a>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container-max">
          <div className="bg-white rounded-xl shadow-soft p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center">কেন SME CUBE?</h2>
            <ul className="mt-6 grid md:grid-cols-3 gap-6 text-left">
              <li className="p-5 rounded-lg border border-slate-100">
                <h3 className="font-semibold mb-2">বিজনেস-ফার্স্ট ডিজাইন</h3>
                <p>কনভার্সন-ড্রিভেন UI/UX, SEO প্রস্তুত স্ট্রাকচার।</p>
              </li>
              <li className="p-5 rounded-lg border border-slate-100">
                <h3 className="font-semibold mb-2">পারফরম্যান্স ও সিকিউরিটি</h3>
                <p>আধুনিক ফ্রেমওয়ার্ক ও হোস্টিং বেস্ট-প্র্যাকটিস।</p>
              </li>
              <li className="p-5 rounded-lg border border-slate-100">
                <h3 className="font-semibold mb-2">স্কেলেবল সল্যুশন</h3>
                <p>আপনার গ্রোথের সাথে স্কেল করবে এমন আর্কিটেকচার।</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
