"use client"

import homebanner from '../../(assets)/images/homebanner.png'
import Container from '../Container/page'

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
            <div className="relative z-10   py-10">
                {/* Left Top Content */}
                <div className="gap-2 px-4 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm w-fit">
                    <span className="text-md font-medium text-white">🚀 {trustedBy}</span>
                </div>
            </div>
            </Container>
        </section>

    )
}
