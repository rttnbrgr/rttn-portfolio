/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Item = ({ title, to, onClick, thumb }) => {
  return (
    <Link to={to} sx={{ textDecoration: "none" }}>
      {thumb ? (
        <Img
          fluid={thumb.childImageSharp.fluid}
          sx={{ mb: 12 }}
          alt="Meaniful Text"
        />
      ) : (
        <img
          src="https://picsum.photos/800/600"
          sx={{ mb: 12 }}
          alt="Meaniful Text"
        />
      )}
      <Styled.h2>{title}</Styled.h2>
    </Link>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  thumb: PropTypes.any,
}

export default Item
