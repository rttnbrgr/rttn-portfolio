/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Item = ({ title, to, onClick }) => {
  return (
    <Link to={to}>
      <img
        src="https://picsum.photos/800/600"
        sx={{ mb: 12 }}
        alt="Meaniful Text"
      />
      <Styled.h2>{title}</Styled.h2>
    </Link>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Item
