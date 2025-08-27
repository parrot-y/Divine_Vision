# Divine Vision Hardware - Assets Directory

This directory contains all the assets for the Divine Vision Hardware website.

## Directory Structure

```
assets/
├── images/
│   ├── logos/          # Store your website logos here
│   │   ├── logo.png    # Main logo (recommended: 200x60px)
│   │   ├── logo-white.png  # White version for dark backgrounds
│   │   ├── favicon.ico # Website favicon
│   │   └── logo.svg    # Vector version (optional)
│   ├── products/       # Product images
│   ├── categories/     # Category banner images
│   └── hero/          # Hero section images
├── css/               # Additional CSS files
└── js/                # JavaScript files
```

## Logo Requirements

### Main Logo
- **File:** `assets/images/logos/logo.png`
- **Size:** 200x60px (recommended)
- **Format:** PNG with transparent background
- **Usage:** Header and footer

### White Logo
- **File:** `assets/images/logos/logo-white.png`
- **Size:** 200x60px (recommended)
- **Format:** PNG with transparent background
- **Usage:** Dark backgrounds

### Favicon
- **File:** `assets/images/logos/favicon.ico`
- **Size:** 16x16px, 32x32px, 48x48px
- **Format:** ICO file
- **Usage:** Browser tab icon

## How to Add Your Logo

1. **Prepare your logo files** in the recommended sizes
2. **Upload them** to the `assets/images/logos/` directory
3. **Update the HTML files** to reference your logo:

```html
<!-- In header -->
<img src="./assets/images/logos/logo.png" alt="Divine Vision Hardware" />

<!-- In footer -->
<img src="./assets/images/logos/logo-white.png" alt="Divine Vision Hardware" />
```

## Current Logo Placeholder

The website currently uses a text-based logo with "DV" initials. Replace this with your actual logo files when ready.

## File Naming Convention

- Use lowercase letters
- Separate words with hyphens
- Include dimensions in filename if needed
- Example: `divine-vision-logo-200x60.png` 