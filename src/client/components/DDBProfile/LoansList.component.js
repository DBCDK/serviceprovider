'use strict';

/**
 * @file
 * DDBProfile component displays the user attributes and allows editing.
 */

import React, {PropTypes} from 'react';
// import Reflux from 'reflux';


class LoansList extends React.Component {

  constructor() {
    super();
  }

  render() {

    let loans;

    if (this.props.loans) {
      loans = this.props.loans.map(function(loan) {
        return (
          <li className='row' key={loan.loanId}>
            <span className='small-12 column'>{loan.title}</span>
            <span className='small-12 column'>{loan.dueDate}</span>
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
  loans: PropTypes.array
};

LoansList.displayName = 'LoansList.component';

export default LoansList;
