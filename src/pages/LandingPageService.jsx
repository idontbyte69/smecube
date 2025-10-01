import { useState } from 'react';
import CustomerReviews from '../components/CustomerReviews';

const landingPageServices = [
  {
    title: 'নতুন ল্যান্ডিং পেজ',
    features: [
      'একটি সম্পূর্ণ নতুন ডিজাইন',
      'মোবাইল রেসপনসিভ ডিজাইন',
      'লিড ক্যাপচার ফর্ম',
      '৩ টি রিভিশন',
      'SEO ফ্রেন্ডলি মার্কাপ',
      '২৪/৭ সাপোর্ট'
    ],
    price: '৳ ১৫,০০০',
    deliveryTime: '৭ দিন',
    popular: true
  },
  {
    title: 'ল্যান্ডিং পেজ কাস্টমাইজেশন',
    features: [
      'বিদ্যমান পেজ আপডেট',
      'নতুন সেকশন যোগ',
      'ভিজুয়াল এলিমেন্ট পরিবর্তন',
      '২ টি রিভিশন',
      'মোবাইল অপটিমাইজেশন',
      'কনটেন্ট আপডেট'
    ],
    price: '৳ ১০,০০০',
    deliveryTime: '৪ দিন'
  },
  {
    title: 'সম্পূর্ণ ওয়েবসাইট',
    features: [
      '৫-৭ টি পেজ',
      'কাস্টম ডিজাইন',
      'রেসপনসিভ লেআউট',
      'কন্টাক্ট ফর্ম',
      'সোশ্যাল মিডিয়া ইন্টিগ্রেশন',
      'অ্যানালিটিক্স সেটআপ'
    ],
    price: '৳ ২৫,০০০+',
    deliveryTime: '১৫-২১ দিন'
  },
  {
    title: 'লিড জেনারেশন ল্যান্ডিং',
    features: [
      'অপটিমাইজড CTA বাটন',
      'হাই-কনভার্সন ডিজাইন',
      'লিড ক্যাপচার ফর্ম',
      'A/B টেস্টিং সেটআপ',
      'এনালিটিক্স ইন্টিগ্রেশন',
      'পেমেন্ট প্রসেসিং (যদি প্রয়োজন হয়)'
    ],
    price: '৳ ২০,০০০',
    deliveryTime: '১০ দিন'
  },
];

const portfolioProjects = [
  {
    id: 1,
    title: 'রেস্টুরেন্ট ল্যান্ডিং পেজ',
    imageUrl: 'https://placehold.co/600x400?text=Restaurant+Landing',
    category: 'ফুড অ্যান্ড বেভারেজ',
    description: 'একটি বিখ্যাত রেস্টুরেন্টের জন্য তৈরি করা হাই-কনভার্সন ল্যান্ডিং পেজ যা টেবিল রিজার্ভেশন ৪০% বাড়িয়েছে।',
  },
  {
    id: 2,
    title: 'ই-কমার্স প্রোডাক্ট ল্যান্ডিং',
    imageUrl: 'https://placehold.co/600x400?text=Ecommerce+Landing',
    category: 'ই-কমার্স',
    description: 'প্রিমিয়াম পণ্যের জন্য তৈরি করা উচ্চ কনভার্সন রেট সহ একটি প্রোডাক্ট ল্যান্ডিং পেজ যা বিক্রয় ৩৫% বাড়িয়েছে।',
  },
  {
    id: 3,
    title: 'স্কিল ডেভেলপমেন্ট কোর্স',
    imageUrl: 'https://placehold.co/600x400?text=Course+Landing',
    category: 'এডুকেশন',
    description: 'অনলাইন কোর্সের জন্য তৈরি করা ল্যান্ডিং পেজ যা কোর্স এনরোলমেন্ট সংখ্যা দ্বিগুণ করেছে।',
  },
  {
    id: 4,
    title: 'হেলথ অ্যান্ড ফিটনেস অ্যাপ',
    imageUrl: 'https://placehold.co/600x400?text=Fitness+App+Landing',
    category: 'হেলথ অ্যান্ড ফিটনেস',
    description: 'একটি ফিটনেস অ্যাপের জন্য ডাউনলোড রেট ৫০% বাড়ানোর জন্য বিশেষভাবে ডিজাইন করা ল্যান্ডিং পেজ।',
  },
];

