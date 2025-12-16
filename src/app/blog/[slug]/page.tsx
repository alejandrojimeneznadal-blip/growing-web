"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

// Mock data - en producción vendría de una API/base de datos
const mockPosts: Record<string, {
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  "como-captar-mas-exclusivas": {
    title: "Cómo captar más exclusivas en 2024: Guía completa",
    excerpt: "Descubre las estrategias más efectivas para aumentar tu cartera de exclusivas y diferenciarte de la competencia en el mercado inmobiliario actual.",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
    category: "Captación",
    author: "Pol Corominas",
    authorRole: "Co-fundador de Growing",
    date: "15 Diciembre 2024",
    readTime: "8 min",
    content: `
## Por qué las exclusivas son el futuro

El mercado inmobiliario está cambiando. Los propietarios ya no quieren trabajar con múltiples agencias que compiten entre sí. Quieren un profesional de confianza que se dedique al 100% a vender su propiedad.

Las exclusivas no son solo una forma de trabajar, son una declaración de profesionalismo. Cuando un propietario te da una exclusiva, está diciendo: "Confío en ti para hacer el mejor trabajo posible".

## Las 5 claves para captar más exclusivas

### 1. Construye una propuesta de valor diferenciada

Tu propuesta de valor debe responder a una pregunta simple: ¿Por qué debería trabajar contigo en exclusiva y no con otra agencia?

No se trata de prometer el precio más alto o la venta más rápida. Se trata de demostrar que tu proceso, tu experiencia y tu dedicación generarán el mejor resultado posible.

### 2. Domina la presentación de servicios

La mayoría de agentes pierden la exclusiva en la presentación. No porque no sean buenos profesionales, sino porque no saben comunicar su valor.

Una buena presentación debe:
- Educar al propietario sobre el mercado
- Mostrar casos de éxito relevantes
- Explicar tu proceso paso a paso
- Gestionar objeciones antes de que aparezcan

### 3. Genera confianza desde el primer contacto

La confianza no se construye en una reunión, se construye en cada interacción. Desde el primer mensaje hasta el seguimiento post-visita, cada punto de contacto es una oportunidad.

Los pequeños detalles marcan la diferencia:
- Responde rápido (menos de 1 hora)
- Prepara información relevante antes de cada reunión
- Cumple siempre lo que prometes
- Sé transparente, incluso cuando las noticias no son buenas

### 4. Implementa un sistema de seguimiento

El 80% de las exclusivas se pierden por falta de seguimiento. El propietario que hoy dice "no" puede estar listo en 3 meses.

Necesitas un sistema que te permita:
- Hacer seguimiento sin ser invasivo
- Aportar valor en cada contacto
- Estar presente cuando el propietario esté listo

### 5. Especialízate en una zona o tipo de propiedad

Los generalistas compiten en precio. Los especialistas compiten en valor.

Cuando te especializas, te conviertes en el experto de referencia. Los propietarios buscan al mejor profesional para su tipo de propiedad, no al más barato.

## Conclusión

Captar exclusivas no es cuestión de suerte o de tener el mejor marketing. Es cuestión de construir un sistema profesional que genere confianza y demuestre valor en cada interacción.

Si quieres aprender más sobre cómo implementar este sistema en tu agencia, te invitamos a explorar nuestro programa de transformación.
    `,
  },
  "errores-comunes-agencias-inmobiliarias": {
    title: "5 errores que están frenando el crecimiento de tu agencia",
    excerpt: "Analizamos los errores más frecuentes que cometen las agencias inmobiliarias y cómo evitarlos para escalar tu negocio de forma sostenible.",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    category: "Gestión",
    author: "Juanca López",
    authorRole: "Co-fundador de Growing",
    date: "10 Diciembre 2024",
    readTime: "6 min",
    content: `
## Introducción

Después de trabajar con más de 150 agencias inmobiliarias, hemos identificado patrones que se repiten una y otra vez. Errores que parecen pequeños pero que están frenando el crecimiento de forma significativa.

## Error 1: No tener un proceso de ventas definido

La mayoría de agencias dependen del talento individual de sus agentes. Cuando un agente bueno se va, se lleva todo el conocimiento con él.

**La solución:** Documenta cada paso del proceso de ventas. Desde la primera llamada hasta el cierre. Esto te permite formar nuevos agentes más rápido y mantener la consistencia.

## Error 2: Invertir en marketing sin medir resultados

"Hacemos publicidad en redes sociales" no es una estrategia. Es tirar dinero esperando que algo funcione.

**La solución:** Define métricas claras (coste por lead, tasa de conversión, tiempo de cierre) y toma decisiones basadas en datos.

## Error 3: No invertir en formación del equipo

El mercado cambia constantemente. Las técnicas que funcionaban hace 5 años ya no funcionan hoy.

**La solución:** Dedica tiempo y recursos a la formación continua. No solo en técnicas de venta, sino también en tecnología y tendencias del mercado.

## Error 4: Querer hacerlo todo

Captación, ventas, administración, marketing, recursos humanos... Intentar hacer todo significa no hacer nada bien.

**La solución:** Identifica las actividades de mayor impacto y delega o automatiza el resto.

## Error 5: No cuidar la relación con clientes pasados

Conseguir un cliente nuevo cuesta 5 veces más que mantener uno existente. Sin embargo, la mayoría de agencias no tienen ningún sistema de fidelización.

**La solución:** Implementa un programa de seguimiento post-venta. Un cliente satisfecho es la mejor fuente de referidos.

## Conclusión

Estos errores son comunes, pero también son evitables. El primer paso es reconocerlos. El segundo es actuar.
    `,
  },
};

