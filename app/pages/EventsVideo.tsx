import HeroVideoDialog from "@/components/ui/hero-video-dialog";

interface EventsVideoProps {
  videoSrc?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
}

export default function EventsVideo({
  videoSrc = "https://www.youtube.com/embed/rxVtQispBOY?si=WmFhBH10iYY0E7cf",
  thumbnailSrc = "https://i.ibb.co/hcH066Q/youtube-Thumbnail.jpg",
  thumbnailAlt = "Hero Video"
}: EventsVideoProps) {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc={videoSrc}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt={thumbnailAlt}
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc={videoSrc}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt={thumbnailAlt}
      />
    </div>
  );
}
