import before from '../assets/before.jpg';
import after from '../assets/after.jpg';

const data = [
  {
    category: "HDR Enhancement",
    description: "Enhancing visual dynamics through HDR techniques to make interiors bright and balanced.",
    pricing: '$ 29.99',
    items: [
      {
        title: "Even Exposure Living Room",
        image: "https://source.unsplash.com/featured/?realestate,interior,hdr",
        beforeImage: before,
        afterImage: after,
        description: "Balanced merging of multiple exposures to remove dark shadows and blown highlights.",
        author: "Short Expo Images",
        date: "2024-07-01"
      },
      {
        title: "Clear Window Views",
        image: "https://source.unsplash.com/featured/?hdr,window,realestate",
        beforeImage: before,
        afterImage: after,
        description: "Reveal outdoor views from backlit interiors using HDR blending.",
        author: "Short Expo Images",
        date: "2024-06-15"
      }
    ],
    process: [
      "Merge bracketed exposures",
      "Align images precisely",
      "Tone mapping for balanced brightness",
      "Remove highlight glare",
      "Enhance shadows and midtones",
      "Color calibration",
      "Edge cleanup and sharpening",
      "Final polish and export",
      "Deliver high‑res JPEGs",
      "Client feedback & revision"
    ]
  },
  {
    category: "Day to Dusk",
    description: "Transform daytime property photos into warm, inviting dusk visuals to entice buyers.",
    pricing: '$ 34.99',
    items: [
      {
        title: "Warm Sunset Facade",
        image: "https://source.unsplash.com/featured/?realestate,exterior,dusk",
        beforeImage: before,
        afterImage: after,
        description: "Sky replacement and warm tone grading for exterior listings.",
        author: "Short Expo Images",
        date: "2024-06-20"
      },
      {
        title: "Garden Lighting Enhancement",
        image: "https://source.unsplash.com/featured/?garden,twilight,realestate",
        beforeImage: before,
        afterImage: after,
        description: "Adjust exposure and saturation to simulate warm evening ambiance.",
        author: "Short Expo Images",
        date: "2024-07-05"
      }
    ],
    process: [
      "Adjust exposure to dusk levels",
      "Warm white balance shift",
      "Sky gradient blending",
      "Saturation boost for color richness",
      "Shadow enhancement for depth",
      "Gradient filters for realism",
      "Soft focus and warmth layer",
      "Detail refinement",
      "Export optimized files",
      "Client review & revisions"
    ]
  },
  {
    category: "Virtual Twilight",
    description: "Convert golden hour or daytime shots into atmospheric twilight compositions.",
    pricing: '$ 36.99',
    items: [
      {
        title: "Twilight Poolside",
        image: "https://source.unsplash.com/featured/?twilight,realestate,pool",
        beforeImage: before,
        afterImage: after,
        description: "Apply twilight tones and light reflections around water features.",
        author: "Short Expo Images",
        date: "2024-06-28"
      },
      {
        title: "Evening Landscape Glow",
        image: "https://source.unsplash.com/featured/?realestate,landscape,twilight",
        beforeImage: before,
        afterImage: after,
        description: "Convert outdoor scenes to dusk with enhanced lighting and sky effects.",
        author: "Short Expo Images",
        date: "2024-07-03"
      }
    ],
    process: [
      "Analyze image lighting",
      "Apply dusk tone gradients",
      "Balance brightness and contrast",
      "Introduce light sources (lamps, windows)",
      "Sky blending with sunset hues",
      "Detail refinement",
      "Soft glow layer",
      "Realistic color calibration",
      "Final export",
      "Unlimited revisions"
    ]
  },
  {
    category: "Virtual Staging",
    description: "Digitally furnish vacant property photos to showcase potential and attract buyers.",
    pricing: '$ 49.99',
    items: [
      {
        title: "Modern Living Room Stage",
        image: "https://source.unsplash.com/featured/?virtual,staging,interior",
        beforeImage: before,
        afterImage: after,
        description: "Add furniture, décor, rugs and lighting virtually to an empty living room.",
        author: "Short Expo Images",
        date: "2024-07-10"
      },
      {
        title: "Stylish Bedroom Visualization",
        image: "https://source.unsplash.com/featured/?bedroom,virtual,staging",
        beforeImage: before,
        afterImage: after,
        description: "Transform an empty bedroom into a cozy, furnished space using digital assets.",
        author: "Short Expo Images",
        date: "2024-06-30"
      }
    ],
    process: [
      "Receive empty room images",
      "Select staging theme",
      "Insert furniture and décor",
      "Match lighting and shadows",
      "Scale-aware placement",
      "Texture matching",
      "Lighting harmony",
      "Client draft review",
      "Finalize edits",
      "Deliver staged images"
    ]
  },
  {
    category: "Video Editing",
    description: "Video post-production services for real estate walkthroughs and promo clips.",
    pricing: '$ 59.99',
    items: [
      {
        title: "Property Walkthrough Edit",
        image: "https://source.unsplash.com/featured/?realestate,video,editing",
        beforeImage: before,
        afterImage: after,
        description: "Clean cuts, color correction, and smooth transitions for property videos.",
        author: "Short Expo Images",
        date: "2024-07-12"
      },
      {
        title: "Twilight Promo Clip",
        image: "https://source.unsplash.com/featured/?realestate,video,twilight",
        beforeImage: before,
        afterImage: after,
        description: "Edit and grade footage to highlight property in dusk ambiance.",
        author: "Short Expo Images",
        date: "2024-07-08"
      }
    ],
    process: [
      "Edit raw footage",
      "Color grading and stabilization",
      "Add music and text overlays",
      "Lighting enhancements",
      "Smooth transitions",
      "Export optimized formats",
      "Client review pass",
      "Revisions if needed",
      "Final delivery",
      "Storage cleanup"
    ]
  }
];

export default data;