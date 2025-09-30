import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import DomainHosting from './pages/DomainHosting'
import WebDevelopment from './pages/WebDevelopment'
import BulkSMS from './pages/BulkSMS'
import LandingPageService from './pages/LandingPageService'
import PaymentForm from './pages/PaymentForm'
import Header from './components/Header'
import Footer from './components/Footer'
import ServiceProviders from './components/ServiceProviders'

function Placeholder({ title }) {
  return (
    <div className="py-16">
      <div className="container-max">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-slate-700">এই পেইজটি খুব শীঘ্রই আসছে।</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/services/domain-hosting" replace />} />
            <Route path="/services/domain-hosting" element={<DomainHosting />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/bulk-sms" element={<BulkSMS />} />
            <Route path="/services/landing-page" element={<LandingPageService />} />
            <Route path="/services/ecommerce" element={<Placeholder title="ই-কমার্স সল্যুশন" />} />
            <Route path="/services/facebook-marketing" element={<Placeholder title="ফেসবুক মার্কেটিং" />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="*" element={<Navigate to="/services/domain-hosting" replace />} />
          </Routes>
        </main>
        <ServiceProviders />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
