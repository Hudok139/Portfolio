import { Linkedin, Locate, Mail, Phone, Pin, Send } from "lucide-react";
import { cn } from "./../lib/utils";
import { sendEmail } from "../../hooks/email/sendEmail";
import { useState } from "react";
export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendEmail(message, { email, name });
    setTimeout(() => {}, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tem algum projeto em mente ou quer um colaborador? Sinta-se livre para
          me procurar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contato */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Informações de <span className="text-primary">Contato</span>
            </h3>
            <div className="space-y-6 justify-center">
              {/* Email section */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:lucassatori0604@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    lucassartori0604@gmail.com
                  </a>
                </div>
              </div>
              {/* Phone section */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Celular</h4>
                  <a
                    href="tel:+555599205-3350"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (55) +55 99205-3350
                  </a>
                </div>
              </div>

              {/* Location section */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Locate className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Santa Maria, Rio Grande do Sul, Brasil
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium">Onde me encontrar</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/lucas-sartori-480b15218"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className=" bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              Me envie uma mensagem
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Lucas Sartori..."
                ></input>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="lucassartori0604@gmail.com"
                ></input>
              </div>
              <div>
                <label>Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Escreva sua mensagem"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Enviar {<Send size={16} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
