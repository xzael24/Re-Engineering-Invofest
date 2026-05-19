import { useEffect } from 'react';
import CardPembicara from '../ui/CardPembicara';
import { usePembicaraStore } from '../../stores/pembicaraStore';

export default function PembicaraSection() {
  const { pembicaras, fetchPembicaras, isLoading } = usePembicaraStore();

  useEffect(() => {
    fetchPembicaras();
  }, [fetchPembicaras]);

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center justify-center">
          
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-[36px] md:text-[45px] font-bold text-slate-700 tracking-tight">
              Pembicara <span className="text-[#8b2551]">INVOFEST 2025</span>
            </h2>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-10 w-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8b2551]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 w-full place-items-center">
              {pembicaras.map((pembicara) => (
                <CardPembicara 
                  key={pembicara.id}
                  name={pembicara.name} 
                  role={pembicara.title} 
                  src={pembicara.photo || 'https://via.placeholder.com/300x300'}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
