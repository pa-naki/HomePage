import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing';

const ModalVideo = () => {
  return (
    <div>
      <Link to="/modal-example/" asModal>
        Login
      </Link>
    </div>
  );
};

export default ModalVideo;
