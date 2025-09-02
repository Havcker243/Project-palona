import React from 'react';
import { Bot, Sparkles, Users, Globe, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-ai-primary/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Walcart</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Revolutionizing e-commerce with the power of artificial intelligence. 
              We're not just another online store – we're your intelligent shopping companion.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To make online shopping smarter, more personalized, and effortlessly enjoyable 
                through the power of artificial intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">The Future of Shopping is Here</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Walcart, we believe shopping should be intelligent, intuitive, and tailored to your unique needs. 
                  That's why we've created Pula, our advanced AI shopping assistant that learns from your preferences 
                  and helps you discover products you'll love.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're searching for the perfect gift, comparing products, or just browsing for inspiration, 
                  Pula is here to guide you every step of the way with personalized recommendations and expert advice.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-ai-primary/20 flex items-center justify-center">
                  <Bot className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by these core principles that shape our approach to technology and customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of what's possible in e-commerce, 
                  leveraging cutting-edge AI to create amazing shopping experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-success to-success/80 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-muted-foreground">
                  Every decision we make starts with our customers. We're committed to providing 
                  exceptional service and products that exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-warning to-warning/80 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe great shopping experiences should be available to everyone, 
                  regardless of technical expertise or background.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  We partner with trusted brands and maintain high standards for every product 
                  in our catalog to ensure customer satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-destructive to-destructive/80 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to responsible business practices and supporting eco-friendly 
                  products that help protect our planet.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Ethics</h3>
                <p className="text-muted-foreground">
                  We develop AI responsibly, ensuring our technology enhances human decision-making 
                  while respecting privacy and autonomy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pula Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-ai-primary to-ai-secondary flex items-center justify-center">
                <Bot className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              Meet <span className="gradient-text">Pula</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pula is more than just a chatbot – she's your personal shopping expert. Powered by advanced 
              machine learning algorithms, Pula understands your preferences, learns from your shopping 
              history, and provides intelligent recommendations that save you time and help you discover 
              amazing products.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">What Pula Can Do</h4>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li>• Provide personalized product recommendations</li>
                    <li>• Answer questions about products and features</li>
                    <li>• Help with size and compatibility guidance</li>
                    <li>• Find deals and compare prices</li>
                    <li>• Search products by image upload</li>
                    <li>• Track orders and shipments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">How Pula Learns</h4>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li>• Analyzes your browsing and purchase history</li>
                    <li>• Understands your style preferences</li>
                    <li>• Learns from your feedback and ratings</li>
                    <li>• Adapts to seasonal and trending preferences</li>
                    <li>• Respects your privacy with secure data handling</li>
                    <li>• Improves recommendations over time</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Link to="/assistant">
              <Button size="lg" className="hover-glow">
                <Bot className="w-5 h-5 mr-2" />
                Chat with Pula Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">50K+</h3>
              <p className="text-white/80">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">100K+</h3>
              <p className="text-white/80">Products Available</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">99.9%</h3>
              <p className="text-white/80">Uptime Guarantee</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-white/80">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Future of Shopping?
            </h2>
            <p className="text-white/90 mb-8">
              Join our community of smart shoppers and discover how AI can transform your shopping experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" variant="secondary">
                  Start Shopping
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;