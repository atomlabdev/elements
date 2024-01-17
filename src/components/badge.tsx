import React, { createContext, useContext } from "react";
import { View, Text, ViewProps, TextProps } from "react-native";
import tailwind from "twrnc";

interface BadgeProps extends ViewProps {
  variant?: "default" | "success" | "destructive" | "warning" | "info";
  text?: string;
}

const VariantContext = createContext("default");

export const BadgeText = ({ style, children }: TextProps) => {
  const variant = useContext(VariantContext);

  const variants = {
    default: tailwind`text-neutral-950 dark:text-neutral-50`,
    success: tailwind`text-green-950 dark:text-green-50`,
    destructive: tailwind`text-red-950 dark:text-red-50`,
    warning: tailwind`text-orange-950 dark:text-orange-50`,
    info: tailwind`text-blue-950 dark:text-blue-50`,
  };

  return (
    <Text style={[tailwind`text-xs font-bold`, variants[variant], style]}>
      {children}
    </Text>
  );
};

/**
 * React Native badge component built with Tailwind CSS
 */
export const Badge = ({
  variant = "default",
  text,
  style,
  children,
  ...props
}: BadgeProps) => {
  const variants = {
    default: tailwind`bg-neutral-100 dark:bg-neutral-900`,
    success: tailwind`bg-green-100 dark:bg-green-900`,
    destructive: tailwind`bg-red-100 dark:bg-red-900`,
    warning: tailwind`bg-orange-100 dark:bg-orange-900`,
    info: tailwind`bg-blue-100 dark:bg-blue-900`,
  };

  const renderContent = () => {
    if (text) {
      return <BadgeText>{text}</BadgeText>;
    }

    return children;
  };

  return (
    <View
      {...props}
      style={[
        tailwind`h-6 px-3 justify-center rounded-full border border-black/20 dark:border-white/20`,
        variants[variant],
        style,
      ]}
    >
      <VariantContext.Provider value={variant}>
        {renderContent()}
      </VariantContext.Provider>
    </View>
  );
};
