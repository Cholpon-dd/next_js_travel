export const headerVarinats = {
  hidden: {
    y: 25,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.75,
    },
  },
};
export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textContainer = (direction, type, delay, duration) => ({
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
});
export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const galleryPhotos = {
  hidden: {
    opacity: 0,
  },
  show: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.4, duration: 0.7 },
  }),
};

export const listVariants = {
  hidden: {
    opacity: 0,
  },
  show: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.3, duration: 0.7 },
  }),
};

export const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      duration: 0.75,
      ease: 'easeOut',
    },
  }),
};
