import { useState, useRef, useEffect } from 'react'

// Enhanced SMS pricing plans with more detailed features
const smsPlans = [
  {
    id: 1,
    title: "স্টার্টার প্যাক",
    subtitle: "ছোট ব্যবসার জন্য",
    smsCount: "১,০০০ SMS",
    monthlyPrice: "৳ ৫০০",
    yearlyPrice: "৳ ৪,৯৮০",
    perSms: "৳ ০.৫০",
    features: [
      "১,০০০ SMS ক্রেডিট",
      "টেক্সট মেসেজ সাপোর্ট", 
      "বেসিক ডেলিভারি রিপোর্ট",
      "২৪/৭ ইমেইল সাপোর্ট",
      "সিম্পল API এক্সেস",
      "গ্রুপ মেসেজিং"
    ],
    limitations: [
      "কাস্টম সেন্ডার ID নেই",
      "অ্যাডভান্স রিপোর্টিং নেই"
    ],
    popular: false,
    recommended: false,
    badge: null
  },
  {
    id: 2,
    title: "বিজনেস প্যাক",
    subtitle: "মাঝারি ব্যবসার জন্য",
    smsCount: "৫,০০০ SMS", 
    monthlyPrice: "৳ ২,০০০",
    yearlyPrice: "৳ ১৯,৯২০",
    perSms: "৳ ০.৪০",
    features: [
      "৫,০০০ SMS ক্রেডিট",
      "টেক্সট + মাল্টিমিডিয়া",
      "অ্যাডভান্স রিপোর্টিং", 
      "প্রায়োরিটি সাপোর্ট",
      "কমপ্লিট API + ওয়েব প্যানেল",
      "কাস্টম সেন্ডার ID",
      "শিডিউল মেসেজিং",
      "A/B টেস্টিং"
    ],
    limitations: [],
    popular: true,
    recommended: true,
    badge: "সবচেয়ে জনপ্রিয়"
  },
  {
    id: 3,
    title: "এন্টারপ্রাইজ প্যাক",
    subtitle: "বড় প্রতিষ্ঠানের জন্য",
    smsCount: "২০,০০০ SMS",
    monthlyPrice: "৳ ৬,০০০", 
    yearlyPrice: "৳ ৫৯,৭৬০",
    perSms: "৳ ০.৩০",
    features: [
      "২০,০০০ SMS ক্রেডিট",
      "সব ধরনের মেসেজিং",
      "রিয়েল টাইম অ্যানালিটিক্স",
      "ডেডিকেটেড সাপোর্ট ম্যানেজার",
      "কমপ্লিট API সুইট",
      "হোয়াইটলেবেল সলিউশন", 
      "অটোমেশন ওয়ার্কফ্লো",
      "কাস্টম ইন্টিগ্রেশন"
    ],
    limitations: [],
    popular: false,
    recommended: false,
    badge: "সর্বোচ্চ মূল্য"
  }
]

// Enhanced features with icons and detailed descriptions
const features = [
  {
    icon: "🚀",
    title: "তাৎক্ষণিক ডেলিভারি",
    description: "৯৯.৯% আপটাইম গ্যারান্টি সহ সেকেন্ডের মধ্যে মেসেজ পৌঁছান।",
    details: "প্রিমিয়াম রুট ব্যবহার করে বিশ্বের দ্রুততম SMS ডেলিভারি।"
  },
  {
    icon: "📊", 
    title: "রিয়েল টাইম অ্যানালিটিক্স",
    description: "বিস্তারিত রিপোর্ট এবং লাইভ ড্যাশবোর্ড দিয়ে ট্র্যাক করুন।",
    details: "ডেলিভারি স্ট্যাটাস, ক্লিক রেট, কনভার্শন ট্র্যাকিং সব এক জায়গায়।"
  },
  {
    icon: "🛡️",
    title: "এন্টারপ্রাইজ নিরাপত্তা", 
    description: "ব্যাংক-গ্রেড নিরাপত্তা এবং GDPR কমপ্লায়েন্স।",
    details: "এন্ড-টু-এন্ড এনক্রিপশন এবং ISO 27001 সার্টিফাইড।"
  },
  {
    icon: "🎯",
    title: "স্মার্ট টার্গেটিং",
    description: "AI চালিত সেগমেন্টেশন এবং পার্সোনালাইজেশন।", 
    details: "জনতত্ত্ব, আচরণ এবং পছন্দ অনুযায়ী টার্গেট করুন।"
  },
  {
    icon: "🔗",
    title: "সহজ API ইন্টিগ্রেশন",
    description: "RESTful API দিয়ে যেকোনো সিস্টেমের সাথে যুক্ত করুন।",
    details: "সম্পূর্ণ ডকুমেন্টেশন, SDK এবং কোড উদাহরণ সহ।"
  },
  {
    icon: "📅",
    title: "অটোমেশন ওয়ার্কফ্লো",
    description: "ট্রিগার-বেসড মেসেজিং এবং ড্রিপ ক্যাম্পেইন।",
    details: "জন্মদিন, পার্চেস রিমাইন্ডার, ফলোআপ অটোমেট করুন।"
  }
]

