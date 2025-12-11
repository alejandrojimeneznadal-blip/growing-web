import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad | Growing Inmobiliario",
  description: "Política de privacidad y protección de datos de Growing Inmobiliario.",
};

export default function Privacidad() {
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
            Política de Privacidad
          </h1>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-gray-500 mb-8">
              Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              1. Responsable del tratamiento
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              El responsable del tratamiento de sus datos personales es Growing Inmobiliario S.L. Puede contactarnos en:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>Correo electrónico:</strong> Soporte@growinginmobiliario.com</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              2. Datos que recopilamos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Podemos recopilar los siguientes tipos de datos personales:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>Datos de identificación:</strong> nombre, apellidos, correo electrónico, teléfono.</li>
              <li><strong>Datos profesionales:</strong> nombre de la empresa, cargo, sector de actividad.</li>
              <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              3. Finalidad del tratamiento
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Los datos personales que nos proporcione serán utilizados para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Gestionar su solicitud de información o contacto.</li>
              <li>Prestar los servicios contratados.</li>
              <li>Enviar comunicaciones comerciales si ha dado su consentimiento.</li>
              <li>Mejorar nuestros servicios y la experiencia de usuario.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              4. Base legal del tratamiento
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              La base legal para el tratamiento de sus datos es:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>El consentimiento que nos ha prestado.</li>
              <li>La ejecución de un contrato o la aplicación de medidas precontractuales.</li>
              <li>El interés legítimo de Growing Inmobiliario S.L.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              5. Conservación de los datos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial, no se solicite su supresión por el interesado y no deban ser conservados por obligación legal.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              6. Destinatarios de los datos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sus datos no serán cedidos a terceros salvo obligación legal. Podemos compartir sus datos con proveedores de servicios que actúan como encargados del tratamiento bajo nuestras instrucciones.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              7. Derechos del usuario
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Acceder a sus datos personales.</li>
              <li>Solicitar la rectificación de datos inexactos.</li>
              <li>Solicitar la supresión de sus datos.</li>
              <li>Solicitar la limitación del tratamiento.</li>
              <li>Oponerse al tratamiento.</li>
              <li>Solicitar la portabilidad de los datos.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              Para ejercer estos derechos, puede contactarnos en Soporte@growinginmobiliario.com. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              8. Seguridad de los datos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hemos implementado medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, la alteración, la divulgación o la destrucción.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
