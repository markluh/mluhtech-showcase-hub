import { CheckCircle, Target, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Focused on delivering exceptional value and measurable results for every client partnership."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Leveraging the latest technologies and methodologies to create future-ready solutions."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Building long-term relationships through transparent communication and dedicated support."
    }
  ];

  const achievements = [
    "ISO 27001 Certified Security Standards",
    "Microsoft Gold Partner Status",
    "AWS Advanced Consulting Partner",
    "Agile & DevOps Best Practices",
    "24/7 Technical Support Coverage",
    "99.9% Project Success Rate"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">M-LUHTECH LLC</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between business needs and technological possibilities, 
              M-LUHTECH LLC has emerged as a trusted partner for organizations seeking digital excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced engineers, consultants, and project managers work collaboratively 
              to deliver innovative solutions that drive growth, efficiency, and competitive advantage.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <button className="gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-card">
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Core Values</h3>
            {values.map((value, index) => (
              <Card key={value.title} className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0 gradient-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {value.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2018</div>
              <div className="text-muted-foreground">Founded</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Industries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;