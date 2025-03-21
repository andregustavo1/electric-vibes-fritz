
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Gallery: React.FC = () => {
  // Array com imagens de exemplo - substituir por imagens reais
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571266028243-737c94a4acf8?q=80&w=1974&auto=format&fit=crop",
      alt: "DJ tocando em festival de música eletrônica"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1557787163-3557e6a363d8?q=80&w=1974&auto=format&fit=crop",
      alt: "Evento noturno com luzes vibrantes"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1974&auto=format&fit=crop",
      alt: "Multidão em evento de música eletrônica"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1642178225043-f299072af862?q=80&w=1970&auto=format&fit=crop",
      alt: "DJ em ação com equipamentos modernos"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1978&auto=format&fit=crop",
      alt: "Palco com projeções e luzes vibrantes"
    }
  ];

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title mb-12 text-center mx-auto">Galeria</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-white/80">
          Confira momentos de shows inesquecíveis e eventos marcantes onde a energia de Fritz Green transformou a pista.
        </p>
        
        <div className="mt-10">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-0 overflow-hidden bg-transparent">
                      <CardContent className="p-0">
                        <div className="overflow-hidden rounded-xl group relative">
                          <img 
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full aspect-video rounded-xl transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-fritz-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white p-4 text-sm">{image.alt}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-fritz-black to-transparent z-0"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-electric-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-60 h-60 bg-neon-pink/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Gallery;
