import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Aviso Legal | Growing Inmobiliario",
  description: "Aviso legal y condiciones de uso de Growing Inmobiliario.",
};

export default function AvisoLegal() {
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
            Aviso Legal
          </h1>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-gray-500 mb-8">
              Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              1. Datos identificativos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa que el titular del sitio web growinginmobiliario.com es:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>Denominación social:</strong> Growing Inmobiliario S.L.</li>
              <li><strong>Domicilio social:</strong> España</li>
              <li><strong>Correo electrónico:</strong> Soporte@growinginmobiliario.com</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              2. Objeto
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              El presente aviso legal regula el uso del sitio web growinginmobiliario.com, del que es titular Growing Inmobiliario S.L. La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              3. Propiedad intelectual e industrial
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Growing Inmobiliario S.L., sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              4. Condiciones de uso
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Growing Inmobiliario S.L. ofrece a través de su sitio web y a no emplearlos para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
              <li>Provocar daños en los sistemas físicos y lógicos de Growing Inmobiliario S.L., de sus proveedores o de terceras personas.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              5. Exclusión de responsabilidad
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Growing Inmobiliario S.L. no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del uso de los servicios y contenidos del sitio web por parte del usuario, ni de los daños y perjuicios derivados de la falta de veracidad, vigencia y autenticidad de los datos proporcionados.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2540] mt-10 mb-4">
              6. Legislación aplicable y jurisdicción
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales del domicilio del usuario.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
