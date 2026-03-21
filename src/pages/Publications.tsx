import { BookOpen, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterBar from "@/components/FooterBar";

interface Publication {
  authors: string;
  title: string;
  journal: string;
  year: number;
  doi?: string;
  url?: string;
}

const publications: Publication[] = [
  {
    authors: "Lebrec H, Bui J, Clingan J, Do J, Dubovsky J, Dragone L, Gibiansky E, Lam WY, Matsuda K, Mihalcik L, Ramsdell F, van der Vuurst de Vries AR, Xiao Y, Bluestone JA",
    title: "Second generation CD2-targeting LFA-3 fusion protein SBT115301 to restore immune homeostasis in autoimmune disease",
    journal: "iScience, 28(5): 112447",
    year: 2025,
    doi: "10.1016/j.isci.2025.112447",
  },
  {
    authors: "Bluestone JA, Burnett BK, Crute CE, Fellows MD, Levings M, Lebrec H, Peireira Mouriès L, Rice J, Rohan P, Roncarolo MG, Rotrosen D",
    title: "Regulatory T cell therapies to treat autoimmune diseases and transplant rejection",
    journal: "Nat Immunol 26, 819–824",
    year: 2025,
    url: "https://doi.org/10.1038/s41590-025-02154-2",
  },
  {
    authors: "Harper T, Sharma A, Kaliyaperumal S, Fajardo F, Hsu K, Liu L, Davies R, Wei YL, Zhan J, Estrada J, Kvesic M, Nahrwold L, Deisting W, Panzer M, Cooke K, Lebrec H, Nolan-Stevaux O",
    title: "Characterization of an Anti-CD70 Half-Life Extended Bispecific T-Cell Engager (HLE-BiTE) and Associated On-Target Toxicity in Cynomolgus Monkeys",
    journal: "Toxicological Sciences, 189(1): 32–50",
    year: 2022,
    url: "https://doi.org/10.1093/toxsci/kfac052",
  },
  {
    authors: "Lebrec H, Maier C, Maki K, Ponce R, Shenton J, Green S",
    title: "Nonclinical Safety Assessment of Engineered T cell Therapies",
    journal: "Regulatory Toxicology and Pharmacology, 127: 105064",
    year: 2021,
    url: "https://doi.org/10.1016/j.yrtph.2021.105064",
  },
  {
    authors: "Mihalcik L, Chow V, Ramchandani M, Hinkle B, McBride H, Lebrec H",
    title: "Use of nonclinical toxicity studies to support biosimilar antibody development",
    journal: "Regulatory Toxicology and Pharmacology, 122: 104912",
    year: 2021,
    url: "https://doi.org/10.1016/j.yrtph.2021.104912",
  },
  {
    authors: "Karbowski C, Goldstein R, Frank B, Kim K, Li CM, Homann O, Hensley K, Brooks B, Wang X, Yan Q, Hernandez R, Adams G, Boyle M, Arvedson T, Lebrec H",
    title: "Nonclinical Safety Assessment of AMG 553, an Investigational Chimeric Antigen Receptor (CAR) T-cell Therapy for the Treatment of Acute Myeloid Leukemia",
    journal: "Toxicology Sciences, 177(1): 94–107",
    year: 2020,
    url: "https://doi.org/10.1093/toxsci/kfaa098",
  },
  {
    authors: "Kamperschroer C, Shenton J, Lebrec H, Leighton JK, Moore PA, Thomas O",
    title: "Summary of a workshop on preclinical and translational safety assessment of CD3 bispecifics",
    journal: "Journal of Immunotoxicology, 17(1): 67–85",
    year: 2020,
    url: "https://doi.org/10.1080/1547691x.2020.1729902",
  },
  {
    authors: "Lebrec H, Brennan FR, Haggerty H, Herzyk D, Kamperschroer C, Maier CC, Ponce R, Preston BD, Weinstock D, Mellon RD",
    title: "HESI/FDA workshop on immunomodulators and cancer risk assessment: Building blocks for a weight-of-evidence approach",
    journal: "Regulatory Toxicology and Pharmacology, 75: 72–80",
    year: 2016,
    url: "https://doi.org/10.1016/j.yrtph.2015.12.018",
  },
  {
    authors: "Lebrec H, Ponce R, Preston BD, Iles J, Born TL, Hooper M",
    title: "Tumor necrosis factor, tumor necrosis factor inhibition, and cancer risk",
    journal: "Current Medical Research and Opinion, 31(3): 557–574",
    year: 2015,
    url: "https://doi.org/10.1185/03007995.2015.1011778",
  },
  {
    authors: "Lebrec H, Molinier B, Boverhof D, Collinge M, Freebern W, Henson K, Mytych D, Ochs HD, Wange R, Yang Y, Zhou L, Arrington J, Christin-Piché MS, Shenton J",
    title: "The T-cell-dependent antibody response assay in nonclinical studies of pharmaceuticals and chemicals: Study design, data analysis, interpretation",
    journal: "Regulatory Toxicology and Pharmacology, 69: 7–21",
    year: 2014,
    url: "https://doi.org/10.1016/j.yrtph.2014.02.008",
  },
];

const highlightLebrec = (authors: string) => {
  return authors.split(/(Lebrec H)/g).map((part, i) =>
    part === "Lebrec H" ? (
      <span key={i} className="text-primary font-semibold">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const PublicationCard = ({ pub, index }: { pub: Publication; index: number }) => {
  const link = pub.url || (pub.doi ? `https://doi.org/${pub.doi}` : null);

  return (
    <article
      className="group relative border-l-2 border-border/50 pl-8 pb-12 last:pb-0 opacity-0 animate-fade-up"
      style={{ animationDelay: `${200 + index * 80}ms` }}
    >
      {/* Year dot */}
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-primary/60 group-hover:border-primary group-hover:shadow-[0_0_8px_hsl(var(--primary)/0.4)] transition-all duration-300" />

      <div className="bg-card/60 border border-border/40 rounded-lg p-6 hover:border-border/70 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 active:scale-[0.99]">
        {/* Year badge */}
        <span className="inline-block text-xs font-bold tracking-widest text-primary/80 bg-primary/10 rounded-full px-3 py-1 mb-3">
          {pub.year}
        </span>

        {/* Title */}
        <h3 className="text-foreground font-semibold text-base leading-relaxed mb-3" style={{ overflowWrap: "break-word" }}>
          {pub.title}
        </h3>

        {/* Authors */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-2" style={{ overflowWrap: "break-word" }}>
          {highlightLebrec(pub.authors)}
        </p>

        {/* Journal */}
        <p className="text-muted-foreground/70 text-sm italic mb-3">
          {pub.journal}
        </p>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary transition-colors duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View publication
          </a>
        )}
      </div>
    </article>
  );
};

const PublicationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-hero-gradient pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-5">
            <p
              className="text-primary text-xs font-semibold tracking-[0.25em] uppercase opacity-0 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Peer-Reviewed Research
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] opacity-0 animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              Selected Publications
            </h1>
            <p
              className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              A selection from 60+ peer-reviewed publications spanning nonclinical safety,
              immunotoxicology, cell &amp; gene therapy, and translational pharmacology.
            </p>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-6 pt-2 opacity-0 animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-foreground/80 text-sm font-medium">60+ publications</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                <span className="text-foreground/80 text-sm font-medium">2014–2025</span>
              </div>
            </div>
          </div>

          {/* Publication list */}
          <div className="max-w-3xl">
            {publications.map((pub, i) => (
              <PublicationCard key={pub.title} pub={pub} index={i} />
            ))}
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default PublicationsPage;
