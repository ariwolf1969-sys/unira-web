"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function ContactoPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Hablemos</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4"><span className="gradient-text">Contacto</span></h1>
            <p className="text-muted text-lg max-w-2xl">¿Tenés preguntas, sugerencias o querés sumarte al proyecto? Estamos disponibles por múltiples canales.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FadeIn>
              <a href="https://wa.me/5491155976414" target="_blank" rel="noopener noreferrer" className="block p-8 rounded-2xl bg-surface-light border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted text-sm mb-3">Escribinos al instante, respondemos rápido.</p>
                <p className="text-primary font-semibold">+54 9 11 5597-6414</p>
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <a href="mailto:fabianarielwolf@gmail.com" className="block p-8 rounded-2xl bg-surface-light border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted text-sm mb-3">Para consultas formales o propuestas.</p>
                <p className="text-primary font-semibold text-sm break-all">cooperativaunira@gmail.com</p>
              </a>
            </FadeIn>
            <FadeIn delay={0.2}>
              <a href="tel:+5491155976414" className="block p-8 rounded-2xl bg-surface-light border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Teléfono</h3>
                <p className="text-muted text-sm mb-3">Llamá de lunes a viernes, 9 a 18 hs.</p>
                <p className="text-primary font-semibold">+54 9 11 5597-6414</p>
              </a>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-surface-light border border-primary/30 text-center">
              <h2 className="text-2xl font-bold mb-4">¿Listo para ser socio fundador?</h2>
              <p className="text-muted mb-6">Completá el formulario de pre-inscripción y garantizá tu lugar entre los primeros 5.000 socios. También podés descargar el formulario en PDF para completarlo offline.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://forms.gle/pqC3Y5cpi6urC9ya9" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-200 w-full sm:w-auto">Formulario de pre-inscripción</Link>
                <Link href="https://forms.gle/Ro8xNTcB48yFaBWV6" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-border hover:border-primary text-foreground font-semibold rounded-xl transition-all duration-200 w-full sm:w-auto">Descargar PDF</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Sumate a la comunidad</h2>
            <p className="text-center text-muted max-w-2xl mx-auto mb-12">Seguinos en nuestras redes y sumate al grupo de fundadores donde compartimos novedades, respondemos dudas y construimos el futuro juntos.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <FadeIn>
              <a href="https://facebook.com/groups/365893937405546" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-surface-light border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Grupo de Facebook</h3>
                  <p className="text-muted text-sm">Unite a la comunidad de fundadores</p>
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <a href="https://wa.me/5491155976414" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-surface-light border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-muted text-sm">Consultas directas al fundador</p>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Preguntas frecuentes</h2>
          </FadeIn>
          <div className="space-y-6">
            {[
              { q: "¿Es gratis ser socio fundador?", a: "La pre-inscripción es totalmente gratuita y sin compromiso. Los aportes cooperativos se definirán democráticamente en la asamblea constitutiva, priorizando la accesibilidad para todas las personas. Nuestro objetivo es que nadie quede afuera por cuestiones económicas." },
              { q: "¿Cuándo se lanza la aplicación?", a: "El lanzamiento está condicionado a alcanzar la meta de 5.000 socios fundadores y a la obtención del financiamiento necesario. Una vez cumplidos ambos requisitos, estimamos un período de desarrollo de 12-18 meses. Los socios fundadores serán los primeros en probar las versiones beta." },
              { q: "¿Puedo ser socio si no soy de Buenos Aires?", a: "¡Por supuesto! Buscamos socios de toda Argentina. El lanzamiento inicial será en las principales ciudades (Buenos Aires, Córdoba, Rosario, Mendoza), pero cualquier Argentino o Extranjero con DNI Argentino puede ser socio fundador sin importar su ubicación." },
              { q: "¿Qué pasa si no se alcanzan los 5.000 socios?", a: "El proyecto continúa de todas formas. Los 5.000 socios son la meta ideal para el lanzamiento con máximo impacto, pero la cooperativa puede constituirse con un número menor según lo establece la Ley 20.337 de Cooperativas de Argentina." },
              { q: "¿La pre-inscripción me compromete a algo?", a: "No, la pre-inscripción no genera ningún tipo de obligación legal ni económica. Simplemente indica tu interés en ser parte del proyecto. Cuando la cooperativa se constituya formalmente, serás contactado para confirmar tu participación." },
              { q: "¿Necesito experiencia tecnológica?", a: "Para nada. No hace falta saber programar ni tener experiencia en tecnología. Lo que necesitamos son personas comprometidas que compartan la visión de una plataforma digital justa y cooperativa." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-surface-light border border-border">
                  <h3 className="font-semibold text-foreground mb-3">{item.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
