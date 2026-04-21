"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function CooperativaPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Modelo organizativo</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">El modelo <span className="gradient-text">Cooperativo</span></h1>
            <p className="text-muted text-lg max-w-2xl">Unira funciona bajo el principio fundamental de que la tecnología pertenece a quienes la usan. Conocé cómo funciona nuestro modelo.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">¿Qué es una cooperativa?</h2>
            <p className="text-center text-muted max-w-3xl mx-auto mb-12">Una cooperativa es una organización de personas que se unen voluntariamente para satisfacer necesidades económicas, sociales y culturales comunes mediante una empresa de propiedad conjunta y gestionada democráticamente. A diferencia de las empresas tradicionales, donde el poder lo tiene quien tiene más acciones, en una cooperativa cada miembro tiene exactamente un voto, independientemente de su aporte económico.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Adhesión voluntaria y abierta", desc: "Cualquier persona puede sumarse a Unira como socio, sin discriminación de ningún tipo. No hay barreras económicas excluyentes, y la membresía está diseñada para ser accesible para todos los argentinos que quieran ser parte del proyecto." },
              { title: "Control democrático por los socios", desc: "Las decisiones se toman en asambleas donde cada socio tiene un voto. Se elige un consejo de administración de manera democrática y transparente, con mandatos renovables y mecanismos de revocación si los socios así lo deciden." },
              { title: "Participación económica de los socios", desc: "Cada socio aporta capital equitativamente y participa en la distribución de excedentes de manera proporcional. A diferencia del modelo accionario, nadie puede acumular poder económico desproporcionado dentro de la cooperativa." },
              { title: "Autonomía e independencia", desc: "Unira es autónoma e independiente de gobiernos, empresas privadas o cualquier organización externa. Los acuerdos con terceros siempre respetarán el control democrático de los socios sobre la cooperativa." },
              { title: "Educación, formación e información", desc: "La cooperativa proporcionará educación y formación a sus socios sobre el modelo cooperativo, tecnología, gestión empresarial y derechos laborales. La información será siempre transparente y accesible para todos los miembros." },
              { title: "Interés por la comunidad", desc: "Más allá del beneficio de sus socios, Unira trabaja por el desarrollo sostenible de las comunidades donde opera. Un porcentaje de los excedentes se destinará a programas sociales, becas tecnológicas y apoyo a emprendedores locales." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-surface-light border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1"><span className="text-primary font-bold text-sm">{i + 1}</span></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Beneficios de ser socio fundador</h2>
            <p className="text-center text-muted max-w-3xl mx-auto mb-12">Los primeros 5.000 socios tendrán ventajas exclusivas que nunca más estarán disponibles. Es la oportunidad de entrar en la planta baja de un proyecto con potencial transformador.</p>
          </FadeIn>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { benefit: "Comisiones de por vida más bajas", desc: "Tu tarifa de comisión queda fija para siempre según el momento en que te inscribiste. Los primeros 50 pagan 2%, los siguientes hasta el 5.000 pagan 5%." },
              { benefit: "Voto fundacional", desc: "Como socio fundador, participás en la asamblea constitutiva donde se definirá el estatuto social, la estructura de gobierno y las políticas de distribución de excedentes." },
              { benefit: "Distribución preferencial de excedentes", desc: "Los excedentes se distribuirán entre todos los socios, pero los fundadores recibirán una proporción mayor durante los primeros años como reconocimiento a su aporte inicial." },
              { benefit: "Acceso anticipado a todos los servicios", desc: "Antes del lanzamiento público, los socios fundadores serán los primeros en probar y utilizar todas las funcionalidades de la plataforma." },
              { benefit: "Reconocimiento público permanente", desc: "Los socios fundadores serán reconocidos en la plataforma y en los materiales de comunicación de la cooperativa como los pioneros que hicieron posible este proyecto." },
              { benefit: "Capacitación exclusiva", desc: "Programa de formación en tecnología, economía cooperativa y emprendimiento diseñado exclusivamente para socios fundadores, con acceso a mentores del ecosistema tecnológico argentino." },
            ].map((item, i) => (
              <FadeIn key={item.benefit} delay={i * 0.08}>
                <div className="flex gap-4 p-5 rounded-2xl bg-surface-light border border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.benefit}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">¿Por qué Argentina necesita una cooperativa de apps?</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-surface-light border border-red-900/30">
                <h3 className="text-lg font-bold text-red-400 mb-4">El problema actual</h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#10007;</span> Las plataformas extranjeras se quedan con hasta el 40% de cada viaje o entrega</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#10007;</span> Las decisiones se toman en oficinas de Silicon Valley, no en Buenos Aires</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#10007;</span> Los conductores y comerciantes no tienen voz ni voto</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#10007;</span> Las ganancias se envían al exterior sin reinvertirse en Argentina</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#10007;</span> Precios en dólares que no reflejan la realidad económica local</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#10007;</span> Cero transparencia sobre cómo se fijan las tarifas</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="p-8 rounded-2xl bg-surface-light border border-primary/30">
                <h3 className="text-lg font-bold text-primary mb-4">La solución: Unira</h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#10003;</span> Comisiones desde 0% para los primeros 50 socios, máximo 8%</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#10003;</span> Las decisiones se toman en asamblea, cada socio tiene un voto</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#10003;</span> Conductores, comerciantes y usuarios son socios con derechos plenos</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#10003;</span> Las ganancias se reinvierten en Argentina y se distribuyen</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#10003;</span> Precios en pesos, pensados para la economía argentina</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#10003;</span> Balances públicos y auditorías anuales para todos los socios</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Arquitectura técnica</h2>
            <p className="text-center text-muted max-w-3xl mx-auto mb-12">Para garantizar una plataforma robusta, escalable y segura, Unira utilizará una arquitectura moderna de microservicios desarrollada por empresas tecnológicas argentinas de primer nivel.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Frontend", items: ["Flutter (apps móviles)", "React/Next.js (panel web)", "Diseño responsive", "PWA para acceso offline"] },
              { category: "Backend", items: ["Arquitectura de microservicios", "Go y Java", "APIs REST + GraphQL", "WebSockets en tiempo real"] },
              { category: "Infraestructura", items: ["AWS + Kubernetes", "Bases de datos distribuidas", "CDN global", "Monitoreo 24/7"] },
              { category: "Seguridad", items: ["Encriptación end-to-end", "Autenticación biométrica", "Prevención de fraude con IA", "Cumplimiento normativo"] },
              { category: "IA y ML", items: ["Precios dinámicos inteligentes", "Optimización de rutas", "Detección de anomalías", "Chatbot de soporte"] },
              { category: "Pagos", items: ["Integración con bancos locales", "QR Mercado Pago", "Criptomonedas (futuro)", "Billetera virtual propia"] },
            ].map((item, i) => (
              <FadeIn key={item.category} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-surface-light border border-border">
                  <h3 className="font-semibold text-primary mb-4">{item.category}</h3>
                  <ul className="space-y-2">
                    {item.items.map((tech) => (
                      <li key={tech} className="text-sm text-muted flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{tech}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Construyamos juntos</h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">Unira no se construye solo. Se construye entre 5.000 argentinos que comparten la visión de un futuro digital más justo y cooperativo. Tu lugar está reservado, pero no por mucho tiempo.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://forms.gle/pqC3Y5cpi6urC9ya9" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-xl transition-all duration-200 pulse-cta w-full sm:w-auto">Ser socio fundador</Link>
              <a href="https://facebook.com/groups/365893937405546" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-border hover:border-primary text-foreground font-semibold text-lg rounded-xl transition-all duration-200 w-full sm:w-auto">Unirme al grupo de Facebook</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
