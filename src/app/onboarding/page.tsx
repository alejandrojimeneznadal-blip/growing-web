"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const STEPS = [
  { number: 1, label: "Bienvenida" },
  { number: 2, label: "Formulario" },
  { number: 3, label: "Calendario" },
  { number: 4, label: "CRM" },
  { number: 5, label: "VSL" },
  { number: 6, label: "Acceso" },
  { number: 7, label: "Regalo" },
  { number: 8, label: "Apps" },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);

  // Load GoHighLevel script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Listen for GHL form/survey/calendar completion events
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;

      // Skip if no data
      if (!data) return;

      // Convert to string for easier checking
      const dataStr = typeof data === "string" ? data : JSON.stringify(data);

      // Log all non-iFrameSizer messages for debugging
      if (!dataStr.includes("[iFrameSizer]")) {
        console.log("PostMessage received:", data, "| Type:", typeof data);
      }

      // Check for various completion patterns
      const completionPatterns = [
        "form_submitted",
        "survey_submitted",
        "booking_confirmed",
        "set-sticky-contacts",
        "formSubmitted",
        "surveySubmitted",
        "thank_you",
        "success",
        "completed"
      ];

      // Check if any pattern matches
      const isCompletion = completionPatterns.some(pattern =>
        dataStr.toLowerCase().includes(pattern.toLowerCase())
      );

      if (isCompletion) {
        console.log("✅ Form completion detected! Advancing to next step...");
        nextStep();
        return;
      }

      // Also check for object-based events
      if (typeof data === "object" && data !== null) {
        if (
          data.type === "form_submitted" ||
          data.type === "survey_submitted" ||
          data.type === "booking_confirmed" ||
          data.event === "form_submitted" ||
          data.event === "survey_submitted" ||
          data.event === "booking_confirmed" ||
          data.action === "submit" ||
          data.formSubmitted === true ||
          data.surveySubmitted === true ||
          data.bookingConfirmed === true
        ) {
          console.log("✅ Form completion detected (object)! Advancing to next step...");
          nextStep();
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [currentStep]);

  const goToStep = (step: number) => {
    if (step === currentStep || isTransitioning) return;

    setIsTransitioning(true);
    setShowContent(false);

    setTimeout(() => {
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: "instant" });

      setTimeout(() => {
        setShowContent(true);
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const nextStep = () => {
    if (currentStep < STEPS.length) {
      goToStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/">
            <Image
              src="/Logo_02a.svg"
              alt="Growing Inmobiliario"
              width={150}
              height={30}
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center gap-2 sm:gap-4 overflow-x-auto pb-2">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center min-w-[60px] cursor-pointer"
                onClick={() => step.number <= currentStep && goToStep(step.number)}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step.number === currentStep
                      ? "bg-[#0a2540] text-white"
                      : step.number < currentStep
                      ? "bg-[#00abc8] text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {step.number < currentStep ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={`text-xs mt-1 text-center ${
                    step.number === currentStep
                      ? "text-[#0a2540] font-semibold"
                      : step.number < currentStep
                      ? "text-[#00abc8]"
                      : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`transition-all duration-300 ease-out ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Step 1: Bienvenida */}
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] text-center mb-8">
              Bienvenido a Growing Inmobiliario,
            </h1>

            {/* Video de bienvenida */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-xl mb-8">
              <div className="aspect-video">
                <video
                  src="https://storage.googleapis.com/msgsndr/HXghfIU7XcNehYo0CoFF/media/68ecbad02ac6ae87400137b6.mp4"
                  controls
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={nextStep}
                disabled={isTransitioning}
                className="inline-flex flex-col items-center gap-1 px-12 py-4 bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-bold text-lg rounded-xl transition-all shadow-lg disabled:opacity-50"
              >
                <span>Rellena el formulario ahora</span>
                <span className="text-sm font-normal opacity-80">Haz click en el botón para ir al próximo paso</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Formulario */}
        {currentStep === 2 && (
          <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] text-center mb-8">
              Completa el formulario
            </h1>

            <div>
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/q7kCv4N5jFV395ebOssY"
                style={{ border: "none", width: "100%", minHeight: "600px" }}
                scrolling="no"
                id="q7kCv4N5jFV395ebOssY"
                title="Formulario de onboarding"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </div>

            <div className="text-center mt-4">
              <button
                onClick={nextStep}
                disabled={isTransitioning}
                className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
              >
                He completado el formulario →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Calendario */}
        {currentStep === 3 && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] text-center mb-4">
              Agenda tu reunión de onboarding
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Selecciona el día y hora que mejor te venga
            </p>

            <div>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/BAveYGCH1C5jJkQrxyX0"
                style={{ width: "100%", height: "900px", border: "none" }}
                scrolling="no"
                id="calendar-onboarding"
                title="Calendario de onboarding"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </div>

            <div className="text-center mt-4">
              <button
                onClick={nextStep}
                disabled={isTransitioning}
                className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
              >
                Ya he agendado mi llamada →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: CRM Checkout */}
        {currentStep === 4 && (
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] text-center mb-2">
              Consigue Acceso Al CRM Aducion GRATIS
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540] text-center mb-4">
              Por 3 Meses Con Tu Plan Mensual Y Anual
            </h2>
            <p className="text-gray-500 text-center italic mb-8">
              Con Tu Plan Anual Te Llevas Unos Bonuses Muy Jugosos... (Los Tienes En La Parte Izquierda)
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left side - Benefits */}
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8">
                <div className="flex justify-center mb-6">
                  <span className="bg-[#0a2540] text-white px-6 py-2 rounded-full font-bold">
                    MEJOR OPCIÓN
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0a2540] mb-6">
                  Esto es lo que te llevas en el plan anual...
                </h3>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-[#00abc8] font-bold">•</span>
                    <span><strong>12 meses de acceso ilimitado al CRM Aducion</strong> (+300 usuarios activos)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00abc8] font-bold">•</span>
                    <span><strong>Control total:</strong> gestiona marketing, ventas y equipo en un solo sistema</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00abc8] font-bold">•</span>
                    <div>
                      <strong>BONUS 1: Masterclass completa "Domina tu CRM"</strong>
                      <p className="text-gray-600 text-sm">Aprende paso a paso cómo configurarlo, como lo debe usar tu equipo y cómo centralizar todo tu negocio en un solo sistema.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00abc8] font-bold">•</span>
                    <div>
                      <strong>BONUS 2: Migración guiada de tu base de datos.</strong>
                      <p className="text-gray-600 text-sm">Transfiere tus contactos correctamente sin perder nada.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00abc8] font-bold">•</span>
                    <div>
                      <strong>BONUS 3: Reunión 1 a 1 con nuestro equipo.</strong>
                      <p className="text-gray-600 text-sm">Te acompañamos personalmente en la personalización de tu CRM adaptado a tu empresa</p>
                    </div>
                  </li>
                </ul>

                {/* Guarantee */}
                <div className="mt-8 border border-gray-200 rounded-xl p-6 text-center">
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <svg className="w-10 h-10 text-[#0a2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <p className="font-bold text-lg">GARANTÍA ANTIDISGUSTO</p>
                      <p className="text-sm text-gray-500">TU DINERO EN TU BOLSILLO</p>
                    </div>
                    <svg className="w-10 h-10 text-[#00abc8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">
                    Estamos tan seguros de que este CRM y este programa transformará tu negocio inmobiliario,
                    que esto también lo incluimos en nuestra garantía. Si en el tiempo que estemos trabajando
                    no quedas 100% satisfecho, simplemente tendrás tu dinero de vuelta en tu tarjeta de crédito
                    o débito y no pagarás absolutamente nada.
                  </p>
                </div>
              </div>

              {/* Right side - Payment Form */}
              <div>
                <iframe
                  src="https://link.fastpaydirect.com/payment-link/68c1632267ee3b5a4f68f3e6"
                  style={{ width: "100%", height: "1000px", border: "none" }}
                  title="Checkout CRM"
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={nextStep}
                disabled={isTransitioning}
                className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
              >
                Saltar este paso →
              </button>
            </div>
          </div>
        )}

        {/* Step 5: VSL Video */}
        {currentStep === 5 && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] text-center mb-8">
              Mira este video importante
            </h1>

            <div className="bg-black rounded-2xl overflow-hidden shadow-xl mb-8">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/UDBkiBnMrHs?rel=0&modestbranding=1"
                  title="VSL Growing Inmobiliario"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={nextStep}
                disabled={isTransitioning}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#00abc8] hover:bg-[#00abc8]/90 text-white font-bold text-lg rounded-xl transition-all shadow-lg disabled:opacity-50"
              >
                Continuar al siguiente paso
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Acceso Skool Form */}
        {currentStep === 6 && (
          <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] text-center mb-4">
              Configura tu acceso a la comunidad
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Completa el formulario para acceder a Skool
            </p>

            <div>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/aqt133DOqObX5SzrfMvH"
                style={{ width: "100%", height: "550px", border: "none" }}
                id="inline-aqt133DOqObX5SzrfMvH"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Form Emails para acceso -> Skool"
                title="Form Emails para acceso -> Skool"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </div>

            <div className="text-center mt-4">
              <button
                onClick={nextStep}
                disabled={isTransitioning}
                className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
              >
                He completado el formulario →
              </button>
            </div>
          </div>
        )}

        {/* Step 7: Regalo */}
        {currentStep === 7 && (
          <div className="max-w-3xl mx-auto px-4 py-12 text-center">
            <div className="text-6xl mb-6">🎁</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
              ¡Tienes un regalo esperándote!
            </h1>
            <p className="text-gray-500 mb-8">
              En el siguiente paso descubrirás algo especial...
            </p>

            <button
              onClick={nextStep}
              disabled={isTransitioning}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#00abc8] hover:bg-[#00abc8]/90 text-white font-bold text-lg rounded-xl transition-all shadow-lg disabled:opacity-50"
            >
              Descubrir mi regalo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}

        {/* Step 8: Apps */}
        {currentStep === 8 && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] text-center mb-4">
              Descarga las aplicaciones
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Instala las apps para tener todo a mano desde tu móvil
            </p>

            {/* Video */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-xl mb-12">
              <div className="aspect-video">
                <video
                  src="https://storage.googleapis.com/msgsndr/HXghfIU7XcNehYo0CoFF/media/68ee7aaf52bcc60d19754279.mp4"
                  controls
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* App Downloads */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* GoHighLevel */}
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-[#0a2540] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl font-bold">HL</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-2">CRM Aducion</h3>
                <p className="text-gray-500 text-sm mb-6">GoHighLevel - Tu CRM en el móvil</p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.gohighlevel&hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Google Play
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/highlevel/id1425004076"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    App Store
                  </a>
                </div>
              </div>

              {/* Skool */}
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-[#00abc8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl font-bold">S</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-2">Comunidad Skool</h3>
                <p className="text-gray-500 text-sm mb-6">Accede a la comunidad desde el móvil</p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.skool.skoolcommunities&hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Google Play
                  </a>
                  <a
                    href="https://apps.apple.com/es/app/skool-communities/id6447270545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    App Store
                  </a>
                </div>
              </div>
            </div>

            {/* Finish */}
            <div className="text-center mt-12">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-[#0a2540] mb-4">
                ¡Felicidades! Has completado el onboarding
              </h2>
              <p className="text-gray-500 mb-8">
                Ya tienes todo listo para empezar a crecer con Growing Inmobiliario
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-bold text-lg rounded-xl transition-all shadow-lg"
              >
                Ir a la página principal
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-gray-400 text-sm border-t border-gray-100 mt-12">
        <p>
          © {new Date().getFullYear()} Growing Inmobiliario. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
