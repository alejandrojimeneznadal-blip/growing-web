import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Política de Cookies | Growing Inmobiliario",
  description: "Política de cookies de Growing Inmobiliario.",
};

export default function Cookies() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0a2540] mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#0a2540] mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-gray-500 mb-8">
              Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              1. ¿Qué son las cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              2. ¿Qué tipos de cookies utilizamos?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              En growinginmobiliario.com utilizamos los siguientes tipos de cookies:
            </p>

            <h3 className="text-xl font-semibold text-[#0a2540] mt-8 mb-3">
              Cookies técnicas o necesarias
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Son aquellas que permiten la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en él existen. Por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, etc.
            </p>

            <h3 className="text-xl font-semibold text-[#0a2540] mt-8 mb-3">
              Cookies de análisis
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Son aquellas que permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio. Para ello se analiza su navegación con el fin de mejorar la oferta de productos o servicios.
            </p>

            <h3 className="text-xl font-semibold text-[#0a2540] mt-8 mb-3">
              Cookies de preferencias
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios, como el idioma, el número de resultados a mostrar, etc.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              3. Cookies de terceros
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Podemos utilizar servicios de terceros que instalan cookies en su dispositivo cuando visita nuestro sitio web:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>Google Analytics:</strong> Para analizar el uso del sitio web.</li>
              <li><strong>Redes sociales:</strong> Para permitir compartir contenido en redes sociales.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              4. ¿Cómo gestionar las cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Puede configurar su navegador para aceptar o rechazar las cookies. A continuación, le indicamos cómo hacerlo en los navegadores más comunes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
              <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tenga en cuenta que si desactiva las cookies, es posible que algunas funcionalidades del sitio web no estén disponibles.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              5. Actualización de la política
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Esta política de cookies puede ser actualizada en cualquier momento. Le recomendamos revisar esta página periódicamente para estar informado sobre cómo utilizamos las cookies.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              6. Contacto
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Si tiene cualquier duda sobre nuestra política de cookies, puede contactarnos en Soporte@growinginmobiliario.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
