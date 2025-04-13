import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const Paymentsetting = () => {
  // State for PayPal settings
  const [paypalSettings, setPaypalSettings] = useState({
    isEnabled: false,
    mode: 'sandbox',
    braintreeTokenizationKey: '',
    braintreeMerchantId: '',
    braintreePublicKey: '',
    braintreePrivateKey: '',
    paypalAppId: '',
    paypalSecretKey: '',
  });

  // State for Stripe settings
  const [stripeSettings, setStripeSettings] = useState({
    isEnabled: false,
    mode: 'sandbox',
    gatewayName: 'Stripe',
    apiKey: '',
    restKey: '',
  });

  // Initialize with environment variables when component mounts
  useEffect(() => {
    setStripeSettings((prev) => ({
      ...prev,
      apiKey: process.env.REACT_APP_STRIPE_API_KEY || '',
      restKey: process.env.REACT_APP_STRIPE_REST_KEY || '',
      gatewayName: process.env.REACT_APP_STRIPE_GATEWAY_NAME || 'Stripe',
    }));

    setPaypalSettings((prev) => ({
      ...prev,
      braintreeTokenizationKey: process.env.REACT_APP_BRAINTREE_TOKENIZATION_KEY || '',
      braintreeMerchantId: process.env.REACT_APP_BRAINTREE_MERCHANT_ID || '',
      braintreePublicKey: process.env.REACT_APP_BRAINTREE_PUBLIC_KEY || '',
      braintreePrivateKey: process.env.REACT_APP_BRAINTREE_PRIVATE_KEY || '',
      paypalAppId: process.env.REACT_APP_PAYPAL_APP_ID || '',
      paypalSecretKey: process.env.REACT_APP_PAYPAL_SECRET_KEY || '',
    }));
  }, []);

  // Handle form changes
  const handleStripeChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStripeSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePaypalChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaypalSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submissions
  const handleStripeSubmit = (e) => {
    e.preventDefault();
    console.log('Stripe settings saved:', stripeSettings);
    // Here you would typically send the data to your backend
  };

  const handlePaypalSubmit = (e) => {
    e.preventDefault();
    console.log('PayPal settings saved:', paypalSettings);
    // Here you would typically send the data to your backend
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="index.html">Dashboard </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Settings</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="settings-menu-links">
            <ul className="nav nav-tabs menu-tabs">
              <li className="nav-item ">
                <Link className="nav-link" to="/settings">
                  General Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/localization">
                  Localization
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/paymentsetting">
                  Payment Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingsemail">
                  Email Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingssocialmedia">
                  Social Media Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingssociallink">
                  Social Links
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingsseo">
                  SEO Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingsthem">
                  Theme Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingschangepassword">
                  Change Password
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settingsothers">
                  Others
                </Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title">Paypal</h5>
                  <div className="status-toggle d-flex justify-content-between align-items-center">
                    <input type="checkbox" id="status_1" className="check" />
                    <label htmlFor="status_1" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <form onSubmit={handlePaypalSubmit}>
                    <div className="settings-form">
                      <div className="form-group">
                        <p className="pay-cont">Paypal Option</p>
                        <label className="custom_radio me-4">
                          <input
                            type="radio"
                            name="mode"
                            value="sandbox"
                            checked={paypalSettings.mode === 'sandbox'}
                            onChange={handlePaypalChange}
                          />
                          <span className="checkmark" /> Sandbox
                        </label>
                        <label className="custom_radio">
                          <input
                            type="radio"
                            name="mode"
                            value="live"
                            checked={paypalSettings.mode === 'live'}
                            onChange={handlePaypalChange}
                          />
                          <span className="checkmark" /> Live
                        </label>
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Braintree Tokenization key <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Braintree Tokenization key"
                          name="braintreeTokenizationKey"
                          value={paypalSettings.braintreeTokenizationKey}
                          onChange={handlePaypalChange}
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Braintree Merchant ID <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Braintree Merchant ID"
                          name="braintreeMerchantId"
                          value={paypalSettings.braintreeMerchantId}
                          onChange={handlePaypalChange}
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Braintree Public key <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Braintree Public key"
                          name="braintreePublicKey"
                          value={paypalSettings.braintreePublicKey}
                          onChange={handlePaypalChange}
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Braintree Private key <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Braintree Private key"
                          name="braintreePrivateKey"
                          value={paypalSettings.braintreePrivateKey}
                          onChange={handlePaypalChange}
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Paypal APP ID <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Paypal APP ID"
                          name="paypalAppId"
                          value={paypalSettings.paypalAppId}
                          onChange={handlePaypalChange}
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Paypal Secret Key <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Paypal Secret Key"
                          name="paypalSecretKey"
                          value={paypalSettings.paypalSecretKey}
                          onChange={handlePaypalChange}
                        />
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button
                            type="submit"
                            className="border-0 btn btn-primary btn-gradient-primary btn-rounded"
                          >
                            Save
                          </button>
                          &nbsp;&nbsp;
                          <button type="reset" className="btn btn-secondary btn-rounded">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title">Stripe</h5>
                  <div className="status-toggle d-flex justify-content-between align-items-center">
                    <input
                      type="checkbox"
                      id="status_2"
                      className="check"
                      checked={stripeSettings.isEnabled}
                      onChange={(e) => handleStripeChange({ target: { name: 'isEnabled', type: 'checkbox', checked: e.target.checked } })}
                    />
                    <label htmlFor="status_2" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <form onSubmit={handleStripeSubmit}>
                    <div className="settings-form">
                      <div className="form-group">
                        <p className="pay-cont">Stripe Option</p>
                        <label className="custom_radio me-4">
                          <input
                            type="radio"
                            name="mode"
                            value="sandbox"
                            checked={stripeSettings.mode === 'sandbox'}
                            onChange={handleStripeChange}
                          />
                          <span className="checkmark" /> Sandbox
                        </label>
                        <label className="custom_radio">
                          <input
                            type="radio"
                            name="mode"
                            value="live"
                            checked={stripeSettings.mode === 'live'}
                            onChange={handleStripeChange}
                          />
                          <span className="checkmark" /> Live
                        </label>
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Gateway Name <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Stripe"
                          name="gatewayName"
                          value={stripeSettings.gatewayName}
                          onChange={handleStripeChange}
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          API Key <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Stripe API Key"
                          name="apiKey"
                          value={stripeSettings.apiKey}
                          onChange={handleStripeChange}
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Rest Key <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Stripe Rest Key"
                          name="restKey"
                          value={stripeSettings.restKey}
                          onChange={handleStripeChange}
                        />
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button
                            type="submit"
                            className="border-0 btn btn-primary btn-gradient-primary btn-rounded"
                          >
                            Save
                          </button>
                          &nbsp;&nbsp;
                          <button type="reset" className="btn btn-secondary btn-rounded">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        <div className="notification-box">
          <div className="msg-sidebar notifications msg-noti">
            <div className="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div className="drop-scroll msg-list-scroll" id="msg_list">
              <ul className="list-box">
                <li>
                  <Link to="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Richard Miles </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
          <li>
            <Link to="chat.html">
              <div className="list-item new-message">
                <div className="list-left">
                  <span className="avatar">J</span>
                </div>
                <div className="list-body">
                  <span className="message-author">John Doe</span>
                  <span className="message-time">1 Aug</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">T</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Tarah Shropshire </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">M</span>
                </div>
                <div className="list-body">
                  <span className="message-author">Mike Litorus</span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">C</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Catherine Manseau </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">D</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Domenic Houston </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">B</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Buster Wigton </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">R</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Rolland Webber </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">C</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Claire Mapes </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">M</span>
                </div>
                <div className="list-body">
                  <span className="message-author">Melita Faucher</span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">J</span>
                </div>
                <div className="list-body">
                  <span className="message-author">Jeffery Lalor</span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">L</span>
                </div>
                <div className="list-body">
                  <span className="message-author">Loren Gatlin</span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">T</span>
                </div>
                <div className="list-body">
                  <span className="message-author">Tarah Shropshire</span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </div>
              </div>
            </Link>
          </li>
          </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link to="chat.html">See all messages</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentsetting;
