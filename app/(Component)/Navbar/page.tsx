"use client";
import React from "react";
import Container from "../Container/page";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import SecondaryNav from "./SecondaryNav/page";

function Navbar() {
    return (
        <>
        <div className="bg-[#112c71] hidden lg:flex h-12 items-center text-white text-[15px] font-medium">
            <Container>
                <div className="flex justify-between items-center h-full">
                    {/* Left Section */}
                    <div className="flex items-center gap-3 text-[15px] font-medium">
                        {/* Location */}
                        <div className="flex items-center gap-2 border-r border-white pr-3">
                            <MdLocationOn className="text-[16px]" />
                            <span>212 N. 2nd St., STE 100 Richmond, KY 40475</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2 border-r border-white pr-3">
                            <FaPhoneAlt className="text-[14px]" />
                            <span>+1 (502) 535-1874</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2">
                            <IoMdMail className="text-[16px]" />
                            <span>hello@atechsight.com</span>
                        </div>
                    </div>


                    {/* Right Section - Socials */}
                    <div className="flex items-center gap-3">
                        <span className="font-semibold">Follow Us On :</span>
                        <FaFacebookF className="cursor-pointer hover:text-gray-300 transition" />
                        <FaLinkedinIn className="cursor-pointer hover:text-gray-300 transition" />
                        <FaInstagram className="cursor-pointer hover:text-gray-300 transition" />
                    </div>
                </div>
            </Container>
        </div>
        <SecondaryNav/>
        </>
    );
}

export default Navbar;
