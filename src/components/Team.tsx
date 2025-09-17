import { Linkedin, Mail, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-image.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Michael Johnson",
      role: "Chief Technology Officer",
      bio: "15+ years in enterprise software architecture and cloud solutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        email: "michael@mluhtech.com",
        github: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Lead Software Engineer",
      bio: "Full-stack developer specializing in React, Node.js, and DevOps practices.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        email: "sarah@mluhtech.com",
        github: "#"
      }
    },
    {
      name: "David Rodriguez",
      role: "Senior Consultant",
      bio: "Digital transformation expert with extensive experience in fintech and healthcare.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        email: "david@mluhtech.com",
        github: "#"
      }
    },
    {
      name: "Emily Williams",
      role: "UI/UX Designer",
      bio: "Creating intuitive and engaging user experiences for web and mobile applications.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        email: "emily@mluhtech.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of technology professionals brings together decades of experience 
            in delivering innovative solutions across various industries.
          </p>
        </div>

        {/* Team Image */}
        <div className="mb-16">
          <img
            src={teamImage}
            alt="M-LUHTECH Team Collaboration"
            className="w-full h-96 object-cover rounded-2xl shadow-hero"
          />
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={member.name} className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 gradient-card group">
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation 
            and excellence in technology solutions.
          </p>
          <button className="gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-hero">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;