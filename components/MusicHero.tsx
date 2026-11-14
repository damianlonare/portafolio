import { ext } from "@/components/Chrome";

const VIDEO_ID = /^[a-zA-Z0-9_-]{11}$/;

export type FeaturedVideo = {
  id: string;
  title: string;
  thumbnail?: string;
};

function liteScript(title: string) {
  return `(function(){var root=document.getElementById("yt-lite");if(!root||root.dataset.ready)return;root.dataset.ready="1";var link=root.querySelector("a");if(!link)return;link.addEventListener("click",function(event){event.preventDefault();var id=root.getAttribute("data-id")||"";if(!/^[a-zA-Z0-9_-]{11}$/.test(id))return;var frame=document.createElement("iframe");frame.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1";frame.title=${JSON.stringify(title)};frame.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";frame.allowFullscreen=true;frame.referrerPolicy="strict-origin-when-cross-origin";root.replaceChildren(frame);});})();`;
}

export function MusicHero({ video }: { video: FeaturedVideo }) {
  if (!VIDEO_ID.test(video.id) || !video.title) return null;
  const watch = `https://www.youtube.com/watch?v=${video.id}`;
  const thumb = video.thumbnail || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  return (
    <section className="yt-hero" aria-labelledby="yt-title">
      <link rel="preconnect" href="https://i.ytimg.com" />
      <div className="yt-frame" id="yt-lite" data-id={video.id}>
        <a className="yt-hit" href={watch} referrerPolicy="no-referrer">
          <img src={thumb} alt="" width={1280} height={720} fetchPriority="high" referrerPolicy="no-referrer" />
          <span className="yt-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
              <path d="M9 7.2v9.6l8.2-4.8L9 7.2z" fill="currentColor" />
            </svg>
          </span>
          <span className="sr-only">{`Reproducir: ${video.title}`}</span>
        </a>
      </div>
      <p id="yt-title" className="yt-title">
        {video.title}
      </p>
      <a className="yt-out" href={watch} {...ext}>
        ver en YouTube
      </a>
      <script dangerouslySetInnerHTML={{ __html: liteScript(video.title) }} />
    </section>
  );
}
