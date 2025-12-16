"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

// Mock data - en producción vendría de una API/base de datos
const mockPosts = [
  {
    id: 1,
    slug: "como-captar-mas-exclusivas",
    title: "Cómo captar más exclusivas en 2024: Guía completa",
    excerpt: "Descubre las estrategias más efectivas para aumentar tu cartera de exclusivas y diferenciarte de la competencia en el mercado inmobiliario actual.",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    category: "Captación",
    author: "Pol Corominas",
    date: "15 Dic 2024",
    readTime: "8 min",
  },
  {
    id: 2,
    slug: "errores-comunes-agencias-inmobiliarias",
    title: "5 errores que están frenando el crecimiento de tu agencia",
    excerpt: "Analizamos los errores más frecuentes que cometen las agencias inmobiliarias y cómo evitarlos para escalar tu negocio de forma sostenible.",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    category: "Gestión",
    author: "Juanca López",
    date: "10 Dic 2024",
    readTime: "6 min",
  },
  {
    id: 3,
    slug: "marketing-digital-inmobiliario",
    title: "Marketing digital para inmobiliarias: Lo que funciona en 2024",
    excerpt: "Las mejores estrategias de marketing digital específicas para el sector inmobiliario. Desde Meta Ads hasta contenido orgánico.",
    coverImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop",
    category: "Marketing",
    author: "Pol Corominas",
    date: "5 Dic 2024",
    readTime: "10 min",
  },
  {
    id: 4,
    slug: "escalar-equipo-comercial",
    title: "Cómo escalar tu equipo comercial sin perder calidad",
    excerpt: "Aprende a contratar, formar y retener a los mejores agentes comerciales para tu inmobiliaria manteniendo los estándares de calidad.",
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    category: "Equipo",
    author: "Juanca López",
    date: "28 Nov 2024",
    readTime: "7 min",
  },
  {
    id: 5,
    slug: "automatizar-procesos-inmobiliaria",
    title: "Automatización: El secreto de las inmobiliarias que escalan",
    excerpt: "Descubre qué procesos puedes automatizar en tu agencia para ganar tiempo y aumentar la productividad de tu equipo.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    category: "Tecnología",
    author: "Pol Corominas",
    date: "20 Nov 2024",
    readTime: "9 min",
  },
  {
    id: 6,
    slug: "propuesta-valor-inmobiliaria",
    title: "Crea una propuesta de valor que te diferencie",
    excerpt: "Tu propuesta de valor es lo que te separa de las demás agencias. Aprende a construir una que realmente conecte con tus clientes.",
    coverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop",
    category: "Estrategia",
    author: "Juanca López",
    date: "15 Nov 2024",
    readTime: "5 min",
  },
];

const categories = ["Todos", "Captación", "Gestión", "Marketing", "Equipo", "Tecnología", "Estrategia"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = mockPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = mockPosts[0];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#0a2540] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-wider text-[#00abc8] mb-4 uppercase">
                Blog
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Recursos para escalar tu inmobiliaria
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Estrategias, consejos y casos de éxito para llevar tu agencia al siguiente nivel.
              </p>
            </div>

            {/* Search */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-4 pl-12 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 outline-none focus:border-[#00abc8] transition-all"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#00abc8] text-white text-sm font-medium rounded-full">
                      Destacado
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold text-[#00abc8] uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#0a2540] mt-2 mb-4 group-hover:text-[#00abc8] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-500 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime} lectura</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-[#0a2540] text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-semibold text-[#00abc8] uppercase tracking-wider">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-bold text-[#0a2540] mt-2 mb-3 group-hover:text-[#00abc8] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{post.author}</span>
                          <span>{post.readTime} lectura</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No se encontraron artículos.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-[#0a2540]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              No te pierdas ningún artículo
            </h2>
            <p className="text-white/60 mb-8">
              Suscríbete a nuestra newsletter y recibe contenido exclusivo directamente en tu bandeja de entrada.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 outline-none focus:border-[#00abc8]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#00abc8] hover:bg-[#00c4e4] text-white font-semibold rounded-xl transition-colors"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
