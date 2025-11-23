import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { Testimonial } from '../types';

export const Reviews: React.FC = () => {
  const reviews: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Jenkins",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      rating: 5,
      text: "I saved over $200 on my airport parking and hotel bundle. The AI suggestions were spot on for finding kid-friendly hotels!",
      tripType: "Family Vacation",
      date: "Oct 2023"
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      rating: 5,
      text: "Triply is my go-to for business travel. The interface is clean, and I love how I can compare so many providers at once. Highly recommended.",
      tripType: "Business Trip",
      date: "Nov 2023"
    },
    {
      id: 3,
      name: "Emma Wilson",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d2",
      rating: 5,
      text: "The free cancellation policy gave me peace of mind when my plans were uncertain. Customer support was super responsive too.",
      tripType: "Solo Travel",
      date: "Dec 2023"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Travelers Say</h2>
          <p className="text-gray-500 mt-2">Join thousands of happy travelers using Triply</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-md transition-shadow shadow-sm">
              <Quote className="absolute top-6 right-6 text-brand-orange opacity-20 w-10 h-10" />
              
              <div className="flex items-center mb-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border-2 border-gray-100 shadow-sm mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <div className="flex items-center text-xs text-green-600 font-medium">
                    <CheckCircle size={12} className="mr-1" /> Verified Traveler
                  </div>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">"{review.text}"</p>

              <div className="border-t border-gray-200 pt-4 flex justify-between text-xs text-gray-500 font-medium uppercase tracking-wide">
                <span>{review.tripType}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-brand-orange text-brand-orange rounded-full font-bold hover:bg-brand-orange hover:text-white transition-colors">
            View More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};