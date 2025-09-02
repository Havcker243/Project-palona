import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, ShoppingBag, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/Product/ProductCard';
import { featuredProducts, saleProducts } from '@/data/products';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-ai-primary/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Bot className="w-8 h-8 text-white mr-3" />
              <span className="text-white/90 font-medium">Powered by Pula AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Walcart
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Shop smarter with Pula, your AI shopping assistant. Discover amazing products, 
              get personalized recommendations, and enjoy a seamless shopping experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" variant="secondary" className="hover-glow">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Start Shopping
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Link to="/assistant">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Bot className="w-5 h-5 mr-2" />
                  Meet Pula AI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Walcart?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of online shopping with AI-powered features designed to make your life easier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Shopping Assistant</h3>
                <p className="text-muted-foreground">
                  Chat with Pula for personalized product recommendations and shopping advice.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-success to-success/80 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Quick search, instant recommendations, and seamless checkout experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-warning to-warning/80 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
                <p className="text-muted-foreground">
                  Discover products you'll love with our advanced AI recommendation engine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Discover our most popular items</p>
            </div>
            <Link to="/shop">
              <Button variant="outline">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                <span className="gradient-text">Big Savings!</span>
              </h2>
              <p className="text-muted-foreground">Limited time offers you don't want to miss</p>
            </div>
            <Link to="/shop?sale=true">
              <Button className="hover-glow">
                Shop Sale
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="product-grid">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience AI-Powered Shopping?
            </h2>
            <p className="text-white/90 mb-8">
              Join thousands of satisfied customers who've discovered the future of online shopping with Walcart and Pula AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assistant">
                <Button size="lg" variant="secondary">
                  <Bot className="w-5 h-5 mr-2" />
                  Chat with Pula
                </Button>
              </Link>
              <Link to="/shop">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;