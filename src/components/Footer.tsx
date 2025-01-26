
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-6 text-left">
        {/* Column 1 */}
        <div>
          <ul className="space-y-2 text-gray-500">
            <li className=" text-white">FIND A STORE</li>
            <li>Become a Member</li>
            <li>Sign Up for Email</li>
            <li>Send Us Feedback</li>
            <li>Student Discounts</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className=" mb-2">GET HELP</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On Nike.com Inquiries</li>
            <li>Contact Us On All Other Inquiries</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className=" mb-2">ABOUT NIKE</h3>
          <ul className="space-y-2 text-gray-500">
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* Column 4 - Social Icons */}
        <div className="flex space-x-4 justify-start items-start">
          <FaFacebookF className="cursor-pointer hover:text-gray-400" />
          <FaTwitter className="cursor-pointer hover:text-gray-400" />
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
          <FaYoutube className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className=" mt-6 pt-6 text-sm  px-4 flex justify-between items-center text-gray-500">
        <p>India</p>
        <p>© 2023 Nike, Inc. All Rights Reserved</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Guides
          </a>
          <a href="#" className="hover:underline">
            Terms of Sale
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Nike Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
