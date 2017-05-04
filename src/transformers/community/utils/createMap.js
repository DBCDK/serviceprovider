/**
 * Create a map of values between Elvis and Serviceprovider. Using the schema definition as default, and override
 * specified values.
 *
 * @param schema {Object} Schema definition.
 * @param remap {Object} Values to override.
 * @returns {Object} Map.
 */
export function createMap(schema, remap) {
  const schemaMap = {};
  // Map property keys to values as default.
  Object.keys(schema.properties).forEach(key => {schemaMap[key] = key;});

  // Override with remap values.
  return Object.assign(schemaMap, remap);
}
