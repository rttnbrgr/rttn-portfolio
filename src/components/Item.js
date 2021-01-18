/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"

const Item = ({ title }) => {
  return (
    <div>
      <img
        src="https://picsum.photos/800/600"
        sx={{ mb: 12 }}
        alt="Meaniful Text"
      />
      <Styled.h2>{title}</Styled.h2>
    </div>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Item
