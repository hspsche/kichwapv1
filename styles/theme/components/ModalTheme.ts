import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)

const ModalCourseSelect = definePartsStyle({
    dialog: {
        borderRadius: 'sm',
        size: 'xs',
        h: '30px',

    // Let's also provide dark mode alternatives
        _dark: {
            bg: `purple.600`,
            color: 'white',
        },
    },
})

export const modalTheme = defineMultiStyleConfig({
    variants: { ModalCourseSelect },
})