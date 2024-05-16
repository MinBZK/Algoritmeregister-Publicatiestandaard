let respecConfig = {
  // Config parameters
  useLogo: true,
  useLabel: true,
  license: "cc0",
  specStatus: "WV",
  specType: "ST",
  pubDomain: "ronl",

  // shortName = Repository name
  shortName: "Algoritmeregister-Publicatiestandaard",
  publishDate: "2024-05-16",
  publishVersion: "0.1.0",

  previousPublishVersion: "",
  previousPublishDate: "",
  previousMaturity: "",
  title: "Algoritmeregister Publicatiestandaard ",
  subtitle:
    "Bevat de publicatiestandaard van het Algoritmeregister. Het is bedoeld om overheidsorganisaties te helpen bij het invullen.",

  // Content
  content: { ch01: "informative", ch02: "" },
  editors: [
    {
      name: "Jasper van der Heide",
      mailto: "Jasper.Heide@rijksoverheid.nl",
      company: "minBZK",
      companyURL: "http://www.minbzk.nl",
    },
  ],
  authors: [
    {
      name: "Marjolein Kortemann",
      url: "https://www.minbzk.nl",
    },
    {
      name: "Jasper van der Heide",
      url: "https://www.minbzk.nl",
    },
    {
      name: "Lars Musters",
      url: "https://www.ictu.nl",
    },
    {
      name: "Aniell Jaggi",
      url: "https://www.ictu.nl",
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
    },

  // Create PDF and link to file in header (optional):
  alternateFormats: [
    {
      label: "pdf",
      uri: "Algoritmeregister-Publicatiestandaard.pdf",
    },
  ],
};