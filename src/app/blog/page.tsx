"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { useBlogPosts } from "@/hooks/useBlogPosts";

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

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
            <ReactLenis root>
                <NavbarLayoutFloatingOverlay
                    navItems={[
                        { name: "Home", id: "/" },
                        { name: "Menu", id: "menu" },
                        { name: "About", id: "about" },
                        { name: "Testimonials", id: "testimonials" },
                        { name: "FAQ", id: "faq" },
                        { name: "Contact", id: "contact" },
                    ]}
                    brandName="Bayka"
                    button={{ text: "Order Now", href: "#menu" }}
                    className="py-4 px-6"
                    buttonClassName="px-5 py-2"
                />

                    {isLoading ? (
                        <div className="w-content-width mx-auto py-20 text-center">
                            <p className="text-foreground">Loading posts...</p>
                        </div>
                    ) : (
                        <BlogCardThree
                            blogs={posts}
                            title="Featured Articles"
                            description="Explore our latest insights"
                            animationType="slide-up"
                            textboxLayout="default"
                            useInvertedBackground={false}
                            tag="Blog"
                            carouselMode="buttons"
                        />
                    )}

                    <FooterLogoReveal
                        logoText="Bayka"
                        leftLink={{ text: "Privacy Policy", href: "/privacy" }}
                        rightLink={{ text: "Terms of Service", href: "/terms" }}
                        useInvertedBackground={false}
                    />
            </ReactLenis>
        </ThemeProvider>
    );
}
