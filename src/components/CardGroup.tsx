import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';
import { Image, Link } from '@utrecht/component-library-react';
import style from './CardGroup.module.css';

type Appearance = 'small' | 'medium' | 'large';

interface CardIllustrationProps extends HTMLAttributes<HTMLElement> {
  background?: boolean;
}

export const CardIllustration = ({
  background,
  children,
  className,
  ...props
}: PropsWithChildren<CardIllustrationProps>) => (
  <div
    className={clsx(style['card__illustration'], background && style['card__illustration--background'], className)}
    {...props}
  >
    {children}
  </div>
);

export const CardContent = (props: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <div className={clsx(style['card__content'])} {...props} />
);

interface CardProps {
  appearance?: Appearance;
  href?: string;
  className?: string;
  component?: 'article' | 'section' | 'div';
}

export const Card = ({
  href,
  appearance = 'medium',
  className,
  component = 'div',
  children,
}: PropsWithChildren<CardProps>) => {
  const Wrapper = (props: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
    if (component === 'article') return <article {...props} />;
    if (component === 'section') return <section {...props} />;
    return <div {...props} />;
  };

  return (
    <Wrapper className={clsx(style['cardgroup__card'], style[`cardgroup__card--${appearance}`], className)}>
      {href ? (
        <Link href={href} boxContent className={clsx(style['card__link'])}>
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </Wrapper>
  );
};

interface CardGroupProps {
  appearance?: Appearance;
}

export const CardGroup = ({ appearance = 'medium', children }: PropsWithChildren<CardGroupProps>) => (
  <div className={clsx(style['cardgroup'], style[`cardgroup--${appearance}`])}>{children}</div>
);
