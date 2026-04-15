
import CardPembicara from './ui/CardPembicara';

export default function PembicaraSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center justify-center">
          
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-[36px] md:text-[45px] font-bold text-slate-700 tracking-tight">
              Pembicara <span className="text-[#8b2551]">INVOFEST 2025</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 w-full place-items-center">
            
            <CardPembicara 
              name="Muhammad" 
              role="Bantu Mamah" 
              src="https://i.pravatar.cc/400?img=11"
            />

            <CardPembicara 
              name="Zaim" 
              role="Tidak Mendekati Gebetan Teman" 
              src="https://i.pravatar.cc/400?img=68"
            />

            <CardPembicara 
              name="El Yafi" 
              role="Aldis Burger Rasanya Juicy Luicy" 
              src="https://i.pravatar.cc/400?img=59"
            />

          </div>
        </div>

      </div>
    </section>
  );
}
