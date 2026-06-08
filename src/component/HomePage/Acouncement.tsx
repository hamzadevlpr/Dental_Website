import React from "react";
import Marquee from "react-fast-marquee";
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";

const Acouncement = () => {
    return (
        <div className="w-full bg-brand-primary text-white">
            <div className="px-2 max-w-[1440px] mx-auto flex justify-between items-center py-2">
                <Marquee>
                    <span className="font-medium">Announcement:&nbsp;&nbsp;</span> Go Prepaid and Enjoy Free Shipping on
                    RS 10,000+ Orders (Terms and Conditions Apply). 4% tax will be
                    applied to all Cash on Delivery transactions.
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-medium">Announcement:&nbsp;&nbsp;</span> For bulk orders / distributions,
                    please reach us out at: sales@edentalmart.com
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Marquee>

                {/* Right Side - Social Icons */}
                <div className="flex items-center space-x-4 pl-4 border-l border-white/40">
                    <a
                        href="https://www.facebook.com/#/"
                        target="_blank"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com/#/"
                        target="_blank"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="tel:+923163439290"
                    >
                        <FaPhone />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Acouncement;
