'use strict';

/**
 * @file
 * Common methods for transforming openagency.
 */

import {isArray} from 'lodash';

function determineOpeningHours(openingHours) {
  let hours = '';
  if (isArray(openingHours)) {
    hours = openingHours[0].$value;
  }
  else if (openingHours) {
    hours = openingHours.$value;
  }

  return hours;
}

function determineBranchName(branchName) {
  if (isArray(branchName)) {
    return branchName[0].$value;
  }

  return branchName.$value;
}

export default function getDataFromPickupAgency(pickupAgency) {
  return {
    agencyName: pickupAgency.agencyName,
    agencyId: pickupAgency.agencyId,
    branchId: pickupAgency.branchId,
    branchNameDan: determineBranchName(pickupAgency.branchName),
    branchPhone: pickupAgency.branchPhone,
    branchEmail: pickupAgency.branchEmail,
    postalAddress: pickupAgency.postalAddress,
    postalCode: pickupAgency.postalCode,
    city: pickupAgency.city,
    openingHoursDan: determineOpeningHours(pickupAgency.openingHours),
    branchWebsiteUrl: pickupAgency.branchWebsiteUrl
  };
}
