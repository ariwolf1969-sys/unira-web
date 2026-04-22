"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";

const services = [
  { icon: "\ud83d\ude97", title: "Transporte", desc: "Viajes con comisi\u00f3n 0% para socios cooperativistas" },
  { icon: "\ud83d\udce6", title: "Entregas", desc: "Env\u00edos a precios justos sin intermediarios" },
  { icon: "\ud83d\uded2", title: "Compras", desc: "Marketplace cooperativo con beneficios exclusivos" },
  { icon: "\ud83c\udf7d\ufe0f", title: "Gastronom\u00eda", desc: "Pedidos de restaurantes con delivery propio" },
  { icon: "\ud83c\udfe5", title: "Salud", desc: "Telemedicina y turnos m\u00e9dicos accesibles" },
  { icon: "\ud83c\udfe0", title: "Servicios", desc: "Pago de servicios y recargas con cashback" },
];

const benefits = [
  "Comisi\u00f3n 5% como socio fundador",
  "Acceso prioritario a todos los servicios",
  "Gobierno cooperativo: un socio, un voto",
  "Cashback y beneficios exclusivos",
  "Programa de referidos con comisiones",
  "Transparencia total en finanzas",
];

const tiers = [
  { name: "Fundador", comm: "2%", highlight: true },
  { name: "Socio Activo", comm: "5%", highlight: false },
  { name: "Usuario Externo", comm: "8%", highlight: false },
];

const steps = [
  { num: "01", title: "Pre-inscribite", desc: "Completa el formulario de pre-inscripci\u00f3n con tus datos. Es gratuito y sin compromiso." },
  { num: "02", title: "Confirma tu email", desc: "Recibir\u00e1s un correo de confirmaci\u00f3n. Cuando lleguemos a 5.000 fundadores arrancamos." },
  { num: "03", title: "Se parte del cambio", desc: "Descarg\u00e1 la app, us\u00e1 los servicios con comisi\u00f3n 0% y ejerc\u00e9 tu derecho a voto en la cooperativa." },
];

function ProgressBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="w-full max-w-lg mx-auto mt-8">
      <div className="h-3 bg-surface-lighter rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: "35%" } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>
      <p className="text-muted text-sm mt-3 text-center">
        1.750 de 5.000 pre-inscriptos
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">


        

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32">
          <FadeIn direction="down" delay={0.2}>
            <p className="text-primary text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-8">
              Cooperativa &middot; Tecnolog&iacute;a &middot; Buenos Aires
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none mb-20">
              <img src="/unira-logo.gif" alt="Unira" className="h-24 md:h-36 lg:h-48 object-contain mx-auto" />
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl md:text-3xl text-foreground/80 mb-8 font-light">
              La primera super-app cooperativa de Argentina
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <p className="text-lg md:text-xl text-foreground/60 mb-16 max-w-2xl mx-auto leading-relaxed">
              Transporte, entregas, compras, gastronom&iacute;a, salud y m&aacute;s. Sin intermediarios. Con comisi&oacute;n{" "}
              <span className="text-primary font-bold">5%</span> para fundadores.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-32">
              <a
                href="https://forms.gle/pqC3Y5cpi6urC9ya9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 glow-green text-lg"
              >
                Pre-inscribirme ahora
              </a>
              <a
                href="/acerca"
                className="px-10 py-4 border border-border hover:border-primary text-muted hover:text-primary font-semibold rounded-xl transition-all duration-300 text-lg"
              >
                Conocer m&aacute;s
              </a>
              <a
                href="https://unira.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 glow-green text-lg"
              >
                Ver nuestra App M&oacute;vil
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-24">
              <AnimatedCounter target={5000} suffix="" label="Miembros fundadores" />
              <AnimatedCounter target={0} suffix="%" label="Comisi&oacute;n de servicio" />
              <AnimatedCounter target={12} suffix="+" label="Servicios incluidos" />
              <AnimatedCounter target={100} suffix="%" label="Cooperativa" />
            </div>
          </FadeIn>

          <FadeIn delay={1.0}>
            <ProgressBar />
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== NO ES SOLO OTRA APP ===== */}
      <section className="py-56 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              No es solo otra app
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-40 text-lg">
              Las grandes plataformas extraen ganancias de Argentina. Unira devuelve el valor a la comunidad.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <FadeIn direction="left">
              <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 md:p-10">
                <h3 className="text-red-400 font-bold text-xl mb-24">Modelo actual</h3>
                <ul className="space-y-4 text-foreground/60 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">&times;</span>
                    Comisiones del 35-40% a prestadores
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">&times;</span>
                    Ganancias van al extranjero
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">&times;</span>
                    Sin voz ni voto para usuarios
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">&times;</span>
                    Precios inflados por intermediarios
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10">
                <h3 className="text-primary font-bold text-xl mb-24">Modelo Unira</h3>
                <ul className="space-y-4 text-foreground/80 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">&#10003;</span>
                    Comisi&oacute;n 5% para los primeros 5.000 socios 
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">&#10003;</span>
                    Ganancias se reinvierten en Argentina
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">&#10003;</span>
                    Gobierno democr&aacute;tico cooperativo
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">&#10003;</span>
                    Precios justos sin intermediarios
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section className="py-56 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              Todo en una sola app
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-40 text-lg">
              12+ servicios integrados
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-surface-light border border-border hover:border-primary/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 group">
                  <span className="text-5xl block mb-5 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-muted leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="py-56 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              Beneficios exclusivos de fundador
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-40 text-lg">
              Solo los primeros 5.000 miembros
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="left">
                <div className="flex items-center gap-4 bg-surface border border-border rounded-xl p-7 hover:border-primary/20 transition-colors">
                  <span className="flex-shrink-0 w-10 h-10 bg-primary/20 text-primary rounded-lg flex items-center justify-center font-bold">
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
      <section className="py-56 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              Estructura de comisiones
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-40 text-lg">
              Mientras m&aacute;s particip&aacute;s, menos pag&aacute;s
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className={`bg-surface-light rounded-2xl p-12 md:p-14 text-center hover:-translate-y-2 transition-all duration-300 ${t.highlight ? "border-2 border-primary/30" : "border border-border"}`}>
                  {t.highlight && (
                    <div className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full mb-5 uppercase tracking-wider">
                      FUNDADOR
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-foreground mb-5">{t.name}</h3>
                  <div className={`text-5xl md:text-6xl font-extrabold mb-2 ${t.highlight ? "gradient-text" : "text-primary"}`}>
                    {t.comm}
                  </div>
                  <p className="text-muted text-sm">comisi&oacute;n por servicio</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMO SUMARTE ===== */}
      <section className="py-56 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              &iquest;C&oacute;mo sumarte?
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-40 text-lg">
              En 3 pasos simples
            </p>
          </FadeIn>

          <div className="space-y-16">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="left">
                <div className="flex items-start gap-6 md:gap-8">
                  <span className="flex-shrink-0 text-4xl md:text-5xl font-extrabold text-primary/30">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5">{s.title}</h3>
                    <p className="text-muted leading-relaxed text-lg">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-56 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-20">
              Se parte de los{" "}
              <span className="gradient-text">5.000 fundadores</span>
            </h2>
            <p className="text-muted text-lg mb-24">
              Tu pre-inscripci&oacute;n no tiene costo ni compromiso.
            </p>
            <a
              href="https://forms.gle/pqC3Y5cpi6urC9ya9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 glow-green pulse-cta"
            >
              Pre-inscribirme ahora
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
