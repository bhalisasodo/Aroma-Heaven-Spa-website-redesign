import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSceneTimer } from '@/lib/video';

const EASE = [0.22, 1, 0.36, 1] as const;
const OFFERS = ['Quick Fix · R199', 'Sugar And Spice · R300', 'Enticing Massage · R600'];

export function Scene3() {
  const [offerIndex, setOfferIndex] = useState(-1);
  const [support, setSupport] = useState(false);
  const [handoff, setHandoff] = useState(false);
  useSceneTimer([
    { time: 1350, callback: () => setOfferIndex(0) },
    { time: 2200, callback: () => setOfferIndex(1) },
    { time: 3050, callback: () => setOfferIndex(2) },
    { time: 3900, callback: () => setSupport(true) },
    { time: 4350, callback: () => setHandoff(true) },
  ]);

  return (
    <motion.section
      className="film-scene"
      initial={{ opacity: 0, scale: 1.055 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.055, filter: 'blur(8px)' }}
      transition={{ duration: 0.42, ease: EASE }}
      style={{ background: '#171516' }}
    >
      <motion.img className="s3-photo" src={`${import.meta.env.BASE_URL}images/sensual-massage.jpeg`} alt="" initial={{ scale: 1.18 }} animate={{ scale: handoff ? 1.34 : 1.02 }} transition={{ duration: handoff ? 0.58 : 2.4, ease: EASE }} />
      <div className="s3-veil" />
      <motion.div className="s3-axis" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.72, delay: 0.1, ease: EASE }} />
      <motion.div className="s3-ring" initial={{ opacity: 0, scale: 1.8 }} animate={{ opacity: 1, scale: handoff ? 4.8 : 1 }} transition={{ duration: handoff ? 0.65 : 0.9, ease: EASE }} />
      <div className="s3-copy">
        <motion.div className="scene-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.38 }} style={{ color: '#e998c4' }}>
          THE SENSUAL COLLECTION
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.58, ease: EASE }}>
          A little more<br /><em className="pink">indulgent.</em>
        </motion.h2>
        <div className="s3-pricestage">
          <AnimatePresence mode="sync">
            {offerIndex >= 0 && (
              <motion.div key={offerIndex} initial={{ opacity: 0, scale: 0.82, filter: 'blur(7px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, scale: 1.08, filter: 'blur(4px)' }} transition={{ duration: 0.28, ease: EASE }} style={{ position: 'absolute', whiteSpace: 'nowrap' }}>
                {OFFERS[offerIndex]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {support && (
          <motion.p className="s3-support" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.46, ease: EASE }}>
            A more indulgent kind of escape, in a setting that feels entirely your own.
          </motion.p>
        )}
      </div>
      <motion.div className="s3-portal" initial={{ clipPath: 'circle(0% at 43% 44%)', opacity: 0 }} animate={{ clipPath: handoff ? 'circle(145% at 43% 44%)' : 'circle(0% at 43% 44%)', opacity: handoff ? 1 : 0 }} transition={{ duration: 0.62, ease: EASE }} />
      <div className="film-grain" />
    </motion.section>
  );
}
