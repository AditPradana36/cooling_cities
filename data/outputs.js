/*
  ============================================================
  OUTPUTS — data/outputs.js
  ============================================================
  Add items to the array below. Items render in listed order.

  Each item:
    status  — "published" | "submitted" | "progress"
    title   — full paper / output title
    authors — author string
    venue   — journal or conference name
    doi     — (optional) full DOI URL; leave "" if not yet available

  STATUS BADGES
  ─────────────────────────────────────────────────────────
    "published" → Published
    "submitted" → Submitted
    "progress"  → In Development
  ============================================================
*/

const OUTPUTS = [

  {
    status: "published",
    title: "Indonesia's urban green spaces dilemma: balancing law, ecology, and public space, highlighting Jakarta",
    authors: "Pradana, M.R. & Semedi, J.M.",
    venue: "Human Geography",
    doi: "https://doi.org/10.1177/19427786261447854"
  },

  {
    status: "submitted",
    title: "Visualizing sustainable campuses: a spatiotemporal deep learning analysis of eye-level greenery",
    authors: "Semedi, J.M., Pradana, M.R., Permata, C.F., Pratama, R.A., Candra, M.A.N., Rahatiningtyas, N.S., Dimyati, M.",
    venue: "6th International Conference on Smart City Innovation 2026",
    doi: ""
  },

  {
    status: "progress",
    title: "[Core Paper]",
    authors: "Authors to be confirmed.",
    venue: "Core paper of the project — currently in development.",
    doi: ""
  },

];
