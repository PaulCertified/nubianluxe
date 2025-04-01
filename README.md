# Nubian Luxe Braiding Lounge

A modern, luxury branding website for Nubian Luxe Braiding Lounge - offering premium hair braiding and styling services with 24/7 availability.

## Features

- **Premium Design**: Luxurious black and gold aesthetic with elegant typography
- **Responsive Layout**: Fully optimized for all devices from mobile to desktop
- **Interactive Hero Section**: Animated intro with parallax scrolling background
- **Booking System**: Direct integration with Calendly for 3 service tiers
- **Animated Components**: Smooth transitions and subtle animations throughout
- **Service Catalog**: Comprehensive pricing and service information
- **Hair Color Charts**: Interactive color selection tools
- **Appointment Scheduling**: Flexible booking options with clear policies

## Technology Stack

### Frontend
- **Next.js 14**: React framework with server components
- **React 18**: UI component library
- **TypeScript**: For type safety and improved developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Lightweight icon library
- **Framer Motion**: Animation library for React

### Development Tools
- **ESLint**: For code quality and consistency
- **PostCSS**: CSS transformation tool
- **Vercel**: Deployment and hosting platform

## Recent Updates

- Improved hero section with dynamic background image loading
- Added animated scroll indicator that's responsive on all devices
- Implemented Calendly integration for booking functionality
- Optimized images and assets for faster loading
- Added dark splash screen intro with fade animations
- Enhanced mobile experience with responsive component design
- Fixed cross-device compatibility issues

## Getting Started

1. Clone the repository:
```
git clone https://github.com/PaulCertified/nubianluxe.git
cd nubianluxe
```

2. Install dependencies:
```
npm install
```

3. Run the development server:
```
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The website is deployed on Vercel. View the live site at:
[https://nubianluxe.vercel.app](https://nubianluxe.vercel.app)

To deploy your own version:
```
npm install -g vercel
vercel --prod
```

## Image Assets

Some large image files are not included in this repository and need to be added manually:

- `/public/hero-background.png` - Main hero section background
- `/public/assets/gold-frame.png` - Ornate frame for portraits
- `/public/stylist-portrait.jpg` - Stylist portrait image

## Project Structure

```
nubianluxe/
├── public/         # Static assets like images
├── src/
│   ├── app/        # Next.js app router and global styles
│   └── components/ # React components
│       ├── motion/ # Animation components
│       └── ...     # Various section components
├── package.json    # Dependencies and scripts
└── tailwind.config.js # Tailwind configuration
```

## License

This project is proprietary and belongs to Nubian Luxe Braiding Lounge.

## Credits

Designed and developed by Paul Gipson
