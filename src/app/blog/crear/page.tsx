"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = ["Captación", "Gestión", "Marketing", "Equipo", "Tecnología", "Estrategia"];

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Artículo creado correctamente (simulación)");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Simulate image upload - in production would upload to storage
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <Link href="/blog">
                <Image
                  src="/Logo_02a.svg"
                  alt="Growing Inmobiliario"
                  width={140}
                  height={28}
                  className="h-7 w-auto"
                />
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-sm font-medium text-gray-600">Crear artículo</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPreview(!isPreview)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {isPreview ? "Editar" : "Vista previa"}
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg transition-colors"
              >
                Guardar borrador
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !title || !content || !category}
                className="px-4 py-2 text-sm font-medium text-white bg-[#00abc8] hover:bg-[#00c4e4] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Publicando...
                  </>
                ) : (
                  "Publicar"
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
        {isPreview ? (
          /* Preview Mode */
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {coverImage && (
              <div className="relative aspect-[2/1]">
                <Image
                  src={coverImage}
                  alt="Cover"
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-8 lg:p-12">
              {category && (
                <span className="inline-block px-3 py-1 bg-[#00abc8]/10 text-[#00abc8] text-sm font-medium rounded-full mb-4">
                  {category}
                </span>
              )}
              <h1 className="text-3xl lg:text-4xl font-bold text-[#0a2540] mb-4">
                {title || "Título del artículo"}
              </h1>
              {excerpt && (
                <p className="text-xl text-gray-500 mb-8">{excerpt}</p>
              )}
              <div className="prose prose-lg max-w-none">
                {content ? (
                  <div dangerouslySetInnerHTML={{
                    __html: content
                      .replace(/\n/g, '<br/>')
                      .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-[#0a2540] mt-8 mb-4">$1</h2>')
                      .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-[#0a2540] mt-6 mb-3">$1</h3>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }} />
                ) : (
                  <p className="text-gray-400 italic">El contenido del artículo aparecerá aquí...</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Edit Mode */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Cover Image */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Imagen de portada
                </label>
                {coverImage ? (
                  <div className="relative aspect-[3/1] rounded-xl overflow-hidden group">
                    <Image
                      src={coverImage}
                      alt="Cover preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setCoverImage("")}
                        className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm"
                      >
                        Cambiar imagen
                      </button>
                    </div>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center aspect-[3/1] border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[#00abc8] hover:bg-gray-50 transition-all">
                    <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-500">Haz clic para subir una imagen</span>
                    <span className="text-xs text-gray-400 mt-1">PNG, JPG hasta 10MB</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Title & Category */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Título *
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Escribe un título llamativo..."
                    className="w-full px-4 py-3 text-xl font-semibold border border-gray-200 rounded-xl outline-none focus:border-[#00abc8] focus:ring-1 focus:ring-[#00abc8] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                    Extracto
                  </label>
                  <textarea
                    id="excerpt"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Breve descripción del artículo (aparecerá en las tarjetas del blog)..."
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#00abc8] focus:ring-1 focus:ring-[#00abc8] transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoría *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          category === cat
                            ? "bg-[#0a2540] text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Contenido *
              </label>
              <div className="mb-3 flex items-center gap-2 pb-3 border-b border-gray-100">
                <button
                  type="button"
                  onClick={() => setContent(content + "## ")}
                  className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Título H2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setContent(content + "### ")}
                  className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Título H3"
                >
                  <span className="text-sm font-bold">H3</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const selection = window.getSelection()?.toString() || "texto";
                    setContent(content + `**${selection}**`);
                  }}
                  className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Negrita"
                >
                  <span className="text-sm font-bold">B</span>
                </button>
                <div className="h-6 w-px bg-gray-200 mx-1" />
                <span className="text-xs text-gray-400">
                  Usa ## para títulos, ### para subtítulos, **texto** para negrita
                </span>
              </div>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Escribe el contenido de tu artículo aquí...

## Introducción

Comienza con una introducción que enganche al lector...

## Primera sección

Desarrolla tu primer punto...

### Subsección

Añade más detalle si es necesario..."
                rows={20}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#00abc8] focus:ring-1 focus:ring-[#00abc8] transition-all resize-none font-mono text-sm"
              />
            </div>

            {/* SEO Settings */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuración SEO</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                    URL del artículo
                  </label>
                  <div className="flex items-center">
                    <span className="px-4 py-3 bg-gray-100 border border-r-0 border-gray-200 rounded-l-xl text-sm text-gray-500">
                      /blog/
                    </span>
                    <input
                      id="slug"
                      type="text"
                      placeholder="url-del-articulo"
                      defaultValue={title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-r-xl outline-none focus:border-[#00abc8] focus:ring-1 focus:ring-[#00abc8] transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Meta descripción
                  </label>
                  <textarea
                    id="metaDescription"
                    placeholder="Descripción para motores de búsqueda (máx. 160 caracteres)"
                    maxLength={160}
                    rows={2}
                    defaultValue={excerpt}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#00abc8] focus:ring-1 focus:ring-[#00abc8] transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
