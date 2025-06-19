import Link from "next/link"
import { Mail, Twitter, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">TemplateBoost</h3>
            <p className="text-gray-400">Des templates web professionnels pour accélérer votre présence en ligne.</p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Produit</h4>
            <div className="space-y-2">
              <Link href="/templates" className="block text-gray-400 hover:text-white transition-colors">
                Templates
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Documentation
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Centre d'aide
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Statut
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:contact@templateboost.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                contact@templateboost.com
              </a>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 TemplateBoost. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
