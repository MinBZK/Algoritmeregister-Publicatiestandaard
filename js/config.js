let respecConfig = {
  // Config parameters
  useLogo: true,
  useLabel: true,
  license: "cc0",
  specStatus: "cv",
  specType: "ST",
  pubDomain: "ronl",

  // shortName = Repository name
  shortName: "Algoritmeregister-Publicatiestandaard",
  publishDate: "2024-07-09",
  publishVersion: "1.0.9",

  previousPublishVersion: "1.0.7",
  previousPublishDate: "2024-05-28",
  previousMaturity: "cv",
  title: "Algoritmeregister Publicatiestandaard ",
  subtitle:
    "Bevat de publicatiestandaard van het Algoritmeregister. Het is bedoeld om overheidsorganisaties te helpen bij het invullen.",

  // Content
  content: { ch01: "informative", ch02: "", ch03: "" },
  editors: [
    {
      name: "Logius Standaarden",
      company: "Logius",
      companyURL: "https://github.com/Logius-standaarden",
    },
  ],
  authors: [
    {
      name: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
      url: "https://www.minbzk.nl",
    },
  ],
  github: "https://github.com/MinBZK/Algoritmeregister-Publicatiestandaard/",

  // References & footnotes
  localBiblio: {
    B1: {
      title: "Wat houdt taalniveau B1 in?",
      href: "https://www.communicatierijk.nl/vakkennis/rijkswebsites/aanbevolen-richtlijnen/taalniveau-b1",
      publisher: "CommunicatieRijk, over overheidscommunicatie",
    },
    NLSBB: {
      href: "https://docs.geostandaarden.nl/nl-sbb/nl-sbb/",
      title: "NL-SBB - Standaard voor het beschrijven van begrippen",
      authors: ["Geonovum Standaard - versie ter vaststelling."],
      date: "16 april 2024",
    },
    TOOI_WL: {
      title: "TOOI-waardelijsten",
      href: "https://standaarden.overheid.nl/tooi/waardelijsten/",
      publisher:
        "Kennis- en exploitatiecentrum Officiële Overheidspublicaties (KOOP)",
    },
    TOP_Lijst: {
      title: "Thema-indeling voor Officiële Publicaties",
      href: "https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/thema-indeling-voor-officiele-publicaties",
      publisher:
        "Kennis- en exploitatiecentrum Officiële Overheidspublicaties (KOOP)",
    },
    IAMA: {
      title: "Impact Assessment Mensenrechten en Algoritmes (IAMA)",
      href: "https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes",
      publisher: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
    },
    DPIA: {
      title: "Data protection impact assessment (DPIA)",
      href: "https://www.autoriteitpersoonsgegevens.nl/themas/basis-avg/praktisch-avg/data-protection-impact-assessment-dpia",
      publisher: "De Autoriteit Persoonsgegevens (AP) ",
    },
  },

  // Create PDF and link to file in header (optional):
  alternateFormats: [
    {
      label: "pdf",
      uri: "https://regels.overheid.nl/publicaties/algoritmeregister-publicatiestandaard/pdf",
    },
  ],
};
