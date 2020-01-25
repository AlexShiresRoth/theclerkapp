import React, { useState } from "react";
import PropTypes from "prop-types";
import { services } from "./servicesArray";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import _throttle from "lodash";
import servicesStyles from "./servicesstyles/ServicesMap.module.scss";

const ServicesMap = ({
  scrollServicesDown,
  scrollServicesUp,
  currentIndex,
  intersecting
}) => {
  const [startPos, setPos] = useState(0);

  const onTouchStart = e => {
    if (!e.touches) return;
    setPos(e.touches[0].clientX);
  };
  const onTouchEnd = (e, i) => {
    console.log(startPos, e.changedTouches[0].clientX);
    const diff = Math.abs(startPos - e.changedTouches[0].clientX);
    if (diff > 100 && intersecting)
      return e.changedTouches[0].clientX < startPos
        ? i < services.length - 1
          ? scrollServicesDown(e, i)
          : null
        : i > 0
        ? scrollServicesUp(e, i)
        : null;
  };

  const servicesMap = services.map((service, i) => {
    return (
      <div
        className={servicesStyles.service__container}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
        key={i}
        onTouchStart={e => onTouchStart(e)}
        onTouchEnd={e => onTouchEnd(e, i)}
      >
        {i > 0 && i <= services.length - 1 ? (
          <button
            className={servicesStyles.arrow__left}
            onClick={e => _throttle(scrollServicesUp(e, i), 1000)}
          >
            <MdKeyboardArrowUp />
          </button>
        ) : null}
        <div className={servicesStyles.img__overlay}></div>

        <div
          className={servicesStyles.service__heading}
          style={
            currentIndex === i
              ? { opacity: ".9" }
              : { width: "0px", opacity: "0" }
          }
        >
          <div
            style={
              currentIndex === i
                ? { fontSize: "", opacity: "1", transition: "all 1s ease" }
                : { fontSize: "0px", opacity: "0", transition: "all 1s ease" }
            }
          >
            {service.icon}
          </div>
          <h3
            style={
              currentIndex === i
                ? { fontSize: "", opacity: "1", transition: "all 1s ease" }
                : { fontSize: "0px", opacity: "0", transition: "all 1s ease" }
            }
          >
            {service.service}
          </h3>
        </div>
        <div
          className={
            currentIndex === i
              ? `${servicesStyles.current__slide} ${servicesStyles.service__list}`
              : `${servicesStyles.service__list}`
          }
        >
          {service.list.map(item => (
            <p>{item}</p>
          ))}
        </div>
        {i >= 0 && i < services.length - 1 ? (
          <button
            className={servicesStyles.arrow__right}
            onClick={e => _throttle(scrollServicesDown(e, i), 1000)}
          >
            <MdKeyboardArrowDown />
          </button>
        ) : null}
      </div>
    );
  });
  return <>{servicesMap}</>;
};

ServicesMap.propTypes = {
  scrollServicesUp: PropTypes.func.isRequired,
  scrollServicesDown: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired
};

export default ServicesMap;
