import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

type Props = Omit<PressableProps, 'children' | 'style'> & {
    /**
     * The type of button shape.
     * - 'round': A circular button.
     * - 'square': A square button.
     */
    type?: ButtonType;
    /**
     * The size of the button.
     * - 'xsmall': Extra small button.
     * - 'small': Small button.
     * - 'medium': Medium button.
     * - 'large': Large button.
     * - 'xlarge': Extra large button.
     */
    size?: ButtonSize;
    /**
     * The visual style of the button.
     * - 'filled': A solid color button.
     * - 'tonal': A button with a tonal color.
     * - 'outline': A button with an outline.
     * - 'elevated': A button with an elevation effect.
     * - 'text': A text-only button without background.
     */
    variant?: ButtonVariant;
};

export function Button({ ...props }: Props) {
    return (
        <Pressable style={styles.container} {...props}>
            <Text style={styles.buttonText}>Click me</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 64,
        paddingVertical: 48,
        backgroundColor: '#007AFF',
        gap: 16,
        borderRadius: 100,
    },
    buttonText: {
        fontSize: 32,
        lineHeight: 40,
    },
});

export type ButtonType = 'round' | 'square';
export type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type ButtonVariant =
    | 'filled'
    | 'tonal'
    | 'outline'
    | 'elevated'
    | 'text';
