import React from 'react';

const nodeIcon = (icon) => {
  if (React.isValidElement(icon)) {
    return icon;
  }
  if (typeof icon === 'object' && icon !== null) {
    return <span style={icon} />;
  }
  if (Object.prototype.toString.call(icon) === '[object String]') {
    return <span className={icon} />;
  }
};

class RatingSymbol extends React.PureComponent {
  render() {
    const {
      index,
      inactiveIcon,
      activeIcon,
      percent,
      direction,
      readonly,
      onClick,
      onMouseMove
    } = this.props;
    const backgroundNode = nodeIcon(inactiveIcon);
    const showbgIcon = percent < 100;
    const bgIconStyle = showbgIcon
      ? {}
      : {
          visibility: 'hidden'
        };
    const iconNode = nodeIcon(activeIcon);
    const iconStyle = {
      display: 'inline-block',
      position: 'absolute',
      overflow: 'hidden',
      top: 0,
      [direction === 'rtl' ? 'right' : 'left']: 0,
      width: `${percent}%`
    };
    const style = {
      cursor: !readonly ? 'pointer' : 'inherit',
      display: 'inline-block',
      position: 'relative'
    };

    function handleMouseMove(e) {
      if (onMouseMove) {
        onMouseMove(index, e);
      }
    }

    function handleMouseClick(e) {
      if (onClick) {

        e.preventDefault();
        onClick(index, e);
      }
    }

    return (
      <span
        style={style}
        onClick={handleMouseClick}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseClick}
      >
        <span style={bgIconStyle}>
          {backgroundNode}
        </span>
        <span style={iconStyle}>
          {iconNode}
        </span>
      </span>
    );
  }
}

export default RatingSymbol;


