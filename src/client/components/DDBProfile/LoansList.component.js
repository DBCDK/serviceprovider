'use strict';

/**
 * @file
 * LoansList component a list of loans made by the user.
 */

import React, {PropTypes} from 'react';
// import Reflux from 'reflux';
import {curry, sortByAll} from 'lodash';
import ToggleButton from './ToggleButton.component';
import Loader from '../Loader.component.js';

class LoansList extends React.Component {

  constructor() {
    super();
  }

  render() {

    const renewLoan = this.props.onRenew ? curry(this.props.onRenew, 2) : function() {};
    const toggleDisplay = this.props.onToggleLoanDisplay;

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

    const listClass = (this.props.collapsed === true) ? 'loan-list collapsed' : 'loan-list';

    const loansList = (<ul className={listClass} id='loan-list'>
      {loans}
    </ul>);

    // show this if not results have been returned yet
    const pending = true;
    const loadingWheel = <Loader pending={pending} />;

    let listContent = loadingWheel;
    let header = 'Lån';
    let arrows = '';
    let toggleFunc = toggleDisplay;
    let headerClass = 'user-status-header toggle';

    if (Array.isArray(this.props.loans) && this.props.loans.length === 0) {
      header = 'Du har ingen lån';
      listContent = '';
      toggleFunc = '';
      headerClass = 'user-status-header';
    }
    else if (this.props.loans !== null) {
      arrows = <ToggleButton collapsed={this.props.collapsed} toggleDisplay={toggleDisplay} />;
      header = this.props.loans.length + ' lån';
      listContent = loansList;
    }

    const sliderClass = (this.props.collapsed === true) ? 'slider slider-collapsed' : 'slider slider-not-collapsed';
    const content = (
        <div className='row'>
          <a id='loan-scroll' name='loan-scroll'></a>
          <h2 className={headerClass} onClick={toggleFunc}>{header}</h2>
          {arrows}
          {(this.props.loans === null) ? loadingWheel : <div className={sliderClass}>{listContent}</div>}
        </div>
    );

    return content;
  }
}

LoansList.propTypes = {
  collapsed: PropTypes.bool,
  loans: PropTypes.array,
  onRenew: PropTypes.func,
  onToggleLoanDisplay: PropTypes.func
};

LoansList.displayName = 'LoansList.component';

export default LoansList;
