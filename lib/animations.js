export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
      when: "beforeChildren",
      duration: 0.3
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
      duration: 0.2
    }
  }
};

export const item = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.92,
    filter: "blur(4px)"
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.9,
    filter: "blur(4px)",
    transition: {
      duration: 0.4,
      ease: [0.55, 0.085, 0.68, 0.53] // easeInQuad
    }
  }
};

export const card = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.85,
    rotateX: 10,
    filter: "blur(8px)"
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1], // easeOutBack 
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const cardContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, 
      delayChildren: 0.2,
      duration: 0.4
    },
  },
};

export const hero = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.9
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1
    },
  }
};

export const fadeIn = {
  hidden: { 
    opacity: 0,
    filter: "blur(6px)"
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};