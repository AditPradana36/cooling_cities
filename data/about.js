/*
  ============================================================
  ABOUT — data/about.js
  ============================================================
  Controls all text in the About section.

  ABOUT.motivation     — array of paragraph strings (HTML ok)
  ABOUT.indicators     — array of { title, text } cards
  ABOUT.methodology    — array of paragraph strings (HTML ok)
  ABOUT.streetview     — array of paragraph strings (HTML ok)
  ============================================================
*/

const ABOUT = {

  motivation: [
    `Urban ecosystems face mounting pressure from climate change. Green open spaces play a central role in strengthening urban resilience — they buffer the heat, support ecosystem services, and create the everyday environments where people form bonds with their city. Yet across many urban areas, parks are declining or carved from leftover land, often managed without a clear understanding of what makes a green space <em>actually</em> resilient and meaningful.`,
    `This project addresses that gap by developing a <strong>Climate-Resilient Urban Ecosystem Index</strong> that integrates three complementary dimensions of urban park performance: how green a space looks from a human, street-level vantage point; how effectively it moderates its surrounding environment; and how strongly people are attached to it. Applied to Jakarta's urban parks, the index offers planners and communities a holistic, data-driven tool for assessing and enhancing climate resilience through green infrastructure.`,
  ],

  indicators: [
    {
      title: "Human Perception through Street-Level Imagery",
      text: `An <em>anthropomorphic mapping</em> approach that quantifies how much vegetation a person actually sees from the street. Using 360° panoramas and deep-learning segmentation, it captures the lived, eye-level experience of urban greenery — asking <em>"how green does this place look and feel?"</em>`,
    },
    {
      title: "Greenspace Cool Island Intensity",
      text: `An <em>ecological performance</em> dimension that captures the buffering capacity of a green space relative to its built surroundings — reflecting how effectively a park moderates ambient conditions and anchors climate resilience at the neighbourhood scale.`,
    },
    {
      title: "Place Attachment",
      text: `An <em>anthropogenic</em> dimension measuring the symbolic and functional bonds people form with a green space — encompassing <strong>place identity</strong> (affective connection) and <strong>place dependence</strong> (functional reliance). Strong attachment signals a resilient, people-centred urban ecosystem.`,
    },
  ],

  methodology: [
    `We combine three methodological pillars. <strong>Anthropomorphic mapping</strong> uses Google Street View panoramas and deep-learning models pre-trained on ADE20K to perform pixel-level segmentation, yielding a per-point measure of eye-level vegetation coverage. <strong>Satellite remote sensing</strong> draws on imagery to characterise the spatial relationship between green spaces and their surrounding built environment across multiple buffer configurations (fixed radius, turning point, equal area, equal radius). <strong>Field surveys</strong> in selected Jakarta parks measure place attachment through structured questionnaires, observations, and interviews, analysed via descriptive statistics and chi-square tests.`,
    `The three layers are then integrated through map overlay to produce the multi-dimensional Climate-Resilient Urban Ecosystem Index — a composite measure that captures ecological, visual, and spatial metrics alongside the human attachment dimension that makes a park more than its physical features.`,
  ],

  streetview: [
    `Remote sensing alone misses the ground-level experience. Street-view imagery sits at the core of this project because it records the city from a human point of view — the same scale at which residents move, rest, and form attachments. By combining street-view with satellite data and survey responses, the project bridges three perspectives that are usually studied separately: how a place <em>looks</em>, how it <em>performs</em> ecologically, and how it <em>feels</em> to the people who use it.`,
  ],

};
