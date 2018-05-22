import React, { Component } from "react";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }

  render() {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div className="results">390 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="price-asc">Highest Price</option>
              <option value="price-dsc">Lowest Price</option>
            </select>
            <div className="view">
              <i className="ico fas fa-th-list" />
              <i className=" ico fas fa-th" />
            </div>
          </div>
        </section>
        <section className="listings-results">
          <div className="listing">
            <div className="listing-img">
              <span className="Address">Address </span>
              <div className="details">
                <div className="user-img">img</div>
                <div className="user-details">
                  <span className="user-name">Jane Doe</span>
                  <span className="post-date">05/20/18</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="ico far fa-square" />
                    <span>1000 ft&sup2;</span>
                  </div>
                </div>
                <div className="bedrooms">
                  <i className="ico fas fa-bed" />
                  <span>3 bedrooms</span>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span>$1000 / month </span>
              <span>
                <i className="far fa-compass" />Los Angeles, CA
              </span>
            </div>
          </div>
        </section>
        <section className="pagination">
          <ul className="pagination-nums">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}
