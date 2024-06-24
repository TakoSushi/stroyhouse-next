import { YouTubeEmbed } from '@next/third-parties/google'

import "./sectionVideo_tamp.css"
export function SectionVideo() {
  return <section className="sectionVideo">
    <YouTubeEmbed
      videoid="7PwMXIA4_RE"
      playlabel="Смотреть видео"
      params="controls=0&modestbranding=1&rel=0&"
      // style="border-radius: 16px"
      style="max-width: 100%; border-radius: 16px"
    />
  </section>
}
