"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ProjectScreenshot } from "@/data/types";

function GalleryThumb({ shot, onOpen }: { shot: ProjectScreenshot; onOpen: () => void }) {
  const [broken, setBroken] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      disabled={broken}
      className="group overflow-hidden rounded-sm border border-line text-left disabled:cursor-not-allowed dark:border-dark-line"
    >
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-panel dark:bg-dark-panel">
        {broken ? (
          <p className="px-4 text-center font-mono text-[11px] text-steel dark:text-dark-steel">
            Image unavailable
          </p>
        ) : (
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 ease-signal group-hover:scale-[1.02]"
            onError={() => setBroken(true)}
          />
        )}
      </div>
      {shot.caption && (
        <p className="border-t border-line px-3 py-2 font-mono text-xs text-steel dark:border-dark-line dark:text-dark-steel">
          {shot.caption}
        </p>
      )}
    </button>
  );
}

export default function ScreenshotGallery({
  screenshots,
  projectName
}: {
  screenshots: ProjectScreenshot[];
  projectName: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [lightboxBroken, setLightboxBroken] = useState(false);

  const next = () => setOpenIndex((i) => (i === null ? i : (i + 1) % screenshots.length));
  const prev = () => setOpenIndex((i) => (i === null ? i : (i - 1 + screenshots.length) % screenshots.length));

  useEffect(() => {
    setLightboxBroken(false);
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, screenshots.length]);

  if (screenshots.length === 0) {
    return (
      <div className="grain-panel rounded-sm border border-dashed border-line p-10 text-center dark:border-dark-line">
        <p className="text-sm text-steel dark:text-dark-steel">Project screenshots will be added here.</p>
        <p className="mt-1 font-mono text-[11px] text-steel/70 dark:text-dark-steel/70">
          They'll appear automatically once added to the project's screenshot folder.
        </p>
      </div>
    );
  }

  const current = openIndex !== null ? screenshots[openIndex] : null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((shot, index) => (
          <GalleryThumb key={shot.src} shot={shot} onOpen={() => setOpenIndex(index)} />
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 sm:p-6"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            className="absolute right-4 top-4 font-mono text-sm text-paper sm:right-6 sm:top-6"
            aria-label="Close preview"
          >
            Close (Esc)
          </button>

          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-sm p-2 font-mono text-2xl text-paper transition-colors hover:text-signal sm:left-6"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-2 font-mono text-2xl text-paper transition-colors hover:text-signal sm:right-6"
              >
                ›
              </button>
            </>
          )}

          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] w-full">
              {lightboxBroken ? (
                <div className="flex h-full w-full items-center justify-center bg-panel/10">
                  <p className="font-mono text-sm text-paper/70">Image unavailable</p>
                </div>
              ) : (
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  onError={() => setLightboxBroken(true)}
                />
              )}
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-xs text-paper/80">
              <p>{current.caption ?? `${projectName} screenshot`}</p>
              {screenshots.length > 1 && (
                <p>
                  {openIndex! + 1} / {screenshots.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
