'use strict';
/**
 * @file
 * Utility class for mixin functions for React components
 */

/**
 * Get context for rendering
 */
export function isClient() {
  return (typeof window !== 'undefined');
}

export default {
  isClient
};
