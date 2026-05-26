/*
  ============================================================
  RELATED WORK — data/related.js
  ============================================================
  Controls the studies listed in the Related Work section.
  Add one object per study to the RELATED array.

  Each study:
    title       — study / subsection heading
    body        — array of paragraph strings (HTML ok)
    figures     — array of figure objects (can be empty [])

  Each figure:
    src         — image path, e.g. "images/panorama_2015.png"
    alt         — image alt text
    caption     — caption text shown below the image
    pair        — (optional) set the same string on two figures
                  to display them side by side, e.g. pair: "greenness"

  ============================================================
*/

const RELATED = [

  {
    title: "Temporal greenness change at Universitas Indonesia, 2015–2025",

    body: [
      `As a methodological pilot for the Green View Index pipeline, we conducted a temporal study of the Universitas Indonesia campus, comparing Google Street View panoramas from 2015 and 2025. Each panorama is segmented and the proportion of green pixels (vegetation) is computed and mapped back to its sampling point along the campus road network. The resulting greenness layer reveals where vegetation cover has been preserved, gained, or lost over the decade — a real-world demonstration of the same anthropomorphic mapping workflow that underpins the project's main analysis.`,
      `The street-view panoramas and greenness maps shown below are directly related to the submitted paper: <em>Visualizing sustainable campuses: a spatiotemporal deep learning analysis of eye-level greenery</em> (Semedi et al., 6th International Conference on Smart City Innovation 2026).`,
    ],

    figures: [
      {
        src: "images/panorama_overlay_2015.png",
        alt: "Segmented panorama overlay of a Universitas Indonesia road in 2015, with vegetation, road, and built structures highlighted.",
        caption: "Example panorama segmentation overlay (2015). Green areas mark vegetation, with road, sky, and built structures shown in their respective semantic categories."
      },
      {
        src: "images/panorama_overlay_2025.png",
        alt: "Segmented panorama overlay of the same Universitas Indonesia road in 2025.",
        caption: "The same location in 2025. Comparing the two panoramas reveals visible shifts in canopy cover, road surface, and roadside infrastructure."
      },
      {
        src: "images/greenness_2015.png",
        alt: "Map of campus greenness percentage by sampling point, 2015.",
        caption: "Greenness percentage by sampling point, 2015.",
        pair: "greenness"
      },
      {
        src: "images/greenness_2025.png",
        alt: "Map of campus greenness percentage by sampling point, 2025.",
        caption: "Greenness percentage by sampling point, 2025.",
        pair: "greenness"
      },
    ],
  },

];
