import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSceneTimer } from '@/lib/video';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Scene2() {
  const [offerOne, setOfferOne] = useState(false);
  const [offerTwo, setOfferTwo] = useState(false);
  const [caption, setCaption] = useState(false);
  const [handoff, setHandoff] = useState(false);
  useSceneTimer([
    { time: 1380, callback: () => setOfferOne(true) },
    { time: 2550, callback: () => setOfferTwo(true) },
    { time: 3500, callback: () => setCaption(true) },
    { time: 4220, callback: () => setHandoff(true) },
  ]);

  return (
    <motion.section
      className="film-scene"
      initial={{ opacity: 0, clipPath: 'inset(0 52% 0 48%)' }}
      animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0%)' }}
      exit={{ opacity: 0, scale: 1.045, filter: 'blur(7px)' }}
      transition={{ duration: 0.52, ease: EASE }}
      style={{ background: '#f7f3ed' }}
    >
      <div className="s2-field" />
      <motion.img
        className="s2-photo"
        src={`${import.meta.env.BASE_URL}images/professional-massage.jpeg`}
        alt=""
        initial={{ scale: 1.28, x: '4%' }}
        animate={{ scale: handoff ? 1.36 : 1, x: handoff ? '-2%' : 0 }}
        transition={{ duration: handoff ? 0.56 : 1.65, ease: EASE }}
      />
      <div className="s2-shade" />
      <motion.div className="s2-seam" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.54, ease: EASE }} />
      <div className="s2-copy">
        <motion.div className="scene-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.38 }} style={{ color: '#8b5672' }}>
          THE PROFESSIONAL COLLECTION
        </motion.div>
        <motion.h2 className="s2-title" initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }} animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }} transition={{ delay: 0.47, duration: 0.62, ease: EASE }}>
          Considered care.<br /><em className="pink">Time, set aside.</em>
        </motion.h2>
        <div className="s2-offers">
          {offerOne && (
            <motion.div className="s2-offer" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.36, ease: EASE }}>
              <span>Aromatherapy Professional Massage</span><strong>R400</strong>
              <motion.i className="s2-underline" initial={{ scaleX: 0 }} animate={{ scaleX: handoff ? 8 : 1 }} transition={{ duration: handoff ? 0.52 : 0.48, ease: EASE }} style={{ width: '100%' }} />
            </motion.div>
          )}
          {offerTwo && (
            <motion.div className="s2-offer" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36, ease: EASE }}>
              <span>Couples Professional</span><strong>R1200</strong>
            </motion.div>
          )}
        </div>
        {caption && (
          <motion.p className="s2-caption" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.46, ease: EASE }}>
            A considered pause to unwind, reset and settle into stillness.
          </motion.p>
        )}
      </div>
      <div className="s2-small">AN INVITATION TO RESET · UMHLANGA</div>
      <motion.div className="s2-end-ring" animate={{ scale: handoff ? 35 : 1, opacity: handoff ? 0 : 1 }} transition={{ duration: 0.7, ease: EASE }} />
      <div className="film-grain" />
    </motion.section>
  );
}
