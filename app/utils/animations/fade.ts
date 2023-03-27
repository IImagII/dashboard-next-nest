import { MotionProps, Variants } from 'framer-motion'

//framer-motion-библиотека для созданииия анимации
export const FADE_IN: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1.4 }
}

//конфигурация анимации
//Variants - после этого можно описывать другие поля
export const menuAnimation: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}
