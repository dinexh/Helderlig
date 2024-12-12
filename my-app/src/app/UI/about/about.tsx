import Image from 'next/image'
import './about.css'
import AboutImage from '../../Assets/about.jpg';
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are a leading timber export company committed to sustainable forestry
            practices and global trade excellence. With decades of experience in the
            industry, we bridge the gap between premium timber resources and
            international markets.
          </p>
          <p>
            Our mission is to deliver high-quality timber products while maintaining
            the highest standards of environmental responsibility and supporting
            local communities through sustainable forest management.
          </p>
        </div>
        
        <div className="about-image">
          <Image
            src={AboutImage}
            alt="Timber Export Flow Diagram"
            width={500}
            height={400}
            priority
            className="flow-diagram"
          />
        </div>
      </div>
    </section>
  )
}

export default About
