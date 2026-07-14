import { FadeIn } from '../components/FadeIn';

const faqs = [
  {
    question: 'Who is Vivek Lalpura?',
    answer:
      'Vivek Lalpura is a civil engineer and construction estimation manager with more than five years of experience across roofing, cladding, earthworks, and quantity takeoff.'
  },
  {
    question: 'What estimating work does Vivek specialize in?',
    answer:
      'He specializes in roofing estimates, cladding estimates, earthworks estimates, civil project estimation, and digital quantity takeoff for Australian construction teams.'
  },
  {
    question: 'Which software does Vivek use?',
    answer:
      'His workflow includes AppliCad Roof Wizard, Bluebeam Revu, MudShark, iScaf, Revit, AutoCAD, SketchUp, Buildxact, AroFlo, Microsoft Office, Virtual Estimator, and OnScreen Takeoff.'
  },
  {
    question: 'Does Vivek work with Australian clients?',
    answer:
      'Yes. The portfolio focuses on Australian construction estimating work, and Vivek is open to Australian sponsorship and skilled migration opportunities.'
  }
];

export function FAQSection() {
  return (
    <section id="answers" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0}>
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.24em] text-[#D7E2EA]/55">
            Quick Answers
          </p>
          <h2 className="hero-heading text-center text-[clamp(2.5rem,9vw,120px)] font-black uppercase leading-none tracking-normal">
            FAQ
          </h2>
        </FadeIn>

        <div className="mt-12 sm:mt-16 divide-y divide-[#D7E2EA]/20 border-y border-[#D7E2EA]/20">
          {faqs.map((item, index) => (
            <FadeIn key={item.question} delay={index * 0.08} y={20}>
              <article className="grid gap-4 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:py-9">
                <h3 className="text-xl font-semibold leading-snug text-[#D7E2EA] sm:text-2xl">
                  {item.question}
                </h3>
                <p className="text-base font-light leading-relaxed text-[#D7E2EA]/75 sm:text-lg">
                  {item.answer}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
