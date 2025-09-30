import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    service: 'Landing Page',
    additionalRequirements: '',
    paymentMethod: 'bkash'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get service from URL parameters when component mounts
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const serviceParam = queryParams.get('service');
    const priceParam = queryParams.get('price');
    
    if (serviceParam) {
      setFormData(prevData => ({
        ...prevData,
        service: serviceParam,
      }));
      
      // Store price for display
      if (priceParam) {
        setSelectedPrice(priceParam);
      }
    }
  }, [location]);
  
  // Component to display price if available
  const PriceDisplay = () => {
    if (!selectedPrice) return null;
    
    return (
      <div className="mt-4 mb-3 py-3 px-5 bg-gradient-to-r from-[var(--brand-accent)]/10 to-[var(--brand-bg)]/60 rounded-lg inline-block mx-auto shadow-sm border border-[var(--brand-accent)]/10 glow-animation">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--brand-accent)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-lg font-semibold text-gray-700">সার্ভিস: <span className="text-[var(--brand-accent)] font-bold slide-in-right">{formData.service}</span></span>
          </div>

          <span className="hidden md:inline text-gray-400">|</span>
          
          <div className="flex items-center float-animation">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--brand-accent)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg font-semibold text-gray-700">মূল্য: <span className="text-[var(--brand-accent)] font-bold text-xl slide-in-left">{selectedPrice}</span></span>
          </div>
        </div>
      </div>
    );
  };

  const serviceOptions = [
    'Landing Page',
    'E-commerce Website',
    'Business Website',
    'Domain & Hosting',
    'Website Maintenance',
    'Custom Development'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Add focus style handler
  const [focusedField, setFocusedField] = useState(null);
  
  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };
  
  const handleBlur = () => {
    setFocusedField(null);
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      tempErrors.fullName = 'নাম প্রয়োজন';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'ইমেইল প্রয়োজন';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'সঠিক ইমেইল দিন';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'ফোন নম্বর প্রয়োজন';
      isValid = false;
    } else if (!/^01[3-9]\d{8}$/.test(formData.phone)) {
      tempErrors.phone = 'সঠিক বাংলাদেশী ফোন নম্বর দিন';
      isValid = false;
    }

    if (!formData.address.trim()) {
      tempErrors.address = 'ঠিকানা প্রয়োজন';
      isValid = false;
    }

    if (!formData.city.trim()) {
      tempErrors.city = 'শহর প্রয়োজন';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds and redirect
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            service: 'Landing Page',
            additionalRequirements: '',
            paymentMethod: 'bkash'
          });
          setIsSubmitted(false);
          // Redirect to home or thank you page
          navigate('/');
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[var(--brand-bg)] to-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6 md:p-10 hover:border-[var(--brand-accent)]/20 transition-all duration-300 animate-[fadeIn_0.5s_ease-out]">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-text)]">
              পেমেন্ট ফর্ম
            </h1>
            <PriceDisplay />
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              আপনার সার্ভিস অর্ডার করতে নিচের তথ্য পূরণ করুন
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-200 rounded-lg p-8 text-center shadow-lg animate-[fadeIn_0.5s_ease-out]">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">অর্ডার সফলভাবে সম্পন্ন হয়েছে!</h3>
              <p className="text-green-700 text-lg">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। ধন্যবাদ!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={`block text-sm font-medium flex items-center transition-colors duration-200 ${focusedField === 'fullName' ? 'text-[var(--brand-accent)]' : 'text-gray-700'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-[var(--brand-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    পুরো নাম
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => handleFocus('fullName')}
                      onBlur={handleBlur}
                      className={`shadow-sm block w-full sm:text-sm rounded-md p-3 transition-all duration-200 border-2 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--brand-accent)]/30 focus:border-[var(--brand-accent)] hover:border-[var(--brand-accent)]/70 ${errors.fullName ? 'border-red-400' : 'border-gray-300'}`}
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-600 bg-red-50 px-2 py-1 rounded-md animate-[fadeIn_0.3s_ease-out]">{errors.fullName}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium flex items-center transition-colors duration-200 ${focusedField === 'email' ? 'text-[var(--brand-accent)]' : 'text-gray-700'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-[var(--brand-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    ইমেইল
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className={`shadow-sm block w-full sm:text-sm rounded-md p-3 transition-all duration-200 border-2 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--brand-accent)]/30 focus:border-[var(--brand-accent)] hover:border-[var(--brand-accent)]/70 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600 bg-red-50 px-2 py-1 rounded-md animate-[fadeIn_0.3s_ease-out]">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className={`block text-sm font-medium flex items-center transition-colors duration-200 ${focusedField === 'phone' ? 'text-[var(--brand-accent)]' : 'text-gray-700'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-[var(--brand-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    ফোন নম্বর
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                      className={`shadow-sm block w-full sm:text-sm rounded-md p-3 transition-all duration-200 border-2 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--brand-accent)]/30 focus:border-[var(--brand-accent)] hover:border-[var(--brand-accent)]/70 ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600 bg-red-50 px-2 py-1 rounded-md animate-[fadeIn_0.3s_ease-out]">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className={`block text-sm font-medium flex items-center transition-colors duration-200 ${focusedField === 'city' ? 'text-[var(--brand-accent)]' : 'text-gray-700'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-[var(--brand-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                    শহর
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      onFocus={() => handleFocus('city')}
                      onBlur={handleBlur}
                      className={`shadow-sm block w-full sm:text-sm rounded-md p-3 transition-all duration-200 border-2 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--brand-accent)]/30 focus:border-[var(--brand-accent)] hover:border-[var(--brand-accent)]/70 ${errors.city ? 'border-red-400' : 'border-gray-300'}`}
                    />
                    {errors.city && <p className="mt-1 text-sm text-red-600 bg-red-50 px-2 py-1 rounded-md animate-[fadeIn_0.3s_ease-out]">{errors.city}</p>}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="address" className={`block text-sm font-medium flex items-center transition-colors duration-200 ${focusedField === 'address' ? 'text-[var(--brand-accent)]' : 'text-gray-700'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-[var(--brand-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    ঠিকানা
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      onFocus={() => handleFocus('address')}
                      onBlur={handleBlur}
                      className={`shadow-sm block w-full sm:text-sm rounded-md p-3 transition-all duration-200 border-2 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--brand-accent)]/30 focus:border-[var(--brand-accent)] hover:border-[var(--brand-accent)]/70 ${errors.address ? 'border-red-400' : 'border-gray-300'}`}
                    />
                    {errors.address && <p className="mt-1 text-sm text-red-600 bg-red-50 px-2 py-1 rounded-md animate-[fadeIn_0.3s_ease-out]">{errors.address}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={`block text-sm font-medium flex items-center transition-colors duration-200 ${focusedField === 'service' ? 'text-[var(--brand-accent)]' : 'text-gray-700'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-[var(--brand-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    সার্ভিস
                  </label>
                  <div className="mt-1">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => handleFocus('service')}
                      onBlur={handleBlur}
                      className="shadow-sm block w-full sm:text-sm border-2 border-gray-300 bg-slate-50 rounded-md p-3 transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-[var(--brand-accent)]/30 focus:border-[var(--brand-accent)] hover:border-[var(--brand-accent)]/70"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-[var(--brand-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                    পেমেন্ট মেথড
                  </label>
                  <div className="mt-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div 
                        className={`relative px-3 py-2 flex items-center border rounded-md cursor-pointer transition-all duration-300 ${formData.paymentMethod === 'bkash' ? 'border-[var(--brand-accent)] bg-[var(--brand-accent)]/5 shadow-md' : 'border-gray-300 hover:border-[var(--brand-accent)]/50 hover:bg-gray-50'}`}
                        onClick={() => handleChange({target: {name: 'paymentMethod', value: 'bkash'}})}
                      >
                        <div className="w-8 h-8 flex-shrink-0 mr-2 rounded-full bg-pink-100 flex items-center justify-center overflow-hidden">
                          <span className="font-bold text-pink-600">bKa</span>
                        </div>
                        <span className="text-sm font-medium">বিকাশ</span>
                        {formData.paymentMethod === 'bkash' && (
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[var(--brand-accent)] animate-[fadeIn_0.3s_ease-out]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div 
                        className={`relative px-3 py-2 flex items-center border rounded-md cursor-pointer transition-all duration-300 ${formData.paymentMethod === 'nagad' ? 'border-[var(--brand-accent)] bg-[var(--brand-accent)]/5 shadow-md' : 'border-gray-300 hover:border-[var(--brand-accent)]/50 hover:bg-gray-50'}`}
                        onClick={() => handleChange({target: {name: 'paymentMethod', value: 'nagad'}})}
                      >
                        <div className="w-8 h-8 flex-shrink-0 mr-2 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                          <span className="font-bold text-orange-600">Na</span>
                        </div>
                        <span className="text-sm font-medium">নগদ</span>
                        {formData.paymentMethod === 'nagad' && (
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[var(--brand-accent)] animate-[fadeIn_0.3s_ease-out]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div 
                        className={`relative px-3 py-2 flex items-center border rounded-md cursor-pointer transition-all duration-300 ${formData.paymentMethod === 'rocket' ? 'border-[var(--brand-accent)] bg-[var(--brand-accent)]/5 shadow-md' : 'border-gray-300 hover:border-[var(--brand-accent)]/50 hover:bg-gray-50'}`}
                        onClick={() => handleChange({target: {name: 'paymentMethod', value: 'rocket'}})}
                      >
                        <div className="w-8 h-8 flex-shrink-0 mr-2 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
                          <span className="font-bold text-purple-600">Ro</span>
                        </div>
                        <span className="text-sm font-medium">রকেট</span>
                        {formData.paymentMethod === 'rocket' && (
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[var(--brand-accent)] animate-[fadeIn_0.3s_ease-out]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div 
                        className={`relative px-3 py-2 flex items-center border rounded-md cursor-pointer transition-all duration-300 ${formData.paymentMethod === 'bank' ? 'border-[var(--brand-accent)] bg-[var(--brand-accent)]/5 shadow-md' : 'border-gray-300 hover:border-[var(--brand-accent)]/50 hover:bg-gray-50'}`}
                        onClick={() => handleChange({target: {name: 'paymentMethod', value: 'bank'}})}
                      >
                        <div className="w-8 h-8 flex-shrink-0 mr-2 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                          <span className="font-bold text-blue-600">Ba</span>
                        </div>
                        <span className="text-sm font-medium">ব্যাংক</span>
                        {formData.paymentMethod === 'bank' && (
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[var(--brand-accent)] animate-[fadeIn_0.3s_ease-out]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    <input
                      type="hidden"
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="additionalRequirements" className={`block text-sm font-medium flex items-center transition-colors duration-200 ${focusedField === 'additionalRequirements' ? 'text-[var(--brand-accent)]' : 'text-gray-700'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-[var(--brand-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    অতিরিক্ত প্রয়োজনীয়তা (ঐচ্ছিক)
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="additionalRequirements"
                      name="additionalRequirements"
                      rows={4}
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      onFocus={() => handleFocus('additionalRequirements')}
                      onBlur={handleBlur}
                      className="shadow-sm block w-full sm:text-sm border-2 border-gray-300 bg-slate-50 rounded-md p-3 transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-[var(--brand-accent)]/30 focus:border-[var(--brand-accent)] hover:border-[var(--brand-accent)]/70"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="bg-gradient-to-br from-[#F7F7FC] to-[var(--brand-bg)]/30 border border-[#EAEAEF] rounded-lg p-4 shadow-inner hover:shadow-md hover:border-[var(--brand-accent)]/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--brand-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    পেমেন্ট নির্দেশাবলী
                  </h3>
                  
                  {/* Payment Details Card - Changes based on selected payment method */}
                  <div className="mb-4 border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-[fadeIn_0.5s_ease-out]">
                    <div className={`p-3 text-white font-medium flex items-center ${
                      formData.paymentMethod === 'bkash' ? 'bg-pink-600' :
                      formData.paymentMethod === 'nagad' ? 'bg-orange-600' :
                      formData.paymentMethod === 'rocket' ? 'bg-purple-600' : 'bg-blue-600'
                    }`}>
                      {formData.paymentMethod === 'bkash' && (
                        <>
                          <div className="w-8 h-8 mr-2 bg-white rounded-full flex items-center justify-center">
                            <span className="font-bold text-pink-600">bKa</span>
                          </div>
                          <span>বিকাশ পেমেন্ট</span>
                        </>
                      )}
                      {formData.paymentMethod === 'nagad' && (
                        <>
                          <div className="w-8 h-8 mr-2 bg-white rounded-full flex items-center justify-center">
                            <span className="font-bold text-orange-600">Na</span>
                          </div>
                          <span>নগদ পেমেন্ট</span>
                        </>
                      )}
                      {formData.paymentMethod === 'rocket' && (
                        <>
                          <div className="w-8 h-8 mr-2 bg-white rounded-full flex items-center justify-center">
                            <span className="font-bold text-purple-600">Ro</span>
                          </div>
                          <span>রকেট পেমেন্ট</span>
                        </>
                      )}
                      {formData.paymentMethod === 'bank' && (
                        <>
                          <div className="w-8 h-8 mr-2 bg-white rounded-full flex items-center justify-center">
                            <span className="font-bold text-blue-600">Ba</span>
                          </div>
                          <span>ব্যাংক ট্রান্সফার</span>
                        </>
                      )}
                    </div>

                    <div className="p-4 bg-white">
                      <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-gray-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">নম্বর / অ্যাকাউন্ট:</span>
                      </div>
                      <div className="bg-gray-100 border border-gray-200 rounded p-2 mb-3 flex items-center justify-between">
                        <span className="font-mono text-sm select-all">
                          {formData.paymentMethod === 'bank' ? '1234-5678-9012-3456' : '01712-345678'}
                        </span>
                        <button 
                          type="button" 
                          onClick={() => { 
                            navigator.clipboard.writeText(formData.paymentMethod === 'bank' ? '1234-5678-9012-3456' : '01712-345678');
                            alert('নম্বর কপি করা হয়েছে!');
                          }} 
                          className="text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                        >
                          কপি
                        </button>
                      </div>

                      <div className="flex items-center mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-gray-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <span className="text-sm font-medium">অ্যাকাউন্ট টাইপ:</span>
                      </div>
                      <p className="text-sm ml-7 mb-2 text-gray-700">
                        {formData.paymentMethod === 'bank' ? 'কারেন্ট অ্যাকাউন্ট' : 'পার্সোনাল'}
                      </p>

                      {formData.paymentMethod === 'bank' && (
                        <>
                          <div className="flex items-center mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-gray-600">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                            <span className="text-sm font-medium">ব্যাংক:</span>
                          </div>
                          <p className="text-sm ml-7 mb-2 text-gray-700">ডাচ বাংলা ব্যাংক লিমিটেড</p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-700">
                    <p>১. আমাদের পেমেন্ট মেথড থেকে আপনার পছন্দের পেমেন্ট মেথড সিলেক্ট করুন।</p>
                    <p>২. উপরের নম্বরে / অ্যাকাউন্টে পেমেন্ট করুন এবং ফর্ম সাবমিট করুন।</p>
                    <p>৩. পেমেন্ট কনফার্মেশনের পরে আমরা আপনার কাজ শুরু করব।</p>
                    <p className="font-medium">যেকোনো প্রয়োজনে যোগাযোগ: <span className="text-[var(--brand-accent)]">০১৭১২-৩৪৫৬৭৮</span></p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent)]/90 hover:from-[var(--brand-accent)]/90 hover:to-[var(--brand-accent)] hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand-accent)] transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'animate-[pulse_2s_infinite]'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      প্রসেসিং...
                    </>
                  ) : (
                    <>
                      <span className="absolute -top-1 -right-1 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-white/30"></span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      অর্ডার কনফার্ম করুন
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              * সকল তথ্য সুরক্ষিত রাখা হবে এবং শুধুমাত্র সার্ভিস প্রদানের কাজে ব্যবহার করা হবে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;