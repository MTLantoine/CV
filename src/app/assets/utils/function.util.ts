export function activate() {
  return true;
}

export function waitXms(thisClass, x: number, callbackIf) {
  const callIf = callbackIf.bind(thisClass);
  setTimeout(() => callIf(), 100 + x * 500);
}

export function ifVisible(thisClass, element, pourcent: number, callbackIf) {
  var newPourcent = 20;
  console.log(this.manageWidth(pourcent));
  new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === true) {
        const callIf = callbackIf.bind(thisClass);
        callIf();
      }
    },
    { threshold: [newPourcent / 100] }
  ).observe(element);
}

export function manageWidth(n: number) {
  function manage(x) {
    if (x.matches) {
      return n;
    } else {
      return 20;
    }
  }

  var x = window.matchMedia("(min-width: 600px)");
  manage(x);
  x.addListener(manage);

  return manage(x);
}

export function ifElseVisible(
  thisClass,
  element,
  pourcent: number,
  callbackIf,
  callbackIfElse
) {
  new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === true) {
        const callIf = callbackIf.bind(thisClass);
        callIf();
      } else {
        const callIfElse = callbackIfElse.bind(thisClass);
        callIfElse();
      }
    },
    { threshold: [pourcent / 100] }
  ).observe(element);
}

export function isVisible(thisClass, value: any, expected: any, callbackIf) {
  if (value === expected) {
    const callIf = callbackIf.bind(thisClass);
    callIf();
  }
}

export function incNumber(
  thisClass,
  min: number,
  max: number,
  transition: number,
  callbackIf
) {
  const callIf = callbackIf.bind(thisClass);
  for (let i = min; i <= max; i++) {
    setTimeout(() => {
      callIf(i);
    }, i * (transition / max));
  }
}

export function sortDates(elements) {
  var elementsCouple = [];
  var result = [];
  elements.forEach((element) => {
    var length = element.date.year.length;
    var item = [];
    item.push(parseInt(element.date.year.substring(length - 4)));
    item.push(element);
    elementsCouple.push(item);
  });
  elementsCouple.sort().reverse();
  elementsCouple.forEach((couple) => {
    result.push(couple[1]);
  });
  return result;
}

export function getProjectByPath(path: string, projects) {
  const project = projects.project.project.find((element) => {
    return element.path === path;
  });
  return project === undefined ? null : project;
}
