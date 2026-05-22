import { useEffect } from 'react';
import Button from '../ui/Button';
import maskotWorkshop from '../../assets/Maskot-Workshop.png';
import { useEventStore } from '../../stores/eventStore';
import { MapPin, CalendarDays } from 'lucide-react';

export default function WorkshopSection() {
  const { events, fetchEvents, isLoading } = useEventStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const workshopEvent = events.find(
    (event) => event.category?.name.toLowerCase() === 'workshop'
  );

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-12 relative z-10 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 flex justify-center items-center relative lg:order-1 order-2">
          <div className="relative w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none"></div>
            
            <img 
              src={maskotWorkshop} 
              alt="Maskot IT Workshop" 
              className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="flex-1 max-w-2xl lg:order-2 order-1">
          <h2 className="text-[40px] md:text-[48px] font-medium text-[#8b2551] mb-6 tracking-tight">
            IT Workshop
          </h2>
          
          {isLoading ? (
            <div className="animate-pulse flex flex-col gap-4 mb-8">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              <div className="h-4 bg-slate-200 rounded w-4/6"></div>
            </div>
          ) : (
            <div className="text-slate-600/90 text-[16px] md:text-[18px] leading-relaxed mb-8">
              {workshopEvent ? (
                <>
                  <strong className="text-slate-800 font-bold block mb-2 text-xl">
                    "{workshopEvent.name.replace('IT Workshop - ', '')}"
                  </strong>
                  {workshopEvent.description}
                  <div className="mt-4 text-sm text-[#8b2551] font-semibold space-y-2">
                    <p className="flex items-center gap-2">
                      <MapPin size={16} /> {workshopEvent.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <CalendarDays size={16} /> {new Date(workshopEvent.dateEvent).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </>
              ) : (
                "Belum ada informasi workshop tersedia saat ini."
              )}
            </div>
          )}

          <Button className="uppercase tracking-wider">
            DAFTAR IT WORKSHOP
          </Button>
        </div>

      </div>
    </section>
  );
}
