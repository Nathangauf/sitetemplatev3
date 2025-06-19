"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import TemplatePreview from "@/components/template-preview"

const templates = [
  {
    id: "saas-landing",
    name: "SaaS Landing Pro",
    category: "SaaS",
    description: "Template moderne pour startups SaaS avec sections pricing, features et testimonials",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    downloads: 1240,
    type: "Multi Page",
    price: 59,
  },
  {
    id: "ecommerce-store",
    name: "E-commerce Elite",
    category: "E-commerce",
    description: "Boutique en ligne complète avec panier, checkout et gestion produits",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    downloads: 890,
    type: "Multi Page",
    price: 59,
  },
  {
    id: "freelance-portfolio",
    name: "Portfolio Freelance",
    category: "Portfolio",
    description: "Showcase professionnel pour freelances et créatifs avec galerie projets",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    downloads: 650,
    type: "One Page",
    price: 29,
  },
  {
    id: "agency-corporate",
    name: "Agency Corporate",
    category: "Agence",
    description: "Site d'agence avec présentation équipe, services et études de cas",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    downloads: 420,
    type: "Multi Page",
    price: 59,
  },
  {
    id: "restaurant-menu",
    name: "Restaurant Gourmet",
    category: "Restaurant",
    description: "Site restaurant avec menu interactif, réservations et galerie photos",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    downloads: 380,
    type: "One Page",
    price: 29,
  },
  {
    id: "blog-minimal",
    name: "Blog Minimal",
    category: "Blog",
    description: "Blog épuré avec système de catégories et optimisation SEO",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    downloads: 720,
    type: "Multi Page",
    price: 59,
  },
]

const categories = ["Tous", "SaaS", "E-commerce", "Portfolio", "Agence", "Restaurant", "Blog"]

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null)

  // Filtrer les templates selon la catégorie active
  const filteredTemplates =
    activeCategory === "Tous" ? templates : templates.filter((template) => template.category === activeCategory)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos Templates</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvre notre collection de templates professionnels, conçus pour différents secteurs d'activité
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === activeCategory ? "default" : "secondary"}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={template.image || "/placeholder.svg"}
                  alt={template.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => setPreviewTemplate(template.id)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Aperçu
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{template.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {template.rating}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{template.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-gray-900">
                    {template.price} € <span className="text-sm font-normal text-gray-500">({template.type})</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {template.type}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{template.downloads} téléchargements</span>
                  <Button asChild size="sm">
                    <Link href={`/template/${template.id}`}>Voir détails</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <TemplatePreview
          templateId={previewTemplate || ""}
          isOpen={!!previewTemplate}
          onClose={() => setPreviewTemplate(null)}
        />
      </div>
    </div>
  )
}
