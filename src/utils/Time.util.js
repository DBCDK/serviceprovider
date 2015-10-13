'use strict';

/**
 * @file
 * Utility functions focused on formatting time
 */

export function timeSince(fromDateISO, toDateISO) {

  const toTime = (new Date(fromDateISO)).getTime();
  const fromTime = (typeof toDateISO !== 'undefined') ? (new Date(toDateISO)).getTime() : Date.now();

  const msDelta = fromTime - toTime;

  const yearDelta = Math.floor(msDelta / 1000 / 60 / 60 / 24 / 365);
  const monthDelta = Math.floor(msDelta / 1000 / 60 / 60 / 24 / 30);
  const dayDelta = Math.floor(msDelta / 1000 / 60 / 60 / 24);
  const hourDelta = Math.floor(msDelta / 1000 / 60 / 60);
  const minuteDelta = Math.floor(msDelta / 1000 / 60);
  const secondDelta = Math.floor(msDelta / 1000);

  let timeSinceString;
  if (yearDelta >= 1) {
    const pluralPostfix = (yearDelta > 1) ? '' : '';
    timeSinceString = yearDelta + ' år' + pluralPostfix;
  }
  else if (monthDelta >= 1) {
    const pluralPostfix = (monthDelta > 1) ? 'er' : '';
    timeSinceString = monthDelta + ' måned' + pluralPostfix;
  }
  else if (dayDelta >= 1) {
    const pluralPostfix = (dayDelta > 1) ? 'e' : '';
    timeSinceString = dayDelta + ' dag' + pluralPostfix;
  }
  else if (hourDelta >= 1) {
    const pluralPostfix = (hourDelta > 1) ? 'r' : '';
    timeSinceString = hourDelta + ' time' + pluralPostfix;
  }
  else if (minuteDelta >= 1) {
    const pluralPostfix = (minuteDelta > 1) ? 'ter' : '';
    timeSinceString = minuteDelta + ' minut' + pluralPostfix;
  }
  else {
    const pluralPostfix = (secondDelta > 1) ? 'er' : '';
    timeSinceString = secondDelta + ' sekund' + pluralPostfix;
  }

  return timeSinceString;
}
