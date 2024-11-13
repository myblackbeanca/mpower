import React, { useState, useEffect } from 'react';
import { Share2, Play, Heart, ChevronLeft, ChevronRight, PartyPopper, Calendar, Users, Music } from 'lucide-react';
import { Header } from './Header';
import Footer from './Footer';

const bundleItems = [
  {
    title: "Limited Edition Vinyl",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80",
    description: "Exclusive pressing with custom artwork"
  },
  {
    title: "Collector's T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
    description: "100% organic cotton with unique design"
  },
  {
    title: "Digital Content Pack",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
    description: "Exclusive remixes and behind-the-scenes"
  }
];

const exclusiveOffers = [
  {
    title: "VIP Event Access",
    description: "50% off tickets to our upcoming live event",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
    icon: Calendar,
    price: "49",
    originalPrice: "99"
  },
  {
    title: "Studio Session",
    description: "Private studio experience with the artist",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80",
    icon: Music,
    action: "Invite Friends"
  }
];

export default function ThankYouPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showShareBanner, setShowShareBanner] = useState(false);
  const [showCelebration, setShowCelebration] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bundleItems.length);
    }, 5000);

    // Hide celebration after 5 seconds
    const celebrationTimer = setTimeout(() => {
      setShowCelebration(false);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(celebrationTimer);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bundleItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bundleItems.length) % bundleItems.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <Header />

      {/* Celebration Overlay */}
      {showCelebration && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="animate-bounce">
            <PartyPopper className="text-purple-400 w-24 h-24" />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="bg-black/60 backdrop-blur-sm py-24 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Thank You for Powering This Release!
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your support brings us one step closer to creating something extraordinary. 
              Welcome to our exclusive community!
            </p>
          </div>
        </div>
      </div>

      {/* Bundle Gallery */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Your Exclusive Bundle</h2>
        <p className="text-gray-400 text-center mb-12">Here's what's included in your supporter package</p>
        <div className="relative">
          <div className="overflow-hidden rounded-xl aspect-video relative">
            <div 
              className="flex transition-transform duration-500 h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {bundleItems.map((item, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Unboxing Experience */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Unboxing Experience</h2>
          <p className="text-gray-400 text-center mb-12">Get a sneak peek at your exclusive supporter bundle</p>
          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/378778231"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6">A Personal Thank You</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Your support means everything to us. You're not just backing a project – you're joining 
            a community of passionate music lovers who believe in the power of independent artistry. 
            We can't wait to share this journey with you.
          </p>
          <div className="flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80" 
              alt="Artist"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">Alex Rivers</h3>
              <p className="text-gray-400 text-sm">Artist & Producer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Offers */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Exclusive Offers</h2>
        <p className="text-gray-400 text-center mb-12">Special perks available only to our supporters</p>
        <div className="grid md:grid-cols-2 gap-8">
          {exclusiveOffers.map((offer, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl"
            >
              <img 
                src={offer.image} 
                alt={offer.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 flex flex-col justify-end">
                <offer.icon className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-300 mb-4">{offer.description}</p>
                {offer.price ? (
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold">${offer.price}</span>
                    <span className="text-gray-400 line-through">${offer.originalPrice}</span>
                  </div>
                ) : null}
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2 w-fit">
                  {offer.price ? <Play size={18} /> : <Users size={18} />}
                  {offer.price ? "Get Tickets Now" : offer.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share Banner */}
      <section className="py-16 bg-purple-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Share Your Support</h2>
          <div className="max-w-2xl mx-auto bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-xl overflow-hidden">
            <div className="bg-black/60 backdrop-blur-sm p-12">
              <h3 className="text-2xl font-bold mb-4">Proud Supporter of Ethereal Echoes</h3>
              <p className="text-gray-300 mb-8">Join me in supporting this incredible musical journey!</p>
              <button 
                onClick={() => setShowShareBanner(true)}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
              >
                <Share2 size={18} />
                Share Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Share Modal */}
      {showShareBanner && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-6">Share Your Support</h3>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors">
                Share on Facebook
              </button>
              <button className="w-full bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-lg transition-colors">
                Share on Twitter
              </button>
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-colors">
                Share on Instagram
              </button>
              <button 
                onClick={() => setShowShareBanner(false)}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}