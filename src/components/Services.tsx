import { Code, Smartphone, Cloud, Settings, Shield, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built with cutting-edge technologies to meet your specific business requirements and scale with your growth."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud migration, architecture design, and managed services to optimize your infrastructure and reduce costs."
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration of existing systems and third-party services to streamline operations and improve efficiency."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security auditing, implementation, and monitoring to protect your digital assets and ensure compliance."
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics, reporting, and business intelligence solutions."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 gradient-card group"
            >
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with technology?
          </p>
          <button className="gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-hero">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;