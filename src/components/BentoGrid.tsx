import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface BentoGridProps {
  images: { src: string; alt: string; span?: string }[];
  showLightbox?: boolean;
}

const BentoGrid = ({ images, showLightbox = true }: BentoGridProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const handlePrevious = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  }, [selectedImage, images.length]);

  const handleNext = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  }, [selectedImage, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "Escape":
          setSelectedImage(null);
          setIsAutoPlaying(false);
          break;
        case " ":
          e.preventDefault();
          setIsAutoPlaying((prev) => !prev);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handlePrevious, handleNext]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying || selectedImage === null) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, selectedImage, handleNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`bento-item cursor-pointer group ${image.span || ""}`}
            onClick={() => showLightbox && setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-background text-sm font-medium truncate">{image.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex flex-col items-center justify-center"
            onClick={() => {
              setSelectedImage(null);
              setIsAutoPlaying(false);
            }}
          >
            {/* Top Controls */}
            <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-4 z-20">
              <div className="text-background/80 text-sm font-medium bg-background/10 px-4 py-2 rounded-full backdrop-blur-sm">
                {selectedImage + 1} / {images.length}
              </div>
              
              <div className="flex items-center gap-2">
                {/* Autoplay Button */}
                <button
                  className="p-3 text-background hover:text-primary transition-colors bg-background/10 rounded-full backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAutoPlaying(!isAutoPlaying);
                  }}
                  aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                
                {/* Close Button */}
                <button
                  className="p-3 text-background hover:text-primary transition-colors bg-background/10 rounded-full backdrop-blur-sm"
                  onClick={() => {
                    setSelectedImage(null);
                    setIsAutoPlaying(false);
                  }}
                  aria-label="Close lightbox"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Image Area */}
            <div className="flex-1 flex items-center justify-center w-full px-16 py-20">
              {/* Navigation Buttons */}
              <button
                className="absolute left-4 md:left-8 p-3 md:p-4 text-background hover:text-primary hover:bg-background/20 transition-all z-10 bg-background/10 rounded-full backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                className="absolute right-4 md:right-8 p-3 md:p-4 text-background hover:text-primary hover:bg-background/20 transition-all z-10 bg-background/10 rounded-full backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>

              {/* Image with Animation */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-floating"
                />
                <div className="absolute -bottom-10 left-0 right-0 text-center">
                  <p className="text-background/80 text-sm font-medium">
                    {images[selectedImage].alt}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-0 right-0 px-4 z-20">
              <div className="flex justify-center gap-2 overflow-x-auto pb-2 px-4 max-w-full scrollbar-hide">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(index);
                    }}
                    className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? "ring-2 ring-primary scale-110"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Keyboard hints */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-background/50 text-xs hidden md:flex gap-4">
              <span>← → Navigate</span>
              <span>Space: Play/Pause</span>
              <span>Esc: Close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BentoGrid;
