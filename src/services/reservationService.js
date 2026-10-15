// Reservation Management Service
// Handles client-side validation, WhatsApp formatting, and API readiness for table bookings

import { generateReservationWhatsAppUrl } from '../utils/whatsapp.js';

/**
 * Validates reservation form fields
 * @param {Object} data - { name, phone, date, time, guests, specialRequests }
 * @returns {Object} { isValid, errors }
 */
export const validateReservation = (data) => {
  const errors = {};
  const todayStr = new Date().toISOString().split('T')[0];

  if (!data.name || !data.name.trim()) {
    errors.name = 'Please provide your full name.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const cleanPhone = (data.phone || '').replace(/[\s-]/g, '');
  if (!cleanPhone) {
    errors.phone = 'Please provide your mobile phone number.';
  } else if (!/^[6-9]\d{9}$/.test(cleanPhone.replace(/^\+91/, ''))) {
    errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
  }

  if (!data.date) {
    errors.date = 'Please select a date.';
  } else if (data.date < todayStr) {
    errors.date = 'Reservation date cannot be in the past.';
  }

  if (!data.time) {
    errors.time = 'Please select a time slot.';
  }

  const guestsNum = Number(data.guests);
  if (!data.guests || isNaN(guestsNum) || guestsNum < 1) {
    errors.guests = 'Please select at least 1 guest.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Dispatches table reservation via WhatsApp
 * @param {Object} data - reservation details
 * @returns {Object} { success, whatsappUrl, reservationData }
 */
export const dispatchReservation = (data) => {
  const validation = validateReservation(data);
  if (!validation.isValid) {
    return {
      success: false,
      errors: validation.errors,
    };
  }

  const whatsappUrl = generateReservationWhatsAppUrl(data);

  return {
    success: true,
    whatsappUrl,
    reservationData: {
      ...data,
      timestamp: new Date().toISOString(),
    },
  };
};
