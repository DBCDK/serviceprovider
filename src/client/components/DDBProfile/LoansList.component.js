'use strict';

/**
 * @file
 * DDBProfile component displays the user attributes and allows editing.
 */

import React, {PropTypes} from 'react';
// import Reflux from 'reflux';
import {curry, sortByAll} from 'lodash';


class LoansList extends React.Component {

  constructor() {
    super();
  }

  render() {

    const renewLoan = this.props.onRenew ? curry(this.props.onRenew, 2) : function() {};

    let loans;

    if (this.props.loans) {

      let sortedLoans = sortByAll(this.props.loans, (l) => {
        return new Date(l.dueDate);
      }, 'title');

      loans = sortedLoans.map(function(loan) {

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

        const date = new Date(loan.dueDate);

        let dateClass = 'small-9 medium-10 large-10 column';
        let dueText = 'Afleveres senest ';

        if (loan.overdue) {
          dateClass += ' overdue';
          dueText = 'Skulle have være afleveret ';
        }
        else if (loan.dueSoon) {
          dateClass += ' due-soon';
        }

        return (
          <li className='row' key={loan.loanId}>
            <span className='small-10 medium-11 large-12 column'>{loan.title}</span>
            <span className={dateClass}>{dueText + date.getDate() + '/' + (date.getMonth() + 1) + '-' + date.getFullYear()}</span>
            <span className='small-5 medium-3 large-2 column'>{renewable ? actionField : ''}</span>
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
        <div className='row'>
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
