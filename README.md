# ToberChem Website

A modern, responsive website for ToberChem - a chemicals company based in Milton, Ontario.

## Company Details

- **Company Name:** ToberChem
- **Address:** 431 Main Street, Milton, Ontario L9T 1P7
- **Phone:** 905-330-2009
- **Email:** Toberchem@gmail.com

## Technology Stack

- **React** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Features

- ✅ Responsive header with navigation
- ✅ Welcome section with hero banner
- ✅ About Us section with company values
- ✅ Contact Us section with contact form and information
- ✅ Footer with quick links and contact details
- ✅ Mobile-friendly responsive design
- ✅ Smooth scrolling between sections
- ✅ Modern gradient design with professional styling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
ToberChem/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header with menu
│   │   ├── Welcome.tsx      # Hero section
│   │   ├── AboutUs.tsx      # Company information
│   │   ├── ContactUs.tsx    # Contact form and details
│   │   └── Footer.tsx       # Footer with links
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── public/                  # Static assets
├── index.html               # HTML entry point
└── package.json             # Project dependencies

```

## Sections Overview

### Header

- Sticky navigation bar
- Mobile hamburger menu
- Smooth scroll navigation to sections

### Welcome

- Eye-catching hero section
- Call-to-action button
- Company tagline

### About Us

- Company values (Quality, Service, Safety, Innovation)
- Mission statement
- Professional card-based layout

### Contact Us

- Contact information with icons
- Contact form for inquiries
- Address, phone, and email details

### Footer

- Quick links to sections
- Company contact information
- Copyright information

## Customization

You can customize the colors, content, and styling by modifying:

- `tailwind.config.js` - Tailwind theme configuration
- Component files in `src/components/` - Individual sections
- `src/index.css` - Global styles

## License

© 2025 ToberChem. All rights reserved.
