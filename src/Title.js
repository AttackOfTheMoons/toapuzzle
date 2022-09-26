import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ text }) => (
    <header>{text}</header>
)
Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
