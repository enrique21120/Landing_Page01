import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronRight, Star, Play, ArrowRight, ArrowLeft } from 'lucide-react';

const fadeScaleAnim = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const GeometricLines = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-10">
    <svg viewBox="0 0 1140 705" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[1140px]">
      <g stroke="#715852" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 1V704.319" />
        <path d="M1 704.32H704.325" />
        <path d="M704.325 704.319V1" />
        <path d="M704.325 1H1" />
        <path d="M704.325 704.32H1139" />
        <path d="M704.325 1H1139" />
        <path d="M1139 1V704.319" />
        <path d="M704.325 435.674H1139" />
        <path d="M870.35 435.674V704.32" />
        <path d="M704.325 538.291H870.35" />
        <path d="M806.947 435.674V538.291" />
        <path d="M806.947 499.082H870.35" />
      </g>
      <rect x="803.665" y="495.521" width="6.62675" height="6.62675" fill="#715852" />
    </svg>
  </div>
);

const SculptureBackground = () => {
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1.3]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [0.35, 0.35, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 0.35, 0.35, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 0.35, 0.35]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F4EBE4]">
      <motion.img 
        src="/bg1.jpg"
        alt="Masterpiece Sculpture 1"
        className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply"
        style={{ scale, y, opacity: opacity1, transformOrigin: "center top" }}
      />
      <motion.img 
        src="/bg2.jpg"
        alt="Masterpiece Sculpture 2"
        className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply"
        style={{ scale, y, opacity: opacity2, transformOrigin: "center top" }}
      />
      <motion.img 
        src="/bg3.jpg"
        alt="Masterpiece Sculpture 3"
        className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply"
        style={{ scale, y, opacity: opacity3, transformOrigin: "center top" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4EBE4]/30 via-[#F4EBE4]/70 to-[#F4EBE4]/95" />
    </div>
  );
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-[#715852] pt-20 pb-32">
      <div className="absolute inset-0 pointer-events-none border-[1px] border-[#715852]/10 m-4 md:m-8 z-10" />
      
      <motion.div 
        {...fadeScaleAnim}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-[1px] w-16 bg-[#715852]/30" />
          <h1 className="text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-bold text-[#715852]/70">Bienvenida al paraíso de tu mejor versión</h1>
          <div className="h-[1px] w-16 bg-[#715852]/30" />
        </div>
        <p className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]">
          Donde la excelencia <br/><span className="italic font-serif text-[#715852] opacity-80">&</span> la naturalidad se encuentran.
        </p>
      </motion.div>
    </section>
  );
}

