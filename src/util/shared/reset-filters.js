/** @jsx jsx */
import { MdClear } from 'react-icons/md';

const ResetFilters = ({ onClick }) => (
  <div /*sx={{ pr: 6 }}*/>
    <button
      // sx={{
      //   alignItems: `center`,
      //   bg: `purple.10`,
      //   border: 0,
      //   borderRadius: 1,
      //   color: `gatsby`,
      //   cursor: `pointer`,
      //   display: `flex`,
      //   fontFamily: `heading`,
      //   mt: 7,
      //   pl: 3,
      //   pr: 4,
      //   textAlign: `left`,
      //   '&:hover': {
      //     background: `gatsby`,
      //     color: `white`,
      //   },
      // }}
      onClick={onClick}
    >
      <MdClear /*sx={{ mr: 2 }}*/ /> Reset all Filters
    </button>
  </div>
);

export default ResetFilters;
