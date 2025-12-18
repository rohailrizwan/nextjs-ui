"use client"

import homebanner from "../../(assets)/images/homebanner.png"
import Container from "../Container/page"

interface HomeBannerProps {
    title?: string
    description?: string
    ctaButtons?: {
        primary?: { text: string; href: string }
        secondary?: { text: string; href: string }
    }
    trustedBy?: string
}

export default function Banner({
    title = "Custom Frontend, Backend & Full Stack Development Services in USA",
    description = "At A Tech Sight, we help businesses scale with frontend development services, backend development services, and full stack development solutions tailored to your goals. Our expert team combines creativity, innovation, and advanced technology to build secure, scalable, and high-performing digital products.",
    ctaButtons = {
        primary: { text: "Book a Demo", href: "/demo" },
        secondary: { text: "Our Portfolio", href: "/portfolio" },
    },
    trustedBy = "Trusted by 500+ Companies",
}: HomeBannerProps) {
    return (
        <section
            className="relative h-[80vh] w-full flex items-start justify-start overflow-hidden"
            style={{
                backgroundImage: `url(${homebanner.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10" />

            <Container>
                <div className="relative z-10 py-12 flex flex-col gap-4 text-left">
                    {/* Trusted By */}
                    <div className="px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm w-fit">
                        <span className="text-sm md:text-base font-medium text-white">
                            🚀 {trustedBy}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-[45px] font-bold text-white leading-tight sm:max-w-[800px]">
                        {title}
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-[18px] mb-2 text-gray-100 leading-relaxed px-5 py-3 rounded-[20px] sm:max-w-[700px] bg-white/10 backdrop-blur-md border border-white/10">
                        {description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        {ctaButtons?.primary && (
                            <a
                                href={ctaButtons.primary.href}
                                className="px-8 py-3 bg-[#152C71] hover:bg-[#152C71] text-white font-medium 
                 rounded-tr-[25px] rounded-bl-[25px] transition-all duration-300 
                 text-sm text-center shadow-md"
                            >
                                {ctaButtons.primary.text}
                            </a>
                        )}

                        {ctaButtons?.secondary && (
                            <a
                                href={ctaButtons.secondary.href}
                                className="px-8 py-3 bg-transparent border border-[#0A47B1] text-[#fff] font-medium 
                 rounded-tl-[25px] rounded-br-[25px] hover:bg-[#fff] hover:text-[#0A47B1] 
                 transition-all duration-300 text-sm text-center shadow-md"
                            >
                                {ctaButtons.secondary.text}
                            </a>
                        )}
                    </div>

                </div>
            </Container>
        </section>
    )
}
