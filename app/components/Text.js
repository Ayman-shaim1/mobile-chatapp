import React from "react";
import { Text as RNText } from "react-native";
import colors from "../config/colors";
import styles from "../config/styles";

export default function Text({ as, children, color, style }) {
  return (
    <RNText style={[{ ...styles.text[as], color: colors[color] }, style]}>
      {children}
    </RNText>
  );
}
