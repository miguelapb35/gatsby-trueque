import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Title</h1>
      <h1>Bio</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem suscipit ipsam earum, beatae provident sequi nesciunt! Fuga unde molestias exercitationem eos consectetur ipsum similique perspiciatis illum, accusantium fugit? Est, dolores.
        A magni quod voluptas nesciunt hic ea placeat dicta ipsum aliquid! Possimus nemo voluptatibus omnis consequuntur accusantium provident unde cum quasi quidem quam hic doloremque, ducimus praesentium itaque tenetur repellendus?
        Accusantium illum hic blanditiis aperiam possimus autem ab vitae dolor fugiat sit, nostrum dolore rerum exercitationem! Vitae velit molestiae illum officiis ex nihil non delectus, iste, a quo, perferendis maxime.
      </p>
      <p>
        <button>
          <Link to='/contact'>To contact</Link>
        </button>
      </p>
    </Layout>
  );
}

export default AboutPage