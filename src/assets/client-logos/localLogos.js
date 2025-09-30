/**
 * This file provides local fallback options for the company logos used in ServiceProviders.jsx
 * 
 * How to use:
 * 1. Download actual logo images and save them in the src/assets/client-logos directory
 * 2. Import this file in ServiceProviders.jsx
 * 3. Replace the logo URLs in the companies array with these imports
 * 
 * Example:
 * import { googleLogo, microsoftLogo } from '../assets/client-logos/localLogos';
 * 
 * Then in the companies array:
 * { 
 *   id: 1, 
 *   name: 'Google', 
 *   logo: googleLogo 
 * },
 */

// When you have local logo files, uncomment and update these exports:
/*
export const googleLogo = '/src/assets/client-logos/google.png';
export const microsoftLogo = '/src/assets/client-logos/microsoft.png';
export const amazonLogo = '/src/assets/client-logos/amazon.png';
export const appleLogo = '/src/assets/client-logos/apple.png';
export const metaLogo = '/src/assets/client-logos/meta.png';
export const ibmLogo = '/src/assets/client-logos/ibm.png';
export const samsungLogo = '/src/assets/client-logos/samsung.png';
export const oracleLogo = '/src/assets/client-logos/oracle.png';
*/

// Then replace the companies array in ServiceProviders.jsx with:
/*
const companies = [
  { id: 1, name: 'Google', logo: googleLogo },
  { id: 2, name: 'Microsoft', logo: microsoftLogo },
  { id: 3, name: 'Amazon', logo: amazonLogo },
  { id: 4, name: 'Apple', logo: appleLogo },
  { id: 5, name: 'Meta', logo: metaLogo },
  { id: 6, name: 'IBM', logo: ibmLogo },
  { id: 7, name: 'Samsung', logo: samsungLogo },
  { id: 8, name: 'Oracle', logo: oracleLogo },
];
*/