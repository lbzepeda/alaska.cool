import React, { useState, useEffect, useCallback, useRef } from 'react';

interface ProjectMedia {
  id: number;
  src: string;
  type: 'image' | 'video';
  company: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  height: 'tall' | 'medium' | 'short';
  poster?: string;
}

interface ProjectCategory {
  id: string;
  name: string;
  count: number;
}

interface ProjectGalleryProps {
  currentLang?: 'es' | 'en';
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ currentLang = 'es' }) => {
  // 🏢 CATEGORÍAS DE PROYECTOS ORGANIZADAS POR EMPRESA
  const projectCategories: ProjectCategory[] = [
    {
      id: 'todos',
      name: currentLang === 'es' ? 'Todos' : 'All',
      count: 9
    },
    {
      id: 'ampm',
      name: 'AMPM',
      count: 3
    },
    {
      id: 'unan',
      name: 'UNAN',
      count: 5
    },
    {
      id: 'contenido',
      name: currentLang === 'es' ? 'Contenido' : 'Content',
      count: 1
    }
  ];

  // ✅ MEDIOS ORGANIZADOS POR EMPRESA/PROYECTO
  const projectMedia: ProjectMedia[] = [
    // 🏪 PROYECTO AMPM
    {
      id: 1,
      src: "/projects/AMPM1.webp",
      type: "image",
      company: "ampm",
      alt: "Instalación aires acondicionados tipo cassette AMPM",
      title: currentLang === 'es' ? "AMPM - 60,000 BTU Cassette AC Units" : "AMPM - 60,000 BTU Cassette AC Units",
      description: currentLang === 'es' ? "Installation of 60,000 BTU cassette-type air conditioners in AMPM branches: Las Colinas, Rivas, San Juan del Sur, Masaya, Nandaime and other locations." : "Installation of 60,000 BTU cassette-type air conditioners in AMPM branches: Las Colinas, Rivas, San Juan del Sur, Masaya, Nandaime and other locations.",
      category: currentLang === 'es' ? "Comercial" : "Commercial",
      height: "tall"
    },
    {
      id: 2,
      src: "/projects/AMPM2.webp",
      type: "image",
      company: "ampm",
      alt: "Instalación aires acondicionados AMPM - Fase 2",
      title: currentLang === 'es' ? "AMPM - 60,000 BTU Cassette AC Units" : "AMPM - 60,000 BTU Cassette AC Units",
      description: currentLang === 'es' ? "Installation of 60,000 BTU cassette-type air conditioners in AMPM branches: Las Colinas, Rivas, San Juan del Sur, Masaya, Nandaime and other locations." : "Installation of 60,000 BTU cassette-type air conditioners in AMPM branches: Las Colinas, Rivas, San Juan del Sur, Masaya, Nandaime and other locations.",
      category: currentLang === 'es' ? "Comercial" : "Commercial",
      height: "medium"
    },
    {
      id: 3,
      src: "/projects/AMPM3.webp",
      type: "image",
      company: "ampm",
      alt: "Finalización proyecto AMPM - Aires cassette",
      title: currentLang === 'es' ? "AMPM - 60,000 BTU Cassette AC Units" : "AMPM - 60,000 BTU Cassette AC Units",
      description: currentLang === 'es' ? "Installation of 60,000 BTU cassette-type air conditioners in AMPM branches: Las Colinas, Rivas, San Juan del Sur, Masaya, Nandaime and other locations." : "Installation of 60,000 BTU cassette-type air conditioners in AMPM branches: Las Colinas, Rivas, San Juan del Sur, Masaya, Nandaime and other locations.",
      category: currentLang === 'es' ? "Comercial" : "Commercial",
      height: "short"
    },

    // 🎓 PROYECTO UNAN
    {
      id: 5,
      src: "/projects/UNAN1.webp",
      type: "image",
      company: "unan",
      alt: "Universidad UNAN - Sistema de climatización",
      title: currentLang === 'es' ? "UNAN - Proyecto Universitario" : "UNAN - University Project",
      description: currentLang === 'es' ? "Instalación completa de sistema de climatización en instalaciones universitarias con control automatizado." : "Complete HVAC system installation in university facilities with automated control.",
      category: currentLang === 'es' ? "Educativo" : "Educational",
      height: "medium"
    },
    {
      id: 6,
      src: "/projects/UNAN2.webp",
      type: "image",
      company: "unan",
      alt: "UNAN - Equipos de climatización instalados",
      title: currentLang === 'es' ? "UNAN - Equipamiento Fase 2" : "UNAN - Equipment Phase 2",
      description: currentLang === 'es' ? "Segunda fase del proyecto universitario con instalación de equipos de alta eficiencia energética." : "Second phase of university project with high energy efficiency equipment installation.",
      category: currentLang === 'es' ? "Educativo" : "Educational",
      height: "short"
    },
    {
      id: 7,
      src: "/projects/UNAN3.webp",
      type: "image",
      company: "unan",
      alt: "UNAN - Detalles técnicos de instalación",
      title: currentLang === 'es' ? "UNAN - Detalles Técnicos" : "UNAN - Technical Details",
      description: currentLang === 'es' ? "Vista detallada de componentes y conexiones del sistema de climatización universitario." : "Detailed view of university HVAC system components and connections.",
      category: currentLang === 'es' ? "Técnico" : "Technical",
      height: "tall"
    },
    {
      id: 8,
      src: "/projects/UNAN4.webp",
      type: "image",
      company: "unan",
      alt: "UNAN - Instalación completada",
      title: currentLang === 'es' ? "UNAN - Finalización del Proyecto" : "UNAN - Project Completion",
      description: currentLang === 'es' ? "Proyecto universitario completado con sistemas de monitoreo y control remoto implementados." : "University project completed with monitoring systems and remote control implemented.",
      category: currentLang === 'es' ? "Educativo" : "Educational",
      height: "medium"
    },
    {
      id: 9,
      src: "/projects/UNAN5.webp",
      type: "image",
      company: "unan",
      alt: "UNAN - Vista general del proyecto",
      title: currentLang === 'es' ? "UNAN - Vista General" : "UNAN - General View",
      description: currentLang === 'es' ? "Vista panorámica del proyecto universitario mostrando la integración completa del sistema." : "Panoramic view of university project showing complete system integration.",
      category: currentLang === 'es' ? "Educativo" : "Educational",
      height: "tall"
    },

    // 📹 CONTENIDO AUDIOVISUAL
    {
      id: 11,
      src: "/projects/TrasCamara.webp",
      type: "image",
      company: "contenido",
      alt: "Behind the scenes - Proceso de trabajo",
      title: currentLang === 'es' ? "Tras Cámaras - Proceso" : "Behind the Scenes - Process",
      description: currentLang === 'es' ? "Vista tras cámaras del proceso de instalación mostrando el profesionalismo del equipo técnico." : "Behind the scenes view of installation process showing technical team professionalism.",
      category: currentLang === 'es' ? "Proceso" : "Process",
      height: "medium"
    }
  ];

  // State management
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [filteredItems, setFilteredItems] = useState<ProjectMedia[]>(projectMedia);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  // Refs
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Filter media items
  const updateFilteredItems = useCallback(() => {
    if (activeFilter === 'todos') {
      setFilteredItems(projectMedia);
    } else {
      setFilteredItems(projectMedia.filter(item => item.company === activeFilter));
    }
  }, [activeFilter]);

  // Handle filter change
  const handleFilterChange = useCallback((filterType: string) => {
    setIsFiltering(true);
    setActiveFilter(filterType);
    
    setTimeout(() => {
      setIsFiltering(false);
    }, 350);
  }, []);

  // Open lightbox
  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  // Navigate to next media
  const nextMedia = useCallback(() => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  // Navigate to previous media
  const prevMedia = useCallback(() => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevMedia();
          break;
        case 'ArrowRight':
          nextMedia();
          break;
        case ' ':
          e.preventDefault();
          if (videoRef.current && !videoRef.current.classList.contains('hidden')) {
            if (videoRef.current.paused) {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeLightbox, nextMedia, prevMedia]);

  // Update filtered items when filter changes
  useEffect(() => {
    updateFilteredItems();
  }, [updateFilteredItems]);

  // Get current media item for lightbox
  const currentMedia = filteredItems[currentIndex];

  return (
    <>
      <section className="relative bg-neutral-50 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-black text-neutral-900 dark:text-white transition-colors duration-300 py-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <span className="text-blue-600 dark:text-blue-400 font-medium mb-2 block">
              {currentLang === 'es' ? 'Contenido Visual' : 'Visual Content'}
            </span>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              {currentLang === 'es' ? 'Multimedia' : 'Multimedia'}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-4 text-sm">
              {currentLang === 'es' 
                ? 'Descubre nuestro contenido visual: proyectos de climatización, videos de procesos, y contenido de redes sociales. Haz click para explorar.' 
                : 'Discover our visual content: HVAC projects, process videos, and social media content. Click to explore.'}
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-tab px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeFilter === category.id
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300'
                  }`}
                  onClick={() => handleFilterChange(category.id)}
                >
                  <span>{category.name}</span>
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                    activeFilter === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="masonry-grid columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {projectMedia.map((media) => {
              const isVisible = activeFilter === 'todos' || media.company === activeFilter;
              
              return (
                <div
                  key={media.id}
                  className={`
                    media-item group relative overflow-hidden rounded-2xl bg-white dark:bg-white/[0.02] 
                    border border-neutral-200 dark:border-white/[0.1] 
                    hover:shadow-2xl transition-all duration-500 cursor-pointer
                    break-inside-avoid mb-6
                    ${media.height === 'tall' ? 'h-96' : media.height === 'short' ? 'h-64' : 'h-80'}
                    ${!isVisible ? 'hidden' : ''}
                    ${isFiltering ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                  `}
                  onClick={() => {
                    const filteredIndex = filteredItems.findIndex(item => item.id === media.id);
                    if (filteredIndex !== -1) {
                      openLightbox(filteredIndex);
                    }
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    {media.type === 'video' && media.poster ? (
                      <div className="relative w-full h-full">
                        {/* Video poster as background image */}
                        <img 
                          src={media.poster} 
                          alt={media.alt}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Media type badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 text-white text-xs font-medium rounded backdrop-blur-sm">
                      {media.type === 'video' ? (
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          <span>{currentLang === 'es' ? 'Video' : 'Video'}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <polyline points="21,15 16,10 5,21"/>
                          </svg>
                          <span>{currentLang === 'es' ? 'Foto' : 'Photo'}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-blue-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      {media.category}
                    </div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h3 className="text-white text-lg font-semibold mb-2 line-clamp-2">
                        {media.title}
                      </h3>
                      <p className="text-white/90 text-sm line-clamp-2">
                        {media.description}
                      </p>
                      
                      {/* View more button */}
                      <div className="mt-3 flex items-center text-blue-300 text-sm font-medium">
                        <span>
                          {currentLang === 'es' 
                            ? (media.type === 'video' ? 'Ver video' : 'Ver detalles')
                            : (media.type === 'video' ? 'Watch video' : 'View details')
                          }
                        </span>
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isModalOpen && currentMedia && (
        <div 
          ref={modalRef}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50"
          onClick={(e) => {
            if (e.target === modalRef.current) {
              closeLightbox();
            }
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-20 right-6 w-14 h-14 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md border-2 border-white/40 hover:border-white/60 shadow-2xl z-10"
              aria-label="Close lightbox"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Navigation arrows */}
            <button 
              onClick={prevMedia}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md border-2 border-white/40 hover:border-white/60 shadow-2xl z-10"
              aria-label="Previous image"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <button 
              onClick={nextMedia}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md border-2 border-white/40 hover:border-white/60 shadow-2xl z-10"
              aria-label="Next image"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* Main content */}
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 max-h-[90vh]">
              {/* Media container */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <div className="relative max-w-full max-h-full">
                  <img 
                    ref={imageRef}
                    src={currentMedia.src} 
                    alt={currentMedia.title} 
                    className={`max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl ${currentMedia.type === 'video' ? 'hidden' : ''}`}
                  />
                  <video
                    ref={videoRef}
                    className={`max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl ${currentMedia.type === 'image' ? 'hidden' : ''}`}
                    controls
                    preload="metadata"
                    playsInline
                    poster={currentMedia.poster}
                  >
                    <source src={currentMedia.src} type="video/webm" />
                    {currentLang === 'es' ? 'Tu navegador no soporta video WebM.' : 'Your browser does not support WebM video.'}
                  </video>
                </div>
              </div>

              {/* Info sidebar */}
              <div className="lg:col-span-1 text-white space-y-6 overflow-y-auto">
                <div>
                  <div className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-4">
                    {currentMedia.category}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{currentMedia.title}</h2>
                  <p className="text-white/90 leading-relaxed">{currentMedia.description}</p>
                </div>
                
                {/* Project details */}
                <div className="border-t border-white/20 pt-6">
                  <h3 className="text-lg font-semibold mb-3">
                    {currentLang === 'es' ? 'Detalles del Proyecto' : 'Project Details'}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">{currentLang === 'es' ? 'Estado:' : 'Status:'}</span>
                      <span className="text-green-400 font-medium">{currentLang === 'es' ? 'Completado' : 'Completed'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">{currentLang === 'es' ? 'Tipo:' : 'Type:'}</span>
                      <span className="font-medium">{currentMedia.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">{currentLang === 'es' ? 'Servicio:' : 'Service:'}</span>
                      <span className="font-medium">{currentLang === 'es' ? 'Climatización' : 'HVAC'}</span>
                    </div>
                  </div>
                </div>

                {/* Media counter */}
                <div className="border-t border-white/20 pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>
                        {currentIndex + 1} / {filteredItems.length} - {
                          activeFilter === 'todos' 
                            ? (currentLang === 'es' ? 'Todos' : 'All')
                            : currentMedia.company.toUpperCase()
                        }
                      </span>
                      <span>{currentLang === 'es' ? 'Galería multimedia' : 'Media gallery'}</span>
                    </div>
                    <div className="text-xs text-white/50 space-y-1">
                      <div>{currentLang === 'es' ? '• Usa ← → para navegar entre medios' : '• Use ← → to navigate between media'}</div>
                      <div>{currentLang === 'es' ? '• Presiona Espacio para pausar/reproducir videos' : '• Press Space to pause/play videos'}</div>
                      <div>{currentLang === 'es' ? '• Presiona ESC o click fuera para cerrar' : '• Press ESC or click outside to close'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default ProjectGallery;