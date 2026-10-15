import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, CheckCircle2, ExternalLink } from 'lucide-react';
import {
  RESTAURANT_PHONE,
  RESTAURANT_PHONE_TEL,
  RESTAURANT_WHATSAPP_NUMBER,
  RESTAURANT_ADDRESS,
  GOOGLE_MAPS_SEARCH_URL,
  GOOGLE_MAPS_EMBED_URL
} from '../utils/whatsapp';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF2EC] text-[#D9531E] text-xs font-bold tracking-wider uppercase mb-3 border border-[#D9531E]/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Dakshin Sutra</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A201C] tracking-tight mb-4">
            Visit Us in Sarkanda, Bilaspur
          </h2>
          <p className="text-sm sm:text-base text-[#1A201C]/75 leading-relaxed">
            Stop by for hot dosas and brass-davarah filter coffee, or call us ahead for quick takeaway orders.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
            
            <div className="space-y-6">
              
              {/* Restaurant Name */}
              <div className="border-b border-slate-200 pb-4">
                <h3 className="font-serif text-2xl font-black text-[#1A201C]">
                  Dakshin Sutra Cafe
                </h3>
                <p className="text-xs text-[#D9531E] font-black uppercase tracking-wider mt-0.5">
                  Dosa · Idli · Filter Coffee
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-[#D9531E] flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A201C] mb-1">
                    Address
                  </h4>
                  <p className="text-xs text-[#1A201C]/80 leading-relaxed">
                    {RESTAURANT_ADDRESS}
                  </p>
                  <p className="text-[11px] text-[#64748B] mt-1 font-medium">
                    Landmark: Near Seepat Chowk, beside Laxmi Medical Hall
                  </p>
                </div>
              </div>

              {/* Phone & Direct Call */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-[#D9531E] flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A201C] mb-1">
                    Phone & Call Orders
                  </h4>
                  <a
                    href={RESTAURANT_PHONE_TEL}
                    className="text-sm font-extrabold text-[#1A201C] hover:text-[#D9531E] transition-colors"
                  >
                    {RESTAURANT_PHONE}
                  </a>
                  <p className="text-[11px] text-[#64748B] mt-0.5">
                    Click to call directly from your device
                  </p>
                </div>
              </div>

              {/* Hours / Schedule */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-[#D9531E] flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A201C] mb-1">
                    Operating Hours
                  </h4>
                  <p className="text-xs text-[#1A201C]/80">
                    Listing indicates closing at <strong>10:00 PM</strong>.
                  </p>
                  <p className="text-[11px] text-[#64748B] mt-1 italic">
                    * Hours may vary on festivals or by day. Please call or message to confirm current daily schedule.
                  </p>
                </div>
              </div>

              {/* Services Available */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-xs font-bold text-[#1A201C] uppercase tracking-wider mb-2">
                  Available Services
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-[#1A201C]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FDF2EC] border border-[#D9531E]/20 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Dine-in
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FDF2EC] border border-[#D9531E]/20 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Takeaway
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FDF2EC] border border-[#D9531E]/20 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> WhatsApp Orders
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_PHONE_TEL}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#1E1611] text-white text-xs font-bold hover:bg-black transition-colors shadow-xs min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-[#E5A93C]" />
                <span>Call {RESTAURANT_PHONE}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Dakshin Sutra Cafe! I have a question about visiting.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#D9531E] text-white text-xs font-bold hover:bg-[#C24312] transition-colors min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Directions Card */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md relative overflow-hidden">
            
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A201C]">
                    Location & Directions
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Sarkanda, Bilaspur, Chhattisgarh 495006
                  </p>
                </div>
                <a
                  href={GOOGLE_MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D9531E] text-white text-xs font-bold hover:bg-[#C24312] transition-colors shadow-2xs min-h-[44px]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Live Interactive Google Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white relative aspect-[16/10] sm:aspect-[16/9] shadow-inner group">
                <iframe
                  title="Dakshin Sutra Cafe Google Map Location"
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating location indicator pill */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1A201C]/90 text-white text-[11px] font-bold backdrop-blur-md shadow-md border border-white/10 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Dakshin Sutra Cafe • Sarkanda</span>
                </div>

                {/* Floating Open in Maps button */}
                <a
                  href={GOOGLE_MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#D9531E] hover:bg-[#C24312] text-white text-xs font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
                  title="Open in Google Maps App"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Direction Assistance Notice */}
            <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-[#1A201C]">
                  Need help locating the cafe?
                </p>
                <p className="text-[11px] text-[#64748B] mt-0.5">
                  Call our cafe team directly and we will guide you from Seepat Chowk.
                </p>
              </div>

              <a
                href={GOOGLE_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs font-extrabold text-[#D9531E] hover:underline"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
