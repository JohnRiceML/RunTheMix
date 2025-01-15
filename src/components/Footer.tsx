import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-2 flex items-center">
              <Mail className="mr-2" size={18} />
              <a href="mailto:info@gaminghub.com" className="hover:text-gray-300">info@gaminghub.com</a>
            </p>
            <p className="mb-4 flex items-center">
              <Phone className="mr-2" size={18} />
              <a href="tel:+16125551234" className="hover:text-gray-300">(612) 555-1234</a>
            </p>
            <p className="mb-2">123 Gamer Street, Minneapolis, MN 55401</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.2746398845984!3d44.97399997909820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d9e7e5e7f1b%3A0x8e2a0f8f5b8f5f5f!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/weeklies" className="hover:text-gray-300">Weeklies</Link></li>
              <li><Link href="/space-rental" className="hover:text-gray-300">Space Rental</Link></li>
              <li><Link href="/events" className="hover:text-gray-300">Events</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media and CTA */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
            </div>
            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
              Join our Discord
            </a>
            <p className="text-xl font-semibold mt-6 mb-2">We'd Love to Hear from You!</p>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2025 RunTheMix. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Proudly serving the Twin Cities gaming community.</p>
        </div>
      </div>
    </footer>
  )
}

