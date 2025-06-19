import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, ExternalLink, Star, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data - in a real app, this would come from a database or API
const templateData: Record<string, any> = {
  "saas-landing": {
    name: "SaaS Landing Pro",
    category: "SaaS",
    description:
      "Template moderne et optimisé pour les startups SaaS. Inclut toutes les sections essentielles : hero impactant, présentation des fonctionnalités, pricing flexible, témoignages clients et FAQ complète.",
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.9,
    downloads: 1240,
    features: [
      "Design responsive et moderne",
      "Sections pricing intégrées",
      "Témoignages clients",
      "Optimisation SEO",
      "Animations fluides",
      "Code propre et documenté",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    preview: "https://saas-template-demo.vercel.app",
  },
}

export default function TemplatePage({ params }: { params: { id: string } }) {
  const template = templateData[params.id] || templateData["saas-landing"]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/templates">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux templates
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Template Preview */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <Image
                src={template.image || "/placeholder.svg"}
                alt={template.name}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </Card>

            {/* Live Preview Button */}
            <Button variant="outline" className="w-full" asChild>
              <Link href={template.preview} target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir la démo live
              </Link>
            </Button>
          </div>

          {/* Template Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{template.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {template.rating}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  {template.downloads} téléchargements
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{template.name}</h1>

              <p className="text-lg text-gray-600 leading-relaxed">{template.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full text-lg py-6" asChild>
                <Link href="https://vercel.com/new" target="_blank">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Deploy with Vercel
                </Link>
              </Button>

              <Button variant="outline" size="lg" className="w-full text-lg py-6">
                <Download className="w-5 h-5 mr-2" />
                Télécharger le code
              </Button>
            </div>

            {/* Features */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-600" />
                  Fonctionnalités incluses
                </h3>
                <ul className="space-y-2">
                  {template.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Shield className="w-4 h-4 mr-3 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {template.technologies.map((tech: string) => (
                    <Badge key={tech} variant="outline" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
