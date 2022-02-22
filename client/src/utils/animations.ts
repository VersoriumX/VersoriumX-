const rightAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 1},
  }
}

const leftAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
    scale: 0.9
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {duration: 1},
  }
}

const scaleAnimation = {
  initial: {
    scale: 1
  },
  hover: {
    scale: 1.1
  },
  tap: {
    scale: 0.95
  }
}

const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {duration: 0.3},
  }
}

export {
  rightAnimation, leftAnimation, scaleAnimation, fadeIn
}