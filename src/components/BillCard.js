import React from 'react';

const BillCard = ({ bill, handleClick }) => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bill.id}
        onClick={ () => handleClick(bill) }
      >
        <div className="image">
          <img alt={bill.name} src={bill.photo}/>
        </div>
        <div className="content">
          <div className="header">{bill.name}</div>
          <div className="meta text-wrap">
            <small>{bill.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bill.health}
          </span>
          <span>
            <i className="icon dollar" />
            {bill.salary}
          </span>
          <span>
            <i className="icon star" />
            {bill.rating}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini blue button"
                onClick={ () => handleClick(bill) }
              >
                FIRE
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BillCard;
