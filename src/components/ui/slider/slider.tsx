import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = ComponentPropsWithoutRef<typeof RadixSlider.Root>
export const Slider = forwardRef<ElementRef<typeof RadixSlider.Root>, SliderProps>(
  ({ className, defaultValue, onValueChange, ...rest }: SliderProps, ref) => {
    const changeValueHandler = (value: number[]) => {
      onValueChange?.(value)
    }

    return (
      <div className={`${s.sliderSwapper} ${className}`}>
        <div className={s.sliderValue}>{defaultValue?.[0]}</div>
        <RadixSlider.Root
          className={s.sliderRoot}
          defaultValue={defaultValue}
          onValueChange={changeValueHandler}
          ref={ref}
          {...rest}
        >
          <RadixSlider.Track className={s.sliderTrack}>
            <RadixSlider.Range className={s.sliderRange} />
          </RadixSlider.Track>
          <RadixSlider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
          <RadixSlider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
        </RadixSlider.Root>
        <div className={s.sliderValue}>{defaultValue?.[1]}</div>
      </div>
    )
  }
)
