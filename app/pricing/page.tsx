import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check, Star, Zap, Users, Crown, Sparkles } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Template One Page",
    price: "29",
    description: "Parfait pour une présence web simple et efficace",
    icon: <Zap className="w-6 h-6" />,
    color: "blue",
    features: [
      "Page unique responsive (HTML/CSS)",
      "Contenu modifiable",
      "Déploiement via Vercel inclus",
      "Code source fourni",
      "Support par email",
    ],
    popular: false,
  },
  {
    name: "Template Multi Page",
    price: "59",
    description: "Solution complète pour un site professionnel",
    icon: <Star className="w-6 h-6" />,
    color: "purple",
    features: [
      "Site complet (Home, À propos, Contact…)",
      "Entièrement modifiable",
      "Déploiement via Vercel inclus",
      "Code source fourni",
      "Documentation complète",
      "Support prioritaire",
    ],
    popular: true,
  },
  {
    name: "Pack 5 Templates",
    price: "89",
    description: "Économisez avec notre sélection thématique",
    icon: <Users className="w-6 h-6" />,
    color: "green",
    features: [
      "Sélection thématique (SaaS, freelance, e-commerce…)",
      "Accès immédiat à tous les fichiers",
      "Inclut les boutons de déploiement",
      "Mises à jour gratuites",
      "Licence d'utilisation étendue",
    ],
    popular: false,
  },
  {
    name: "Création personnalisée",
    price: "149",
    priceNote: "À partir de",
    description: "Template unique conçu spécialement pour vous",
    icon: <Sparkles className="w-6 h-6" />,
    color: "orange",
    features: [
      "Template sur-mesure selon votre activité",
      "Livraison en 3–5 jours",
      "Support inclus",
      "Révisions illimitées",
      "Consultation stratégique",
      "Formation à la prise en main",
    ],
    popular: false,
  },
  {
    name: "Licence Pro / Revente",
    price: "299",
    description: "Pour les professionnels et agences",
    icon: <Crown className="w-6 h-6" />,
    color: "gold",
    features: [
      "Usage commercial illimité pour plusieurs clients",
      "Autorisée pour agences, freelances, studios",
      "Attribution facultative",
      "Accès à tous les templates existants",
      "Templates futurs inclus pendant 1 an",
      "Support technique dédié",
    ],
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tarifs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choisissez la formule adaptée à votre besoin</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-purple-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-500 text-white px-4 py-1">Plus populaire</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.color === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : plan.color === "purple"
                        ? "bg-purple-100 text-purple-600"
                        : plan.color === "green"
                          ? "bg-green-100 text-green-600"
                          : plan.color === "orange"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {plan.icon}
                </div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-gray-600 text-sm">{plan.description}</p>

                <div className="mt-4">
                  <div className="flex items-center justify-center gap-1">
                    {plan.priceNote && <span className="text-sm text-gray-500">{plan.priceNote}</span>}
                    <span className="text-4xl font-bold text-gray-900">{plan.price} €</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-purple-600 hover:bg-purple-700"
                      : plan.name === "Création personnalisée"
                        ? ""
                        : ""
                  }`}
                  asChild
                >
                  <Link
                    href={
                      plan.name === "Création personnalisée"
                        ? "/request"
                        : plan.name === "Licence Pro / Revente"
                          ? "/licences"
                          : "/templates"
                    }
                  >
                    {plan.name === "Création personnalisée"
                      ? "Faire une demande"
                      : plan.name === "Licence Pro / Revente"
                        ? "En savoir plus"
                        : "Choisir ce plan"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">💳 Paiement sécurisé</h3>
              <p className="text-gray-600 text-sm">
                Tous nos paiements sont sécurisés via Stripe. Nous acceptons les cartes bancaires et PayPal.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">🔄 Garantie satisfait ou remboursé</h3>
              <p className="text-gray-600 text-sm">
                Pas satisfait de votre achat ? Nous vous remboursons intégralement sous 30 jours.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Une question sur nos tarifs ?</h2>
          <p className="text-gray-600 mb-6">Notre équipe est là pour vous aider à choisir la meilleure option</p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/request">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
