import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSceneTimer } from '@/lib/video';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Scene1() {
  const [secondLine, setSecondLine] = useState(false);
  const [note, setNote] = useState(false);
  const [handoff, setHandoff] = useState(false);
  useSceneTimer([
    { time: 1320, callback: () => setSecondLine(true) },
    { time: 2550, callback: () => setNote(true) },
    { time: 3750, callback: () => setHandoff(true) },
  ]);

  return (
    <motion.section
      className="film-scene"
      initial={{ opacity: 0, scale: 1.025 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.07, filter: 'blur(8px)' }}
      transition={{ duration: 0.44, ease: EASE }}
      style={{ background: '#171516' }}
    >
      <motion.img
        className="s1-photo"
        src={`${import.meta.env.BASE_URL}images/professional-massage.jpeg`}
        alt=""
        initial={{ scale: 1.12 }}
        animate={{ scale: handoff ? 1.22 : 1.02 }}
        transition={{ duration: handoff ? 0.68 : 2.9, ease: handoff ? EASE : 'linear' }}
      />
      <div className="s1-vignette" />
      <motion.div className="s1-lotus-ring" initial={{ scale: 0.58, opacity: 0 }} animate={{ scale: handoff ? 1.18 : 1, opacity: 1 }} transition={{ duration: 0.8, ease: EASE }} />
      <div className="s1-copy">
        <motion.div className="scene-kicker" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.45 }}>
          UMHLANGA · SOUTH AFRICA
        </motion.div>
        <h1>
          <motion.span initial={{ opacity: 0, y: 34, clipPath: 'inset(0 0 100% 0)' }} animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }} transition={{ delay: 0.48, duration: 0.62, ease: EASE }} style={{ display: 'block' }}>
            A softer pace.
          </motion.span>
          {secondLine && (
            <motion.em initial={{ opacity: 0, y: 22, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.58, ease: EASE }} style={{ display: 'block' }}>
              A private escape.
            </motion.em>
          )}
        </h1>
        {note && (
          <motion.div className="s1-note" initial={{ opacity: 0, x: -13 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, ease: EASE }}>
            <span style={{ width: '2.1vmin', height: 1, background: '#e01c91' }} />
            Fully licensed. Fully discreet.
          </motion.div>
        )}
      </div>
      <div className="s1-index">A NATURAL BREEZE OF RELAXATION</div>
      <motion.div className="s1-edge" initial={{ scaleY: 0 }} animate={{ scaleY: handoff ? 1 : 0 }} transition={{ duration: 0.52, ease: EASE }} />
      <div className="film-grain" />
    </motion.section>
  );
}
