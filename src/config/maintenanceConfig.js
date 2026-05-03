/**
 * Maintenance Mode Configuration
 * ==============================
 * Control maintenance page visibility through this file
 * Set MAINTENANCE_MODE to true to enable the maintenance page
 * Only developers can control this - no UI toggle
 */

export const maintenanceConfig = {
  // Set to true to enable maintenance page
  // Set to false to disable maintenance page and show normal site
  MAINTENANCE_MODE: true,

  // Maintenance page title
  title: "Under Maintenance",

  // Maintenance message
  message:
    "We're currently performing scheduled maintenance to improve your experience. We'll be back online shortly!",

  // Estimated time for maintenance (optional)
  estimatedTime: "Until payment done",

  // Show estimated time
  showEstimatedTime: true,

  // Email for support inquiries
  supportEmail: "support@bhaktienterprises.com",

  // Social media links (show during maintenance)
  socialLinks: {
    facebook: "https://www.facebook.com/bhaktienterprises",
    instagram: "https://www.instagram.com/bhaktienterprises",
    whatsapp: "https://wa.me/919021929391",
  },

  // Show social links during maintenance
  showSocialLinks: false,

  // Show support email contact option
  showSupportContact: false,
};

// Development helper: check if in maintenance mode
export const isMaintenanceMode = () => {
  return maintenanceConfig.MAINTENANCE_MODE === true;
};

// Get maintenance config
export const getMaintenanceConfig = () => {
  return maintenanceConfig;
};

export default maintenanceConfig;
