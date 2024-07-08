/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from "framer-motion"
import Image from "next/image";
import { Fancybox } from "../Fancybox/Fancybox";
import thumbImg from '../../../../public/images/VideoTamplate.jpg'

import "./sectionVideo_tamp.css"

export function SectionVideo() {
  return <section className="sectionVideo">
    <motion.div
      className="sectionVideoPlayerWrapper"
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3, }}
    >
      <Fancybox>
        <a
          className="sectionVideoPlayerLink"
          href="https://www.youtube.com/watch?v=z2X2HaTvkl8"
          data-fancybox
          >
          <span className="sectionVideoPlayButton"></span>
          <Image
            src={thumbImg}
            alt="Смотреть видео о компании"
            className="sectionVideoPlayerContent"
          />
        </a>
      </Fancybox>
    </motion.div>
  </section>
}
