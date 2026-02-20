"use client";

import { Award, Cherry, Coffee, Croissant, MapPin, Milk } from 'lucide-react';

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardDashboard from '@/components/sections/hero/HeroBillboardDashboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureProcessSteps from '@/components/sections/feature/FeatureProcessSteps';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="medium"
      background="blurBottom"
      cardStyle="solid"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: 'Menu', id: 'menu' },
            { name: 'About', id: 'about' },
            { name: 'Testimonials', id: 'testimonials' },
            { name: 'FAQ', id: 'faq' },
            { name: 'Contact', id: 'contact' },
          ]}
          brandName="Bayka"
          button={{ text: 'Order Now', href: '#menu' }}
          className="py-4 px-6"
          buttonClassName="px-5 py-2"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Experience the Essence of Coffee"
          description="At Bayka, every cup tells a story. Savor expertly crafted coffees and delightful treats in a warm, inviting atmosphere."
          background={{ variant: 'radial-gradient' }}
          buttons={[
            { text: 'Our Menu', href: '#menu' },
            { text: 'Find Us', href: '#contact' },
          ]}
          dashboard={{
            title: 'Bayka Daily Brew',
            stats: [
              { title: 'Cups Brewed', values: [1200, 1500, 1350], description: 'Daily average' },
              { title: 'New Visitors', values: [85, 110, 95], description: 'Per day' },
              { title: 'Loyalty Members', values: [320, 350, 335], description: 'Growing community' },
            ],
            logoIcon: Coffee,
            sidebarItems: [
              { icon: Coffee, active: true },
              { icon: Milk, active: false },
              { icon: Croissant, active: false },
            ],
            buttons: [
              { text: "Today's Special", href: "#" },
              { text: "Order Ahead", href: "#" },
            ],
            listItems: [
              { icon: Award, title: 'Best Latte', status: 'Awarded' },
              { icon: Coffee, title: 'New Roast', status: 'Available' },
              { icon: Cherry, title: 'Seasonal Pastry', status: 'Fresh' },
            ],
            imageSrc: "https://img.b2bpic.net/free-photo/woman-grinding-coffee-coffee-machine_1303-31284.jpg",            imageAlt: 'Close-up of freshly roasted coffee beans',
            searchPlaceholder: 'Search menu items...',
          }}
          tag="Welcome to Bayka"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="More Than Just Coffee, It's an Experience"
          description="Bayka is a place where passion for coffee meets a dedication to community. We meticulously source the finest beans, roast them to perfection, and craft each beverage with care. Our cozy space is designed for you to relax, connect, and enjoy a moment of tranquility."
          tag="Our Story"
          imageSrc="https://img.b2bpic.net/free-photo/group-friends-meeting-restaurant_23-2148395431.jpg"
          imageAlt="Cozy interior of Bayka coffeeshop with warm lighting"
          buttons={[{ text: 'Learn More', href: '#' }]}
          useInvertedBackground={false}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Our Handcrafted Menu"
          description="Discover your new favorite. From rich espressos to delightful pastries, we have something for every taste."
          tag="Explore"
          products={[
            {
              id: '1',
              name: 'Classic Latte',
              price: '$4.50',
              imageSrc: 'https://img.b2bpic.net/free-photo/frothy-drinks-pour-from-machinery-coffee-shop-generated-by-ai_188544-36183.jpg',
              imageAlt: 'Artfully poured latte with foam art',
              onProductClick: () => console.log('Latte clicked'),
              onQuantityChange: (qty) => console.log('Latte quantity:', qty),
            },
            {
              id: '2',
              name: 'Signature Espresso',
              price: '$3.00',
              imageSrc: 'https://img.b2bpic.net/free-photo/double-espresso-coffee-mug-with-cinnamon-sticks-coffee-beans-wooden-board_181624-57625.jpg',
              imageAlt: 'Freshly pulled espresso shot',
              onProductClick: () => console.log('Espresso clicked'),
              onQuantityChange: (qty) => console.log('Espresso quantity:', qty),
            },
            {
              id: '3',
              name: 'Freshly Baked Croissant',
              price: '$3.75',
              imageSrc: 'https://img.b2bpic.net/free-photo/croissant-coffee-food-photography_53876-104492.jpg',
              imageAlt: 'Golden-brown, flaky croissant',
              onProductClick: () => console.log('Croissant clicked'),
              onQuantityChange: (qty) => console.log('Croissant quantity:', qty),
            },
            {
              id: '4',
              name: 'Refreshing Cold Brew',
              price: '$5.00',
              imageSrc: 'https://img.b2bpic.net/free-photo/espresso-tonic-glass-with-yellow-drinking-straw_169016-22975.jpg',
              imageAlt: 'Iced cold brew coffee in a glass',
              onProductClick: () => console.log('Cold Brew clicked'),
              onQuantityChange: (qty) => console.log('Cold Brew quantity:', qty),
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          useInvertedBackground={false}
          textboxLayout="default"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureProcessSteps
          title="Why Choose Bayka?"
          description="We pride ourselves on a commitment to quality, community, and an unparalleled coffee experience."
          tag="Our Commitment"
          steps={[
            {
              number: '01',
              title: 'Premium Sourcing',
              description: 'We partner with ethical farms to source the highest quality beans from around the globe.',
              tag: 'Ethical',
            },
            {
              number: '02',
              title: 'Expert Baristas',
              description: 'Our skilled team meticulously crafts each drink to perfection, ensuring a consistent and delightful taste.',
              tag: 'Artisan',
            },
            {
              number: '03',
              title: 'Cozy Atmosphere',
              description: "Relax in our welcoming space, designed for comfort and connection. It's your perfect escape.",              tag: 'Inviting',
            },
          ]}
          stepsAnimation="slide-up"
          useInvertedBackground={false}
          buttons={[{ text: 'Our Story', href: '#about' }]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from those who love their Bayka experience."
          tag="Reviews"
          testimonials={[
            {
              id: '1',
              name: 'Elena Petrova',
              role: 'Regular Customer',
              company: 'Local Resident',
              rating: 5,
              imageSrc: 'https://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg',
              imageAlt: 'Portrait of Elena Petrova',
            },
            {
              id: '2',
              name: 'Mark Johnson',
              role: 'Coffee Enthusiast',
              company: 'Food Blogger',
              rating: 5,
              imageSrc: 'https://img.b2bpic.net/free-photo/closeup-shot-handsome-male-smiling_181624-41237.jpg',
              imageAlt: 'Portrait of Mark Johnson',
            },
            {
              id: '3',
              name: 'Sophia Lee',
              role: 'Student',
              company: 'University of City',
              rating: 5,
              imageSrc: 'https://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg',
              imageAlt: 'Portrait of Sophia Lee',
            },
            {
              id: '4',
              name: 'David Miller',
              role: 'Freelancer',
              company: 'Digital Nomad',
              rating: 5,
              imageSrc: 'https://img.b2bpic.net/free-photo/portrait-person-football-game_23-2149015523.jpg',
              imageAlt: 'Portrait of David Miller',
            },
            {
              id: '5',
              name: 'Anna Schmidt',
              role: 'Small Business Owner',
              company: 'Creative Studio',
              rating: 5,
              imageSrc: 'https://img.b2bpic.net/free-photo/pensive-business-leader-thinking-new-strategy_1262-17084.jpg',
              imageAlt: 'Portrait of Anna Schmidt',
            },
            {
              id: '6',
              name: "Liam O'Connell",              role: 'Barista Trainer',
              company: 'Coffee Academy',
              rating: 5,
              imageSrc: 'https://img.b2bpic.net/free-photo/young-man-wearing-blue-outfit-looking-happy_1298-197.jpg',
              imageAlt: "Portrait of Liam O'Connell"},
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          useInvertedBackground={false}
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Got questions? We've got answers."
          tag="Help & Support"
          faqs={[
            {
              id: '1',
              title: 'What kind of beans do you use?',
              content: 'We proudly use ethically sourced, high-quality Arabica beans from sustainable farms around the world. We also offer a rotating selection of single-origin beans.',
            },
            {
              id: '2',
              title: 'Do you offer dairy-free options?',
              content: 'Yes! We offer a variety of dairy-free milk alternatives including almond, oat, soy, and coconut milk.',
            },
            {
              id: '3',
              title: 'Can I order online for pickup?',
              content: 'Absolutely! You can place your order through our website or a dedicated app for quick and convenient pickup at our counter.',
            },
            {
              id: '4',
              title: 'Do you have Wi-Fi?',
              content: 'Yes, we provide free high-speed Wi-Fi for all our customers to enjoy while working or relaxing.',
            },
            {
              id: '5',
              title: 'Are you pet-friendly?',
              content: 'We welcome well-behaved pets in our outdoor seating area. Please ensure they are on a leash and not disrupting other guests.',
            },
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Visit Us Today!"
          ctaDescription="Come and experience the Bayka difference. We look forward to serving you!"
          ctaButton={{ text: 'Get Directions', href: 'https://www.google.com/maps/search/coffeeshop+bayka' }}
          ctaIcon={MapPin}
          faqs={[
            {
              id: '1',
              title: 'What are your opening hours?',
              content: 'We are open Monday to Friday from 7 AM to 6 PM, and weekends from 8 AM to 5 PM.',
            },
            {
              id: '2',
              title: 'Do you host private events?',
              content: 'Yes, our space is available for private events. Please contact us to discuss your needs and check availability.',
            },
          ]}
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Bayka"
          leftLink={{ text: 'Privacy Policy', href: '/privacy' }}
          rightLink={{ text: 'Terms of Service', href: '/terms' }}
        />
      </div>
    </ThemeProvider>
  );
}
