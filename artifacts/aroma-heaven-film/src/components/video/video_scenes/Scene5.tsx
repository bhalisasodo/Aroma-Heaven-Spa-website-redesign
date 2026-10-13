import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSceneTimer } from '@/lib/video';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Scene5() {
  const [details, setDetails] = useState(false);
  const [loopOut, setLoopOut] = useState(false);
  useSceneTimer([
    { time: 1550, callback: () => setDetails(true) },
    { time: 3800, callback: () => setLoopOut(true) },
  ]);

  return (
    <motion.section
      className="film-scene"
      initial={{ opacity: 0, backgroundColor: '#171516' }}
      animate={{ opacity: 1, backgroundColor: '#f7f3ed' }}
      exit={{ opacity: 0, backgroundColor: '#171516' }}
      transition={{ duration: 0.5, ease: EASE }}
      style={{ background: '#f7f3ed' }}
    >
      <div className="s5-field" />
      <motion.img
        className="s5-logo"
        src={`${import.meta.env.BASE_URL}images/logo.png`}
        alt="Aroma Heaven Spa — A Natural Breeze Of Relaxation"
        initial={{ opacity: 0, y: 17, scale: 0.93 }}
        animate={{ opacity: loopOut ? 0 : 1, y: 0, scale: loopOut ? 1.16 : 1 }}
        transition={{ duration: loopOut ? 0.5 : 0.86, ease: EASE }}
      />
      <motion.div className="s5-rule" initial={{ scaleX: 0 }} animate={{ scaleX: loopOut ? 0.25 : 1 }} transition={{ duration: 0.78, ease: EASE }} />
      <motion.div className="s5-orbit" initial={{ scaleX: 0, rotate: 0 }} animate={{ scaleX: loopOut ? 0.2 : 1, rotate: loopOut ? 30 : 180 }} transition={{ duration: 0.82, ease: EASE }} />
      {details && (
        <motion.div className="s5-copy" initial={{ opacity: 0, y: 19 }} animate={{ opacity: loopOut ? 0 : 1, y: 0 }} transition={{ duration: 0.52, ease: EASE }}>
          <div className="s5-detail"><span>Visit</span><strong>Shop 13, 18 Zenith Drive<br />Umhlanga</strong></div>
          <div className="s5-detail"><span>Every day</span><strong>8 am–9 pm</strong></div>
          <div className="s5-detail"><span>Private enquiry</span><strong>WhatsApp · +27 81 286 3529</strong></div>
        </motion.div>
      )}
      <div className="s5-signoff">A natural breeze of relaxation</div>
      <div className="film-grain" />
    </motion.section>
  );
}
