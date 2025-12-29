/****
 * “After 5 years in IT, I took a planned break to prepare for UPSC. While it didn’t work out as planned, the experience strengthened my discipline and analytical thinking. I’ve now refreshed my technical skills and I’m fully committed to returning to IT.”
 *
 * */

/***** Debouncing *****/
function greet() {
  console.log("Hi there!");
}

function debouncedGreet(fn, delay) {
  let timerId = null;

  return function (...args) {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.call(context, ...args);
    }, delay);
  };
}

const fn = debouncedGreet(greet, 1000);

/***** Throttle *****/
useEffect(() => {
  const handleScroll = () => {
    let throttle = true;

    return () => {
      if (throttle) {
        setScreenSize(window.innerWidth);
        console.log("aaaa");
        throttle = false;
        setTimeout(() => {
          throttle = true;
        }, 500);
      }
    };
  };
  const throttled = handleScroll();

  window.addEventListener("resize", throttled);

  return () => {
    window.removeEventListener("resize", throttled);
  };
}, []);

/******* Singleton pattern */
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2);