const PromiseSection = () => {
  return (
    <section className="py-40 px-4 text-[#715852] flex items-center justify-center min-h-screen relative">
      <GeometricLines />
      
      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-24 items-center">
        <motion.div {...fadeScaleAnim} className="relative">
          <div className="absolute -left-12 top-2 text-xs font-bold tracking-widest text-[#715852]/40">[01]</div>
          <h2 className="text-[40px] md:text-[60px] lg:text-[70px] leading-[0.95] font-bold tracking-tighter uppercase">
            LA SATISFACCIÓN DE ALCANZAR TU MÁXIMO POTENCIAL
          </h2>
          <p className="mt-16 text-xl md:text-2xl font-light leading-relaxed max-w-md text-[#715852]/80">
            Sin dejar de ser tú. Un plan maestro diseñado con precisión para mujeres que lideran, deciden y no tienen tiempo que perder.
          </p>
        </motion.div>
        
        <motion.div 
          {...fadeScaleAnim}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[700px] flex items-center justify-center hidden md:flex"
        >
          <div className="w-full h-full border border-[#715852]/10 relative backdrop-blur-sm bg-white/10 p-4">
             <div className="w-full h-full border border-[#715852]/20 relative">
                <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-[#715852]" />
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-[#715852]" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const VSLSection = () => {
  return (
    <section className="py-40 px-4 flex flex-col items-center justify-center relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-full h-px bg-[#715852]/10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#715852]/10" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-[#715852]/10 -translate-x-1/2" />
      
      <motion.div {...fadeScaleAnim} className="text-center mb-24 relative z-10">
        <span className="text-[#715852]/60 text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Descubre el método</span>
        <h2 className="text-[#715852] text-4xl md:text-6xl font-light tracking-tight">El arte de la sutileza</h2>
      </motion.div>

      <motion.div 
        {...fadeScaleAnim}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl w-full aspect-video bg-white/20 backdrop-blur-md relative group cursor-pointer overflow-hidden border border-[#715852]/10 shadow-2xl z-10"
      >
        <div className="absolute inset-0 flex items-center justify-center transition-colors duration-500 group-hover:bg-white/30">
          <div className="w-24 h-24 bg-[#F4EBE4]/80 backdrop-blur-md border border-[#715852]/20 text-[#715852] flex items-center justify-center transition-transform duration-700 group-hover:scale-110 rounded-full shadow-xl">
            <Play className="w-8 h-8 ml-1" fill="currentColor" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const PainPoints = () => {
  const points = [
    {
      title: "EL MIEDO A PERDER TU ESENCIA",
      desc: "Deseas mejorar, pero te aterra lucir exagerada. Tu imagen es tu carta de presentación y necesitas que el tema de conversación sea tu inteligencia y lo fabulosa que luces, no 'qué te hiciste'.",
      img: "/sin fondo_1.png"
    },
    {
      title: "UNA AGENDA SIN MARGEN DE PAUSA",
      desc: "Como líder, no tienes tiempo que perder. Necesitas protocolos precisos, cero invasivos y con una recuperación máxima de 2 a 3 días para volver a tus reuniones y conferencias.",
      img: "/sin fondo_2.png"
    },
    {
      title: "TRATAMIENTOS AISLADOS SIN VISIÓN",
      desc: "En el pasado has probado procedimientos sueltos. Ahora buscas un plan maestro, diseñado con tecnología de punta y materiales premium, que garantice resultados a la altura de tu estatus.",
      img: "/sin fondo_3.png"
    }
  ];

  return (
    <section className="py-40 px-4 text-[#715852] relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-[#715852]/10 hidden md:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-[#715852]/10 hidden md:block" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeScaleAnim} className="flex items-center gap-8 mb-40">
          <div className="text-xs font-bold tracking-widest text-[#715852]/40">[02]</div>
          <div className="h-px flex-1 bg-[#715852]/20" />
          <h2 className="text-2xl md:text-3xl font-light tracking-tight uppercase">
            Entendemos tu posición
          </h2>
        </motion.div>

        <div className="space-y-48">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              {...fadeScaleAnim}
              className={`flex flex-col md:flex-row gap-16 md:gap-32 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 relative w-full aspect-[4/5] md:h-[500px] flex items-center justify-center group">
                <div className="absolute top-0 left-0 p-8 text-8xl font-serif italic text-[#715852]/5 group-hover:text-[#715852]/10 transition-colors duration-700 z-0">
                  0{i + 1}
                </div>
                <motion.img 
                  src={point.img} 
                  alt={point.title}
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter leading-[1.1]">{point.title}</h3>
                <div className="w-16 h-px bg-[#715852]/40 mb-10" />
                <p className="text-xl text-[#715852]/80 leading-relaxed font-light">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Testimonials = () => {
  return (
    <section className="py-40 px-4 text-[#715852] relative overflow-hidden min-h-screen flex items-center">
      <GeometricLines />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div {...fadeScaleAnim} className="flex items-center gap-8 mb-32">
          <div className="text-xs font-bold tracking-widest text-[#715852]/40">[03]</div>
          <div className="h-px flex-1 bg-[#715852]/20" />
          <h2 className="text-2xl md:text-3xl font-light tracking-tight uppercase">
            La experiencia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              quote: "La precisión y el nivel de detalle superaron mis expectativas. Pude reintegrarme a mis conferencias en 48 horas luciendo descansada y radiante. Nadie notó qué me hice, solo que me veía increíble.",
              role: "Empresaria, 46 años"
            },
            {
              quote: "Siempre temí perder mi expresión natural. El plan maestro que diseñaron para mí fue exactamente lo que necesitaba: sutil, elegante y con resultados que reflejan mi vitalidad interior.",
              role: "Directora Ejecutiva, 49 años"
            }
          ].map((t, i) => (
            <motion.div 
              key={i} 
              {...fadeScaleAnim}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/30 backdrop-blur-md p-16 border border-[#715852]/10 relative group hover:bg-white/40 transition-colors duration-500"
            >
              <div className="flex gap-3 mb-12">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-[#715852]/40" fill="currentColor" />)}
              </div>
              <p className="text-2xl md:text-3xl leading-relaxed mb-16 text-[#715852] font-light italic">"{t.quote}"</p>
              <div className="flex items-center gap-6">
                <div className="w-12 h-px bg-[#715852]/30" />
                <div className="font-bold uppercase tracking-[0.2em] text-xs text-[#715852]/60">{t.role}</div>
              </div>
              
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#715852]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FormSection = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    resultado: '',
    presupuesto: '',
    razon: '',
    nombre: '',
    telefono: '',
    email: ''
  });

  const handleNext = () => {
    setStep(s => s + 1);
  };

  const handlePrev = () => {
    setStep(s => s - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-40 px-4 text-[#715852] min-h-screen flex items-center justify-center relative">
        <motion.div 
          {...fadeScaleAnim}
          className="max-w-3xl text-center relative z-10 bg-white/40 backdrop-blur-md p-20 border border-[#715852]/10 shadow-2xl"
        >
          <div className="w-20 h-20 border border-[#715852]/20 mx-auto mb-12 flex items-center justify-center rounded-full">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter uppercase">Aplicación Recibida</h2>
          <p className="text-xl text-[#715852]/80 font-light leading-relaxed">Nuestro especialista estará revisando tu solicitud cuidadosamente. En breve nuestro equipo se comunicará contigo para coordinar los siguientes pasos.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-40 px-4 text-[#715852] relative min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div {...fadeScaleAnim} className="mb-24 text-center">
          <div className="text-xs font-bold tracking-widest text-[#715852]/40 mb-10">[04]</div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase">
            Da el primer paso
          </h2>
          <div className="flex justify-center gap-3 mt-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`h-px w-16 transition-colors duration-700 ${step >= i ? 'bg-[#715852]' : 'bg-[#715852]/20'}`} />
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeScaleAnim} className="bg-white/40 backdrop-blur-md p-10 md:p-20 border border-[#715852]/10 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <label className="block text-2xl md:text-3xl font-bold tracking-tight uppercase text-[#715852]">1. ¿Qué tipo de resultado estás buscando?</label>
                <div className="space-y-6">
                  {['Plan maestro de rejuvenecimiento personalizado', 'Tratamiento único y premeditado', 'Aún no lo sé, estoy buscando asesoría'].map((opt) => (
                    <label key={opt} className="flex items-center gap-6 p-8 border border-[#715852]/20 cursor-pointer hover:border-[#715852] hover:bg-white/50 transition-all duration-500 group">
                      <div className="relative flex items-center justify-center w-6 h-6 border border-[#715852]/40 group-hover:border-[#715852]">
                        <input 
                          type="radio" 
                          name="resultado" 
                          value={opt} 
                          checked={formData.resultado === opt}
                          onChange={(e) => setFormData({...formData, resultado: e.target.value})}
                          className="peer absolute opacity-0" 
                        />
                        <div className="w-3 h-3 bg-[#715852] scale-0 peer-checked:scale-100 transition-transform duration-500" />
                      </div>
                      <span className="text-xl font-light text-[#715852]/90">{opt}</span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-end mt-12">
                  <button 
                    onClick={handleNext}
                    disabled={!formData.resultado}
                    className="border border-[#715852] text-[#715852] px-10 py-5 font-bold uppercase tracking-widest flex items-center gap-4 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#715852] hover:text-[#F4EBE4] transition-colors duration-500"
                  >
                    Siguiente <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <label className="block text-2xl md:text-3xl font-bold tracking-tight uppercase text-[#715852] leading-snug">2. La creación de un diseño personalizado requiere el uso de material médico premium y tecnología de punta. ¿Cuál es tu presupuesto?</label>
                <div className="space-y-6">
                  {['1.000 USD - 1.500 USD', '1.500 USD - 3.000 USD', '3.000 USD o más'].map((opt) => (
                    <label key={opt} className="flex items-center gap-6 p-8 border border-[#715852]/20 cursor-pointer hover:border-[#715852] hover:bg-white/50 transition-all duration-500 group">
                      <div className="relative flex items-center justify-center w-6 h-6 border border-[#715852]/40 group-hover:border-[#715852]">
                        <input 
                          type="radio" 
                          name="presupuesto" 
                          value={opt} 
                          checked={formData.presupuesto === opt}
                          onChange={(e) => setFormData({...formData, presupuesto: e.target.value})}
                          className="peer absolute opacity-0" 
                        />
                        <div className="w-3 h-3 bg-[#715852] scale-0 peer-checked:scale-100 transition-transform duration-500" />
                      </div>
                      <span className="text-xl font-light text-[#715852]/90">{opt}</span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between mt-12">
                  <button onClick={handlePrev} className="text-[#715852]/60 hover:text-[#715852] flex items-center gap-3 uppercase tracking-widest text-sm font-bold transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Atrás
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={!formData.presupuesto}
                    className="border border-[#715852] text-[#715852] px-10 py-5 font-bold uppercase tracking-widest flex items-center gap-4 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#715852] hover:text-[#F4EBE4] transition-colors duration-500"
                  >
                    Siguiente <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <label className="block text-2xl md:text-3xl font-bold tracking-tight uppercase text-[#715852] leading-snug">3. Describe brevemente, ¿por qué la naturalidad de los resultados son un NO negociable para ti?</label>
                <textarea 
                  rows={5} 
                  value={formData.razon}
                  onChange={(e) => setFormData({...formData, razon: e.target.value})}
                  className="w-full p-8 border border-[#715852]/20 focus:border-[#715852] outline-none resize-none text-xl bg-white/30 transition-colors duration-500 font-light text-[#715852]" 
                  placeholder="Tu respuesta..."
                />
                <div className="flex justify-between mt-12">
                  <button onClick={handlePrev} className="text-[#715852]/60 hover:text-[#715852] flex items-center gap-3 uppercase tracking-widest text-sm font-bold transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Atrás
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={formData.razon.length < 10}
                    className="border border-[#715852] text-[#715852] px-10 py-5 font-bold uppercase tracking-widest flex items-center gap-4 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#715852] hover:text-[#F4EBE4] transition-colors duration-500"
                  >
                    Siguiente <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.form
                key="step4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-12"
              >
                <div className="space-y-12">
                  <div className="space-y-4">
                    <label className="block text-sm font-bold tracking-widest uppercase text-[#715852]/60">Nombre completo</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="w-full p-4 border-b border-[#715852]/20 focus:border-[#715852] outline-none text-2xl bg-transparent transition-colors duration-500 font-light text-[#715852]" 
                      placeholder="Jane Doe" 
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-bold tracking-widest uppercase text-[#715852]/60">Número telefónico</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      className="w-full p-4 border-b border-[#715852]/20 focus:border-[#715852] outline-none text-2xl bg-transparent transition-colors duration-500 font-light text-[#715852]" 
                      placeholder="+1 234 567 890" 
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-bold tracking-widest uppercase text-[#715852]/60">Correo electrónico</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-4 border-b border-[#715852]/20 focus:border-[#715852] outline-none text-2xl bg-transparent transition-colors duration-500 font-light text-[#715852]" 
                      placeholder="jane@example.com" 
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-16 pt-12 border-t border-[#715852]/10">
                  <button type="button" onClick={handlePrev} className="text-[#715852]/60 hover:text-[#715852] flex items-center gap-3 uppercase tracking-widest text-sm font-bold transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Atrás
                  </button>
                  <button 
                    type="submit" 
                    className="bg-[#715852] text-[#F4EBE4] px-12 py-6 font-bold uppercase tracking-widest flex items-center gap-4 hover:bg-[#715852]/90 transition-colors duration-500 group"
                  >
                    Solicitar Evaluación
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="font-sans antialiased selection:bg-[#715852] selection:text-[#F4EBE4] relative bg-[#F4EBE4]">
      <SculptureBackground />
      <div className="relative z-10">
        <Hero />
        <PromiseSection />
        <VSLSection />
        <PainPoints />
        <Testimonials />
        <FormSection />
      </div>
    </div>
  );
}
