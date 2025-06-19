import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Palette, Rocket } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600 mb-8">
            <Zap className="w-4 h-4" />
            Propulsé par l'Intelligence Artificielle
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Des templates web
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              prêts à déployer
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Créez votre site professionnel en quelques minutes avec nos templates optimisés pour SaaS, e-commerce,
            freelance et plus encore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/templates">
                Découvrir les templates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Voir la démo
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
            <p className="text-xl text-gray-600">Trois étapes simples pour lancer votre site</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">1. Choisis</h3>
                <p className="text-gray-600">
                  Parcours notre collection de templates et sélectionne celui qui correspond à ton activité.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">2. Personnalise</h3>
                <p className="text-gray-600">
                  Adapte les couleurs, textes et images selon ton identité de marque en quelques clics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">3. Déploie</h3>
                <p className="text-gray-600">
                  Lance ton site en production avec Vercel en un clic. Ton site est en ligne !
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Prêt à créer ton site ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoins des milliers d'entrepreneurs qui ont choisi nos templates
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/templates">
              Commencer maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
