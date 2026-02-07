
import { useState, useEffect, useRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { slides, type SlideContent } from '../data/content'
import { cn } from '../lib/utils'

// Import new presentation components
import { HeroSection } from '../components/presentation/HeroSection'
import { GridCardSection } from '../components/presentation/GridCardSection'
import { SplitSection } from '../components/presentation/SplitSection'
import { TimelineSection } from '../components/presentation/TimelineSection'
import { DiagramSection } from '../components/presentation/DiagramSection'
import { ZigZagSection } from '../components/presentation/ZigZagSection'
import { ListSection } from '../components/presentation/ListSection'
import { ReflectionSection } from '../components/presentation/ReflectionSection'
import { CaseStudySection } from '../components/presentation/CaseStudySection'
import { SummarySection } from '../components/presentation/SummarySection'
import { QuoteSection } from '../components/presentation/QuoteSection'
import { DownloadSection } from '../components/presentation/DownloadSection'
import { FooterSection } from '../components/presentation/FooterSection'

import { TeamMembersSection } from '../components/presentation/TeamMembersSection'
import { ImageOverlaySection } from '../components/presentation/ImageOverlaySection'
import { DefinitionSection } from '../components/presentation/DefinitionSection'
import { StorySection } from '../components/presentation/StorySection'
import { ShowcaseSection } from '../components/presentation/ShowcaseSection'

export const Route = createFileRoute('/')({
  component: Index,
})

const SlideRenderer = ({ data }: { data: SlideContent }) => {
  switch (data.type) {
    case 'hero': return <HeroSection data={data} />;
    case 'grid': return <GridCardSection data={data} />;
    case 'split': return <SplitSection data={data} />;
    case 'timeline': return <TimelineSection data={data} />;
    case 'diagram': return <DiagramSection data={data} />;
    case 'definition': return <DefinitionSection data={data} />;
    case 'story': return <StorySection data={data} />;
    case 'showcase': return <ShowcaseSection data={data} />;
    case 'zigzag': return <ZigZagSection data={data} />;
    case 'list': return <ListSection data={data} />;
    case 'reflection': return <ReflectionSection data={data} />;
    case 'case-study': return <CaseStudySection data={data} />;
    case 'summary': return <SummarySection data={data} />;
    case 'quote': return <QuoteSection data={data} />;
    case 'download': return <DownloadSection data={data} />;
    case 'image-overlay': return <ImageOverlaySection data={data} />;
    case 'team-members': return <TeamMembersSection data={data} />;
    case 'closing': return <FooterSection data={data} />;
    default:
      return (
        <div className="h-full flex items-center justify-center bg-gray-100 tex-gray-500">
          Unimplemented Slide Type: {data.type}
        </div>
      );
  }
};

function Index() {
  const [activeId, setActiveId] = useState<string>(slides[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll Spy Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0,
        rootMargin: '-45% 0px -45% 0px' // Trigger when element is in the middle 10% of viewport
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const index = slides.findIndex(s => s.id === activeId);
      if (index === -1) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (index < slides.length - 1) {
          const nextId = slides[index + 1].id;
          document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (index > 0) {
          const prevId = slides[index - 1].id;
          document.getElementById(prevId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeId]);

  const currentIndex = slides.findIndex(s => s.id === activeId);
  const currentSlide = slides[currentIndex];

  return (
    <div
      ref={scrollRef}
      className="h-screen w-full overflow-y-scroll scroll-smooth relative bg-white no-scrollbar"
      style={{ scrollBehavior: 'smooth' }}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {slides.map((slide) => (
        <section
          key={slide.id}
          id={slide.id}
          className="w-full min-h-screen shrink-0 overflow-hidden relative"
        >
          <SlideRenderer data={slide} />
        </section>
      ))}

      {/* Floating Navigation Interface */}
      <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
        <div className="px-6 py-4 flex justify-between items-end">

          {/* Status Badge */}
          <div className="bg-black/40 backdrop-blur-md text-white/90 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest shadow-lg border border-white/10 pointer-events-auto transition-opacity duration-300 hover:bg-black/60 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>{currentSlide?.section?.split('.')[1] || 'TOLERANSI'}</span>
            <span className="opacity-50">|</span>
            <span>{currentIndex + 1} / {slides.length}</span>
          </div>

          {/* Navigation Dots (Vertical on Desktop) */}
          <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 pointer-events-auto z-50">
            {slides.map((slide, idx) => (
              <a
                key={slide.id}
                href={`#${slide.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(slide.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative flex items-center justify-end"
                aria-label={`Go to slide ${idx + 1}`}
              >
                {/* Tooltip */}
                <span className={cn(
                  "absolute right-6 px-3 py-1 rounded-md bg-black/80 text-white text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm",
                  activeId === slide.id && "bg-blue-600"
                )}>
                  {slide.title}
                </span>

                {/* Dot */}
                <div className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeId === slide.id
                    ? "bg-blue-600 scale-150 ring-4 ring-blue-600/20"
                    : "bg-slate-300 hover:bg-slate-400"
                )} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
