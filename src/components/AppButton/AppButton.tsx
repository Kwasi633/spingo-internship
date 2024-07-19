import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import styles from './AppButtonStyles';

// Define an interface for the component's props
interface AppButtonProps {
  onPress: () => void; 
  backgroundColor?: string;
  width?: number | string;
  marginTop?: number;
  marginBottom?: number;
  color?: string;
  fontFamily?: string;
  borderRadius?: number;
  fontSize?: number;
  disabled?: boolean;
  height?: number | string;
  children: ReactNode; 
}

const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  backgroundColor,
  width,
  marginTop,
  marginBottom,
  color,
  fontFamily,
  fontSize,
  disabled,
  height,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          marginTop: marginTop,
          marginBottom: marginBottom,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, {color: color, fontSize: fontSize, fontFamily: fontFamily}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