// Trust signals and certifications
const trustSignals = [
  { name: "ISO 27001", icon: "🏆" },
  { name: "GDPR Ready", icon: "🛡️" },
  { name: "99.9% Uptime", icon: "⚡" },
  { name: "24/7 Support", icon: "🎧" }
]

// Client logos (you can replace with actual logos)
const clientLogos = [
  "পাথাও", "চালডাল", "দারাজ", "বিকাশ", "রকেট", "ব্র্যাক ব্যাংক"
]

export default function BulkSMS() {
  const [isYearly, setIsYearly] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(2)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('আপনার টেস্ট মেসেজ')
  const [currentStep, setCurrentStep] = useState(1)
  const [showVideo, setShowVideo] = useState(false)
  const [animatedCounts, setAnimatedCounts] = useState({
    clients: 0,
    messages: 0,
    uptime: 0
  })

  const demoSectionRef = useRef(null)
  const pricingSectionRef = useRef(null)
  const featuresRef = useRef(null)

  // Animated counter effect
  useEffect(() => {
    const animateCounters = () => {
      const targets = { clients: 500, messages: 1000000, uptime: 99.9 }
      const duration = 2000
      const steps = 60

      let current = { clients: 0, messages: 0, uptime: 0 }
      const increment = {
        clients: targets.clients / steps,
        messages: targets.messages / steps,
        uptime: targets.uptime / steps
      }

      const timer = setInterval(() => {
        current.clients = Math.min(current.clients + increment.clients, targets.clients)
        current.messages = Math.min(current.messages + increment.messages, targets.messages)
        current.uptime = Math.min(current.uptime + increment.uptime, targets.uptime)

        setAnimatedCounts({
          clients: Math.floor(current.clients),
          messages: Math.floor(current.messages),
          uptime: Number(current.uptime.toFixed(1))
        })

        if (current.clients >= targets.clients) {
          clearInterval(timer)
        }
      }, duration / steps)
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters()
      }
    })

    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDemoSubmit = (e) => {
    e.preventDefault()
    if (currentStep === 1) {
      setCurrentStep(2)
    } else {
      alert('ডেমো SMS পাঠানো হয়েছে! আপনার ফোনে চেক করুন।')
      setCurrentStep(1)
    }
  }

  const calculateSavings = (plan) => {
    // Clean and convert Bengali numerals to English numerals if needed
    const cleanPrice = (price) => {
      return price.replace('৳ ', '')
                  .replace(/,/g, '')
                  .replace(/০/g, '0')
                  .replace(/১/g, '1')
                  .replace(/২/g, '2')
                  .replace(/৩/g, '3')
                  .replace(/৪/g, '4')
                  .replace(/৫/g, '5')
                  .replace(/৬/g, '6')
                  .replace(/৭/g, '7')
                  .replace(/৮/g, '8')
                  .replace(/৯/g, '9')
    }
    
    const monthly = parseFloat(cleanPrice(plan.monthlyPrice))
    const yearly = parseFloat(cleanPrice(plan.yearlyPrice))
    
    if (isNaN(monthly) || isNaN(yearly) || monthly <= 0) {
      return 0
    }
    
    const totalMonthlyYearly = monthly * 12
    const savings = Math.round(((totalMonthlyYearly - yearly) / totalMonthlyYearly) * 100)
    
    return Math.max(0, savings) // Ensure non-negative
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button 
          onClick={() => scrollToSection(demoSectionRef)}
          className="bg-[var(--brand-accent)] text-white p-4 rounded-full shadow-lg animate-pulse hover:animate-none hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-40">
        <div 
          className="h-full bg-gradient-to-r from-[var(--brand-accent)] to-pink-600 transition-all duration-300"
          style={{ width: `${currentStep * 25}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="container-max pt-20 pb-12 md:pt-28 md:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Client Trust Bar */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 font-mixed">
              বিশ্বস্ত ব্র্যান্ডগুলোর পছন্দ: {clientLogos.join(' • ')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[var(--brand-bg)] px-4 py-2 rounded-full text-sm font-medium text-[var(--brand-text)] mb-6 font-mixed">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                লাইভ: ৯৯.৯% সিস্টেম আপটাইম
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-bangla leading-tight">
                বাল্ক SMS দিয়ে
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-accent)] to-pink-600"> বিক্রয় বাড়ান</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 font-mixed leading-relaxed">
                প্রতিদিন <strong>১০ লাখ+</strong> SMS পাঠান আমাদের প্রিমিয়াম প্ল্যাটফর্মে।
                <span className="block mt-2 text-lg">৯৯.৯% ডেলিভারি গ্যারান্টি ও তাৎক্ষণিক রিপোর্ট।</span>
              </p>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20" ref={featuresRef}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[var(--brand-accent)] font-mixed">
                    {animatedCounts.clients}+
                  </div>
                  <div className="text-gray-600 text-sm font-bangla">সন্তুষ্ট ক্লায়েন্ট</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[var(--brand-accent)] font-mixed">
                    {(animatedCounts.messages / 1000000).toFixed(1)}M+
                  </div>
                  <div className="text-gray-600 text-sm font-bangla">মাসিক SMS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[var(--brand-accent)] font-mixed">
                    {animatedCounts.uptime}%
                  </div>
                  <div className="text-gray-600 text-sm font-bangla">আপটাইম</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection(demoSectionRef)}
                  className="btn-primary text-lg px-8 py-4 font-mixed group relative overflow-hidden"
                >
                  <span className="relative z-10">ফ্রি ডেমো SMS পাঠান</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
                <button 
                  onClick={() => scrollToSection(pricingSectionRef)}
                  className="px-8 py-4 text-lg font-semibold text-gray-700 border-2 border-gray-300 rounded-lg hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] transition-all font-mixed group"
                >
                  প্রাইসিং দেখুন
                  <svg className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              <p className="text-sm text-gray-500 font-mixed">
                💳 কোন সেটআপ ফি নেই • 🎯 ১০০ ফ্রি SMS • ⚡ ১ মিনিটে শুরু
              </p>
            </div>

            {/* Right Video */}
            <div className="order-1 lg:order-2">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group">
                {/* Video Container */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-700">
                  {!showVideo ? (
                    // Enhanced Video Thumbnail
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)]/20 to-pink-600/20"></div>
                      
                      {/* Play Button */}
                      <button
                        onClick={() => setShowVideo(true)}
                        className="relative z-10 group/play flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/95 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300"
                      >
                        <svg 
                          className="w-8 h-8 md:w-10 md:h-10 text-[var(--brand-accent)] ml-1 group-hover/play:scale-110 transition-transform" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                      
                      {/* Video Info Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 font-bangla">
                          বাল্ক SMS দিয়ে বিক্রয় বাড়ানোর কৌশল
                        </h3>
                        <p className="text-white/80 font-mixed">
                          ৫ মিনিটে শিখুন কিভাবে SMS মার্কেটিং দিয়ে ROI বাড়াবেন
                        </p>
                      </div>
                      
                      {/* Duration & Quality Badges */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-mixed">
                          ৫:৩২
                        </div>
                        <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-mixed">
                          HD
                        </div>
                      </div>

                      {/* View Count */}
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-mixed">
                        👀 ২,৫৪৩ views
                      </div>
                    </div>
                  ) : (
                    // YouTube Video
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/MZnyjXSUX3Q?si=M5mxX1n2olzTGqHe&autoplay=1&rel=0&modestbranding=1"
                      title="বাল্ক SMS সার্ভিস গাইড"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )}
                </div>
                
                {/* Video Description */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 font-bangla">
                        SMS মার্কেটিং মাস্টারক্লাস
                      </h4>
                      <p className="text-gray-600 text-sm font-mixed">
                        ক্যাম্পেইন তৈরি থেকে ROI ট্র্যাকিং পর্যন্ত সবকিছু
                      </p>
                    </div>
                    <a 
                      href="https://www.youtube.com/watch?v=MZnyjXSUX3Q" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium font-mixed"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-max py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 font-mixed">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            কেন আমাদের প্ল্যাটফর্ম?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-bangla">
            এন্টারপ্রাইজ গ্রেড SMS প্ল্যাটফর্ম
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 font-mixed">
            আধুনিক প্রযুক্তি, নির্ভরযোগ্য ইনফ্রাস্ট্রাকচার এবং ২৪/৭ সাপোর্ত নিয়ে 
            বাংলাদেশের #১ SMS সার্ভিস প্রোভাইডার
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-16">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-soft border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <span className="text-2xl group-hover:scale-110 transition-transform">{signal.icon}</span>
                <span className="font-semibold text-gray-800 font-mixed">{signal.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[var(--brand-accent)]/20"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-bangla group-hover:text-[var(--brand-accent)] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-mixed mb-4 leading-relaxed">
                {feature.description}
              </p>
              <p className="text-sm text-gray-500 font-mixed">
                {feature.details}
              </p>
              
              {/* Feature highlight */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-[var(--brand-accent)] font-medium font-mixed">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  এন্টারপ্রাইজ রেডি
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Demo Section */}
      <section ref={demoSectionRef} className="container-max py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-bangla">
              ফ্রি ডেমো SMS পাঠান
            </h2>
            <p className="text-xl text-gray-600 font-mixed">
              মাত্র ২ স্টেপে আমাদের সার্ভিসের গুণমান যাচাই করুন
            </p>
          </div>

          {/* Step Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? 'bg-[var(--brand-accent)] text-white' : 'bg-gray-200 text-gray-600'} font-bold transition-colors`}>
                1
              </div>
              <div className={`w-16 h-1 rounded ${currentStep >= 2 ? 'bg-[var(--brand-accent)]' : 'bg-gray-200'} transition-colors`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-[var(--brand-accent)] text-white' : 'bg-gray-200 text-gray-600'} font-bold transition-colors`}>
                2
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Demo Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <form onSubmit={handleDemoSubmit} className="space-y-6">
                {currentStep === 1 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 font-bangla">
                        আপনার ফোন নাম্বার
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="০১৭xxxxxxxx"
                          className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent font-mixed text-lg"
                          required
                        />
                        <div className="absolute left-4 top-4 text-gray-400">
                          📱
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 font-bangla">
                        আপনার টেস্ট মেসেজ
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="আপনার ব্যবসার নাম এবং একটি বিশেষ অফার লিখুন..."
                        rows={4}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent font-mixed resize-none"
                        required
                      />
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-500 font-mixed">
                          {message.length}/160 অক্ষর
                        </span>
                        <span className="text-[var(--brand-accent)] font-mixed">
                          খরচ: ফ্রি
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-bangla">
                      প্রস্তুত!
                    </h3>
                    <p className="text-gray-600 font-mixed mb-6">
                      আপনার ফোনে ডেমো SMS পাঠাতে নিচের বাটনে ক্লিক করুন
                    </p>
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4 font-mixed group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {currentStep === 1 ? 'পরবর্তী ধাপ' : 'ডেমো SMS পাঠান'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </form>
            </div>

            {/* SMS Preview */}
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold font-bangla">SMS প্রিভিউ</h4>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-green-600 rounded-lg p-4 max-w-xs ml-auto">
                  <p className="text-sm font-mixed">{message || 'আপনার মেসেজ এখানে দেখাবে...'}</p>
                  <div className="text-xs opacity-75 mt-2 font-mixed">
                    পাঠানো হবে: {phoneNumber || '০১৭xxxxxxxx'}
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 font-bangla">
                  ডেমো SMS এর সুবিধা:
                </h4>
                <div className="space-y-3">
                  {[
                    'তাৎক্ষণিক ডেলিভারি টেস্ট',
                    'মেসেজ কোয়ালিটি যাচাই',
                    'কোন খরচ বা লুকানো চার্জ নেই',
                    'রিয়েল-টাইম ডেলিভারি রিপোর্ট'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[var(--brand-accent)] rounded-full"></div>
                      <span className="text-gray-700 font-mixed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section ref={pricingSectionRef} className="container-max py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 font-mixed">
            💰 সাশ্রয়ী মূল্যে প্রিমিয়াম সার্ভিস
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-bangla">
            আপনার বাজেট অনুযায়ী প্ল্যান
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-mixed">
            কোন লুকানো খরচ নেই। যেকোনো সময় আপগ্রেড বা ডাউনগ্রেড করুন।
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium font-mixed ${!isYearly ? 'text-[var(--brand-accent)]' : 'text-gray-500'}`}>
              মাসিক
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors ${isYearly ? 'bg-[var(--brand-accent)]' : 'bg-gray-300'}`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${isYearly ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`font-medium font-mixed ${isYearly ? 'text-[var(--brand-accent)]' : 'text-gray-500'}`}>
              বার্ষিক
            </span>
            {isYearly && (
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium font-mixed">
                ২০% সাশ্রয়
              </div>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {smsPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-[var(--brand-accent)] transform scale-105 z-10' 
                  : 'border-gray-200 hover:border-[var(--brand-accent)]/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[var(--brand-accent)] to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold font-bangla shadow-lg">
                    🔥 {plan.badge}
                  </div>
                </div>
              )}
              
              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-bangla">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 font-mixed mb-4">
                    {plan.subtitle}
                  </p>
                  
                  {/* Pricing */}
                  <div className="relative">
                    <div className="text-4xl font-bold text-[var(--brand-accent)] mb-2 font-mixed">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </div>
                    <div className="text-gray-600 font-mixed mb-2">
                      {plan.smsCount}
                    </div>
                    <div className="text-sm text-gray-500 font-mixed">
                      প্রতি SMS {plan.perSms}
                    </div>
                    
                    {/* Savings Badge */}
                    {isYearly && (
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {calculateSavings(plan)}% সাশ্রয়
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-mixed text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <ul className="space-y-2 mb-8 pb-6 border-b border-gray-100">
                    {plan.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="font-mixed">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* CTA Button */}
                <button 
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all font-mixed ${
                    plan.popular 
                      ? 'bg-[var(--brand-accent)] text-white hover:bg-red-600 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 text-[var(--brand-text)] hover:bg-[var(--brand-accent)] hover:text-white border-2 border-transparent hover:border-[var(--brand-accent)]'
                  }`}
                >
                  {selectedPlan === plan.id ? '✓ নির্বাচিত' : 'এই প্ল্যান নিন'}
                </button>

                {/* Money Back Guarantee */}
                <div className="text-center mt-4">
                  <p className="text-xs text-gray-500 font-mixed">
                    💰 ৩০ দিনের মানি-ব্যাক গ্যারান্টি
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-bangla">
              কাস্টম প্ল্যান প্রয়োজন?
            </h3>
            <p className="text-gray-600 font-mixed mb-6">
              মাসে ১ লাখের বেশি SMS পাঠান? এন্টারপ্রাইজ ডিসকাউন্ট এবং ডেডিকেটেড সাপোর্ট পান।
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors font-mixed">
              কাস্টম কোট চান
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container-max py-20">
        <div className="relative bg-gradient-to-br from-[var(--brand-accent)] via-pink-600 to-red-700 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
            <div className="absolute top-32 right-16 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute bottom-16 left-32 w-12 h-12 border border-white rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 border border-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-bangla">
              আজই শুরু করুন SMS মার্কেটিং
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-mixed max-w-3xl mx-auto">
              ১০০+ ফ্রি SMS নিয়ে ৫ মিনিটেই অ্যাকাউন্ট খুলুন। 
              কোন ক্রেডিট কার্ড লাগবে না।
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="bg-white text-[var(--brand-accent)] px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all font-mixed group">
                <span className="mr-2">🚀</span>
                ফ্রি অ্যাকাউন্ট তৈরি করুন
                <svg className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[var(--brand-accent)] transition-colors font-mixed">
                <span className="mr-2">📞</span>
                সেলস টিমের সাথে কথা বলুন
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-mixed">কোন সেটআপ ফি নেই</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-mixed">যেকোনো সময় ক্যান্সেল করুন</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-mixed">২৪/৭ বাংলা সাপোর্ট</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}