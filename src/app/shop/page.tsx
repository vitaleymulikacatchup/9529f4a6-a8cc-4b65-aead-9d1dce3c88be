"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCatalog from "@/components/ecommerce/productCatalog/ProductCatalog";
import { useProductCatalog } from "@/hooks/useProductCatalog";
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function ShopPage() {
    const {
        products,
        isLoading,
        search,
        setSearch,
        filters,
    } = useProductCatalog({ basePath: "/shop" });

    if (isLoading) {
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
                    <div id="navbar" data-section="navbar">
                        <NavbarLayoutFloatingOverlay
                            navItems={[{ name: "Home", id: "/" }, { name: "Shop", id: "/shop" }]}
                            brandName="Bayka"
                            className="py-4 px-6"
                            buttonClassName="px-5 py-2"
                            button={{ text: "Cart", onClick: () => console.log("cart") }}
                        />
                    </div>
                    <div id="loading-state" data-section="loading-state">
                        <main className="min-h-screen flex items-center justify-center pt-20">
                            <p className="text-foreground">Loading products...</p>
                        </main>
                    </div>
                </ReactLenis>
            </ThemeProvider>
        );
    }

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
                <div id="navbar" data-section="navbar">
                    <NavbarLayoutFloatingOverlay
                        navItems={[{ name: "Home", id: "/" }, { name: "Shop", id: "/shop" }]}
                        brandName="Bayka"
                        className="py-4 px-6"
                        buttonClassName="px-5 py-2"
                        button={{ text: "Cart", onClick: () => console.log("cart") }}
                    />
                </div>
                <div id="product-catalog" data-section="product-catalog">
                    <ProductCatalog
                        layout="page"
                        products={products}
                        searchValue={search}
                        onSearchChange={setSearch}
                        searchPlaceholder="Search products..."
                        filters={filters}
                        emptyMessage="No products found"
                    />
                </div>
                <div id="footer" data-section="footer">
                    <FooterLogoReveal
                        logoText="Bayka"
                        leftLink={{ text: "Privacy Policy", href: "/privacy" }}
                        rightLink={{ text: "Terms of Service", href: "/terms" }}
                        useInvertedBackground={false}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}
