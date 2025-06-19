import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Users, Briefcase, Check, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function LicencesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/pricing">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux tarifs
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Licence Professionnelle</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Utilisez nos templates pour vos clients avec notre licence commerciale étendue
          </p>
        </div>

        {/* Main License Card */}
        <Card className="border-0 shadow-xl mb-12">
          <CardHeader className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-t-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-yellow-600" />
            </div>
            <CardTitle className="text-3xl mb-2">Licence Pro / Revente</CardTitle>
            <div className="text-4xl font-bold text-gray-900 mb-2">299 €</div>
            <p className="text-gray-600">Usage commercial illimité</p>
          </CardHeader>

          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Qui peut utiliser cette licence ?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Agences web et digitales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Freelances et consultants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Studios de création</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Développeurs indépendants</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-purple-600" />
                  Ce que vous pouvez faire
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Utiliser pour vos clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Modifier et personnaliser</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Revendre les sites créés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Attribution facultative</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Inclus dans la licence :</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Accès à tous les templates existants</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Templates futurs inclus pendant 1 an</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Support technique dédié</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Mises à jour et améliorations</span>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full mt-8 text-lg py-6">
              Acheter la licence pro - 299 €
            </Button>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="border-l-4 border-l-orange-500 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-orange-900 mb-2">Important à savoir</h3>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• Cette licence est valable pour un utilisateur/une entreprise</li>
                  <li>• Vous ne pouvez pas redistribuer les templates originaux</li>
                  <li>• La revente concerne uniquement les sites finalisés pour vos clients</li>
                  <li>• Le support technique est disponible par email sous 24h</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Questions fréquentes</h2>
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Puis-je utiliser cette licence pour plusieurs agences ?</h3>
                <p className="text-gray-600">
                  Non, cette licence est valable pour une seule entité (personne ou entreprise). Si vous gérez plusieurs
                  agences, vous devez acheter une licence pour chacune.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Y a-t-il une limite au nombre de projets clients ?</h3>
                <p className="text-gray-600">
                  Non, vous pouvez utiliser les templates pour un nombre illimité de projets clients une fois la licence
                  acquise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Que se passe-t-il après la première année ?</h3>
                <p className="text-gray-600">
                  Vous gardez l'accès à tous les templates téléchargés. Pour continuer à recevoir les nouveaux
                  templates, vous pouvez renouveler pour 99€/an.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
