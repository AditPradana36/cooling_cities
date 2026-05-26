/*
  ============================================================
  NEWS — data/news.js
  ============================================================
  Add items to the array below. Newest entries go at the top.

  Each item:
    date     — display string, e.g. "16 May 2026"
    text     — news blurb; HTML is supported (links, <em>, etc.)
    image    — (optional) path to image, e.g. "images/conf.jpg"
    imageAlt — (optional) alt text for the image

  EXAMPLES
  ─────────────────────────────────────────────────────────
  Text only:
  {
    date: "01 January 2026",
    text: `Dataset released on <a href="https://zenodo.org" target="_blank" rel="noopener">Zenodo</a>.`
  }

  With image:
  {
    date: "12 May 2026",
    image: "images/conf_12052026.jpeg",
    imageAlt: "Presentation at the conference",
    text: `Paper presented at the 6th International Conference.`
  }
  ============================================================
*/

const NEWS = [

  {
    date: "16 May 2026",
    text: `Our paper has been published: <em>Indonesia's urban green spaces dilemma: balancing law, ecology, and public space, highlighting Jakarta</em> by M.R. Pradana &amp; J.M. Semedi in <em>Human Geography</em>. <a href="https://doi.org/10.1177/19427786261447854" target="_blank" rel="noopener noreferrer">[DOI]</a>`
  },

  {
    date: "12 May 2026",
    image: "images/conf_12052026.jpeg",
    imageAlt: "Presentation at the 6th International Conference on Smart City Innovation 2026",
    text: `Our research titled <em>Visualizing sustainable campuses: a spatiotemporal deep learning analysis of eye-level greenery</em> was presented at the 6th International Conference on Smart City Innovation 2026 by Jarot Mulyo Semedi, M.Sc. <br> Authors: J.M. Semedi, M.R. Pradana, C.F. Permata, R.A. Pratama, M.A.N. Candra, N.S. Rahatiningtyas, and M. Dimyati.</br>`
  },

];
