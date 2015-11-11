'use strict';

/**
 * @file
 * DDBProfile component displays the user attributes and allows editing.
 */

import React, {PropTypes} from 'react';
// import Reflux from 'reflux';
import {curry} from 'lodash';


class LoansList extends React.Component {

  constructor() {
    super();
  }

  render() {

    const renewLoan = this.props.onRenew ? curry(this.props.onRenew, 2) : function() {};

    let loans;

    if (this.props.loans) {
      loans = this.props.loans.map(function(loan) {

        const renewable = true;

        let actionField = <button className='tiny' onClick={renewLoan(loan.loanId)}>forny</button>;
        if (loan.markedForRenewal) {
          actionField = <button className='tiny' onClick={renewLoan(loan.loanId)}>marked</button>;

          if (loan.isRenewConfirmed && !loan.isRenewSuccesful) {
            actionField = <button className='tiny' onClick={renewLoan(loan.loanId)}>kunne ikke forny lån</button>;
          }
          else if (loan.isRenewConfirmed && loan.isRenewSuccesful) {
            actionField = <button className='tiny' onClick={renewLoan(loan.loanId)}>lån fornyet</button>;
          }
        }

        return (
          <li className='row' key={loan.loanId}>
            <span className='small-12 column'>{loan.title}</span>
            <span className='small-10 column'>{loan.dueDate}</span>
            <span className='small-2 column'>{renewable ? actionField : ''}</span>
          </li>
        );
      });
    }

    const loansList = (<ul>
      {loans}
    </ul>);

    // show this if not results have been returned yet
    const loadingWheel = (<p>Loading...</p>);

    const noLoansMessage = (<p>Du har ingen lån</p>);

    let listContent = loadingWheel;
    if (Array.isArray(this.props.loans) && this.props.loans.length === 0) {
      listContent = noLoansMessage;
    }
    else if (this.props.loans !== null) {
      listContent = loansList;
    }


    const content = (
        <div>
          <h2>Lån</h2>
          {listContent}
        </div>
    );

    return content;
  }
}

LoansList.propTypes = {
  loans: PropTypes.array,
  onRenew: PropTypes.func
};

LoansList.displayName = 'LoansList.component';

export default LoansList;
