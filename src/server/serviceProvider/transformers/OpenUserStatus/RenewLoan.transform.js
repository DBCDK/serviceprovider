'use strict';

import * as prep from './response-preparation.js';

const RenewLoanTransform = {

  event() {
    return 'renewLoan';
  },

  renewLoan(request) {
    return this.callServiceClient('openuserstatus', 'renewLoan', request);
  },

  requestTransform(event, request, connection) {

    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};

    return this.renewLoan({
      agencyId: 'DK-' + passport.user.agencyid,
      loanId: request.loanId,
      userId: passport.user.loanerid,
      pinCode: passport.user.pincode
    });
  },

  responseTransform(response) {

    let result = prep.checkRenewLoanResponse(response);

    let error = null;

    let loanRenewed = false;
    let dueDate = null;
    let loanId = null;

    if (result.hasOwnProperty('error')) {
      error = result.error;
      loanId = response.loanId;
    }
    else if (response['ous:renewLoanResponse']['ous:renewLoanStatus'][0].hasOwnProperty('ous:renewLoanError')) {
      loanRenewed = false;
      error = response['ous:renewLoanResponse']['ous:renewLoanStatus'][0]['ous:renewLoanError'];
      loanId = response['ous:renewLoanResponse']['ous:renewLoanStatus'][0]['ous:loanId'][0];
    }
    else {
      loanRenewed = (response['ous:renewLoanResponse']['ous:renewLoanStatus'][0].hasOwnProperty('ous:dateDue'));
      dueDate = (response['ous:renewLoanResponse']['ous:renewLoanStatus'][0]['ous:dateDue'][0]);
      loanId = response['ous:renewLoanResponse']['ous:renewLoanStatus'][0]['ous:loanId'][0];
    }

    response = {loanId: loanId, loanRenewed: loanRenewed, dueDate: dueDate, error: error};


    return response;
  }

};

export default RenewLoanTransform;
