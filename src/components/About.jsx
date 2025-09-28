import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Skilled software developer with expertise in building dynamic and
            scalable applications using React, Angular, JavaScript, and
            TypeScript for the frontend. Experienced in developing efficient
            server-side solutions with Node.js and Java, ensuring end-to-end
            application performance and reliability.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