const relatedPosts = [
  {
    slug: "marketing-digital-inmobiliario",
    title: "Marketing digital para inmobiliarias: Lo que funciona en 2024",
    coverImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop",
    category: "Marketing",
    readTime: "10 min",
  },
  {
    slug: "escalar-equipo-comercial",
    title: "Cómo escalar tu equipo comercial sin perder calidad",
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    category: "Equipo",
    readTime: "7 min",
  },
  {
    slug: "automatizar-procesos-inmobiliaria",
    title: "Automatización: El secreto de las inmobiliarias que escalan",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    category: "Tecnología",
    readTime: "9 min",
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = mockPosts[slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0a2540] mb-4">Artículo no encontrado</h1>
            <p className="text-gray-500 mb-8">El artículo que buscas no existe o ha sido eliminado.</p>
            <Link href="/blog" className="text-[#00abc8] hover:underline">
              Volver al blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#0a2540] py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al blog
            </Link>
            <span className="inline-block px-3 py-1 bg-[#00abc8] text-white text-sm font-medium rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-white/60 mb-8">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-white/50">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} lectura</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <div className="relative -mt-8 mb-12">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="py-12">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div
              className="prose prose-lg max-w-none prose-headings:text-[#0a2540] prose-headings:font-bold prose-p:text-gray-600 prose-a:text-[#00abc8] prose-strong:text-[#0a2540] prose-ul:text-gray-600 prose-li:text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/## /g, '<h2 class="text-2xl mt-12 mb-4">').replace(/### /g, '<h3 class="text-xl mt-8 mb-3">').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- /g, '• ') }}
            />

            {/* Author Box */}
            <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00abc8] to-[#0a2540] flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2540]">{post.author}</h3>
                  <p className="text-sm text-gray-500 mb-2">{post.authorRole}</p>
                  <p className="text-gray-600 text-sm">
                    Ayudando a agencias inmobiliarias a escalar de forma predecible y sostenible.
                  </p>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-500 mb-4">Compartir artículo</p>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0a2540] hover:text-white flex items-center justify-center text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0a2540] hover:text-white flex items-center justify-center text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0a2540] hover:text-white flex items-center justify-center text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0a2540] mb-8">Artículos relacionados</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-[#00abc8] uppercase tracking-wider">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-[#0a2540] mt-2 group-hover:text-[#00abc8] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-2">{relatedPost.readTime} lectura</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0a2540]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para escalar tu inmobiliaria?
            </h2>
            <p className="text-white/60 mb-8">
              Descubre si cualificas para nuestro programa de transformación.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00abc8] hover:bg-[#00c4e4] text-white font-semibold rounded-xl transition-colors"
            >
              Comprueba si cualificas
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
