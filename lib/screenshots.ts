import fs from "fs";
import path from "path";
import { ProjectScreenshot } from "@/data/types";
import { screenshotNotes } from "@/data/screenshot-notes";

const ALLOWED_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];

/**
 * Turns a kebab-case filename like "donor-list.png" into a readable
 * label like "Donor list".
 */
function labelFromFilename(filename: string): string {
  const base = filename.replace(path.extname(filename), "");
  const words = base.replace(/[-_]+/g, " ").trim();
  if (!words) return "Screenshot";
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/**
 * Reads public/projects/<slug>/ on the filesystem and returns every image
 * found there as a ProjectScreenshot, sorted alphabetically by filename.
 * Returns an empty array if the folder doesn't exist or has no images yet —
 * callers should render a "coming soon" state in that case.
 *
 * If data/screenshot-notes.ts has a description for this slug + filename,
 * that description is used as the caption/alt text. Otherwise it falls
 * back to a label generated from the filename itself.
 */
export function getProjectScreenshots(slug: string, projectName: string): ProjectScreenshot[] {
  const dir = path.join(process.cwd(), "public", "projects", slug);

  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return filenames
    .filter((name) => ALLOWED_EXTENSIONS.includes(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((name) => {
      const key = name.replace(path.extname(name), "");
      const note = screenshotNotes[slug]?.[key];
      const description = note ?? labelFromFilename(name);
      return {
        src: `/projects/${slug}/${name}`,
        alt: `${projectName} — ${description}`,
        caption: description
      };
    });
}
