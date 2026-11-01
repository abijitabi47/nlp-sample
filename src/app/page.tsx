import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, BookOpen,
  Code2, Database, FileSearch, FlaskConical, GraduationCap, Mail,
  Microscope, Network, Sparkles,
} from "lucide-react";

const skills = [
  { icon: BrainCircuit, title: "Natural Language Processing", detail: "Text classification, text preprocessing, embeddings, semantic similarity and transformer-based methods." },
  { icon: FlaskConical, title: "Machine Learning", detail: "Model development, evaluation, feature engineering, clustering and predictive analytics." },
  { icon: Database, title: "Semantic Search", detail: "Vector representations, FAISS indexing, similarity retrieval and document processing pipelines." },
  { icon: Code2, title: "Development", detail: "Python, FastAPI, React, Next.js and practical deployment of data-driven applications." },
  { icon: Microscope, title: "Research & Evaluation", detail: "Experimental design, literature review, metrics, error analysis and reproducible workflows." },
  { icon: Network, title: "Deep Learning", detail: "Neural networks, multi-task learning, fine-tuning and model explainability." },
];

const projects = [
  {
    number: "01", icon: BrainCircuit, title: "Passive Aggression Detection",
    description: "An NLP-focused text classification project exploring the detection of passive-aggressive language in written communication.",
    tags: ["Python", "NLP", "Text Classification"],
    note: "Add verified model details, evaluation results and repository link.",
  },
  {
    number: "02", icon: FileSearch, title: "Legal Document Similarity Search",
    description: "A semantic retrieval pipeline for Indian legal judgments, using document extraction, overlapping text chunks, sentence embeddings and FAISS.",
    tags: ["PyMuPDF", "Sentence Transformers", "FAISS"],
    note: "Based on the all-MiniLM-L6-v2 and FAISS baseline implementation.",
  },
  {
    number: "03", icon: GraduationCap, title: "FSLSM-Based Adaptive Learning",
    description: "A learning-style classification and adaptive learning research project based on the four dimensions of the Felder–Silverman model.",
    tags: ["SetFit", "DART", "Multi-task Learning"],
    note: "Add your final experiment results and publication status if applicable.",
  },
  {
    number: "04", icon: Sparkles, title: "GenoMind",
    description: "An AI-assisted genomic analysis platform featuring explainability, variant interpretation workflows and clinical reporting capabilities.",
    tags: ["XGBoost", "SHAP", "Explainable AI"],
    note: "Present this as an AI platform project; clarify its scope and validation.",
  },
];

const research = [
  { type: "Research interest", title: "Representation Learning for Text", detail: "Exploring meaningful vector representations for classification, retrieval and semantic understanding." },
  { type: "Research interest", title: "Adaptive & Personalized Learning", detail: "Investigating learner modelling and machine-learning approaches for personalized educational experiences." },
  { type: "Research interest", title: "Explainable AI", detail: "Understanding model behaviour through feature attribution, evaluation and transparent workflows." },
];

function SectionTitle({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <div>
        <div className="kicker">{kicker}</div>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "min(1120px, calc(100% - 48px))" }}>
          <a className="brand" href="#home" aria-label="NLP and AI Portfolio home">
            <span className="brand-mark"><BrainCircuit size={21} /></span>
            <span>NLP &amp; AI <span style={{ color: "#718096", fontWeight: 400 }}>Portfolio</span></span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a><a href="#skills">Expertise</a><a href="#projects">Projects</a><a href="#research">Research</a><a className="nav-cta" href="#contact">Contact</a>
          </nav>
          <nav className="mobile-menu" aria-label="Mobile navigation">
            <a href="#projects">Projects</a><a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <div className="eyebrow">Natural Language Processing · Artificial Intelligence</div>
          <h1>Researching language.<br /><span>Engineering intelligence.</span></h1>
          <p className="hero-copy">
            I&apos;m Abijit, a Computer Science student interested in Natural Language Processing,
            machine learning and intelligent systems. I build practical applications while
            exploring the research ideas behind them.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">Explore my work <ArrowRight size={15} /></a>
            <a className="button-secondary" href="#research">Research interests <ArrowDownRight size={15} /></a>
          </div>
          <div className="hero-meta">
            <div><strong>NLP &amp; ML</strong>Core areas</div>
            <div><strong>Applied research</strong>Focus</div>
            <div><strong>VIT Vellore</strong>Academic background</div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <SectionTitle kicker="01 / About" title="A little about my work" description="Bringing together research curiosity and hands-on engineering to explore language technologies and intelligent applications." />
          <div className="about-grid">
            <div className="prose">
              <p>
                I am an Integrated M.Tech Computer Science and Engineering student at VIT Vellore,
                with a growing focus on Natural Language Processing and Artificial Intelligence.
                My interests include understanding how machines represent, interpret and retrieve
                information from human language.
              </p>
              <p>
                My project work spans text classification, semantic document retrieval, adaptive
                learning and explainable machine learning. I enjoy taking an idea from a research
                question to a working prototype, then examining its performance and limitations.
              </p>
              <p>
                This portfolio brings together selected projects, technical interests and research
                work. Project descriptions and results should be read alongside their linked
                implementations and supporting documentation.
              </p>
            </div>
            <aside className="focus-card">
              <h3>Areas of interest</h3>
              <div className="focus-list">
                <div className="focus-item"><BrainCircuit size={17} /> Natural Language Processing</div>
                <div className="focus-item"><Database size={17} /> Semantic Search &amp; Retrieval</div>
                <div className="focus-item"><Network size={17} /> Machine &amp; Deep Learning</div>
                <div className="focus-item"><BookOpen size={17} /> Applied AI Research</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="skills">
        <div className="container">
          <SectionTitle kicker="02 / Expertise" title="Technical interests & tools" description="A snapshot of the methods and technologies I use or explore across academic and personal projects." />
          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, detail }) => (
              <article className="skill-card" key={title}>
                <Icon size={22} strokeWidth={1.7} />
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <SectionTitle kicker="03 / Selected work" title="Projects" description="Selected implementations and explorations across NLP, information retrieval, adaptive learning and explainable AI." />
          <div className="project-grid">
            {projects.map(({ number, icon: Icon, title, description, tags, note }) => (
              <article className="project-card" key={number}>
                <div className="project-top"><span>PROJECT / {number}</span><span className="project-icon"><Icon size={20} /></span></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">{tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                <div style={{ color: "#8793a3", fontSize: 11, lineHeight: 1.6 }}>{note}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="research">
        <div className="container">
          <SectionTitle kicker="04 / Research" title="Research interests" description="Themes that guide my reading, experimentation and project development. Add formal publications here when they are ready to be shared." />
          <div className="research-list">
            {research.map((item, i) => (
              <article className="research-row" key={item.title}>
                <div className="research-type">{item.type} 0{i + 1}</div>
                <div><h3>{item.title}</h3><p>{item.detail}</p></div>
                <ArrowUpRight size={17} color="#7890aa" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="contact-panel">
            <div>
              <div className="kicker">05 / Contact</div>
              <h2>Let&apos;s discuss ideas.</h2>
              <p>I&apos;m interested in conversations around NLP, AI research, collaborative projects and learning opportunities. Replace the placeholder email below with your preferred contact address.</p>
              <p><strong>Email:</strong> your.email@example.com</p>
            </div>
            <a className="button-primary" href="mailto:your.email@example.com">Get in touch <Mail size={15} /></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Abijit · NLP &amp; AI Portfolio</span>
          <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
        </div>
      </footer>
    </main>
  );
}
