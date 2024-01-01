const APIs = {
  URL: process.env.REACT_APP_API_URL,
  getPhysicalProducts: {
    endPoint: 'physical_products',
    headers: { method: 'get', redirect: 'follow' },
  },
  getPhysicalCategories: {
    endPoint: 'physical_categories',
    headers: { method: 'get', redirect: 'follow' },
  },
  getPhysicalSubcategories: {
    endPoint: 'physical_subcategories',
    headers: { method: 'get', redirect: 'follow' },
  },
  getDigitalProducts: {
    endPoint: 'digital_products',
    headers: { method: 'get', redirect: 'follow' },
  },
  getDigitalCategories: {
    endPoint: 'digital_categories',
    headers: { method: 'get', redirect: 'follow' },
  },
  getDigitalSubcategories: {
    endPoint: 'digital_subcategories',
    headers: { method: 'get', redirect: 'follow' },
  },
}
export { APIs };
