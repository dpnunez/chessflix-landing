import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { useAnimation } from 'framer-motion';

import { SidekickBody, SidekickOverlay, SidekickWrapper } from './styles';

const SideModal: React.FC<{
  overlayColor?: string;
  width?: number;
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>
}> = ({
  overlayColor = 'rgb(0,0,0,0.2)', width = 200, isActive = false, setIsActive, children,
}) => {
  const constrols = useAnimation();

  useEffect(() => {
    constrols.start(isActive ? 'active' : 'inactive');
  }, [isActive, constrols]);

  const sidekickBodyStyles = {
    active: {
      x: 0,
    },
    inactive: {
      x: -width,
    },
  };

  return (
    <SidekickWrapper>
      <SidekickOverlay
        isActive={isActive}
        overlayColor={overlayColor}
        onClick={() => setIsActive(false)}
      />
      <SidekickBody
        width={width}
        drag="x"
        // dragElastic={0.1}
        dragConstraints={{
          left: -width,
          right: 0,
        }}
        dragMomentum={false}
        onDragEnd={(_event, info) => {
          const isDraggingLeft = info.offset.x < 0;
          const multiplier = isDraggingLeft ? 1 / 4 : 2 / 3;
          const threshold = width * multiplier;

          if (Math.abs(info.point.x) > threshold && isActive) {
            setIsActive(false);
          } else if (Math.abs(info.point.x) < threshold && !isActive) {
            setIsActive(true);
          } else {
            constrols.start(isActive ? 'active' : 'inactive');
          }
        }}
        animate={constrols}
        variants={sidekickBodyStyles}
        transition={{ type: 'just' }}
      >
        {/* <SideBarList data={data} /> */}
        {children}
      </SidekickBody>
    </SidekickWrapper>
  );
};

export { SideModal };
