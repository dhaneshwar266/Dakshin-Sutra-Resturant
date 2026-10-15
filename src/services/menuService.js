// Service for accessing and filtering menu data
// Ready to switch between local data and future backend API

import { MENU_ITEMS, CATEGORIES } from '../data/menu.js';

/**
 * Fetch all menu categories
 */
export const getCategories = async () => {
  return CATEGORIES;
};

/**
 * Fetch all menu items
 */
export const getMenuItems = async () => {
  return MENU_ITEMS;
};

/**
 * Get item by ID
 */
export const getMenuItemById = (id) => {
  return MENU_ITEMS.find((item) => item.id === id) || null;
};

/**
 * Filter menu items by category, search term, and must-try flag
 */
export const filterMenuItems = (items = MENU_ITEMS, { category = 'all', search = '', onlyMustTry = false }) => {
  const query = search.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.categoryName.toLowerCase().includes(query);
    const matchesMustTry = !onlyMustTry || item.isMustTry;

    return matchesCategory && matchesSearch && matchesMustTry;
  });
};
