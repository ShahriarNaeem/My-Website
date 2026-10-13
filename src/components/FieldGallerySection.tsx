import React, { useState } from 'react';
import { Camera, Layers, Box, Cpu, Building2, Eye, X, ZoomIn, ExternalLink } from 'lucide-react';

import lumionExteriorImg from '../assets/images/user_portfolio/lumion_exterior_render.jpg';
import sketchupWireframeImg from '../assets/images/user_portfolio/sketchup_wireframe_model.jpg';
import projectSheetImg from '../assets/images/user_portfolio/project_drawing_sheet.jpg';
import teklaChimneyImg from '../assets/images/user_portfolio/tekla_chimney_thumbnail.png';
import structuralEtabsImg from '../assets/images/structural_etabs_modeling_1791872175087.jpg';
import no2TimeseriesImg from '../assets/images/user_portfolio/no2_monthly_timeseries.png';
import no2ScatterImg from '../assets/images/user_portfolio/no2_scatter_plot.png';
import fieldInspectionImg from '../assets/images/field_site_inspection_1791872173174.jpg';
import airQualityImg from '../assets/images/air_quality_field_monitoring_1791872174629.jpg';
import urbanWashImg from '../assets/images/urban_wash_infrastructure_1791872174105.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'BIM & 3D Visualization' | 'Structural & Steel Detailing' | 'Geospatial & Remote Sensing' | 'Field Infrastructure & Survey';
  image: string;
  source: string;
  description: string;
  tools: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-lumion-exterior",
    title: "Photorealistic Architectural Exterior & Landscape",
    category: "BIM & 3D Visualization",
    image: lumionExteriorImg,
    source: "My-Portfolio / Sketchup & Lumion 7-9SR",
    description: "Photorealistic daylight exterior visualization detailing architectural facades, lush landscape integration, modern glazing, and natural illumination balance.",
    tools: ["Lumion", "SketchUp", "Architectural Visualization"]
  },
  {
    id: "gal-sketchup-wireframe",
    title: "SketchUp 3D Wireframe & Structural Geometry",
    category: "BIM & 3D Visualization",
    image: sketchupWireframeImg,
    source: "My-Portfolio / Sketchup & Lumion 7-9SR",
    description: "Native 3D model viewport capturing geometric wireframe massing, floor plate alignment, roof framing pitches, and coordinate axis setup.",
    tools: ["SketchUp Pro", "3D Massing", "Wireframe Modeling"]
  },
  {
    id: "gal-revit-project-sheet",
    title: "Revit Architectural Project Drawing Sheet",
    category: "BIM & 3D Visualization",
    image: projectSheetImg,
    source: "My-Portfolio / REVIT / Archi / Project Drawings",
    description: "Multi-view Revit architectural and structural drawing sheet illustrating building layouts, elevations, spatial cross-sections, and detailed dimensional schedules.",
    tools: ["Autodesk Revit", "Architectural Drawings", "AutoCAD", "BIM Documentation"]
  },
  {
    id: "gal-tekla-chimney",
    title: "Industrial Steel Chimney Fabrication Blueprint",
    category: "Structural & Steel Detailing",
    image: teklaChimneyImg,
    source: "My-Portfolio / Tekla Structures",
    description: "Comprehensive structural steel fabrication blueprint for industrial chimney tower, specifying base plate bolt assemblies, stiffener plates, and welding callouts.",
    tools: ["Tekla Structures", "Structural Steel", "Shop Drawings"]
  },
  {
    id: "gal-etabs-stress",
    title: "Multi-Story FEA Structural Frame Analysis",
    category: "Structural & Steel Detailing",
    image: structuralEtabsImg,
    source: "Innovate Engineering / BNBC-20 Design",
    description: "Finite Element Analysis (FEA) of reinforced concrete frame displaying bending moment envelopes, shell stress contours, and lateral seismic drift compliance.",
    tools: ["ETABS", "SAFE", "BNBC-20 Standards"]
  },
  {
    id: "gal-no2-timeseries",
    title: "72-Month Satellite vs. Ground NO₂ Time-Series",
    category: "Geospatial & Remote Sensing",
    image: no2TimeseriesImg,
    source: "My-Portfolio / Geo-Spatial Analysis",
    description: "Empirical monthly time-series comparison chart contrasting Sentinel-5P TROPOMI satellite column densities against Dhaka CAMS ground-based monitoring stations.",
    tools: ["Python", "Pandas", "Matplotlib", "Sentinel-5P"]
  },
  {
    id: "gal-no2-scatter",
    title: "Statistical Regression & Sensor Correlation",
    category: "Geospatial & Remote Sensing",
    image: no2ScatterImg,
    source: "My-Portfolio / Geo-Spatial Analysis",
    description: "Bivariate regression scatter plot showing linear correlation index, 95% confidence intervals, and seasonal residual variance between satellite and ground telemetry.",
    tools: ["Python", "Scikit-Learn", "ArcGIS Pro"]
  },
  {
    id: "gal-field-inspection",
    title: "Mega Transit Viaduct Construction Inspection",
    category: "Field Infrastructure & Survey",
    image: fieldInspectionImg,
    source: "DMRT Line-6 & ADB BGB Field Practice",
    description: "Quantity surveying and physical site verification of precast concrete segmental box girders, pier caps, and falsework alignment.",
    tools: ["Quantity Surveying", "RFI Verification", "FIDIC"]
  },
  {
    id: "gal-air-station",
    title: "Urban Air Quality Rooftop Monitoring Station",
    category: "Field Infrastructure & Survey",
    image: airQualityImg,
    source: "Darussalam Continuous Air Monitoring",
    description: "Continuous atmospheric sampling installation measuring suspended particulate matter (PM2.5, PM10) and gaseous emissions across Dhaka bottleneck corridors.",
    tools: ["Air Quality Sampler", "SPSS", "CAMS Station"]
  },
  {
    id: "gal-wash-field",
    title: "Slum Community WASH & Drainage Survey",
    category: "Field Infrastructure & Survey",
    image: urbanWashImg,
    source: "Kallayanpur Pora Bari Field Research",
    description: "Field socioeconomic and civil water resources survey documenting municipal potable water access, piping infrastructure deficits, and gendered collection labor.",
    tools: ["Field Surveying", "WASH Framework", "Community Engagement"]
  }
];

