"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function AcercaPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Sobre el proyecto</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Acerca de <span className="gradient-text">Unira</span></h1>
            <p className="text-muted text-lg max-w-2xl">Conocé la visión, la misión y las personas que están haciendo posible el primer super-app cooperativo de Argentina.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-surface-light border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
                <p className="text-muted leading-relaxed">Ser la plataforma de servicios más grande y justa de Argentina, donde cada usuario y prestador es al mismo tiempo dueño de la tecnología que utiliza. Imaginamos un ecosistema digital donde las ganancias se reinvierten en la comunidad, la tecnología se desarrolla pensando en las necesidades locales, y cada miembro tiene poder real de decisión sobre el futuro de la plataforma. No queremos competir con las grandes apps globales; queremos ser la alternativa que Argentina merece: una que nació aquí, que entiende nuestra realidad y que trabaja para los argentinos.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-2xl bg-surface-light border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
                <p className="text-muted leading-relaxed">Democratizar el acceso a servicios de transporte, entregas, pagos y comercio electrónico mediante una plataforma cooperativa de propiedad colectiva. Nuestra misión es reducir drásticamente las comisiones que pagan conductores, comerciantes y usuarios, mientras ofrecemos una experiencia tecnológica de primer nivel. Queremos demostrar que otro modelo de negocio es posible: uno donde la tecnología beneficia a sus usuarios en lugar de explotarlos. Cada peso que un socio genera vuelve a la comunidad en forma de mejores servicios, menores costos y distribución de excedentes.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">¿Qué es Unira?</h2>
            <p className="text-center text-muted max-w-3xl mx-auto mb-12 text-lg">Unira es un proyecto ambicioso que busca transformar la forma en que los argentinos acceden a servicios cotidianos, mediante un modelo cooperativo innovador respaldado por tecnología de primer nivel.</p>
          </FadeIn>
          <div className="space-y-8">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-surface-light border border-border">
                <h3 className="text-xl font-bold mb-4">Un super-app integral</h3>
                <p className="text-muted leading-relaxed">Unira no es solo una app de viajes. Es un ecosistema completo de servicios diseñados para cubrir las necesidades diarias de millones de argentinos. La plataforma incluirá servicios de transporte de pasajeros, entregas y logística, delivery de comida, pagos digitales y billetera virtual, marketplace de comercios, y más servicios que se irán incorporando según las necesidades de los socios. Todo en una sola aplicación, diseñada con una experiencia de usuario intuitiva, rápida y accesible desde cualquier dispositivo.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-2xl bg-surface-light border border-border">
                <h3 className="text-xl font-bold mb-4">Tres aplicaciones, una plataforma</h3>
                <p className="text-muted leading-relaxed">El ecosistema Unira se compone de tres aplicaciones diferenciadas: la <strong>App de Usuario</strong>, diseñada para que cualquier persona pueda solicitar viajes, realizar pedidos, hacer pagos y acceder a comercios; la <strong>App de Conductor</strong>, creada específicamente para los prestadores de servicios de transporte y entregas, con herramientas de gestión de turnos, navegación inteligente y estadísticas de ingresos; y el <strong>Panel de Administración</strong>, una interfaz web robusta donde los socios podrán acceder a reportes financieros, métricas operativas y herramientas de toma de decisiones.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-2xl bg-surface-light border border-border">
                <h3 className="text-xl font-bold mb-4">Hecho por argentinos, para argentinos</h3>
                <p className="text-muted leading-relaxed">Unira nace de la convicción de que Argentina necesita una solución tecnológica propia, pensada desde y para nuestra realidad. Las aplicaciones internacionales no entienden nuestras particularidades económicas, nuestras necesidades de pago, ni la cultura de solidaridad que nos caracteriza. La inversión proyectada de $700 millones de pesos se destinará a desarrollo de software con empresas tecnológicas argentinas de primer nivel, como Globant, 10Pines, Wolox y Rootstrap, generando empleo calificado local y garantizando una calidad de código comparable a las mejores aplicaciones del mundo.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <p className="text-center text-primary font-semibold text-sm tracking-widest uppercase mb-3">Liderazgo</p>
            <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">Quién está detrás del proyecto</h2>
          </FadeIn>
          <FadeIn>
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-surface-light border border-border">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0"><span className="text-4xl font-bold text-primary">FW</span></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Fabian Ariel Wolf</h3>
                  <p className="text-primary text-sm font-semibold mb-4">Fundador y Director del Proyecto</p>
                  <p className="text-muted leading-relaxed">Emprendedor argentino con una visión clara: demostrar que otro modelo de plataforma digital es posible. Fabian concibió Unira tras años de observar cómo las aplicaciones de transporte y entregas explotan a sus propios usuarios y prestadores. Su propuesta es simple pero transformadora: crear una plataforma de tecnología de primer nivel donde los usuarios sean dueños, donde las comisiones sean justas, y donde cada decisión se tome colectivamente. Actualmente se encuentra en la fase de reclutamiento de los 5.000 socios fundadores necesarios para lanzar oficialmente la cooperativa.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <p className="text-center text-primary font-semibold text-sm tracking-widest uppercase mb-3">Hoja de ruta</p>
            <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">Fases del proyecto</h2>
          </FadeIn>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { phase: "Fase 1", title: "Reclutamiento de socios fundadores", status: "En curso", desc: "Estamos buscando 5.000 socios fundadores comprometidos con el proyecto. Esta fase es fundamental para demostrar la viabilidad del modelo cooperativo y atraer inversores. Los primeros 50 socios tendrán beneficios exclusivos, incluyendo 6 meses sin comisiones.", active: true },
              { phase: "Fase 2", title: "Constitución legal y financiamiento", status: "Próximamente", desc: "Una vez alcanzada la meta de socios, procederemos con la constitución legal de la cooperativa bajo las leyes argentinas, la apertura de cuentas bancarias y la búsqueda del financiamiento de $1.800 millones de pesos.", active: false },
              { phase: "Fase 3", title: "Desarrollo de la plataforma", status: "Planificado", desc: "Contratación de empresas tecnológicas argentinas (Globant, 10Pines, Wolox, Rootstrap) para el desarrollo de las tres aplicaciones. Arquitectura de microservicios en AWS con Kubernetes.", active: false },
              { phase: "Fase 4", title: "Lanzamiento en Argentina", status: "Planificado", desc: "Lanzamiento inicial en las principales ciudades de Argentina: Buenos Aires, Córdoba, Rosario, Mendoza y Tucumán. Expansión gradual a todo el territorio nacional.", active: false },
            ].map((item, i) => (
              <FadeIn key={item.phase} delay={i * 0.1}>
                <div className={`flex gap-6 p-6 rounded-2xl border ${item.active ? "bg-primary/5 border-primary/30" : "bg-surface-light border-border"}`}>
                  <div className="shrink-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.active ? "bg-primary text-white" : "bg-surface-lighter text-muted"}`}>{i + 1}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.phase}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${item.active ? "bg-primary/10 text-primary" : "bg-surface-lighter text-muted"}`}>{item.status}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Querés ser parte de la historia?</h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">Estamos buscando argentinos comprometidos que quieran ser parte de un proyecto que va a cambiar la forma en que usamos los servicios digitales. No hace falta ser programador, ni inversor, ni tener experiencia previa.</p>
            <Link href="https://forms.gle/pqC3Y5cpi6urC9ya9" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-xl transition-all duration-200 pulse-cta">Pre-inscribirme como socio fundador</Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
