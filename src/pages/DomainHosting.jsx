import { useState, useRef } from 'react'
import CustomerReviews from '../components/CustomerReviews'

const hostingPlans = [
  {
    title: "১ বছর / 1GB",
    features: [
      "ডোমেইন নাম",
      "৩টি ওয়েবসাইট",
      "২০ GB SSD",
      "৩০ মেইলবক্স",
      "অটো ব্যাকআপ",
      "AI ওয়েবসাইট বিল্ডার",
      "AI টুলস",
    ],
    price: "৳ ১,৫০০/বছর",
  },
  {
    title: "১ বছর / 2GB",
    features: [
      "ডোমেইন নাম",
      "আনলিমিটেড ওয়েবসাইট",
      "আনমিটার্ড SSD",
      "আনলিমিটেড মেইলবক্স",
      "অটো ব্যাকআপ",
      "AI ওয়েবসাইট বিল্ডার",
      "AI টুলস",
    ],
    price: "৳ ২,৫০০/বছর",
    popular: true,
  },
  {
    title: "১ বছর / 3GB",
    features: [
      "ডোমেইন নাম",
      "আনলিমিটেড ওয়েবসাইট",
      "আনমিটার্ড SSD",
      "আনলিমিটেড মেইলবক্স",
      "অটো ব্যাকআপ",
      "AI ওয়েবসাইট বিল্ডার",
      "AI টুলস",
    ],
    price: "৳ ৩,০০০/বছর",
  },
  {
    title: "১ বছর / 4GB",
    features: [
      "ডোমেইন নাম",
      "আনলিমিটেড ওয়েবসাইট",
      "আনমিটার্ড SSD",
      "আনলিমিটেড মেইলবক্স",
      "অটো ব্যাকআপ",
      "AI ওয়েবসাইট বিল্ডার",
      "AI টুলস",
    ],
    price: "৳ ৩,৫০০/বছর",
  },
  {
    title: "১ বছর / 5GB",
    features: [
      "ডোমেইন নাম",
      "আনলিমিটেড ওয়েবসাইট",
      "আনমিটার্ড SSD",
      "আনলিমিটেড মেইলবক্স",
      "অটো ব্যাকআপ",
      "AI ওয়েবসাইট বিল্ডার",
      "AI টুলস",
    ],
    price: "৳ ৪,০০০/বছর",
  },
  {
    title: "১ বছর / 6GB",
    features: [
      "ডোমেইন নাম",
      "আনলিমিটেড ওয়েবসাইট",
      "আনমিটার্ড SSD",
      "আনলিমিটেড মেইলবক্স",
      "অটো ব্যাকআপ",
      "AI ওয়েবসাইট বিল্ডার",
      "AI টুলস",
    ],
    price: "৳ ৪,৫০০/বছর",
  },
];

const domainPricing = [
  { domain: "yourbrand.com", y1: 500, y2: 900, y3: 2700 },
  { domain: "yourbrand.shop", y1: 450, y2: 800, y3: 2500 },
  { domain: "yourbrand.biz", y1: 300, y2: 500, y3: 2200 },
  { domain: "yourbrand.xyz", y1: 200, y2: 450, y3: 2000 },
];

const TLDs = [".com", ".shop", ".biz", ".xyz"];

