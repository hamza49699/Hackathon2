import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const HelpPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold">GET HELP</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-3/4 max-w-md border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </header>

      {/* Main Section */}
      <main className="px-4 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Options Section */}
        <section className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
          <p className="text-gray-700 mb-4">
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>
              If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
            </li>
            <li>Apple Pay</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <span className="font-bold">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member,{' '}
            <a href="#" className="text-blue-600 underline">join us</a> today.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/Joinus"><button className="bg-black text-white px-6 py-2">JOIN US</button></Link>
            <button className="bg-black text-white px-6 py-2">SHOP NIKE</button>
          </div>
        </section>

        {/* Contact Section */}
        <aside className="bg-white p-6 border-l border-gray-300">
          <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
          <p className="text-gray-700 mb-4">
            <strong>000 800 919 0566</strong>
          </p>
          <p className="text-gray-700 mb-4">Products &amp; Orders: 24 hours a day, 7 days a week</p>
          <p className="text-gray-700 mb-4">Company Info &amp; Enquiries: 07:30 - 16:30, Monday - Friday</p>

          {/* Icons Section */}
          <div className="space-y-6 mt-6">
            <div className="flex items-center gap-4">
              <Image src="/35.png" alt="24 hours" width={50} height={50} />
              <div>
                <p className="font-semibold">24 hours a day</p>
                <p>7 days a week</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Image src="/image36.png" alt="Chat" width={50} height={50} />
              <div>
                <p className="font-semibold">Chat Support</p>
                <p>We’re available anytime.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Image src="/38.png" alt="Reply Time" width={50} height={50} />
              <div>
                <p className="font-semibold">We&apos;ll reply within</p>
                <p>Five business days</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Image src="/37.png" alt="Store Locator" width={50} height={50} />
              <div>
                <p className="font-semibold">STORE LOCATOR</p>
                <p>Find Nike retail stores near you</p>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* FAQs Section */}
      <section className="px-2 lg:px-10 py-10">
        <h2 className="text-xl font-bold mb-4">FAQs</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">Does my card need international purchases enabled?</h3>
            <p className="text-gray-700">
              Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
            </p>
            <p className="text-gray-700">
              Please note, some banks may charge a <span className="underline">small transaction fee</span> for international orders.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can I pay for my order with multiple methods?</h3>
            <p className="text-gray-700">No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
          </div>
          <div>
            <h3 className="font-semibold">What payment method is accepted for SNKRS orders?</h3>
            <p className="text-gray-700">You can use any accepted credit card to pay for your SNKRS order.</p>
          </div>
          <div>
            <h3 className="font-semibold">Why don&apos;t I see Apple Pay as an option?</h3>
            <p className="text-gray-700">
              To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
