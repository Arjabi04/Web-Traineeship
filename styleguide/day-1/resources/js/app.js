const typographyCards = [
  {
    title: "Desktop/D H1",
    sampleClass: "h1-desktop",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "48px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M H1",
    sampleClass: "h1-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "34px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "100%"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D H1 Italic",
    sampleClass: "h1-italic-desktop",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Italic"],
      ["Text Decoration", "None"],
      ["Size", "42px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M H1 Italic",
    sampleClass: "h1-italic-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Italic"],
      ["Text Decoration", "None"],
      ["Size", "34px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "100%"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D H2",
    sampleClass: "h2-desktop",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "42px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M H2",
    sampleClass: "h2-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "24px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "115%"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D H3 Semi",
    sampleClass: "h3-semi-desktop",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "26px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M H3 Semi",
    sampleClass: "h3-semi-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "20px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D H3 Italic",
    sampleClass: "h3-italic-desktop",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Italic"],
      ["Text Decoration", "None"],
      ["Size", "26px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M H3 Italic",
    sampleClass: "h3-italic-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Italic"],
      ["Text Decoration", "None"],
      ["Size", "20px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D Special XL",
    sampleClass: "special-xl",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "80px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M Special XL",
    sampleClass: "special-xl-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "40px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "100%"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D Number",
    sampleClass: "number",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-5%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "80px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M Number",
    sampleClass: "number-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-5%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "60px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D Intro",
    sampleClass: "intro",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "26px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M Intro",
    sampleClass: "intro-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "20px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "120%"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D Body",
    sampleClass: "body-text",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "18px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M Body",
    sampleClass: "body-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "16px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "125%"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D Body Semi",
    sampleClass: "body-semi",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "18px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M Body Semi",
    sampleClass: "body-semi-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "16px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D Body Small",
    sampleClass: "body-small",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "14px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M Body Small",
    sampleClass: "body-small-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "12px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D Body Small Semi",
    sampleClass: "body-small-semi",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "14px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M Body Small Semi",
    sampleClass: "body-small-semi-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Semibold"],
      ["Text Decoration", "None"],
      ["Size", "12px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D Body XS",
    sampleClass: "body-xs",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "12px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Mobile/M Body XS",
    sampleClass: "body-xs-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Switzer"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "10px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Original"]
    ]
  },
  {
    title: "Desktop/D Button",
    sampleClass: "button-text",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "Interstate-Bold"],
      ["Letter Spacing", "10%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "22px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Upper"]
    ]
  },
  {
    title: "Mobile/M Button",
    sampleClass: "button-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "Interstate-Bold"],
      ["Letter Spacing", "10%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "22px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Upper"]
    ]
  },
  {
    title: "Desktop/D Mono Tag",
    sampleClass: "mono-tag",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    specs: [
      ["Font", "InterstateMono"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "12px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Upper"]
    ]
  },
  {
    title: "Mobile/M Mono Tag",
    sampleClass: "mono-tag-mobile",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    isMobile: true,
    specs: [
      ["Font", "InterstateMono"],
      ["Letter Spacing", "-1%"],
      ["Weight", "Regular"],
      ["Text Decoration", "None"],
      ["Size", "12px"],
      ["Paragraph Spacing", "0px"],
      ["Line Height", "Automatic"],
      ["Case", "Upper"]
    ]
  }
];

const typographyRoot = document.getElementById("typography");

if (typographyRoot) {
  typographyRoot.innerHTML = typographyCards.map((card) => `
    <div class="type-card">
      <h2 class="type-card__title">
        <span>${card.title}</span>
        <span class="type-card__class">.${card.sampleClass}</span>
      </h2>
      <div class="type-card__body">
        <dl class="type-card__grid">
          ${card.specs.map(([label, value]) => `
            <div class="type-card__spec">
              <dt>${label}</dt>
              <dd>${value}</dd>
            </div>
          `).join("")}
        </dl>
        <div class="type-card__sample">
          <p class="${card.sampleClass}">${card.sampleText}</p>
        </div>
      </div>
      ${card.isMobile ? '<hr class="type-card__divider">' : ""}
    </div>
  `).join("");
}
