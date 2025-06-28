import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Layers,
  Zap,
  Github,
  Twitter,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">Blocsfolio</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-black transition-colors"
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button size="sm">Get started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-3 h-3 mr-1" />
            Build portfolios, block by block
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Your portfolio,
            <br />
            <span className="text-gray-500">assembled perfectly</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop starting from scratch. Choose from curated blocks—heroes,
            experience sections, project showcases, and more—to build a
            portfolio that actually gets you hired.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-base">
              Start building
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>

          {/* Visual representation of blocks */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-60">
              <Card className="p-4">
                <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded mb-3"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-2/3"></div>
              </Card>
              <Card className="p-4 md:transform md:scale-105 md:shadow-lg border-black">
                <div className="h-20 bg-gradient-to-r from-black to-gray-800 rounded mb-3"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-3/4"></div>
              </Card>
              <Card className="p-4">
                <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded mb-3"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-1/2"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to stand out
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pre-built, customizable blocks designed by developers, for
              developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-sm">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hero Sections</h3>
              <p className="text-gray-600 mb-4">
                Multiple hero layouts from minimal to bold. Make that crucial
                first impression count.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Minimal</Badge>
                <Badge variant="secondary">Animated</Badge>
                <Badge variant="secondary">Split</Badge>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience Blocks</h3>
              <p className="text-gray-600 mb-4">
                Timeline, card-based, or minimal layouts to showcase your
                professional journey.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Timeline</Badge>
                <Badge variant="secondary">Cards</Badge>
                <Badge variant="secondary">List</Badge>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tech Stacks</h3>
              <p className="text-gray-600 mb-4">
                Beautiful ways to display your skills, from icon grids to
                animated showcases.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Icons</Badge>
                <Badge variant="secondary">Progress</Badge>
                <Badge variant="secondary">Tags</Badge>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Showcases</h3>
              <p className="text-gray-600 mb-4">
                Gallery, carousel, or detailed case study layouts for your best
                work.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Gallery</Badge>
                <Badge variant="secondary">Carousel</Badge>
                <Badge variant="secondary">Case Study</Badge>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">About Sections</h3>
              <p className="text-gray-600 mb-4">
                Personal story blocks that help recruiters connect with you as a
                person.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Story</Badge>
                <Badge variant="secondary">Stats</Badge>
                <Badge variant="secondary">Photo</Badge>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Forms</h3>
              <p className="text-gray-600 mb-4">
                Simple to elaborate contact sections that actually convert
                visitors to conversations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Simple</Badge>
                <Badge variant="secondary">Detailed</Badge>
                <Badge variant="secondary">Social</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three steps to your perfect portfolio
            </h2>
            <p className="text-xl text-gray-600">
              No design skills required. No coding from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Blocks</h3>
              <p className="text-gray-600">
                Browse our library of professionally designed blocks and pick
                what fits your story.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customize & Arrange
              </h3>
              <p className="text-gray-600">
                Drag, drop, and customize. Add your content, adjust colors, and
                make it yours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Export & Deploy</h3>
              <p className="text-gray-600">
                Get clean code or deploy instantly. Your portfolio, ready for
                the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you need more blocks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-0 shadow-sm">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>
              <div className="text-4xl font-bold mb-6">$0</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />5 portfolio
                  blocks
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Basic customization
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Export HTML/CSS
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Community support
                </li>
              </ul>
              <Button variant="outline" className="w-full bg-transparent">
                Start free
              </Button>
            </Card>

            <Card className="p-8 border-2 border-black shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">Pro</h3>
                <Badge>Most popular</Badge>
              </div>
              <p className="text-gray-600 mb-6">For serious developers</p>
              <div className="text-4xl font-bold mb-6">
                $12<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Unlimited blocks
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Advanced customization
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  React/Next.js export
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  One-click deployment
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Priority support
                </li>
              </ul>
              <Button className="w-full">Start 7-day trial</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to build your standout portfolio?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who've landed their dream jobs with
            portfolios built on Blocsfolio.
          </p>
          <Button size="lg" className="text-base">
            Start building for free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">Blocsfolio</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-black transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-black transition-colors text-sm"
              >
                Terms
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
            © 2024 Blocsfolio. Built for developers, by developers.
          </div>
        </div>
      </footer>
    </div>
  );
}