export default function DomainHosting() {
const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [error, setError] = useState('')
  const [selectedSection, setSelectedSection] = useState(null)
  const [brandName, setBrandName] = useState('yourbrand')
  
  const domainSectionRef = useRef(null)
  const hostingSectionRef = useRef(null)
  
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  async function checkRDAP(domain) {
    try {
      const res = await fetch(
        `https://rdap.org/domain/${encodeURIComponent(domain)}`,
        { method: "GET" }
      );
      if (res.ok) return { domain, status: "registered" };
      if (res.status === 404) return { domain, status: "available" };
      return { domain, status: "unknown" };
    } catch {
      return { domain, status: "unknown" };
    }
  }

  async function handleSearch() {
    const base = query.trim().toLowerCase().replace(/\s+/g, "");
    setError("");
    setResults([]);
    if (!base) {
      setError("দয়া করে ব্র্যান্ড/ডোমেইন নাম লিখুন");
      return;
    }
    setBrandName(base);
    setLoading(true);
    const domains = TLDs.map((t) => `${base}${t}`);
    const settled = await Promise.all(domains.map((d) => checkRDAP(d)));
    const sorted = [...settled].sort((a, b) => {
      const order = { available: 0, unknown: 1, registered: 2 };
      return order[a.status] - order[b.status];
    });
    setResults(sorted);
    setLoading(false);
  }

  return (
    <div className="">
      {/* Hero */}
      <section className="bg-[var(--brand-bg)] py-12 md:py-12">
        <div className="container-max text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--brand-text)] font-bangla">
            নিচ থেকে সার্ভিস সিলেক্ট করুন — ডোমেইন ও হোস্টিং
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto font-mixed">
            SME CUBE — আপনার ব্যবসার ডিজিটাল সহযাত্রী। ক্ষুদ্র ও মাঝারি
            উদ্যোক্তাদের জন্য আধুনিক, সাশ্রয়ী এবং কার্যকর প্রযুক্তি সমাধনা এক
            প্ল্যাটফর্মে।
          </p>
        </div>
      </section>

      {/* Main Selection Options */}
      <section className="py-1 md:py-4">
        <div className="container-max">
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-6">

           <button 
              onClick={() => {
                const newSection = selectedSection === 'domain' ? null : 'domain';
                setSelectedSection(newSection);
                if (newSection === 'domain') {
                  setTimeout(() => scrollToSection(domainSectionRef), 100);
                }
              }}
              className={`section-toggle-button flex flex-col items-center justify-center p-8 rounded-xl text-center transition-all ${
                selectedSection === "domain"
                  ? "bg-[var(--brand-accent)] text-white shadow-lg scale-105"
                  : "bg-white shadow-soft border border-slate-100 hover:border-[var(--brand-accent)]/50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 mb-2"
              >
                <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817a18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
              </svg>
              <h2 className="text-lg font-bold font-bangla">ডোমেইন</h2>
            </button>


            <button 
              onClick={() => {
                const newSection = selectedSection === 'hosting' ? null : 'hosting';
                setSelectedSection(newSection);
                if (newSection === 'hosting') {
                  setTimeout(() => scrollToSection(hostingSectionRef), 100);
                }
              }}
              className={`section-toggle-button flex flex-col items-center justify-center p-4 rounded-xl text-center transition-all ${
                selectedSection === "hosting"
                  ? "bg-[var(--brand-accent)] text-white shadow-lg scale-105"
                  : "bg-white shadow-soft border border-slate-100 hover:border-[var(--brand-accent)]/50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 mb-2"
              >
                <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-lg font-bold font-bangla">হোস্টিং</h2>
            </button>
          </div>
        </div>
      </section>

      {/* Conditionally Show Selected Content */}
      {selectedSection === 'hosting' && (
        <section id="hosting" ref={hostingSectionRef} className="section-fade-in py-10 md:py-12">
          <div className="container-max">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
              হোস্টিং প্যাকেজ
            </h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hostingPlans.map((p, i) => (
                <div
                  key={i}
                  className={`rounded-xl bg-white p-6 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    p.popular
                      ? "border-[var(--brand-accent)]"
                      : "border-slate-100"
                  }`}
                >
                  {p.popular && (
                    <div className="text-xs uppercase tracking-wider inline-block mb-3 px-3 py-1 rounded-full bg-[var(--brand-accent)] text-white">
                      সবচেয়ে জনপ্রিয়
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <ul className="space-y-2 mb-5 list-disc list-inside text-sm">
                    {p.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-extrabold text-[var(--brand-accent)]">
                      {p.price}
                    </div>
                    <a
                      href="https://my.smecube.com/authentication/login"
                      className="btn-primary"
                    >
                      ক্রয় করুন
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedSection === 'domain' && (
        <section id="domain" ref={domainSectionRef} className="section-fade-in py-10 md:py-12">
          <div className="container-max">
            <div className="bg-white rounded-xl shadow-soft p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                ডোমেইন সার্চ করুন
              </h2>
              <div className="mt-6 max-w-2xl mx-auto">
                <div className="flex gap-3">
                  <input
                    placeholder="আপনার ব্র্যান্ড নাম লিখুন... যেমন: yourbrand"
                    className="flex-1 rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      if (e.target.value.trim()) {
                        setBrandName(e.target.value.trim().toLowerCase().replace(/\s+/g, ""));
                      } else {
                        setBrandName('yourbrand');
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch();
                    }}
                  />
                  <button
                    className="btn-primary"
                    onClick={handleSearch}
                    disabled={loading}
                  >
                    {loading ? "সার্চ হচ্ছে..." : "সার্চ"}
                  </button>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  যে TLD গুলো আমরা চেক করবো: {TLDs.join(", ")}
                </p>
                {/* <p className="mt-1 text-sm text-[var(--brand-accent)]">
                  আপনার লেখা নাম অটোমেটিক নিচের টেবিলে দেখানো হচ্ছে
                </p> */}
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              </div>

              {/* Results */}
              {results.length > 0 && (
                <div className="mt-6 max-w-3xl mx-auto">
                  <ul className="divide-y rounded-lg border border-slate-200 overflow-hidden">
                    {results.map((r) => (
                      <li
                        key={r.domain}
                        className="flex items-center justify-between p-4 bg-white"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{r.domain}</span>
                          {r.status === "available" && (
                            <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
                              Available
                            </span>
                          )}
                          {r.status === "registered" && (
                            <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700">
                              Registered
                            </span>
                          )}
                          {r.status === "unknown" && (
                            <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-800">
                              Unknown
                            </span>
                          )}
                        </div>
                        <div>
                          {r.status === "available" ? (
                            <a
                              href="https://my.smecube.com/authentication/login"
                              className="btn-primary"
                            >
                              ক্রয় করুন
                            </a>
                          ) : (
                            <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium">
                              ডিটেইলস
                            </button>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span>ডোমেইন প্রাইসিং</span>
                  {brandName !== 'yourbrand' && (
                    <span className="ml-3 text-sm px-2 py-1 rounded bg-green-100 text-green-700 font-normal">
                      "{brandName}" দিয়ে কাস্টমাইজ করা হয়েছে
                    </span>
                  )}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="p-3">ডোমেইন</th>
                        <th className="p-3">১ বছর</th>
                        <th className="p-3">২ বছর</th>
                        <th className="p-3">৩ বছর</th>
                      </tr>
                    </thead>
                    <tbody>
                      {domainPricing.map((d, i) => (
                        <tr key={i} className="border-t">
                          <td className="p-3 font-medium">
                            <span className={brandName !== 'yourbrand' ? 'transition-all duration-300 bg-yellow-50' : ''}>
                              {d.domain.replace('yourbrand', brandName)}
                            </span>
                          </td>
                          <td className="p-3">৳ {d.y1}</td>
                          <td className="p-3">৳ {d.y2}</td>
                          <td className="p-3">৳ {d.y3}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Why smecube Section */}
      <section className="py-10 md:py-12  bg-[var(--brand-bg)]">
        <div className="container-max">
          <div className="bg-white rounded-xl shadow-soft p-6  md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              কেন এসএমই কিউব
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-soft p-8 flex flex-col items-center transition-colors duration-300 hover:bg-[#ed2849] hover:text-white">
                <img
                  src="/SME-Cube-logo.png"
                  alt="২৪/৭ গ্রাহক সেবা"
                  className="w-20 h-20 mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">২৪/৭ গ্রাহক সেবা</h3>
                <p className="text-center">আমাদের সাপোর্ট টিম থেকে যেকোনো সময় সাহায্য ও পরামর্শ নিন। আপনি ডোমেইন নাম খোঁজা, এর উপলব্ধতা যাচাই, রেজিস্টার করা বা অন্য যে কোনো প্রয়োজনে আমাদের বন্ধুত্বপূর্ণ বিশেষজ্ঞরা সর্বদা আপনার পাশে আছেন।</p>
              </div>
              <div className=" rounded-xl shadow-soft p-8 flex flex-col items-center transition-colors duration-300 hover:bg-[#ed2849] hover:text-white">
                <img
                  src="/vite.svg"
                  alt="গোপনীয়তা এবং নিরাপত্তা"
                  className="w-20 h-20 mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">গোপনীয়তা এবং নিরাপত্তা</h3>
                <p className="text-center">এসএমই কিউবে আপনার ওয়েবসাইটের নিরাপত্তা ও গোপনীয়তা সর্বোচ্চ অগ্রাধিকার পায়, এবং আমরা সর্বদা অনলাইনে ব্যক্তি ও গ্রাহকদের অধিকার সমর্থন করি। আমাদের লক্ষ্য ইন্টারনেট খোলা, মুক্ত এবং সবার জন্য নিরাপদ রাখা।</p>
              </div>
              <div className="bg-white rounded-xl shadow-soft p-8 flex flex-col items-center transition-colors duration-300 hover:bg-[#ed2849] hover:text-white">
                <img
                  src="/src/assets/react.svg"
                  alt="আপনার ব্যবসা অনলাইনে"
                  className="w-20 h-20 mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">আপনার ব্যবসা অনলাইনে</h3>
                <p className="text-center">আপনি একবার ডোমেইন নাম উপলব্ধতা যাচাই করে নিজের ডোমেইন সুরক্ষিত করার পর, আপনার ব্যবসাকে আরও এগিয়ে নিতে শিল্প-প্রিমিয়াম পণ্য ও সেবাসমূহ সাশ্রয়ী মূল্যে পেতে পারেন। আমরা কেবল সেই সেবাগুলিই অফার করি যা আপনাকে একটি উন্নত ইন্টারনেট অভিজ্ঞতা প্রদান করে।</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerReviews />


      {/* CTA */}
      <section className="py-10 md:py-12">
        <div className="container-max">
          <div className="bg-white rounded-xl shadow-soft p-6 md:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">
              আপনার ব্যবসার জন্য সঠিক ডোমেইন ও হোস্টিং প্যাকেজ চাই?
            </h3>
            <p className="mt-2">
              আমাদের বিশেষজ্ঞ টিম আপনার বাজেট ও প্রয়োজন অনুযায়ী সেরা সমাধান
              সাজিয়ে দেবে।
            </p>
            <a className="btn-primary mt-5 inline-flex" href="#contact">
              ফ্রি কনসালটেশন নিন
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
