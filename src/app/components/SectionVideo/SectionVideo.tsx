// import { YouTubeEmbed } from '@next/third-parties/google'
import videoTamplate from "../../../../public/images/VideoTamplate.jpg"

import "./sectionVideo_tamp.css"
import Image from 'next/image'
export function SectionVideo() {
  return <section className="sectionVideo">
    <div className="sectionVideoPlayerWrapper">
      <Image src={videoTamplate} alt='Видео' />
      {/* <YouTubeEmbed
        videoid="7PwMXIA4_RE"
        playlabel="Смотреть видео"
        params="controls=0&modestbranding=1&rel=0&"
        // style="border-radius: 16px"
        style="max-width: 100%; border-radius: 16px"
      /> */}
    </div>
  </section>
}
