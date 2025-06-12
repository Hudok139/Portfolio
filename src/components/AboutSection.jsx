import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">mim</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor apaixonado por tecnologia
            </h3>
            <p>
              Com pelo o menos 3 anos de experiência, foquei meu desenvolvimento
              principalmente na área mobile e web, fazendo uso de frameworks
              como React, linguagem Typescript e consumindo API's integradas com
              Firebase utilizando NestJs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="/curriculum_lucasSartori.pdf"
                download
                className="cosmic-button"
              >
                Baixe o Meu Currículo
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover bg-card ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Criação de sites responsivos
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover bg-card ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Criação de sites responsivos
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover bg-card ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Criação de sites responsivos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
