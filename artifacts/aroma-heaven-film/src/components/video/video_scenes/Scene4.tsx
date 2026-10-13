import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSceneTimer } from '@/lib/video';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Scene4() {
  const [offer, setOffer] = useState(false);
  const [description, setDescription] = useState(false);
  const [comfort, setComfort] = useState(false);
  const [handoff, setHandoff] = useState(false);
  useSceneTimer([
    { time: 1550, callback: () => setOffer(true) },
    { time: 2300, callback: () => setDescription(true) },
    { time: 4100, callback: () => setComfort(true) },
    { time: 4650, callback: () => setHandoff(true) },
  ]);

  return (
    <motion.section
      className="film-scene"
      initial={{ opacity: 0, clipPath: 'inset(0 0 0 48%)' }}
      animate={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
      transition={{ duration: 0.52, ease: EASE }}
      style={{ background: '#171516' }}
    >
      <div className="s4-field" />
      <motion.img className="s4-photo" src={`${import.meta.env.BASE_URL}images/fantasies.jpeg`} alt="" initial={{ scale: 1.22, x: '2%' }} animate={{ scale: handoff ? 1.35 : 1, x: handoff ? '3%' : 0 }} transition={{ duration: handoff ? 0.62 : 2.3, ease: EASE }} />
      <div className="s4-shade" />
      <div className="s4-copy">
        <motion.div className="scene-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.38 }} style={{ color: '#e998c4' }}>
          A PRIVATE INVITATION
        </motion.div>
        <motion.h2 initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }} animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }} transition={{ delay: 0.46, duration: 0.65, ease: EASE }}>
          Explore your<br /><em className="pink">inner fantasies.</em>
        </motion.h2>
        {offer && (
          <motion.div className="s4-offer" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.42, ease: EASE }}>
            The Royal 4 Hands Fantasy
            <strong>R1200</strong>
          </motion.div>
        )}
        {description && (
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }}>
            A discreet invitation to explore something a little different.
          </motion.p>
        )}
      </div>
      <motion.svg className="s4-trace" viewBox="0 0 180 260" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: handoff ? 0 : 1 }} transition={{ duration: 0.3 }}>
        <motion.path d="M12 248 C56 220 31 172 75 144 S117 104 105 70 S129 33 170 10" initial={{ pathLength: 0 }} animate={{ pathLength: handoff ? 1 : 0.72 }} transition={{ duration: 0.85, ease: EASE }} />
      </motion.svg>
      {comfort && <motion.div className="s4-tag" initial={{ opacity: 0, letterSpacing: '.05em' }} animate={{ opacity: 1, letterSpacing: '.23em' }} transition={{ duration: 0.44 }}>YOUR COMFORT, ALWAYS</motion.div>}
      <motion.div className="s4-wipe" initial={{ scaleX: 0 }} animate={{ scaleX: handoff ? 1 : 0 }} transition={{ duration: 0.72, ease: EASE }} />
      <div className="film-grain" />
    </motion.section>
  );
}
