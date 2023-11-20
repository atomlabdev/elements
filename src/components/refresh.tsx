import { Animated, ViewProps, TextStyle } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useRef, useState } from "react";
import tailwind from "twrnc";

interface RefreshProps extends ViewProps {
  loading: boolean;
  speed?: number | "fast" | "medium" | "slow";
  iconStyle?: TextStyle;
}

/**
 * React Native refresh component built with Tailwind CSS
 */
export const Refresh = ({
  loading,
  speed = "medium",
  iconStyle,
  ...props
}: RefreshProps) => {
  const speeds = {
    fast: 400,
    medium: 800,
    slow: 1600,
  };

  const animatedValue = useRef(new Animated.Value(0)).current;

  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 360,
        duration: typeof speed === "number" ? speed : speeds[speed],
        useNativeDriver: true,
      })
    );

    if (loading && !animationActive) {
      animation.start();
      setAnimationActive(true);
    }

    if (!loading && animationActive) {
      animation.stop();
      animatedValue.setValue(0);
      setAnimationActive(false);
    }
  }, [loading, animationActive]);

  return (
    <Animated.View
      {...props}
      style={{
        transform: [
          {
            rotate: animatedValue.interpolate({
              inputRange: [0, 360],
              outputRange: ["0deg", "360deg"],
            }),
          },
        ],
      }}
    >
      <MaterialIcons
        name="refresh"
        style={[tailwind`text-gray-950 dark:text-gray-50 text-3xl`, iconStyle]}
      />
    </Animated.View>
  );
};
