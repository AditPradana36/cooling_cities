/*
  ============================================================
  DATA & INSTRUMENTS — data/data-section.js
  ============================================================
  Controls the datasets listed in the Data section.
  Add one object per dataset to the DATASETS array.

  Each dataset:
    meta        — short descriptor line shown above the title
                  e.g. "Survey · 200+ images · upcoming release"
    title       — dataset / instrument name
    description — paragraph text (HTML ok)
    links       — array of { label, href, disabled? } buttons
                  set disabled: true for "coming soon" links

  EXAMPLE
  ─────────────────────────────────────────────────────────
  {
    meta: "Raster · GeoTIFF · 2025",
    title: "Green View Index — Jakarta Parks",
    description: `Per-point eye-level vegetation coverage derived from
      Google Street View segmentation across Jakarta's urban parks.`,
    links: [
      { label: "Dataset (coming soon)", href: "#", disabled: true },
      { label: "View methodology →",   href: "https://example.com" }
    ]
  }
  ============================================================
*/

const DATASETS = [

  {
    meta: "Survey · 200+ images · 200+ respondents · upcoming release",
    title: "Aesthetics, Naturalness & Shading (ANS) Survey",
    description: `A core data product of the project is a dataset of <strong>Aesthetics, Naturalness, and Shading (ANS)</strong> perception ratings for over 200 Jakarta street-view images, collected from 200+ respondents. The survey is delivered via the SP-Survey platform developed by Yang et al. (2025), with each image scored across the three perception dimensions. The resulting dataset provides a human-perception ground truth for the project&#x2019;s anthropomorphic mapping outputs &#x2014; enabling direct comparison between segmentation-derived measures and lived perception of urban green spaces.`,
    links: [
      { label: "Dataset (coming soon)", href: "#", disabled: true },
      { label: "View survey →", href: "https://ans-survey-1.vercel.app/survey" }
    ]
  },

];
