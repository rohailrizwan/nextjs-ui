"use client";

import { Box, List, ListItem, Typography, Drawer, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import navimage from "../../../(assets)/images/Navimage.png";
import Container from "../../Container/page";
import CustomButton from "../../Button/page";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
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
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function SecondaryNav() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [servicesDrawer, setServicesDrawer] = useState(false);


    const navLinks = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services", hasDropdown: true },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Blog", path: "/blog" },
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
                    {/* Hamburger Icon - Mobile */}
                    <Box
                        sx={{
                            display: { xs: "flex", lg: "none" },
                            alignItems: "center",
                            cursor: "pointer",
                            mr: 2,
                        }}
                    >
                        <HiOutlineMenuAlt3
                            size={30}
                            onClick={() => setSidebar(true)}
                        />
                    </Box>

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

                    {/* Navigation Links (Desktop) */}
                    <List
                        sx={{
                            position: "relative", // important for pseudo-element positioning
                            width: "auto",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "16px",
                            fontWeight:"600",
                            gap: "5px",
                            color: "#3a3737",
                            transition: "color 0.3s ease",
                            "&:hover": { color: "#112c71" },
                            "& a": {
                                position: "relative",
                                textDecoration: "none",
                                color: "inherit",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    left: 0,
                                    bottom: -2,
                                    width: 0,
                                    height: "2px",
                                    backgroundColor: "#112c71",
                                    transition: "width 0.3s ease",
                                },
                                "&:hover::after": {
                                    width: "100%",
                                },
                            },
                        }}
                    >
                        {navLinks.map((link) =>
                            link.hasDropdown ? (
                                <Box
                                    key={link.path}
                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => setOpen(false)}
                                    sx={{ position: "relative" }}
                                >
                                    <ListItem
                                        sx={{
                                            width: "auto",
                                            display: "flex",
                                            alignItems: "center",
                                            fontSize: "16px",
                                            gap: "5px",
                                            color:
                                                pathname === link.path
                                                    ? "#112c71"
                                                    : "#3a3737",
                                            transition: "color 0.3s ease",
                                            "&:hover": { color: "#112c71" },
                                        }}
                                    >
                                        <Link href={link.path}>{link.label}</Link>
                                        <IoIosArrowDown
                                            style={{
                                                position: "relative",
                                                top: "2px",
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>

                                    {/* Mega Menu */}
                                    {open && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "120%",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: "#fff",
                                                boxShadow:
                                                    "0px 4px 20px rgba(0,0,0,0.15)",
                                                borderRadius: "8px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                flexWrap: "wrap",
                                                p: 3,
                                                zIndex: 1200,
                                                minWidth: "1200px",
                                            }}
                                        >
                                            {/* Column 1 */}
                                            <Box
                                                mr={2}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 1,
                                                    flex: 1,
                                                }}
                                            >
                                                <Typography fontWeight={600}>
                                                    Web Development
                                                </Typography>
                                                <MenuItem
                                                    icon={<FaCode />}
                                                    text="Software Development"
                                                />
                                                <MenuItem
                                                    icon={<FaSitemap />}
                                                    text="SaaS Development"
                                                />
                                                <MenuItem
                                                    icon={<FaCode />}
                                                    text="Product Development"
                                                />
                                                <MenuItem
                                                    icon={<FaCode />}
                                                    text="Custom CRM Development"
                                                />

                                                <Typography
                                                    fontWeight={600}
                                                    sx={{ mt: 2 }}
                                                >
                                                    UI/UX Design
                                                </Typography>
                                                <MenuItem
                                                    icon={<FaPencilRuler />}
                                                    text="Web Design"
                                                />
                                                <MenuItem
                                                    icon={<FaMobileAlt />}
                                                    text="Mobile App Design"
                                                />
                                                <MenuItem
                                                    icon={<FaSitemap />}
                                                    text="Wireframing & Prototyping"
                                                />
                                                <MenuItem
                                                    icon={<FaSitemap />}
                                                    text="User Journey Mapping"
                                                />
                                            </Box>

                                            {/* Column 2 */}
                                            <Box
                                                mr={2}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 1,
                                                    flex: 1,
                                                }}
                                            >
                                                <Typography fontWeight={600}>
                                                    CMS Development
                                                </Typography>
                                                <MenuItem
                                                    icon={<FaWordpress />}
                                                    text="WordPress"
                                                />
                                                <MenuItem
                                                    icon={<FaShopify />}
                                                    text="Shopify"
                                                />
                                                <MenuItem
                                                    icon={<SiWebflow />}
                                                    text="Webflow"
                                                />

                                                <Typography
                                                    fontWeight={600}
                                                    sx={{ mt: 2 }}
                                                >
                                                    Digital Marketing
                                                </Typography>
                                                <MenuItem
                                                    icon={<FaSearch />}
                                                    text="SEO"
                                                />
                                            </Box>

                                            {/* Column 3 */}
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 1,
                                                    flex: 1,
                                                }}
                                            >
                                                <Typography fontWeight={600}>
                                                    Graphic Design
                                                </Typography>
                                                <MenuItem
                                                    icon={<FaPaintBrush />}
                                                    text="Logo Design"
                                                />
                                                <MenuItem
                                                    icon={<FaPaintBrush />}
                                                    text="Illustration"
                                                />

                                                <Typography
                                                    fontWeight={600}
                                                    sx={{ mt: 2 }}
                                                >
                                                    Quality Assurance
                                                </Typography>
                                                <MenuItem
                                                    icon={<FaCheckSquare />}
                                                    text="Software Testing"
                                                />
                                            </Box>
                                        </Box>
                                    )}
                                </Box>
                            ) : (
                                <ListItem
                                    key={link.path}
                                    sx={{
                                        width: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "16px",
                                        color:
                                            pathname === link.path
                                                ? "#112c71"
                                                : "#3a3737",
                                        transition: "color 0.3s ease",
                                        "&:hover": { color: "#112c71" },
                                    }}
                                >
                                    <Link href={link.path}>{link.label}</Link>
                                </ListItem>
                            )
                        )}
                    </List>

                    {/* Button (Desktop) */}
                    <Box sx={{ display: { xs: "none", lg: "block" } }}>
                        <CustomButton
                            text="Contact Us"
                            onClick={() => alert("Quote button clicked!")}
                        />
                    </Box>

                    {/* Call Icon - Mobile */}
                    <Box
                        sx={{
                            display: { xs: "flex", lg: "none" },
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#0A2B6B",
                            width: 50,
                            height: 50,
                            borderRadius: 2,
                            cursor: "pointer",
                        }}
                        onClick={() => (window.location.href = "tel:+923001234567")}
                    >
                        <FaPhoneVolume style={{ color: "#fff", fontSize: "24px" }} />
                    </Box>
                </Box>
            </Container>

            {/* Sidebar Drawer */}
            <Drawer anchor="left" sx={{
                "& .MuiDrawer-paper": {
                    width: "100%",  // 🔹 fullscreen cover
                    maxWidth: "100%",
                },
            }} open={sidebar} onClose={() => setSidebar(false)}>
                <Box sx={{ width: "100%", p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
                    {/* Header with logo & close */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                        <Box sx={{ width: 160, height: 80 }}>
                            <Image src={navimage} alt="Atech Sight Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </Box>
                        <IconButton onClick={() => setSidebar(false)}>
                            <IoMdClose size={28} />
                        </IconButton>
                    </Box>

                    {/* NavLinks */}
                    <List>
                        {navLinks.map((link) =>
                            link.hasDropdown ? (
                                <ListItem
                                    key={link.path}
                                    sx={{ py: 1, fontSize: "18px", color: pathname === link.path ? "#112c71" : "#3a3737", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                                    onClick={() => {
                                        setSidebar(false);
                                        setServicesDrawer(true);
                                    }}
                                >
                                    <span>{link.label}</span>
                                    <IoIosArrowDown />
                                </ListItem>
                            ) : (
                                <ListItem
                                    key={link.path}
                                    sx={{ py: 1, fontSize: "18px", color: pathname === link.path ? "#112c71" : "#3a3737" }}
                                    onClick={() => setSidebar(false)}
                                >
                                    <Link href={link.path}>{link.label}</Link>
                                </ListItem>
                            )
                        )}
                    </List>
                </Box>
            </Drawer>
            {/* Services Drawer */}
            <Drawer anchor="left" sx={{
                "& .MuiDrawer-paper": {
                    width: "100%",  // 🔹 fullscreen cover
                    maxWidth: "100%",
                },
            }} open={servicesDrawer} onClose={() => setServicesDrawer(false)}>
                <Box sx={{ width: "100%", p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
                    {/* Header with back */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <IconButton onClick={() => { setServicesDrawer(false); setSidebar(true); }}>
                            <IoIosArrowBack size={24} /> {/* yahan Back arrow bhi use kar sakte ho IoIosArrowBack */}
                        </IconButton>
                        <Typography sx={{ ml: 1, fontWeight: 600 }}> Our Services</Typography>
                    </Box>

                    {/* Mega Menu items mobile view */}
                    <List>
                        <Typography fontWeight={600} sx={{ mt: 1 }}>Web Development</Typography>
                        <MenuItem icon={<FaCode />} text="Software Development" />
                        <MenuItem icon={<FaSitemap />} text="SaaS Development" />
                        <MenuItem icon={<FaCode />} text="Product Development" />
                        <MenuItem icon={<FaCode />} text="Custom CRM Development" />

                        <Typography fontWeight={600} sx={{ mt: 2 }}>UI/UX Design</Typography>
                        <MenuItem icon={<FaPencilRuler />} text="Web Design" />
                        <MenuItem icon={<FaMobileAlt />} text="Mobile App Design" />
                        <MenuItem icon={<FaSitemap />} text="Wireframing & Prototyping" />
                        <MenuItem icon={<FaSitemap />} text="User Journey Mapping" />

                        <Typography fontWeight={600} sx={{ mt: 2 }}>CMS Development</Typography>
                        <MenuItem icon={<FaWordpress />} text="WordPress" />
                        <MenuItem icon={<FaShopify />} text="Shopify" />
                        <MenuItem icon={<SiWebflow />} text="Webflow" />

                        <Typography fontWeight={600} sx={{ mt: 2 }}>Digital Marketing</Typography>
                        <MenuItem icon={<FaSearch />} text="SEO" />

                        <Typography fontWeight={600} sx={{ mt: 2 }}>Graphic Design</Typography>
                        <MenuItem icon={<FaPaintBrush />} text="Logo Design" />
                        <MenuItem icon={<FaPaintBrush />} text="Illustration" />

                        <Typography fontWeight={600} sx={{ mt: 2 }}>Quality Assurance</Typography>
                        <MenuItem icon={<FaCheckSquare />} text="Software Testing" />
                    </List>
                </Box>
            </Drawer>

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
            padding: "6px 8px",
            "&:hover": {
                color: "#112c71",
                backgroundColor: "#eff1f9 !important",
            },
        }}
    >
        <span style={{ fontSize: "16px" }}>{icon}</span>
        {text}
    </Box>
);

export default SecondaryNav;
