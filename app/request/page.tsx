"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Send, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Pour l'instant, juste un log - pas de backend
    console.log("Demande soumise:", formData)
    alert("Demande envoyée ! Nous vous recontacterons bientôt.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 text-sm text-purple-600 mb-6">
            <Sparkles className="w-4 h-4" />
            Création sur-mesure
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Demande de création personnalisée</h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Vous ne trouvez pas le template parfait pour votre projet ? Décrivez-nous vos besoins et notre équipe créera
            un template sur-mesure qui correspond exactement à votre vision.
          </p>
        </div>

        {/* Form */}
        <Card className="border-0 shadow-xl max-w-2xl mx-auto">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl">Parlez-nous de votre projet</CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-medium">
                  Nom complet *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom et prénom"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="h-12 text-base"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">
                  Adresse email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-12 text-base"
                />
              </div>

              {/* Type d'entreprise */}
              <div className="space-y-2">
                <Label htmlFor="businessType" className="text-base font-medium">
                  Type d'entreprise *
                </Label>
                <Select onValueChange={(value) => handleInputChange("businessType", value)} required>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Sélectionnez votre secteur d'activité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas">SaaS</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="agence">Agence</SelectItem>
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="immobilier">Immobilier</SelectItem>
                    <SelectItem value="sante">Santé</SelectItem>
                    <SelectItem value="education">Éducation</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-base font-medium">
                  Description de votre demande *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, style visuel, public cible, exemples de sites que vous aimez..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  required
                  className="min-h-32 text-base resize-none"
                />
                <p className="text-sm text-gray-500">
                  Plus vous êtes précis, mieux nous pourrons répondre à vos attentes.
                </p>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full text-lg py-6 mt-8">
                <Send className="w-5 h-5 mr-2" />
                Envoyer la demande
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="border-0 bg-gray-50 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Délai de réponse</h3>
              <p className="text-gray-600">
                Nous étudions chaque demande avec attention et vous recontactons sous 48h avec un devis personnalisé et
                un délai de réalisation adapté à votre projet.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
