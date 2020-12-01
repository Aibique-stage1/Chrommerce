import React from 'react';

const Information = (): JSX.Element => {
  return (
    <>
      <div className="Information-content">
        <div className="Information-head">
          <h3>Contact Form:</h3>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Full name" name="name" />
            <input type="text" placeholder="E-mail" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="Apto" name="name" />
            <input type="text" placeholder="Country" name="name" />
            <input type="text" placeholder="State" name="name" />
            <input type="text" placeholder="Postal Code" name="pc" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Phone" name="phone" />
          </form>
          <div className="Information-buttons">
            <button type="button">Go back</button>
            <button type="button">Continue</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>List of items:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item name</h4>
            <span>10$</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