const clientQuestions = [
  {
    question: 'আমার ল্যান্ডিং পেজের জন্য কী কী তথ্য দিতে হবে?',
    answer: 'আপনার ব্যবসার বিবরণ, টার্গেট অডিয়েন্স, পণ্য/সেবার মূল বৈশিষ্ট্য, প্রয়োজনীয় ইমেজ, লোগো, কী ধরনের কনভার্সন আশা করছেন (যেমন সাইনআপ, পারচেজ, ইত্যাদি), এবং আপনার পছন্দের ডিজাইন স্টাইল সম্পর্কে তথ্য দিলে আমরা দ্রুত ও সঠিকভাবে আপনার প্রয়োজন অনুযায়ী ল্যান্ডিং পেজ তৈরি করতে পারি।'
  },
  {
    question: 'একটি ল্যান্ডিং পেজ তৈরি করতে কত সময় লাগে?',
    answer: 'সাধারণত একটি সাধারণ ল্যান্ডিং পেজ তৈরি করতে ৭ দিন সময় লাগে। তবে প্রজেক্টের জটিলতা অনুসারে এই সময় কম-বেশি হতে পারে। কাস্টমাইজেশন প্রজেক্ট সাধারণত ৪ দিনে সম্পন্ন হয়, আর সম্পূর্ণ ওয়েবসাইট প্রজেক্টের জন্য ১৫-২১ দিন সময় নিতে হয়।'
  },
  {
    question: 'আমি কি আমার নিজের হোস্টিং ব্যবহার করতে পারি?',
    answer: 'হ্যাঁ, আপনি আপনার নিজের হোস্টিং ব্যবহার করতে পারেন। আমরা আপনার বিদ্যমান হোস্টিংয়ে সাইট আপলোড করে দেব। তবে আপনার যদি হোস্টিং না থাকে, তাহলে আমরা SME CUBE-এর মাধ্যমে হোস্টিং সল্যুশন সরবরাহ করতে পারি।'
  },
  {
    question: 'ডেলিভারির পর কি কোন সাপোর্ট পাওয়া যাবে?',
    answer: 'অবশ্যই! আমরা সব প্যাকেজের সাথে ৩০ দিনের টেকনিকাল সাপোর্ট প্রদান করি। এই সময়ের মধ্যে কোন ইস্যু হলে বা ছোটখাটো পরিবর্তন প্রয়োজন হলে আমরা বিনামূল্যে সহায়তা করব। দীর্ঘমেয়াদী সাপোর্টের জন্য আমাদের মেইনটেনেন্স প্যাকেজ নিতে পারেন।'
  },
  {
    question: 'আমি যদি ডিজাইনে সন্তুষ্ট না হই?',
    answer: 'আমরা সবসময় গ্রাহকের সন্তুষ্টিকে অগ্রাধিকার দিই। যদি ডিজাইনে সন্তুষ্ট না হন, তাহলে আপনার প্যাকেজের অন্তর্ভুক্ত রিভিশন সংখ্যার মধ্যে আমরা পরিবর্তন করে দেব। আমাদের লক্ষ্য আপনার প্রত্যাশা পূরণ করা।'
  }
];

