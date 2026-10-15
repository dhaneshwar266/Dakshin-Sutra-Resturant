import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, FileText, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';
import { dispatchReservation } from '../services/reservationService';

// Module constant for minimum date attribute
const getTodayStr = () => new Date().toISOString().split('T')[0];

export default function ReservationForm() {
  const [formData, setFormData] = useState(() => ({
    name: '',
    phone: '',
    date: getTodayStr(),
    time: '06:00 PM',
    guests: '2',
    specialRequests: '',
  }));

  const [errors, setErrors] = useState({});
  const [submittedResult, setSubmittedResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = dispatchReservation(formData);
    if (!result.success) {
      setErrors(result.errors || {});
      return;
    }

    setErrors({});
    setSubmittedResult(result);

    // Open WhatsApp in a new tab safely
    window.open(result.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmittedResult(null);
    setErrors({});
    setFormData({
      name: '',
      phone: '',
      date: getTodayStr(),
      time: '06:00 PM',
      guests: '2',
      specialRequests: '',
    });
  };

  return (
    <section id="reservation" className="py-16 md:py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF2EC] text-[#D9531E] text-xs font-bold tracking-wider uppercase mb-3 border border-[#D9531E]/20">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table Reservation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1A201C] tracking-tight mb-3">
            Reserve a Table
          </h2>
          <p className="text-sm text-[#1A201C]/75 leading-relaxed">
            Planning a South Indian breakfast gathering or evening coffee meetup? Request your table in advance directly with Dakshin Sutra Cafe via WhatsApp.
          </p>
        </div>

        {/* Reservation Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          
          {submittedResult ? (
            /* Request Prepared State */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h3 className="font-serif text-2xl font-extrabold text-[#1A201C] mb-2">
                Reservation Request Prepared!
              </h3>
              <p className="text-sm text-[#1A201C]/80 max-w-md mx-auto mb-6 leading-relaxed">
                Your reservation request was formatted and opened in WhatsApp. Please send the prefilled message so our team can review and confirm.
              </p>

              {/* Request Recap */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 max-w-md mx-auto mb-6 text-xs text-left space-y-2 text-[#1A201C] shadow-2xs">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
                <p><strong>Guests:</strong> {formData.guests} people</p>
                {formData.specialRequests && <p><strong>Special Requests:</strong> {formData.specialRequests}</p>}
                <div className="pt-2 border-t border-slate-200 text-[11px] text-[#D9531E] font-semibold">
                  * Note: Table is subject to final confirmation by Dakshin Sutra Cafe upon checking seating availability.
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={submittedResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D9531E] text-white text-xs font-bold hover:bg-[#C24312] transition-all shadow-md min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Re-open WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3.5 rounded-full bg-white text-[#1A201C] border border-slate-200 text-xs font-bold hover:bg-[#FDF2EC] transition-colors min-h-[44px]"
                >
                  Book Another Table
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="res-name" className="block text-xs font-bold text-[#1A201C] uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="res-name"
                      type="text"
                      required
                      placeholder="e.g. Arun Rathore"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#1A201C] min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#D9531E]/20 ${
                        errors.name ? 'border-red-500' : 'border-slate-200 focus:border-[#D9531E]'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-red-600 text-xs mt-1 font-semibold">{errors.name}</p>}
                </div>

                {/* Customer Phone Number */}
                <div>
                  <label htmlFor="res-phone" className="block text-xs font-bold text-[#1A201C] uppercase tracking-wider mb-2">
                    Your Mobile Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#1A201C] min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#D9531E]/20 ${
                        errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-[#D9531E]'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-600 text-xs mt-1 font-semibold">{errors.phone}</p>}
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="res-date" className="block text-xs font-bold text-[#1A201C] uppercase tracking-wider mb-2">
                    Reservation Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="res-date"
                      type="date"
                      min={getTodayStr()}
                      required
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: null });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#1A201C] min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#D9531E]/20 ${
                        errors.date ? 'border-red-500' : 'border-slate-200 focus:border-[#D9531E]'
                      }`}
                    />
                  </div>
                  {errors.date && <p className="text-red-600 text-xs mt-1 font-semibold">{errors.date}</p>}
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="res-time" className="block text-xs font-bold text-[#1A201C] uppercase tracking-wider mb-2">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="res-time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#1A201C] min-h-[44px] focus:outline-none focus:border-[#D9531E] focus:ring-2 focus:ring-[#D9531E]/20"
                    >
                      <option value="08:00 AM">08:00 AM (Morning Breakfast)</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="01:00 PM">01:00 PM (Lunch)</option>
                      <option value="02:30 PM">02:30 PM</option>
                      <option value="04:30 PM">04:30 PM (Evening Snacks & Coffee)</option>
                      <option value="06:00 PM">06:00 PM</option>
                      <option value="07:30 PM">07:30 PM (Dinner)</option>
                      <option value="08:30 PM">08:30 PM</option>
                      <option value="09:15 PM">09:15 PM</option>
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="res-guests" className="block text-xs font-bold text-[#1A201C] uppercase tracking-wider mb-2">
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="res-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#1A201C] min-h-[44px] focus:outline-none focus:border-[#D9531E] focus:ring-2 focus:ring-[#D9531E]/20"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5">5 Persons</option>
                      <option value="6">6 Persons</option>
                      <option value="8">8 Persons</option>
                      <option value="10+">10+ Persons (Large Group)</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="res-notes" className="block text-xs font-bold text-[#1A201C] uppercase tracking-wider mb-2">
                    Special Requests (Optional)
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-[#64748B] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="res-notes"
                      type="text"
                      placeholder="e.g. High chair, birthday, window seating"
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#1A201C] min-h-[44px] focus:outline-none focus:border-[#D9531E] focus:ring-2 focus:ring-[#D9531E]/20"
                    />
                  </div>
                </div>

              </div>

              {/* Informational Disclaimer */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-start gap-2.5 text-xs text-[#1A201C]/80">
                <AlertCircle className="w-4 h-4 text-[#D9531E] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Please note:</strong> This form dispatches a structured WhatsApp request to Dakshin Sutra Cafe. The restaurant team will confirm table availability and timings with you directly.
                </p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#D9531E] text-white text-sm font-bold hover:bg-[#C24312] transition-all shadow-md active:scale-98 min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Request Reservation via WhatsApp</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
