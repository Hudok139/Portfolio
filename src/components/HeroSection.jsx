import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span
              className="opacity-0"
              style={{ animation: "var(--animate-fade-in)" }}
            >
              {" "}
              Olá, eu sou
            </span>
            <span
              className="text-primary opacity-0"
              style={{ animation: "var(--animate-fade-in-delay1)" }}
            >
              {" "}
              Lucas
            </span>
            <span
              className="text-primary opacity-0"
              style={{ animation: "var(--animate-fade-in-delay2)" }}
            >
              {" "}
              Sartori
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0"
            style={{ animation: "var(--animate-fade-in-delay3)" }}
          >
            Sou desenvolvedor há mais de 2 anos, trabalho com tecnologias
            voltadas para a web e mobile, além de consumo de API's e integração
            com banco de dados. Este portfólio foi desenvolvido com React,
            JavaScript e TailwindCSS
          </p>

          <div
            className="opacity-0 pt-4"
            style={{ animation: "var(--animate-fade-in-delay4" }}
          >
            <a className="cosmic-button" href="#projects">
              Conheça meu trabalho
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 lef-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
