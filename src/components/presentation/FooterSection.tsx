import type { SlideContent } from '../../data/content';

export const FooterSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-emerald-950 text-white text-center px-6">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">{data.title}</h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl">{data.subtitle}</p>
            <div className="mt-24 text-sm text-slate-600 uppercase tracking-widest">
                Presentasi Pendidikan Agama Islam
            </div>
        </div>
    );
};
