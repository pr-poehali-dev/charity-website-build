import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const predefinedAmounts = [25, 50, 100, 250];

  const news = [
    {
      id: 1,
      title: 'New Support Center Opens',
      description: 'We are pleased to announce the opening of our third support center in the city center',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      title: 'Annual Charity Marathon',
      description: 'Join our annual marathon in support of children in need',
      date: 'March 10, 2024'
    },
    {
      id: 3,
      title: 'Year in Review: 5,000 Families Helped',
      description: 'Reviewing our foundation\'s work over the past year',
      date: 'March 5, 2024'
    }
  ];

  const projects = [
    {
      icon: 'Heart',
      title: 'Children Support',
      description: 'Supporting children from low-income families'
    },
    {
      icon: 'Users',
      title: 'Family Care',
      description: 'Helping families in difficult life situations'
    },
    {
      icon: 'Home',
      title: 'Shelters & Centers',
      description: 'Building and maintaining support centers'
    },
    {
      icon: 'BookOpen',
      title: 'Education',
      description: 'Learning and development programs'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-tight">Hope Foundation</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'help', 'news', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section === 'home' && 'Home'}
                  {section === 'help' && 'Donate'}
                  {section === 'news' && 'News'}
                  {section === 'about' && 'About'}
                  {section === 'contact' && 'Contact'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-[85vh] flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-6xl md:text-7xl font-light leading-tight tracking-tight text-foreground">
              Making a difference,
              <span className="block font-semibold">together</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              A charitable foundation dedicated to helping those in need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-8"
                onClick={() => scrollToSection('help')}
              >
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-foreground text-foreground hover:bg-foreground hover:text-background"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 text-center">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                  <Icon name={project.icon as any} size={20} className="text-background" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">{project.title}</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">Make a Donation</h3>
              <p className="text-muted-foreground font-light">
                Choose an amount or enter your own
              </p>
            </div>
            
            <Card className="border-border">
              <CardHeader className="border-b border-border pb-6">
                <CardTitle className="text-lg font-semibold">Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="card" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="card">Card</TabsTrigger>
                    <TabsTrigger value="bank">Bank</TabsTrigger>
                    <TabsTrigger value="other">Other</TabsTrigger>
                  </TabsList>

                  <TabsContent value="card" className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={donationAmount === amount.toString() ? 'default' : 'outline'}
                          className="h-14 font-medium"
                          onClick={() => {
                            setDonationAmount(amount.toString());
                            setCustomAmount('');
                          }}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setDonationAmount('');
                        }}
                        className="h-14"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-foreground hover:bg-foreground/90 text-background h-14 mt-6"
                      disabled={!donationAmount && !customAmount}
                    >
                      Donate {(donationAmount || customAmount) && `$${donationAmount || customAmount}`}
                    </Button>
                  </TabsContent>

                  <TabsContent value="bank" className="space-y-6">
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-foreground rounded-full mx-auto flex items-center justify-center">
                        <Icon name="Building" size={28} className="text-background" />
                      </div>
                      <p className="text-muted-foreground font-light">Bank transfer information</p>
                      <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background">
                        Continue
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="other" className="space-y-3">
                    <Button variant="outline" className="w-full justify-start h-14">
                      <Icon name="Wallet" className="mr-3" size={20} />
                      Digital Wallet
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-14">
                      <Icon name="Smartphone" className="mr-3" size={20} />
                      Mobile Payment
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-14">
                      <Icon name="DollarSign" className="mr-3" size={20} />
                      Cryptocurrency
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 text-center">Latest News</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {news.map((item) => (
              <div key={item.id} className="space-y-4 group">
                <div className="aspect-[4/3] bg-muted rounded-sm overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon name="FileText" size={40} className="text-muted-foreground/30" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.date}</p>
                  <h4 className="font-semibold text-lg group-hover:underline cursor-pointer">{item.title}</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-semibold">About Our Foundation</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Since 2010, we've been helping those in difficult life situations. 
                  Over the years, we've supported more than 50,000 people. We believe that 
                  together we can make the world a better place.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-semibold">50K+</div>
                  <p className="text-sm text-muted-foreground">People Helped</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-semibold">14</div>
                  <p className="text-sm text-muted-foreground">Years Active</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-semibold">200+</div>
                  <p className="text-sm text-muted-foreground">Volunteers</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-semibold">15</div>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 text-center">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Address</p>
                <p className="font-light">123 Hope Street, New York, NY 10001</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Phone</p>
                <p className="font-light">+1 (555) 123-4567</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="font-light">info@hopefoundation.org</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Hours</p>
                <p className="font-light">Mon-Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-semibold mb-1">Hope Foundation</h4>
              <p className="text-sm text-muted-foreground font-light">Making a difference together</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                <Icon name="Twitter" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                <Icon name="Instagram" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                <Icon name="Linkedin" size={18} />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">© 2024 Hope Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
