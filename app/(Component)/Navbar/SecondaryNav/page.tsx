"use client";

import { Box, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import navimage from "../../../(assets)/images/Navimage.png";
import Container from "../../Container/page";
import CustomButton from "../../Button/page";
import { IoIosArrowDown } from "react-icons/io";
import {
    FaCode,
    FaMobileAlt,
    FaPencilRuler,
    FaSitemap,
    FaWordpress,
    FaShopify,
    FaPaintBrush,
    FaSearch,
    FaCheckSquare,
} from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SecondaryNav() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services", hasDropdown: true },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Blog", path: "/blog" },
    ];

    // 🔹 Mega Menu Data (single place to update)
    const servicesMenu = [
        {
            title: "Web Development",
            items: [
                { icon: <FaCode />, text: "Software Development" },
                { icon: <FaSitemap />, text: "SaaS Development" },
                { icon: <FaCode />, text: "Product Development" },
                { icon: <FaCode />, text: "Custom CRM Development" },
            ],
        },
        {
            title: "UI/UX Design",
            items: [
                { icon: <FaPencilRuler />, text: "Web Design" },
                { icon: <FaMobileAlt />, text: "Mobile App Design" },
                { icon: <FaSitemap />, text: "Wireframing & Prototyping" },
                { icon: <FaSitemap />, text: "User Journey Mapping" },
            ],
        },
        {
            title: "CMS Development",
            items: [
                { icon: <FaWordpress />, text: "WordPress" },
                { icon: <FaShopify />, text: "Shopify" },
                { icon: <SiWebflow />, text: "Webflow" },
            ],
        },
        {
            title: "Digital Marketing",
            items: [{ icon: <FaSearch />, text: "SEO" }],
        },
        {
            title: "Graphic Design",
            items: [
                { icon: <FaPaintBrush />, text: "Logo Design" },
                { icon: <FaPaintBrush />, text: "Illustration" },
            ],
        },
        {
            title: "Quality Assurance",
            items: [{ icon: <FaCheckSquare />, text: "Software Testing" }],
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
                position: "sticky",
                top: 0,
                zIndex: 1100,
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 0,
                        position: "relative",
                    }}
                >
                    {/* Logo */}
                    <Box sx={{ width: "180px", height: "75px" }}>
                        <Image
                            src={navimage}
                            alt="Atech Sight Logo"
                            className="cursor-pointer"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </Box>

                    {/* Navigation Links */}
                    <List
                        sx={{
                            display: "flex",
                            gap: "25px",
                            fontWeight: "600",
                            cursor: "pointer",
                            alignItems: "center",
                        }}
                    >
                        {navLinks.map((link) => (
                            <ListItem
                                key={link.path}
                                onMouseEnter={() => link.hasDropdown && setOpen(true)}
                                onMouseLeave={() => link.hasDropdown && setOpen(false)}
                                sx={{
                                    width: "auto",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: link.hasDropdown ? "5px" : 0,
                                    color: pathname === link.path ? "#112c71" : "#3a3737!important",
                                    transition: "color 0.3s ease",
                                    position: "relative",
                                    "&:hover": { color: "#112c71" },
                                }}
                            >
                                <Link href={link.path}>{link.label}</Link>
                                {link.hasDropdown && (
                                    <IoIosArrowDown
                                        fontSize="small"
                                        style={{ position: "relative", top: "2px" }}
                                    />
                                )}

                                {/* Mega Menu */}
                                {link.hasDropdown && open && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            right: 0,
                                            backgroundColor: "#fff",
                                            boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
                                            borderRadius: "8px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            flexWrap: "wrap",
                                            p: 3,
                                            zIndex: 1200,
                                        }}
                                        onMouseEnter={() => setOpen(true)}
                                        onMouseLeave={() => setOpen(false)}
                                    >
                                        {/* Column 1 */}
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
                                            <Typography fontWeight={600}>Web Development</Typography>
                                            <MenuItem icon={<FaCode />} text="Software Development" />
                                            <MenuItem icon={<FaSitemap />} text="SaaS Development" />
                                            <MenuItem icon={<FaCode />} text="Product Development" />
                                            <MenuItem icon={<FaCode />} text="Custom CRM Development" />

                                            <Typography fontWeight={600} sx={{ mt: 2 }}>
                                                UI/UX Design
                                            </Typography>
                                            <MenuItem icon={<FaPencilRuler />} text="Web Design" />
                                            <MenuItem icon={<FaMobileAlt />} text="Mobile App Design" />
                                            <MenuItem icon={<FaSitemap />} text="Wireframing & Prototyping" />
                                            <MenuItem icon={<FaSitemap />} text="User Journey Mapping" />
                                        </Box>

                                        {/* Column 2 */}
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
                                            <Typography fontWeight={600}>CMS Development</Typography>
                                            <MenuItem icon={<FaWordpress />} text="WordPress" />
                                            <MenuItem icon={<FaShopify />} text="Shopify" />
                                            <MenuItem icon={<SiWebflow />} text="Webflow" />

                                            <Typography fontWeight={600} sx={{ mt: 2 }}>
                                                Digital Marketing
                                            </Typography>
                                            <MenuItem icon={<FaSearch />} text="SEO" />
                                        </Box>

                                        {/* Column 3 */}
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
                                            <Typography fontWeight={600}>Graphic Design</Typography>
                                            <MenuItem icon={<FaPaintBrush />} text="Logo Design" />
                                            <MenuItem icon={<FaPaintBrush />} text="Illustration" />

                                            <Typography fontWeight={600} sx={{ mt: 2 }}>
                                                Quality Assurance
                                            </Typography>
                                            <MenuItem icon={<FaCheckSquare />} text="Software Testing" />
                                        </Box>
                                    </Box>
                                )}

                            </ListItem>
                        ))}
                    </List>

                    {/* Button */}
                    <CustomButton text="Contact Us" />
                </Box>
            </Container>
        </Box>
    );
}

// 🔹 Reusable Item
const MenuItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
    <Box
        sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#1a1a1a",
            fontSize: "14px",
            cursor: "pointer",
            "&:hover": { color: "#112c71" },
        }}
    >
        <span style={{ fontSize: "16px" }}>{icon}</span>
        {text}
    </Box>
);

export default SecondaryNav;
