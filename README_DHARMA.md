# Dharma Institute of Purpose - Marketing Website

A professional, production-ready marketing website for Dharma Institute of Purpose, a research-driven institution dedicated to understanding and addressing human pressures in modern systems.

## Website Structure

### Pages

#### Home (/)
The main landing page featuring:
- Hero section with value proposition
- Overview of the challenge and vision
- Detailed offerings showcase
- Philosophy and core approach
- Call-to-action contact form
- Leadership information

#### About (/about)
Company information including:
- Organizational story and mission
- Vision and values
- Founding board members with roles
- Key statistics
- Partnership opportunities

#### Solutions (/solutions)
Detailed breakdown of all offerings:
1. **Human Risk Index (HRI) Institutional Audits**
   - For organizations seeking to measure human strain
   - Includes assessment, surveys, workshops, reports

2. **Life Gap Training Program**
   - For young professionals (under 35)
   - CV writing, finance, networking, professional skills

3. **Student & Parent Guidance Programs**
   - For students and families navigating education
   - Labour market insights, funding guidance, transition support

4. **Research & Insight Reports**
   - For policymakers, educators, employers
   - Data-driven insights on human pressures and outcomes

#### Why Dharma (/why-dharma)
Philosophy and differentiation:
- The problem being solved
- Unique approach and methodology
- Integrated service model
- Long-term vision and impact

#### 404 (not-found)
Custom error page with navigation back to main site

## Components

### Navigation (`components/navigation.tsx`)
- Sticky header with logo and links
- Responsive mobile menu
- Navigation to home, about, solutions, why dharma
- Contact CTA button

### Hero (`components/hero.tsx`)
- Strong headline and value proposition
- Dual CTA buttons
- Focus areas overview
- Background visual elements

### Overview (`components/overview.tsx`)
- The challenge section
- Vision statement (highlighted card)
- Three-step approach methodology

### Offerings (`components/offerings.tsx`)
- Four offering cards with detailed information
- Key components listed with checkmarks
- Target audience and use cases
- Integrated impact message

### Philosophy (`components/philosophy.tsx`)
- Core philosophy sections
- Success definition
- Founding board information with roles

### CTA (`components/cta.tsx`)
- Contact form (email + message)
- Quick action links for different audiences
- Submission feedback

### Footer (`components/footer.tsx`)
- Brand information
- Solution links
- Company links
- Social media
- Contact information
- Copyright

## Design System

### Color Palette
- **Primary**: Deep slate-blue (oklch(0.32 0.065 260)) - Used for main CTAs and accents
- **Accent**: Teal (oklch(0.28 0.085 245)) - Used for secondary elements
- **Background**: Off-white (oklch(0.99 0.002 280))
- **Foreground**: Dark slate (oklch(0.18 0.008 280))
- **Secondary**: Light gray (oklch(0.93 0.008 280))

### Typography
- **Sans-serif**: Geist (for headings and body)
- **Monospace**: Geist Mono (for technical elements)
- **Base font size**: 16px
- **Line height**: 1.5-1.6 for readable text

### Components
Uses shadcn/ui components including:
- Card
- Button (via Tailwind)
- Icons (Lucide React)

## Features

✅ Mobile-responsive design
✅ SEO-friendly structure
✅ Fast page loads with Next.js optimization
✅ Accessibility-first design
✅ Professional color scheme
✅ Contact form functionality
✅ Multi-page navigation
✅ Custom 404 page
✅ robots.txt for search engines

## Getting Started

### Installation
```bash
npm install
# or
pnpm install
```

### Development
```bash
npm run dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm run start
```

## Key Content

### Offerings Summary
- **HRI Audits**: Measure institutional strain with structured assessments
- **Life Gap Training**: Practical skills for young professionals
- **Student Guidance**: Support for education decisions
- **Research Reports**: Data-driven insights for stakeholders

### Target Audiences
1. Organizations and Institutions
2. Young Professionals (under 35)
3. Students and Families
4. Policymakers and Researchers

## Content Sources
All content is derived from:
- Dharma_Detailed_Product_Offerings.pdf
- Dharma_Founder_Vision_Brief.pdf
- Organization meeting notes and strategic direction

## Performance Optimization
- Image optimization via Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle
- Lazy loading components where applicable
- Fast-growing LCP with optimized assets

## SEO
- Semantic HTML structure
- Meta descriptions on all pages
- Mobile-first responsive design
- Clean URL structure
- robots.txt for search engine crawlers

## Contact Information
- Email: hello@dharmaio.org
- Available through contact form on homepage

## Future Enhancements
- Blog section for research articles
- Case studies from client organizations
- Client testimonials
- Events and webinar listings
- Newsletter signup
- Dynamic content management system
