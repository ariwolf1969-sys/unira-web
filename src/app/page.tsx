"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";

const services = [
  { icon: "🚗", title: "Transporte", desc: "Viajes con comisión 0% para socios cooperativistas" },
  { icon: "📦", title: "Entregas", desc: "Envíos a precios justos sin intermediarios" },
  { icon: "🛒", title: "Compras", desc: "Marketplace cooperativo con beneficios exclusivos" },
  { icon: "🍽️", title: "Gastronomía", desc: "Pedidos de restaurantes con delivery propio" },
  { icon: "🏥", title: "Salud", desc: "Telemedicina y turnos médicos accesibles" },
  { icon: "🏠", title: "Servicios", desc: "Pago de servicios y recargas con cashback" },
];

const benefits = [
  "Comisión 0% como socio fundador",
  "Acceso prioritario a todos los servicios",
  "Gobierno cooperativo: un socio, un voto",
  "Cashback y beneficios exclusivos",
  "Programa de referidos con comisiones",
  "Transparencia total en finanzas",
];

const tiers = [
  { name: "Fundador", comm: "0%", highlight: true },
  { name: "Socio Activo", comm: "5%", highlight: false },
  { name: "Usuario Externo", comm: "8%", highlight: false },
];

const steps = [
  { num: "01", title: "Pre-inscribite", desc: "Completa el formulario de pre-inscripción con tus datos. Es gratuito y sin compromiso." },
  { num: "02", title: "Confirma tu email", desc: "Recibirás un correo de confirmación. Cuando lleguemos a 5.000 fundadores arrancamos." },
  { num: "03", title: "Se parte del cambio", desc: "Descargá la app, usá los servicios con comisión 0% y ejercé tu derecho a voto en la cooperativa." },
];

function ProgressBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="w-full max-w-md mx-auto mt-6">
      <div className="h-3 bg-surface-lighter rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: "35%" } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>
      <p className="text-muted text-sm mt-2 text-center">
        1.750 de 5.000 pre-inscriptos
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ===== HERO SECTION ==== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
        <div className="absolute inset-0 bg[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <FadeIn direction="down" delay={0.1}>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Cooperativa · Tecnología · Buenos Aires
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">Unira</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-light">
              La primera super-app cooperativa de Argentina
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Transporte, entregas, compras, gastronomía, salud y más. Sin intermediarios. Con comisión{" "}
              <span className="text-primary font-bold">0%</span> para fundadores.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://forms.gle/pqC3Y5cpi6urC9ya9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 glow-green"
              >
                Pre-inscribirme ahora
              </a>
              <a
                href="/acerca"
                className="px-8 py-4 border border-border hover:border-primary text-muted hover:text-primary font-semibold rounded-xl transition-all duration-300"
              >
                Conocer más
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
              <AnimatedCounter target={5000} suffix="" label="Miembros fundadores" />
              <AnimatedCounter target={0} suffix="%" label="Comisión de servicio" />
              <AnimatedCounter target={12} suffix="+" label="Servicios incluidos" />
              <AnimatedCounter target={100} suffix="%" label="Cooperativa" />
            </div>
          </FadeIn>

          <FadeIn delay={0.9}>
            <ProgressBar />
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== NO ES SOLO OTRA APP ===== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              No es solo otra app
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-16 text-lg">
              Las grandes plataformas extraen ganancias de Argentina. Unira devuelve el valor a la comunidad.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeIn direction="left">
              <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-red-400 font-bold text-xl mb-6">Modelo actual</h3>
                <ul className="space-y-3 text-foreground/60">
                  <li>Comisiones del 20-35% a prestadores</li>
                  <li>Ganancias van al extranjero</li>
                  <li>Sin voz ni voto para usuarios</li>
                  <li>Precios inflados por intermediarios</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <h3 className="text-primary font-bold text-xl mb-6">Modelo Unira</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li>Comisión 0% para socios fundadores</li>
                  <li>Ganancias se reinvierten en Argentina</li>
                  <li>Gobierno democrático cooperativo</li>
                  <li>Precios justos sin intermediarios</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Todo en una sola app
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-16 text-lg">
              12+ servicios integrados
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-surface-light border border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group">
                  <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Beneficios exclusivos de fundador
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-16 text-lg">
              Solo los primeros 5.000 miembros
            </p>
          </FadeIn>

          <div className="space-y-4">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="left">
                <div className="flex items-center gap-4 bg-surface border border-border rounded-xl p-5 hover:border-primary/20 transition-colors">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-foreground/80">{b}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMISIONES ===== */}
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Estructura de comisiones
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-16 text-lg">
              Mientras más participas, menos pagás
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className={`bg-surface-light rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300 ${t.highlight ? "border-2 border-primary/30" : "border border-border"}`}>
                  {t.highlight && (
                    <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4">
                      FUNDADOR
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-foreground mb-3">{t.name}</h3>
                  <div className={`text-5xl font-extrabold mb-4 ${t.highlight ? "gradient-text" : "text-primary"}`}>
                    {t.comm}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMO SUMARTE ===== */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              ÿComo sumarte?
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-16 text-lg">
              En 3 pasos simples
            </p>
          </FadeIn>

          <div className="space-y-8">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="left">
                <div className="flex items-start gap-6">
                  <span className="flex-shrink-0 text-4xl font-extrabold text-primary/30">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Se parte de los{" "}
              <span className="gradient-text">5.000 fundadores</span>
            </h2>
            <p className="text-muted text-lg mb-8">
              Tu pre-inscripción no tiene costo ni compromiso.
            </p>
            <a
              href="https://forms.gle/pqC3Y5cpi6urC9ya9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 glow-green pulse-cta"
            >
              Pre-inscribirme ahora
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