export const FieldGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'BIM & 3D Visualization',
    'Structural & Steel Detailing',
    'Geospatial & Remote Sensing',
    'Field Infrastructure & Survey'
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
              Visual Fieldwork & Modeling Archive
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Engineering Practice, BIM & Research Gallery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Authentic visual documentation across structural design, 3D Lumion/SketchUp visualizations, Tekla steel fabrication, satellite data cartography, and on-site infrastructure.
            </p>
          </div>

          {/* GitHub Source Link */}
          <a
            href="https://github.com/ShahriarNaeem/My-Portfolio.git"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors border border-slate-200/80 dark:border-slate-700 self-start md:self-auto shrink-0"
          >
            <span>GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-100 dark:border-slate-800">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white font-semibold shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-2xs hover:shadow-md transition-all flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Overlay scrim */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  {item.category}
                </div>

                {/* Bottom Overlay Title & Zoom Icon */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-bold truncate max-w-[80%] drop-shadow-xs">
                    {item.title}
                  </span>
                  <div className="p-1 rounded bg-white/20 backdrop-blur-xs text-white group-hover:bg-blue-600 transition-colors">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 font-semibold mb-1">
                    {item.source}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-1">
                  {item.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded border border-slate-200/80 dark:border-slate-700 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white transition-colors"
              aria-label="Close photo modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image Frame */}
            <div className="relative aspect-16/10 max-h-[65vh] w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[65vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Metadata Footer */}
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-400">
                  {selectedPhoto.source}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {selectedPhoto.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {selectedPhoto.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Software & Tools:</span>
                {selectedPhoto.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
