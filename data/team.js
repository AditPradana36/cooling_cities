/*
  ============================================================
  TEAM — data/team.js
  ============================================================
  Two arrays: INVESTIGATORS and ASSISTANTS.
  Add, remove, or reorder objects in either array.

  Each person:
    name        — full name with title
    role        — role label
    affiliation — institution / department
    photo       — path to photo, e.g. "images/photo-jarot.jpg"
                  leave "" to show an initials avatar instead
    thesis      — (assistants only, optional) thesis title
    links       — array of { label, href } objects
                  leave [] to show "(contacts to be added)"

  Supported link labels (shown as-is):
    "Email", "Site", "ORCID", "Scopus", "LinkedIn", "GitHub"
  ============================================================
*/

const INVESTIGATORS = [

  {
    name: "Jarot Mulyo Semedi, M.Sc.",
    role: "Principal Investigator",
    affiliation: "PhD student and lecturer, Department of Geography, Universitas Indonesia &middot; Spatial Modeling Research Group",
    photo: "images/photo-jarot.jpg",
    links: []
  },

  {
    name: "Nurul Sri Rahatiningtyas, M.Si.",
    role: "Co-Investigator",
    affiliation: "PhD student, Martin Luther University of Halle-Wittenberg &middot; Lecturer, Department of Geography, Universitas Indonesia",
    photo: "images/photo-nurul.jpg",
    links: [
      { label: "Email",    href: "mailto:nurul.sr@ui.ac.id" },
      { label: "Google Scholar",  href: "https://scholar.google.com/citations?hl=en&user=wTKrd3IAAAAJ" },
      { label: "ResearchGate",    href: "https://www.researchgate.net/profile/Nurul-Rahatiningtyas" },
      { label: "ORCID",   href: "https://orcid.org/0000-0003-0157-4439" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nurulsrirahatiningtyas/" },
      { label: "Scopus",     href: "https://www.scopus.com/authid/detail.uri?authorId=57213140807" },
    ]
  },

  {
    name: "Mohammad Raditia Pradana, M.Si.",
    role: "Co-Investigator",
    affiliation: "Researcher, Universitas Indonesia",
    photo: "images/radit.jpg",
    links: [
      { label: "Email",    href: "mailto:mohammad.raditia03@ui.ac.id" },
      { label: "Site",     href: "https://aditpradana36.github.io/" },
      { label: "ResearchGate",    href: "https://www.researchgate.net/profile/Mohammad-Pradana-2" },
      { label: "ORCID",   href: "https://orcid.org/0009-0005-8836-6801" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammadraditia/" },
      { label: "Scopus",     href: "https://www.scopus.com/authid/detail.uri?authorId=58874909300" },
      { label: "GitHub",   href: "https://github.com/AditPradana36" }
    ]
  },

];


const ASSISTANTS = [

  {
    name: "Maria Andriana Nea Candra",
    role: "Research Assistant · Undergraduate",
    affiliation: "Department of Geography, Universitas Indonesia",
    photo: "images/photo-maria.jpg",
    thesis: "The relationship between urban park characteristics in South Jakarta and visitors' place attachment.",
    links: []
  },

  {
    name: "Roddy Aprilian Pratama",
    role: "Research Assistant · Undergraduate",
    affiliation: "Department of Geography, Universitas Indonesia",
    photo: "images/photo-roddy.jpg",
    thesis: "Spatial variation of visual composition based on semantic segmentation and its relationship with environmental perception of urban parks in South Jakarta.",
    links: []
  },

  {
    name: "Cheryl Ferrarichka Permata",
    role: "Research Assistant · Undergraduate",
    affiliation: "Department of Geography, Universitas Indonesia",
    photo: "images/photo-cheryl.jpg",
    thesis: "Analysis of visual vegetation change in urban parks and human perception in 2013 and 2025 based on street-view imagery: a temporal study in South Jakarta.",
    links: []
  },

];
