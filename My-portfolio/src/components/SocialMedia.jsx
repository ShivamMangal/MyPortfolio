import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/shivammangal007">
        <div>
          <BsTwitter />
        </div>
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/shivamcodes.live/">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
    <div>
      <a href="https://github.com/shivammangal">
        <div>
          <FaGithub />
        </div>
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/shivam-mangal-b6629021b/">
        <div>
          <FaLinkedinIn />
        </div>
      </a>
    </div>
  </div>
);


export default SocialMedia;