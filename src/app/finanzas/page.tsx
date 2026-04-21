"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function FinanzasPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Transparencia económica</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Modelo <span className="gradient-text">Financiero</span></h1>
            <p className="text-muted text-lg max-w-2xl">Conocé cómo se financia Unira, cómo se distribuyen los recursos y cuál es la proyección de inversión para construir la plataforma.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Inversión proyectada: $700 millones</h2>
            <p className="text-center text-muted max-w-3xl mx-auto mb-12">Para desarrollar una plataforma de tecnología de primer nivel comparable a las mejores aplicaciones del mundo, proyectamos una inversión total de $700 millones de pesos argentinos. Este monto cubrirá el desarrollo completo de las tres aplicaciones, la infraestructura cloud, testing, lanzamiento y los primeros meses de operación.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Desarrollo de Software", amount: "45%", desc: "Contratación de empresas tecnológicas argentinas de primer nivel para el diseño y desarrollo de las tres aplicaciones (Usuario, Conductor, Panel Admin). Incluye UX/UI, frontend, backend, QA y DevOps." },
              { category: "Infraestructura Cloud", amount: "15%", desc: "Servidores AWS, Kubernetes, bases de datos, CDN, monitoreo y seguridad. Arquitectura de microservicios escalable diseñada para soportar millones de usuarios concurrentes." },
              { category: "Seguridad y Compliance", amount: "10%", desc: "Auditorías de seguridad, encriptación de datos, cumplimiento de normativas argentinas de protección de datos personales y prevención de lavado de activos." },
              { category: "Marketing y Lanzamiento", amount: "15%", desc: "Campañas de difusión en las ciudades de lanzamiento inicial, relaciones públicas, partnerships con comercios y promociones de bienvenida para socios fundadores." },
              { category: "Operaciones y equipo", amount: "10%", desc: "Equipo de soporte al usuario, gestión de la cooperativa, servicios legales, contables y administrativos durante los primeros 12 meses de operación." },
              { category: "Fondo de contingencia", amount: "5%", desc: "Reserva para imprevistos, ajustes de mercado y oportunidades de expansión que puedan surgir durante la fase de lanzamiento." },
            ].map((item, i) => (
              <FadeIn key={item.category} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-surface-light border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{item.category}</h3>
                    <span className="text-primary font-bold text-lg">{item.amount}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Estructura de comisiones</h2>
            <p className="text-center text-muted max-w-3xl mx-auto mb-12">Las comisiones de Unira están diseñadas para ser las más bajas del mercado. Mientras las plataformas tradicionales cobran hasta un 40%, nuestra estructura cooperativa garantiza tarifas justas y transparentes.</p>
          </FadeIn>
          <div className="space-y-6 max-w-3xl mx-auto">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-surface-light border-2 border-primary glow-green">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="text-5xl font-extrabold text-primary shrink-0">0%</div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Primeros 50 socios fundadores</h3>
                    <p className="text-muted text-sm leading-relaxed">Los primeros 50 en pre-inscribirse disfrutarán de <strong className="text-foreground">6 meses sin comisión alguna</strong>. Después de ese período, la comisión será de solo <strong className="text-foreground">2%</strong> de por vida. Sin letra chica, sin condiciones ocultas.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-2xl bg-surface-light border border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="text-5xl font-extrabold text-primary shrink-0">5%</div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Socios 51 al 5.000</h3>
                    <p className="text-muted text-sm leading-relaxed">Los socios que se sumen hasta completar los 5.000 fundadores pagarán una comisión del <strong className="text-foreground">5%</strong> sobre cada transacción. Esta tarifa es significativamente menor a la de cualquier plataforma competidora.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-2xl bg-surface-light border border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="text-5xl font-extrabold text-muted shrink-0">8%</div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Socios posteriores (5.001+)</h3>
                    <p className="text-muted text-sm leading-relaxed">Incluso la tarifa estándar será de solo <strong className="text-foreground">8%</strong>, lo que sigue siendo <strong className="text-foreground">hasta 5 veces menos</strong> que lo que cobran las plataformas tradicionales.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="mt-12 p-8 rounded-2xl bg-surface-light border border-border max-w-3xl mx-auto">
              <h3 className="text-lg font-bold mb-4 text-center">Comparativa de comisiones</h3>
              <div className="space-y-3">
                {[
                  { name: "Plataformas tradicionales", fee: "25% - 40%", color: "text-red-400" },
                  { name: "Unira (socio 5.001+)", fee: "8%", color: "text-muted" },
                  { name: "Unira (socios 51-5.000)", fee: "5%", color: "text-primary" },
                  { name: "Unira (primeros 50)", fee: "0% - 2%", color: "text-primary-light" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <span className="text-muted text-sm">{item.name}</span>
                    <span className={`font-bold ${item.color}`}>{item.fee}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Fuentes de financiamiento</h2>
            <p className="text-center text-muted max-w-3xl mx-auto mb-12">El financiamiento de Unira provendrá de múltiples fuentes, garantizando la sostenibilidad y la independencia del proyecto.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Aportes de socios fundadores", desc: "Cada socio fundador realiza un aporte cooperativo que constituye su capital social. Este aporte no es una inversión especulativa sino una participación real en la propiedad de la cooperativa. Los montos y condiciones serán definidos democráticamente en la asamblea constitutiva." },
              { title: "Programas gubernamentales", desc: "Argentina cuenta con diversos programas de fomento al desarrollo tecnológico y a la economía social. Unira gestionará aportes no reembolsables del Ministerio de Desarrollo Productivo, subsidios de la Secretaría de Economía Social y financiamiento del Fondo Tecnológico Argentino (FONTEC)." },
              { title: "Inversores de impacto social", desc: "El modelo cooperativo de Unira atrae al creciente segmento de inversores que buscan retorno social además de financiero. Estableceremos alianzas con fondos de impacto social, organizaciones de cooperativismo y programas de las Naciones Unidas para el desarrollo." },
              { title: "Ingresos operativos", desc: "Una vez en funcionamiento, las comisiones por transacciones generarán los ingresos operativos de la cooperativa. Estos ingresos se destinarán a cubrir costos operativos, reinversión tecnológica, y distribución de excedentes entre los socios." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-surface-light border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Invertí en el futuro de Argentina</h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">Cada socio fundador es un inversor en el sentido más genuino: está invirtiendo en un modelo de economía justa, transparente y cooperativa. Los beneficios no se miden solo en pesos, sino en el impacto social que generamos juntos.</p>
            <Link href="https://forms.gle/pqC3Y5cpi6urC9ya9" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-xl transition-all duration-200 pulse-cta">Quiero ser socio fundador</Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
