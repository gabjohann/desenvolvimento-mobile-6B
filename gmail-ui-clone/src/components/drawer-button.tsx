import { MaterialIcons } from '@expo/vector-icons'
import {
    Pressable,
    type PressableProps,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { colors } from '@/styles/colors'

export type IconNameType = keyof typeof MaterialIcons.glyphMap

interface TabBarButtonProps extends PressableProps {
    title?: string
    isFocused?: boolean
    isDivider?: boolean
    iconName: IconNameType
    notifications?: number
}

export function DrawerButton({
    title = '',
    iconName,
    isDivider = false,
    isFocused = true,
    notifications,
    ...rest
}: TabBarButtonProps) {
    return (
        <Pressable
            style={[styles.pressable, isDivider && styles.divider]}
            {...rest}
        >
            <View
                style={[
                    styles.container,
                    isFocused && styles.focusedContainer,
                    isDivider && styles.containerDivider,
                ]}
            >
                <MaterialIcons
                    name={iconName}
                    size={20}
                    color={isFocused ? colors.orange[300] : colors.gray[400]}
                />

                <Text style={[styles.title, isFocused && styles.focusedText]}>
                    {title}
                </Text>

                {notifications ? (
                    <Text style={[styles.notifications, isFocused && styles.focusedText]}>
                        {notifications}
                    </Text>
                ) : null}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        paddingVertical: 8,
        width: '100%',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[600],
        marginLeft: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        width: '100%',
        height: 56,
        paddingHorizontal: 24,
        marginLeft: -8,
    },
    containerDivider: {
        marginLeft: -56,
    },
    focusedContainer: {
        backgroundColor: colors.orange[800],
        borderTopRightRadius: 9999,
        borderBottomRightRadius: 9999,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 16,
        flex: 1,
        fontFamily: 'System',
    },
    notifications: {
        color: colors.gray[400],
        fontSize: 14,
    },
    focusedText: {
        color: colors.orange[300],
    },
})
