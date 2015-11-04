'use strict';

/**
 * @file
 * DDBProfile component displays the user attributes and allows editing.
 */

import React, {PropTypes} from 'react';
// import Reflux from 'reflux';


class LoansList extends React.Component {ś

  constructor() {
    super();
  }

  render() {

    let loans = (<p>Du har ingen lån</p>);
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

    const loadingWheel = (<p>Loading...</p>);

    const content = (
        <div>
          <h2>Lån</h2>
          {(this.props.loans === null) ? loadingWheel : loansList}
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
