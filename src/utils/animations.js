import anime from 'animejs';

const AnimationPresets = {
  fadeIn: (targets, duration = 1000) => {
    return anime({
      targets,
      opacity: [0, 1],
      duration,
      easing: 'easeInOutQuad'
    });
  },
  slideIn: (targets, direction = 'left', duration = 1000) => {
    const translateX = direction === 'left' ? ['-100%', '0%'] : ['100%', '0%'];
    return anime({
      targets,
      translateX,
      opacity: [0, 1],
      duration,
      easing: 'easeInOutQuad'
    });
  },
  scaleIn: (targets, duration = 1000) => {
    return anime({
      targets,
      scale: [0.8, 1],
      opacity: [0, 1],
      duration,
      easing: 'easeInOutQuad'
    });
  }
};

export const animateWithWAAPI = (element, keyframes, options) => {
  return element.animate(keyframes, {
    ...options,
    fill: 'forwards'
  });
};

export default AnimationPresets;