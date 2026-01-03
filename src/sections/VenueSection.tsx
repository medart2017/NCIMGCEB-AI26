import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { MapPin, Building, Plane, Train } from "lucide-react";

export const VenueSection = () => {
  return (
    <SectionWrapper id="venue">
      <SectionTitle 
        title="Venue" 
        subtitle="Join us at the beautiful campus of Tipasa University, Algeria"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Venue Info */}
        <div className="space-y-6">
          <div className="glass-card p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center flex-shrink-0">
                <Building className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Tipasa University
                </h3>
                <p className="text-muted-foreground">
                  A modern academic institution located in the historic coastal city of Tipasa, offering excellent facilities for academic conferences and events.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Location
                </h3>
                <p className="text-muted-foreground">
                  Tipasa, Algeria — A UNESCO World Heritage coastal city located approximately 70 km west of Algiers, known for its stunning Mediterranean views and rich history.
                </p>
              </div>
            </div>
          </div>

       
        </div>

        {/* Map Placeholder */}
        <div className="glass-card overflow-hidden hover-lift">
          <div className="relative h-full min-h-[400px] bg-secondary/50">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                Tipasa, Algeria
              </h3>
              <p className="text-muted-foreground text-sm">
                
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyan/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
