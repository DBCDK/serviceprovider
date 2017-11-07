/**
 * @file
 * Description...
 */

/**
 * Converts a agency ID to ISIL id
 *
 * @param {string} id
 * @return {string}
 */
export function getIsilFromId(id) {
  if (typeof id !== 'string') {
    return id;
  }

  if (id.substring(0, 3).toUpperCase() !== 'DK-') {
    return `DK-${id}`;
  }

  return id;
}

/**
 * Converts a ISIL to agency ID
 * @param {string} isil
 * @return {string}
 */
export function getIdFromIsil(isil) {
  if (typeof isil !== 'string') {
    return isil;
  }

  if (isil.substring(0, 3).toUpperCase() === 'DK-') {
    return isil.substring(3);
  }

  return isil;
}
