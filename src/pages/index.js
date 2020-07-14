import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div>Hallo we are</div>
      <h2>Trueque</h2>
      <p>
        We are a great App
        <Link to='/contact'>Contact me.</Link>
      </p>
    </Layout>
  );
}

export default IndexPage