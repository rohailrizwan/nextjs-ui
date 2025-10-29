import Banner from "./(Component)/Banner/page";
import Navbar from "./(Component)/Navbar/page";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner
        title="Custom Frontend, Backend & Full Stack Development Services in USA"
        description="At A Tech Sight, we help businesses scale with frontend development services, backend development services, and full stack development solutions tailored to your goals. Our expert team combines creativity, innovation, and advanced technology to build secure, scalable, and high-performing digital products."
        ctaButtons={{
          primary: { text: 'Book Demo', href: '/demo' },
          secondary: { text: 'Portfolio', href: '/portfolio' },
        }}
        trustedBy="Trusted by 500+ Companies" />
    </div>
  );
}
