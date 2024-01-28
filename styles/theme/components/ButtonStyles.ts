import { defineStyleConfig } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/styled-system'

export const ButtonStyles = defineStyleConfig ({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '10', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    xs: {
      px: 2,
      py: 2,
    },
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 4, // <-- these values are tokens from the design system
      py: 5, // <-- these values are tokens from the design system
    },
    lg: {
      fontSize: 'lg',
      w: '100%',
      py: 6

    }
  },
  // Two variants: outline and solid
  variants: {    
    'optionButton': (props: StyleFunctionProps) => ({
      bg: props.colorMode === 'light' ? '#dcdcdc' : '#323232',
      boxShadow: props.colorMode === 'light' ? '0px 0px 5px 4px #0000001a' : '0px 0px 5px 4px #fafafa1a',
      _hover: {
        bg: props.colorMode === 'light' ? '#e6e6e6' : '#3c3c3c',
      },
    }),
    'headerButton': (props: StyleFunctionProps) => ({
      bg: props.colorMode === 'light' ? '#FFFFFF' : '',
      _hover: {
        bg: props.colorMode === 'light' ? '#E6E6E6' : '#333333',
      },
      h: '100%',
      rounded: '0',
    }),
    'selectCourseInfo': (props: StyleFunctionProps) => ({
      
      size: 'xs',
      height: '30px',
      ml: '2',
      fontWeight: 'none',
      _hover: {
        bg: 'red',
      }
    })
  },
  // The default size and variant values
  defaultProps: {
    size: 'md'
  },
})