"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  X,
  ExternalLink,
  Download,
  ArrowRight,
  Check,
  Menu,
  Zap,
  Shield,
  Users,
  ShoppingCart,
  Heart,
  Phone,
  Mail,
  MapPin,
  Calendar,
  PenTool,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

interface TemplatePreviewProps {
  templateId: string
  isOpen: boolean
  onClose: () => void
}

// Template SaaS One Page
const SaasTemplate = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-gray-900">SaasFlow</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Fonctionnalités
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">
                Tarifs
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
                Témoignages
              </a>
              <Button size="sm">Commencer</Button>
            </nav>
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6">🚀 Nouveau : API v2.0 disponible</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Automatisez votre
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              workflow SaaS
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            La plateforme tout-en-un pour gérer vos projets, équipes et clients. Gagnez du temps et boostez votre
            productivité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Essai gratuit 14 jours
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Voir la démo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tout ce dont vous avez besoin</h2>
            <p className="text-xl text-gray-600">Des outils puissants pour faire grandir votre business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Automatisation</h3>
                <p className="text-gray-600">Automatisez vos tâches répétitives et concentrez-vous sur l'essentiel.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Sécurité</h3>
                <p className="text-gray-600">Vos données sont protégées avec un chiffrement de niveau entreprise.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-600">Travaillez en équipe avec des outils de collaboration intégrés.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarifs simples</h2>
            <p className="text-xl text-gray-600">Choisissez le plan qui vous convient</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-2">Starter</h3>
                <div className="text-4xl font-bold mb-4">
                  29€<span className="text-lg text-gray-500">/mois</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Jusqu'à 5 projets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Support email</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Commencer
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg ring-2 ring-blue-500">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold">Pro</h3>
                  <Badge>Populaire</Badge>
                </div>
                <div className="text-4xl font-bold mb-4">
                  79€<span className="text-lg text-gray-500">/mois</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Projets illimités</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Support prioritaire</span>
                  </li>
                </ul>
                <Button className="w-full">Commencer</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Template E-commerce
const EcommerceTemplate = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-gray-900">ShopElite</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Produits
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Collections
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                À propos
              </a>
              <Button variant="ghost" size="sm">
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Collection
                <br />
                <span className="text-purple-600">Automne 2024</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Découvrez notre nouvelle collection avec des pièces uniques et tendances pour cette saison.
              </p>
              <Button size="lg" className="text-lg px-8 py-6">
                Découvrir la collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-gray-500">Image produit hero</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Produits populaires</h2>
            <p className="text-xl text-gray-600">Nos meilleures ventes du moment</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="border-0 shadow-lg group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="bg-gray-200 h-64 flex items-center justify-center">
                    <div className="text-gray-500">Produit {item}</div>
                  </div>
                  <Button
                    size="sm"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Produit Premium {item}</h3>
                  <p className="text-gray-600 mb-4">Description du produit avec ses caractéristiques principales.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">89,99 €</div>
                    <Button size="sm">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Ajouter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Restez informé</h2>
          <p className="text-xl text-gray-600 mb-8">Recevez nos dernières nouveautés et offres exclusives</p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button>S'abonner</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Template Portfolio Freelance
const PortfolioTemplate = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-gray-900">Alex Martin</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                À propos
              </a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900">
                Portfolio
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Designer UI/UX
                <br />
                <span className="text-blue-600">& Développeur</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Je crée des expériences digitales exceptionnelles qui allient design et performance pour faire grandir
                votre business.
              </p>
              <div className="flex gap-4">
                <Button size="lg">
                  Voir mon travail
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Me contacter
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-gray-600">Photo de profil</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes services</h2>
            <p className="text-xl text-gray-600">Ce que je peux faire pour vous</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PenTool className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Design UI/UX</h3>
                <p className="text-gray-600">Création d'interfaces utilisateur intuitives et esthétiques.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Développement</h3>
                <p className="text-gray-600">Sites web modernes et applications performantes.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Consulting</h3>
                <p className="text-gray-600">Conseils stratégiques pour votre présence digitale.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes réalisations</h2>
            <p className="text-xl text-gray-600">Quelques projets dont je suis fier</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="border-0 shadow-lg group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center">
                    <div className="text-gray-500">Projet {item}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Projet {item}</h3>
                  <p className="text-gray-600 mb-4">Description du projet et des technologies utilisées.</p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Template Agence
const AgencyTemplate = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-gray-900">CreativeStudio</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
              <a href="#team" className="text-gray-600 hover:text-gray-900">
                Équipe
              </a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900">
                Réalisations
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
              <Button size="sm">Devis gratuit</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Agence créative
            <br />
            <span className="text-indigo-600">nouvelle génération</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nous créons des expériences digitales exceptionnelles qui transforment votre vision en succès concret.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Découvrir nos services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos expertises</h2>
            <p className="text-xl text-gray-600">Des solutions complètes pour votre transformation digitale</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-sm text-gray-600">UI/UX, Branding, Identité visuelle</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Développement</h3>
                <p className="text-sm text-gray-600">Sites web, Apps, E-commerce</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Marketing</h3>
                <p className="text-sm text-gray-600">SEO, Social Media, Content</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Consulting</h3>
                <p className="text-sm text-gray-600">Stratégie, Audit, Formation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre équipe</h2>
            <p className="text-xl text-gray-600">Des experts passionnés à votre service</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Dubois", role: "Directrice Créative", icon: PenTool },
              { name: "Marc Laurent", role: "Lead Developer", icon: Zap },
              { name: "Julie Martin", role: "UX Designer", icon: Users },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <member.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Template Restaurant
