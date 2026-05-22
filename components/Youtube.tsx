"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Play, Youtube, Clock, Eye } from "lucide-react";
import thumbnail1 from '@/images/maxresdefault.jpg'
import thumbnail2 from '@/images/maxresdefault (1).jpg'
import thumbnail3 from '@/images/maxresdefault (2).jpg'
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const videos = [
  {
    title: "I Tested 5 AI Website Builders in 202 | The Winner SHOCKED Me!",
    views: "155",
    date: "1 year ago",
    duration: "07.25",
    url: "https://youtu.be/sjrcd7TMnxM?si=V6OKrzFs0ECJzo6H",
    thumbnail: thumbnail1,
  },
  {
    title: "I Tested 5 AI Tools to Build UIs – Here's Who Did It BEST!",
    views: "127",
    date: "1 year ago",
    duration: "05.33",
    url: "https://youtu.be/XtZupfIgbuM?si=x-5ht1jgCq9QxUgs",
    thumbnail: thumbnail2,
  },
  {
    title: "5 Brutal Truths I Learned as a Web Developer (That No One Talks About)",
    views: "143",
    date: "1 year ago",
    duration: "07.29",
    url: "https://youtu.be/qLQq_1FCEU0?si=KTWv_60cdE7KAm8q",
    thumbnail: thumbnail3,
  },
];

export default function YouTube() {
  return (
    <section id="youtube" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mb-12"
      >
        <p className="font-mono text-sm text-muted mb-4">// on youtube</p>
        <h2 className="font-display text-5xl">
          Follow the <span className="italic bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent">journey</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <motion.div
            key={video.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.1, duration: 0.5 },
              },
            }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative border border-border rounded-xl bg-surface overflow-hidden hover:border-purple/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] cursor-pointer"
          >
            {/* Thumbnail with overlay and play button */}
            <Link href={video.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-purple/20 to-blue/10">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-mono text-white/90">
                  {video.duration}
                </div>

                {/* Centered play button that scales on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-purple/80">
                    <Play size={20} className="text-white ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl mb-2 group-hover:text-purple transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 font-mono text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Eye size={12} />
                    {video.views} views
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {video.date}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
  className="mt-12 text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <Link
    href="https://youtube.com/@KaveenX"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-border font-mono text-sm text-purple transition-all duration-300 group hover:border-red-500/50 hover:text-red-500 hover:bg-red-500/5"
  >
    <Youtube size={18} className="transition-transform group-hover:scale-110 group-hover:text-red-500" />
    Subscribe on YouTube
  </Link>
</motion.div> 
    </section>
  );
}