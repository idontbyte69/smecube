const reviewsData = [
  {
    id: 1,
    name: "রাফিউল ইসলাম",
    company: "টেক সলিউশন লিমিটেড",
    initial: "র",
    review: "SME CUBE থেকে ডোমেইন ও হোস্টিং নিয়ে খুবই সন্তুষ্ট। তাদের কাস্টমার সাপোর্ট অসাধারণ এবং ওয়েবসাইটের স্পিড চমৎকার। দাম অনেক সাশ্রয়ী।"
  },
  {
    id: 2,
    name: "সাবিনা খাতুন",
    company: "বিউটি পার্লার",
    initial: "স",
    review: "আমার বিজনেসের জন্য ডোমেইন রেজিস্ট্রেশন করেছি এখানে। পুরো প্রসেস খুব সহজ ছিল এবং ২৪/৭ সাপোর্ট পেয়েছি। হোস্টিং কোয়ালিটি একদম টপ ক্লাস।"
  },
  {
    id: 3,
    name: "মাহমুদুল হাসান",
    company: "অনলাইন শপ",
    initial: "ম",
    review: "ই-কমার্স সাইটের জন্য যে হোস্টিং নিয়েছি তাতে কোন সমস্যা হয়নি। ওয়েবসাইট লোডিং স্পিড খুবই ফাস্ট। AI টুলস গুলো অসাধারণ কাজের।"
  },
  {
    id: 4,
    name: "ফারহানা আক্তার",
    company: "ডিজিটাল এজেন্সি",
    initial: "ফ",
    review: "ক্লায়েন্টদের জন্য একাধিক ডোমেইন ও হোস্টিং নিয়েছি। প্রাইসিং খুবই রিজনেবল এবং আনলিমিটেড মেইলবক্স ফিচার চমৎকার।"
  },
  {
    id: 5,
    name: "কামরুল হুদা",
    company: "রেস্টুরেন্ট ব্যবসা",
    initial: "ক",
    review: "অটো ব্যাকআপ ফিচার জীবন বাঁচিয়ে দিয়েছে। একবার ভুলে ডেটা ডিলিট করে ফেলেছিলাম, কিন্তু সহজেই রিস্টোর করতে পেরেছি। সাপোর্ট টিম খুবই হেল্পফুল।"
  },
  {
    id: 6,
    name: "নাসির উদ্দিন",
    company: "কনসালটিং ফার্ম",
    initial: "ন",
    review: "AI ওয়েবসাইট বিল্ডার দিয়ে মিনিটেই প্রফেশনাল ওয়েবসাইট বানিয়ে ফেলেছি। SSD স্টোরেজ পারফরমেন্স অসাধারণ এবং আনমিটার্ড ব্যান্ডউইথ পেয়েছি।"
  }
]

const StarRating = () => {
  return (
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-xl shadow-soft p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand-accent)]/10 hover:-translate-y-1 cursor-pointer group">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-[var(--brand-accent)] rounded-full flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110">
          {review.initial}
        </div>
        <div className="ml-3">
          <h4 className="font-bold group-hover:text-[var(--brand-accent)] transition-colors duration-300">{review.name}</h4>
          <p className="text-sm text-slate-600">{review.company}</p>
        </div>
      </div>
      <StarRating />
      <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
        {review.review}
      </p>
    </div>
  )
}

export default function CustomerReviews() {
  return (
    <section className="py-10 md:py-12">
      <div className="container-max">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          আমাদের সন্তুষ্ট গ্রাহকদের মতামত
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}