import { styled, theme } from '@/styles/stitches.config';

const Button = styled('button', {
    backgroundColor: '$dark_blue',
    borderRadius: '$global',
    margin: '0 auto',
    marginTop: '$lg',
    padding: '$md $lg',

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.colors.purple,
    },

    variants: {
        buttonColor: {
            blue: {
                backgroundColor: '$dark_blue',
            },
            red: {
                backgroundColor: '$red',
            },
        },
    },
});

export default Button;
