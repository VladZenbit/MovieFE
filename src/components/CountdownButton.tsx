import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

import { Button, ButtonProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DEFAULT_BUTTON_COUNTDOWN } from '@src/constants';

export interface CountdownButtonRef {
  restart: () => void;
}

export interface CountdownButtonProps extends Omit<ButtonProps, 'ref'> {
  timeInSec?: number;
}

export const CountdownButton = React.forwardRef<
  CountdownButtonRef,
  CountdownButtonProps
>((props, ref) => {
  const {
    children,
    timeInSec = DEFAULT_BUTTON_COUNTDOWN,
    disabled,
    onClick,
    ...otherProps
  } = props;
  const { t } = useTranslation();
  const [seconds, setSeconds] = useState(timeInSec);
  const [isCountingDown, setIsCountingDown] = useState(true);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (onClick) {
      onClick(event);
    }
  };

  const getCountdownLabel = () => {
    if (isCountingDown) {
      return `${seconds} ${t('common.sec')} - `;
    }
    return '';
  };

  const label = useMemo(getCountdownLabel, [isCountingDown, seconds, t]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isCountingDown && seconds > 0) {
      timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    } else if (seconds === 0) {
      setIsCountingDown(false);
    }
    return () => clearTimeout(timer);
  }, [seconds, isCountingDown, timeInSec]);

  useImperativeHandle(ref, () => ({
    restart: () => {
      setSeconds(timeInSec);
      setIsCountingDown(true);
    },
  }));

  return (
    <Button
      {...otherProps}
      disabled={disabled || isCountingDown}
      onClick={handleClick}
    >
      {label}
      {children}
    </Button>
  );
});
