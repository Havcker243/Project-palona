import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Upload, Sparkles, ShoppingBag, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/Product/ProductCard';
import { products } from '@/data/products';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  products?: typeof products;
}

const Assistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm Pula, your AI shopping assistant. I can help you find products, answer questions about items, search by image, and provide personalized recommendations. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const examplePrompts = [
    "Show me the latest deals",
    "Recommend a laptop for gaming",
    "Find me shoes under $50",
    "What's trending in electronics?",
    "Help me choose a gift",
    "Show me organic beauty products"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(message.toLowerCase());
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateAIResponse = (userMessage: string): Message => {
    let content = '';
    let recommendedProducts: typeof products = [];

    if (userMessage.includes('deal') || userMessage.includes('sale') || userMessage.includes('discount')) {
      content = "Here are some great deals I found for you! These products are currently on sale with significant discounts:";
      recommendedProducts = products.filter(p => p.originalPrice).slice(0, 4);
    } else if (userMessage.includes('laptop') || userMessage.includes('gaming')) {
      content = "Perfect! I found some excellent laptops and gaming accessories that would be great for your needs:";
      recommendedProducts = products.filter(p => 
        p.name.toLowerCase().includes('gaming') || 
        p.name.toLowerCase().includes('mouse') ||
        p.category === 'Electronics'
      ).slice(0, 4);
    } else if (userMessage.includes('shoe') || userMessage.includes('under')) {
      content = "I found some great footwear and affordable options for you:";
      recommendedProducts = products.filter(p => p.price < 100).slice(0, 4);
    } else if (userMessage.includes('electronic') || userMessage.includes('trending')) {
      content = "Here are the trending electronics that customers are loving right now:";
      recommendedProducts = products.filter(p => p.category === 'Electronics').slice(0, 4);
    } else if (userMessage.includes('gift')) {
      content = "Great choice! Here are some popular gift ideas that would make anyone happy:";
      recommendedProducts = products.filter(p => p.rating >= 4.5).slice(0, 4);
    } else if (userMessage.includes('organic') || userMessage.includes('beauty')) {
      content = "Here are some fantastic organic beauty products that are highly rated:";
      recommendedProducts = products.filter(p => 
        p.category === 'Beauty' || 
        p.tags?.includes('organic')
      ).slice(0, 4);
    } else if (userMessage.includes('help') || userMessage.includes('what can you do')) {
      content = `I can help you with many things! Here's what I can do:

🛍️ **Product Recommendations** - Tell me what you're looking for and I'll find the perfect products
🔍 **Smart Search** - Search by description, category, or even upload an image
💡 **Shopping Advice** - Get tips on the best deals and product comparisons
⭐ **Personalized Suggestions** - Based on your preferences and browsing history
📊 **Price Tracking** - Find the best prices and notify you of deals
❓ **Product Questions** - Ask me anything about specifications, features, or compatibility

Try asking me something like "Find me wireless headphones under $100" or "What's the best coffee maker?"`;
    } else {
      content = "I'd be happy to help you find what you're looking for! Here are some popular products that might interest you:";
      recommendedProducts = products.slice(0, 4);
    }

    return {
      id: Date.now().toString(),
      type: 'ai',
      content,
      timestamp: new Date(),
      products: recommendedProducts.length > 0 ? recommendedProducts : undefined
    };
  };

  const handleExampleClick = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-ai-primary to-ai-secondary flex items-center justify-center">
              <Bot className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Pula AI Assistant</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your intelligent shopping companion. Ask me anything, search by image, 
            or get personalized product recommendations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Chat Container */}
          <Card className="h-[600px] flex flex-col">
            <CardContent className="flex-1 p-0 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.type === 'ai' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-ai-primary to-ai-secondary flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className={`max-w-3xl ${message.type === 'user' ? 'order-1' : ''}`}>
                      <div
                        className={`p-4 rounded-lg message-appear ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground ml-auto'
                            : 'bg-card border border-border'
                        }`}
                      >
                        <p className="whitespace-pre-line">{message.content}</p>
                      </div>
                      
                      {/* Product Recommendations */}
                      {message.products && message.products.length > 0 && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                          {message.products.map((product) => (
                            <div key={product.id} className="scale-90 origin-top-left">
                              <ProductCard product={product} />
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <p className="text-xs text-muted-foreground mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                    
                    {message.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-ai-primary to-ai-secondary flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-card border border-border p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-ai-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-ai-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-ai-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Example Prompts */}
              {messages.length === 1 && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground mb-3">Try these examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {examplePrompts.map((prompt, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleExampleClick(prompt)}
                        className="text-xs hover:bg-primary hover:text-primary-foreground"
                      >
                        <Sparkles className="w-3 h-3 mr-1" />
                        {prompt}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-6 border-t border-border">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ask me anything about products..."
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage(inputMessage);
                        }
                      }}
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    onClick={() => handleSendMessage(inputMessage)}
                    disabled={!inputMessage.trim() || isLoading}
                    className="hover-glow"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" disabled>
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Press Enter to send, Shift+Enter for new line
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <Search className="w-8 h-8 text-ai-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Smart Search</h3>
                <p className="text-sm text-muted-foreground">
                  Find products by description, category, or upload an image for visual search.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 text-ai-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Personalized Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Get tailored product suggestions based on your preferences and needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <ShoppingBag className="w-8 h-8 text-ai-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Shopping Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  Ask questions, compare products, and get expert shopping advice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;