export default function LandingPageService() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter projects by category
  const filteredProjects = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  // Get unique categories
  const categories = ['all', ...new Set(portfolioProjects.map(p => p.category))];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-[var(--brand-bg)] py-12 md:py-16">
        <div className="container-max text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--brand-text)]">
            হাই-কনভার্শন ল্যান্ডিং পেজ সার্ভিস
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            আপনার ব্যবসার জন্য প্রফেশনাল, আকর্ষণীয় এবং কনভার্শন-ফোকাসড ল্যান্ডিং পেজ তৈরি করুন। আমরা আপনার লিড জেনারেশন এবং সেলস বৃদ্ধিতে সহায়তা করব।
          </p>
          <div className="mt-8">
            <a href="https://my.smecube.com/authentication/login" className="btn-primary text-lg px-8 py-3">
              আরও জানুন
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের ল্যান্ডিং পেজ সার্ভিসসমূহ</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              আপনার প্রয়োজন অনুযায়ী বিভিন্ন ধরনের ল্যান্ডিং পেজ সার্ভিস। সবগুলো সার্ভিসে কনভার্শন রেট বাড়ানোর লক্ষ্যে ডিজাইন করা হয়।
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {landingPageServices.map((service, i) => (
              <div key={i} className={`rounded-xl bg-white p-6 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${service.popular ? 'border-[var(--brand-accent)] shadow-md shadow-[var(--brand-accent)]/10' : 'border-slate-100 shadow-md hover:border-slate-300'}`}>
                {service.popular && (
                  <div className="text-xs uppercase tracking-wider inline-block mb-3 px-3 py-1 rounded-full bg-[var(--brand-accent)] text-white">জনপ্রিয় সার্ভিস</div>
                )}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <ul className="space-y-2 mb-5 list-disc list-inside text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="mb-4">
                  <span className="block text-sm">ডেলিভারি টাইম: {service.deliveryTime}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-xl md:text-2xl font-extrabold text-[var(--brand-accent)]">{service.price}</div>
                  <div className="flex flex-wrap gap-2">
                    <a href={`/payment?service=${encodeURIComponent(service.title)}&price=${encodeURIComponent(service.price)}`} className="btn-primary whitespace-nowrap flex-1">অর্ডার করুন</a>
                    <a href="#contact" className="btn-outline whitespace-nowrap flex-1">কোয়োট রিকোয়েস্ট</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের ল্যান্ডিং পেজের সুবিধাসমূহ</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              আমাদের ল্যান্ডিং পেজগুলো আপনার ব্যবসার কনভার্শন রেট বাড়াতে সাহায্য করে যা বিক্রয় বৃদ্ধি এবং ROI উন্নত করে।
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-200 hover:border-[var(--brand-accent)]">
              <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[var(--brand-accent)]">
                  <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">উচ্চ কনভার্শন রেট</h3>
              <p className="text-gray-600">A/B টেস্টিং এবং ডাটা-ড্রিভেন ডিজাইন দ্বারা আপনার সাইটের কনভার্শন রেট বাড়ান।</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-200 hover:border-[var(--brand-accent)]">
              <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[var(--brand-accent)]">
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">ডাটা ট্র্যাকিং</h3>
              <p className="text-gray-600">এনালিটিক্স ইন্টিগ্রেশন ও হিটম্যাপ দ্বারা ইউজার বিহেভিয়ার মনিটরিং ও পারফরম্যান্স উন্নয়ন।</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-200 hover:border-[var(--brand-accent)]">
              <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[var(--brand-accent)]">
                  <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                  <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">১০০% রেসপনসিভ</h3>
              <p className="text-gray-600">মোবাইল, ট্যাবলেট এবং ডেস্কটপে পারফেক্ট ভিউ সহ ক্রস-ব্রাউজার কম্প্যাটিবিলিটি।</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-200 hover:border-[var(--brand-accent)]">
              <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[var(--brand-accent)]">
                  <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                  <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">কনভার্শন ফোকাসড ডিজাইন</h3>
              <p className="text-gray-600">ইউজার ফ্রেন্ডলি ইন্টারফেস সহ এমন ডিজাইন যা ভিজিটরদের কাস্টমারে রূপান্তরিত করে।</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-200 hover:border-[var(--brand-accent)]">
              <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[var(--brand-accent)]">
                  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">দ্রুত লোডিং টাইম</h3>
              <p className="text-gray-600">SEO-ফ্রেন্ডলি কোড স্ট্রাকচার ও অপটিমাইজড ইমেজ দ্বারা দ্রুত লোডিং ও বেটার ইউজার এক্সপেরিয়েন্স।</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-200 hover:border-[var(--brand-accent)]">
              <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[var(--brand-accent)]">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">টার্গেটেড অডিয়েন্স ফোকাস</h3>
              <p className="text-gray-600">আপনার টার্গেটেড কাস্টমার সেগমেন্ট অনুযায়ী ল্যান্ডিং পেজ ডিজাইন করা হয়।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের সাম্প্রতিক কাজ</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              আমাদের তৈরি করা কিছু ল্যান্ডিং পেজ যা আমাদের ক্লায়েন্টদের ব্যবসা বৃদ্ধিতে সাহায্য করেছে।
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[var(--brand-accent)] text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'সব' : category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-slate-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <span className="text-xs px-2 py-1 rounded bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                  <button className="mt-3 text-[var(--brand-accent)] text-sm font-medium hover:underline inline-flex items-center group-hover:translate-x-1 transition-transform">
                    বিস্তারিত দেখুন
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 group-hover:ml-2 transition-all">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">সাধারণ জিজ্ঞাসা</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              আমাদের ল্যান্ডিং পেজ সার্ভিস সম্পর্কে ক্লায়েন্টদের সাধারণ প্রশ্নের উত্তর।
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            {clientQuestions.map((faq, index) => (
              <div key={index} className="py-5">
                <details className="group hover:bg-white hover:shadow-md transition-all duration-300 p-3 rounded-xl">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-bold">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 pl-4">{faq.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <CustomerReviews />
    </div>
  );
}