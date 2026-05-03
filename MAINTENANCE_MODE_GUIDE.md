# Maintenance Mode Guide

## Overview
The maintenance page is controlled entirely through code. Only developers can enable/disable it. No UI buttons or toggles available to end-users.

## How to Enable/Disable Maintenance Mode

### 1. **Edit the Configuration File**
Location: `src/config/maintenanceConfig.js`

```javascript
export const maintenanceConfig = {
  // Set to true to ENABLE maintenance page
  // Set to false to DISABLE maintenance page
  MAINTENANCE_MODE: false,
  // ... rest of config
};
```

### 2. **To Show Maintenance Page:**
```javascript
MAINTENANCE_MODE: true,
```

### 3. **To Hide Maintenance Page (normal site):**
```javascript
MAINTENANCE_MODE: false,
```

---

## Customization Options

### Change Maintenance Title
```javascript
title: "Under Maintenance",
```

### Change Maintenance Message
```javascript
message: "We're currently performing scheduled maintenance to improve your experience. We'll be back online shortly!",
```

### Change Estimated Time
```javascript
estimatedTime: "2-4 hours",
showEstimatedTime: true, // Set to false to hide
```

### Support Email
```javascript
supportEmail: "support@bhaktienterprises.com",
showSupportContact: true, // Set to false to hide
```

### Social Media Links
```javascript
socialLinks: {
  facebook: "https://www.facebook.com/bhaktienterprises",
  instagram: "https://www.instagram.com/bhaktienterprises",
  whatsapp: "https://wa.me/919021929391",
},
showSocialLinks: true, // Set to false to hide
```

---

## What Gets Hidden During Maintenance

When `MAINTENANCE_MODE: true`, the entire website is replaced with the maintenance page:
- ❌ Navigation header hidden
- ❌ All pages blocked
- ❌ Footer hidden
- ❌ Normal site content not visible
- ✅ Only maintenance message shown

---

## What Stays Visible

- ✅ Decorative aurora effects
- ✅ Background noise pattern
- ✅ Support contact information
- ✅ Social media links (optional)
- ✅ Estimated downtime

---

## Implementation Details

### Files Involved:
1. **`src/config/maintenanceConfig.js`** - Configuration file
2. **`src/pages/MaintenancePage.jsx`** - Maintenance page component
3. **`src/styles/maintenance.css`** - Styling
4. **`src/App.jsx`** - Main app check

### How It Works:
```
User visits site
    ↓
App.jsx checks maintenanceConfig
    ↓
if MAINTENANCE_MODE is true:
  → Show MaintenancePage
  → Hide everything else
    ↓
else:
  → Show normal site
  → BrowserRouter with all routes
```

---

## Quick Reference

### Enable Maintenance (3 steps):
1. Open: `src/config/maintenanceConfig.js`
2. Find: `MAINTENANCE_MODE: false,`
3. Change to: `MAINTENANCE_MODE: true,`
4. Commit and push
5. Site will show maintenance page on next deployment

### Disable Maintenance (3 steps):
1. Open: `src/config/maintenanceConfig.js`
2. Find: `MAINTENANCE_MODE: true,`
3. Change to: `MAINTENANCE_MODE: false,`
4. Commit and push
5. Site will show normal site on next deployment

---

## Deployment Steps

### When Enabling Maintenance:
```bash
# 1. Edit the config file
# 2. Commit changes
git add src/config/maintenanceConfig.js
git commit -m "Enable maintenance mode"

# 3. Push to deploy
git push origin main

# Site updates automatically on Vercel
```

### When Disabling Maintenance:
```bash
# 1. Edit the config file
# 2. Commit changes
git add src/config/maintenanceConfig.js
git commit -m "Disable maintenance mode - site back online"

# 3. Push to deploy
git push origin main

# Site updates automatically on Vercel
```

---

## Design Features

✨ **Professional Design**:
- Matches site's dark theme
- Animated pulsing icon
- Loading progress bar
- Smooth animations
- Mobile responsive
- Accessibility compliant

🎨 **Visual Elements**:
- Aurora background effects
- Glass-morphism panel
- Gradient accents
- Responsive typography
- Spinner animation
- Hover effects

📱 **Mobile Friendly**:
- Responsive text sizing
- Touch-friendly buttons
- Proper spacing on small screens
- Adjusted icon sizes
- Readable on all devices

---

## Accessibility

- Respects `prefers-reduced-motion` setting
- Semantic HTML structure
- Proper color contrast
- Screen reader friendly
- Keyboard navigable

---

## Example Configurations

### Minimal Maintenance Page:
```javascript
export const maintenanceConfig = {
  MAINTENANCE_MODE: true,
  title: "Under Maintenance",
  message: "We'll be back soon!",
  showEstimatedTime: false,
  showSupportContact: false,
  showSocialLinks: false,
};
```

### Full Featured:
```javascript
export const maintenanceConfig = {
  MAINTENANCE_MODE: true,
  title: "Scheduled Maintenance",
  message: "We're upgrading our systems. Thank you for your patience!",
  estimatedTime: "4-6 hours",
  showEstimatedTime: true,
  supportEmail: "support@bhaktienterprises.com",
  showSupportContact: true,
  socialLinks: {
    facebook: "https://www.facebook.com/bhaktienterprises",
    instagram: "https://www.instagram.com/bhaktienterprises",
    whatsapp: "https://wa.me/919021929391",
  },
  showSocialLinks: true,
};
```

---

## Troubleshooting

### Page still shows normal site after enabling maintenance:
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check that MAINTENANCE_MODE is set to true
- Verify changes are pushed to GitHub
- Wait for Vercel deployment to complete

### Page won't return to normal after disabling:
- Change MAINTENANCE_MODE to false
- Commit and push changes
- Clear browser cache and hard refresh
- Check Vercel deployment logs

### Social links not showing:
- Check `showSocialLinks: true`
- Verify socialLinks object has proper URLs
- Clear cache and refresh

---

## SEO Note

When maintenance mode is enabled:
- Meta robots tag: `noindex, nofollow`
- Search engines won't index maintenance page
- Site returns to index after maintenance

---

## Version History

- **v1.0** - Initial maintenance mode implementation
- Features: Toggle via code, customizable content, responsive design, accessibility support

---

**Last Updated**: May 3, 2026
**Status**: ✅ Ready to use
