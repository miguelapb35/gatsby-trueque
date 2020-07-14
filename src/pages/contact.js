import React from 'react';
import Layout from '../components/layout'


const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <h2>Contact details</h2>
      <h5>We are Trueque</h5>
      <p>
        find us at trueque.com
      </p>
      <p>
        <button>
          <a  target='_blank' rel="noreferrer" href='http://www.swouitch.com/'>To Swouitch</a>
        </button>
      </p>
    </Layout>
  );
}

export default ContactPage