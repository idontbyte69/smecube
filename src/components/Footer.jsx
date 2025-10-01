import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-b from-[#d6e9f8]/40 to-[#a6c8e6]/50 text-brand-text">
      <div className="container-max py-12 grid md:grid-cols-3 gap-10">
        <div>
          <img src="/SME-Cube-logo.png" alt="SME CUBE" className="h-10 mb-4" />
          <p className="max-w-md leading-7">
            SME CUBE — আপনার ব্যবসার ডিজিটাল সহযাত্রী। আমরা ছোট ও মাঝারি উদ্যোক্তাদের জন্য আধুনিক, সাশ্রয়ী এবং কার্যকর প্রযুক্তি সমাধান। এক প্ল্যাটফর্মে আপনার ব্যবসার গ্রোথ, মার্কেটিং, অটোমেশন এবং ম্যানেজমেন্ট।
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">সার্ভিস সমূহ</h4>
          <ul className="space-y-2">
            <li><Link className="hover:text-brand-accent" to="/services/facebook-marketing">ফেসবুক মার্কেটিং</Link></li>
            <li><Link className="hover:text-brand-accent" to="/services/ecommerce">ই-কমার্স সল্যুশন</Link></li>
            <li><Link className="hover:text-brand-accent" to="/services/web-development">ওয়েবসাইট ডেভেলপমেন্ট</Link></li>
            <li><Link className="hover:text-brand-accent" to="/services/domain-hosting">ডোমেইন হোস্টিং</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">গুরুত্বপূর্ণ লিঙ্কসমূহ</h4>
          <ul className="space-y-2">
            <li>ওয়ার্কিং আওয়ারঃ </li>
            <li>সকাল ৯ টা থেকে বিকেল ৫ টা</li>
            <li>শনিবার- বৃহস্পতিবার</li>
            <li>সাপোর্টঃ ২৪/৭</li>
            <li><a className="hover:text-brand-accent" href="#contact">যোগাযোগ</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm py-5 border-t border-white/40">©2025 All Rights Reserved By SME CUBE LTD</div>
    </footer>
  )
}
