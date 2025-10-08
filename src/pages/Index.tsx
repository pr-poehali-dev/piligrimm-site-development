import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      title: "ул. Красноярова 1",
      status: "Сдан",
      type: "Многоквартирный жилой дом",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop"
    },
    {
      title: "ул. Кирова 32",
      status: "Сдан",
      type: "Многоквартирный жилой дом",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop"
    },
    {
      title: "Таун-хаусы, Покровский тракт 17 км",
      status: "Сдан",
      type: "Комплекс таун-хаусов",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-primary">Пилигримм</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
                О компании
              </a>
              <a href="#projects" className="text-foreground hover:text-accent transition-colors font-medium">
                Объекты
              </a>
              <a href="#contacts" className="text-foreground hover:text-accent transition-colors font-medium">
                Контакты
              </a>
            </nav>

            <Button variant="default" className="hidden md:flex bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={18} className="mr-2" />
              8 984 984 98 49
            </Button>

            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <span className="text-sm font-semibold">С 2005 года строим будущее Якутии</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Надёжное строительство для вашего комфорта
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-white/90 leading-relaxed">
                Пилигримм — одна из динамично развивающихся строительных компаний Республики Саха (Якутия) 
                с высоким уровнем производства и современной технологией в сфере гражданского многоквартирного строительства.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-white">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Смотреть объекты
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <Icon name="Building" size={400} className="absolute -top-20 -right-20" />
          </div>
        </section>

        <section id="about" className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-primary">О компании</h2>
                <div className="w-20 h-1 bg-accent mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="p-8 text-center hover:shadow-lg transition-shadow border-none bg-white">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Calendar" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-primary">2005</h3>
                  <p className="text-muted-foreground">Год основания</p>
                </Card>

                <Card className="p-8 text-center hover:shadow-lg transition-shadow border-none bg-white">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-primary">10+</h3>
                  <p className="text-muted-foreground">Сданных объектов</p>
                </Card>

                <Card className="p-8 text-center hover:shadow-lg transition-shadow border-none bg-white">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-primary">500+</h3>
                  <p className="text-muted-foreground">Довольных клиентов</p>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Строительная компания «Пилигримм» была организована 13 августа 2005 года. 
                  За это время мы успешно реализовали множество проектов, включая многоквартирные жилые дома 
                  по ул. Красноярова 1, ул. Кирова 32, а также современные таун-хаусы по Покровскому тракту 17 км.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Мы имеем большой опыт в возведении многоэтажных жилых домов и готовы выполнить строительство 
                  как по типовым, так и по индивидуальным проектам, выполнив весь комплекс строительно-монтажных 
                  работ точно в срок.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-primary">Наши объекты</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Каждый проект выполнен с использованием современных технологий и высочайших стандартов качества
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{project.type}</p>
                    <h3 className="text-xl font-bold mb-4 text-primary">{project.title}</h3>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-primary">Контакты</h2>
                <div className="w-20 h-1 bg-accent mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 text-center border-none bg-white">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={28} className="text-accent" />
                  </div>
                  <h3 className="font-bold mb-2 text-primary">Телефон</h3>
                  <p className="text-foreground/80">8 984 984 98 49</p>
                </Card>

                <Card className="p-8 text-center border-none bg-white">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={28} className="text-accent" />
                  </div>
                  <h3 className="font-bold mb-2 text-primary">Режим работы</h3>
                  <p className="text-foreground/80 text-sm">
                    Пн-Пт: 09:00 - 18:00<br />
                    Обед: 13:00 - 14:00
                  </p>
                </Card>

                <Card className="p-8 text-center border-none bg-white">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={28} className="text-accent" />
                  </div>
                  <h3 className="font-bold mb-2 text-primary">Адрес</h3>
                  <p className="text-foreground/80 text-sm">ул. Кирова 32,<br />офис 301</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">Пилигримм</p>
                <p className="text-sm text-white/70">Строительная компания</p>
              </div>
            </div>
            <p className="text-white/70 text-sm text-center md:text-right">
              © 2005-2024 СК «Пилигримм». Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