const RestaurantTemplate = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-amber-600">Le Gourmet</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="text-gray-600 hover:text-gray-900">
                Menu
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                À propos
              </a>
              <a href="#gallery" className="text-gray-600 hover:text-gray-900">
                Galerie
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                <Calendar className="w-4 h-4 mr-2" />
                Réserver
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Cuisine française
            <br />
            <span className="text-amber-600">authentique</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez une expérience culinaire exceptionnelle dans un cadre chaleureux et raffiné au cœur de Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-amber-600 hover:bg-amber-700">
              <Calendar className="mr-2 w-5 h-5" />
              Réserver une table
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Voir le menu
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos spécialités</h2>
            <p className="text-xl text-gray-600">Une sélection de nos plats signature</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: "Foie gras mi-cuit", price: "28€", desc: "Aux figues confites et pain d'épices" },
              { name: "Bœuf Wellington", price: "45€", desc: "Sauce aux champignons et légumes de saison" },
              { name: "Soufflé au Grand Marnier", price: "18€", desc: "Dessert signature de notre chef" },
              { name: "Plateau de fromages", price: "22€", desc: "Sélection de fromages français affinés" },
            ].map((dish, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900">{dish.name}</h3>
                    <div className="text-2xl font-bold text-amber-600">{dish.price}</div>
                  </div>
                  <p className="text-gray-600">{dish.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Nous trouver</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      123 Rue de la Gastronomie
                      <br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-600">01 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contact@legourmet.fr</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Horaires</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Lundi - Vendredi</span>
                  <span className="text-gray-600">12h00 - 14h30, 19h00 - 22h30</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Samedi</span>
                  <span className="text-gray-600">19h00 - 23h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dimanche</span>
                  <span className="text-gray-600">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Template Blog
const BlogTemplate = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-gray-900">TechBlog</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Accueil
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Articles
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Catégories
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                À propos
              </a>
              <Button variant="outline" size="sm">
                S'abonner
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Article */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4">Article à la une</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">L'avenir du développement web en 2024</h1>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez les tendances et technologies qui vont révolutionner le développement web cette année.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
              <div className="font-semibold">Alex Dubois</div>
              <div className="text-sm text-gray-500">15 janvier 2024 • 8 min de lecture</div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center mb-8">
            <div className="text-gray-500">Image de l'article</div>
          </div>
          <Button size="lg">
            Lire l'article complet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Articles récents</h2>
            <p className="text-xl text-gray-600">Les dernières actualités tech</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="border-0 shadow-lg group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <div className="text-gray-500">Article {item}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    Développement
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    Titre de l'article {item}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Extrait de l'article qui donne un aperçu du contenu et incite à la lecture...
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>12 jan 2024</span>
                    <span>5 min</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Restez informé</h2>
          <p className="text-xl text-gray-600 mb-8">Recevez les derniers articles directement dans votre boîte mail</p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button>S'abonner</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Mapping des templates
const templateComponents: Record<string, React.ComponentType> = {
  "saas-landing": SaasTemplate,
  "ecommerce-store": EcommerceTemplate,
  "freelance-portfolio": PortfolioTemplate,
  "agency-corporate": AgencyTemplate,
  "restaurant-menu": RestaurantTemplate,
  "blog-minimal": BlogTemplate,
}

const templateInfo: Record<string, { name: string; price: string; type: string }> = {
  "saas-landing": { name: "SaaS Landing Pro", price: "59", type: "Multi Page" },
  "ecommerce-store": { name: "E-commerce Elite", price: "59", type: "Multi Page" },
  "freelance-portfolio": { name: "Portfolio Freelance", price: "29", type: "One Page" },
  "agency-corporate": { name: "Agency Corporate", price: "59", type: "Multi Page" },
  "restaurant-menu": { name: "Restaurant Gourmet", price: "29", type: "One Page" },
  "blog-minimal": { name: "Blog Minimal", price: "59", type: "Multi Page" },
}

export default function TemplatePreview({ templateId, isOpen, onClose }: TemplatePreviewProps) {
  if (!isOpen) return null

  const TemplateComponent = templateComponents[templateId] || SaasTemplate
  const info = templateInfo[templateId] || templateInfo["saas-landing"]

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-7xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Aperçu du template</h2>
            <Badge variant="secondary">{info.name}</Badge>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://vercel.com/new" target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                Deploy
              </Link>
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Télécharger
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <TemplateComponent />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">Template responsive • Next.js + Tailwind CSS • Prêt à déployer</div>
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-gray-900">
                {info.price} € <span className="text-sm font-normal text-gray-500">({info.type})</span>
              </div>
              <Button asChild>
                <Link href={`/template/${templateId}`}>Voir les détails</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
