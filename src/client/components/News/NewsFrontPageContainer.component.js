'use strict';

// eslint-disable-line disable-file

import React from 'react';

export default class NewsFrontPageContainerComponent extends React.Component {
  /*eslint-disable */
  render() {
    return (
      <div className="news--container" >
        <div className="news--items-container" >
          <div className="news--items-container--headline" >
            <span>Nyt fra biblioteket</span>
          </div>
          <div className="news--item odd" >
            <span className="news--item--headline" >Strikkecafé</span>
            <span className="news--item--body" >Er du mellem 6 og 12 år, så kom til en hyggelig og sjov strikkeworkshop, lørdag 24. oktober kl. 10.00-13.00 på Tranbjerg Bibliotek.</span>
            <span className="news--item--link" ><a href="#" className="right" >Læs mere</a></span>
          </div>
          <div className="news--item even" >
            <span className="news--item--headline" >Klar til Kalman?</span>
            <span className="news--item--body" >Islandske Jón Kalman Stefánsson er nomineret til Nordisk Råds Litteraturpris, som uddeles sidst i oktober. Onsdag 4. november kan han opleves på Dokk1 til en...</span>
            <span className="news--item--link" ><a className="right" href="#" >Læs mere</a></span>
          </div>
        </div>

        <div className="new--container--all-news-link">
          <span className="new--container--all-new-link" ><a className="right" href="#" >Se alle nyheder...</a></span>
        </div>

        <div className="news--items-container" >
          <div className="news--items-container--headline" >
            <span>Det sker</span>
          </div>
          <div className="news--item odd" >
            <span className="news--item--headline" >Strikkecafé</span>
            <span className="news--item--body" >Er du mellem 6 og 12 år, så kom til en hyggelig og sjov strikkeworkshop, lørdag 24. oktober kl. 10.00-13.00 på Tranbjerg Bibliotek.</span>
            <span className="news--item--link" ><a href="#" className="right" >Læs mere</a></span>
          </div>
        </div>

        <div className="new--container--all-news-link">
          <span className="new--container--all-new-link" ><a className="right" href="#" >Se alle events...</a></span>
        </div>

      </div>
    );
    /*eslint-enable */
  }
}

NewsFrontPageContainerComponent.displayName = 'NewsFrontPageContainerComponent';
