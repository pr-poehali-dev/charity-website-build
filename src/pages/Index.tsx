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

  const predefinedAmounts = [500, 1000, 2500, 5000];

  const news = [
    {
      id: 1,
      title: 'Открытие нового центра помощи',
      description: 'Мы рады сообщить об открытии третьего центра поддержки в центре города',
      date: '15 марта 2024'
    },
    {
      id: 2,
      title: 'Благотворительный марафон',
      description: 'Присоединяйтесь к нашему ежегодному марафону в поддержку детей',
      date: '10 марта 2024'
    },
    {
      id: 3,
      title: 'Итоги года: помощь оказана 5000 семьям',
      description: 'Подводим итоги работы фонда за прошедший год',
      date: '5 марта 2024'
    }
  ];

  const projects = [
    {
      icon: 'Heart',
      title: 'Помощь детям',
      description: 'Поддержка детей из малообеспеченных семей'
    },
    {
      icon: 'Users',
      title: 'Поддержка семей',
      description: 'Помощь семьям в трудной жизненной ситуации'
    },
    {
      icon: 'Home',
      title: 'Приюты и центры',
      description: 'Строительство и поддержка центров помощи'
    },
    {
      icon: 'BookOpen',
      title: 'Образование',
      description: 'Программы обучения и развития'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Фонд Надежды
            </h1>
            <div className="hidden md:flex gap-6">
              {['home', 'help', 'news', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'help' && 'Помочь'}
                  {section === 'news' && 'Новости'}
                  {section === 'about' && 'О фонде'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Вместе мы делаем
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                мир лучше
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Благотворительный фонд помощи тем, кто нуждается в поддержке и заботе
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
                onClick={() => scrollToSection('help')}
              >
                <Icon name="Heart" className="mr-2" size={24} />
                Помочь сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 transition-all hover:scale-105"
                onClick={() => scrollToSection('about')}
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши проекты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={project.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">Сделайте пожертвование</h3>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Выберите сумму или укажите свою
            </p>
            
            <Card className="border-2 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Способ оплаты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="card" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="card" className="text-sm md:text-base">
                      <Icon name="CreditCard" size={20} className="mr-2" />
                      Карта
                    </TabsTrigger>
                    <TabsTrigger value="sbp" className="text-sm md:text-base">
                      <Icon name="Smartphone" size={20} className="mr-2" />
                      СБП
                    </TabsTrigger>
                    <TabsTrigger value="other" className="text-sm md:text-base">
                      <Icon name="Wallet" size={20} className="mr-2" />
                      Другое
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="card" className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={donationAmount === amount.toString() ? 'default' : 'outline'}
                          className="h-16 text-lg font-semibold transition-all"
                          onClick={() => {
                            setDonationAmount(amount.toString());
                            setCustomAmount('');
                          }}
                        >
                          {amount} ₽
                        </Button>
                      ))}
                    </div>
                    
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="Своя сумма"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setDonationAmount('');
                        }}
                        className="text-lg py-6"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">₽</span>
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg py-6 mt-6"
                      disabled={!donationAmount && !customAmount}
                    >
                      <Icon name="Heart" className="mr-2" size={24} />
                      Помочь {(donationAmount || customAmount) && `на ${donationAmount || customAmount} ₽`}
                    </Button>
                  </TabsContent>

                  <TabsContent value="sbp" className="space-y-4">
                    <div className="text-center py-8 space-y-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-montserrat to-secondary rounded-full mx-auto flex items-center justify-center">
                        <Icon name="Smartphone" size={48} className="text-white" />
                      </div>
                      <p className="text-lg">Оплата через Систему быстрых платежей</p>
                      <Button size="lg" className="bg-montserrat hover:bg-montserrat/90 text-white">
                        Продолжить
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="other" className="space-y-4">
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start h-14 text-base">
                        <Icon name="Wallet" className="mr-3" size={24} />
                        Электронный кошелёк
                      </Button>
                      <Button variant="outline" className="w-full justify-start h-14 text-base">
                        <Icon name="Building" className="mr-3" size={24} />
                        Банковский перевод
                      </Button>
                      <Button variant="outline" className="w-full justify-start h-14 text-base">
                        <Icon name="DollarSign" className="mr-3" size={24} />
                        Криптовалюта
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Новости фонда</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <Card
                key={item.id}
                className="group hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Newspaper" size={64} className="text-primary/40" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{item.description}</p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-primary">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-deep-teal/10 to-montserrat/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">О нашем фонде</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Мы работаем с 2010 года, помогая тем, кто оказался в трудной жизненной ситуации. 
              За это время нашу помощь получили более 50,000 человек. Мы верим, что вместе мы можем 
              сделать мир лучше и добрее.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">50K+</div>
                <p className="text-muted-foreground">Помогли людям</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-secondary">14</div>
                <p className="text-muted-foreground">Лет работы</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-accent">200+</div>
                <p className="text-muted-foreground">Волонтёров</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Свяжитесь с нами</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    Адрес
                  </CardTitle>
                  <CardDescription className="text-base">
                    г. Москва, ул. Примерная, д. 123
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" />
                    Телефон
                  </CardTitle>
                  <CardDescription className="text-base">
                    +7 (495) 123-45-67
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="text-primary" />
                    Email
                  </CardTitle>
                  <CardDescription className="text-base">
                    info@fond-nadezhdy.ru
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-primary" />
                    Время работы
                  </CardTitle>
                  <CardDescription className="text-base">
                    Пн-Пт: 9:00 - 18:00
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-deep-teal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold mb-2">Фонд Надежды</h4>
              <p className="text-white/80">Вместе делаем мир лучше</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                <Icon name="Facebook" className="text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                <Icon name="Instagram" className="text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                <Icon name="Twitter" className="text-white" />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
            <p>© 2024 Фонд Надежды. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
