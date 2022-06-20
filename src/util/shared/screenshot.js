/** @jsx jsx */
// import { GatsbyImage } from 'gatsby-plugin-image';

// import { screenshot } from './styles';

const Screenshot = ({ imageSharp, alt, boxShadow = true }) => (
  <div className="screenshot" sx={{ position: `relative` }}>
    {imageSharp && (
      <GatsbyImage
        image={imageSharp}
        alt={alt ? alt : ``}
        sx={{ ...screenshot, boxShadow: boxShadow ? `raised` : false }}
      />
    )}
  </div>
);

export default Screenshot;
