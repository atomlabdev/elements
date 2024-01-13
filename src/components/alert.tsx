import { ReactNode, createContext, useContext, useEffect } from "react";
import { View, Text, ViewProps, ViewStyle, TextProps } from "react-native";
import tailwind, { useAppColorScheme } from "twrnc";
import { Icon, IconProps } from "@/components/icon";

interface AlertProps extends ViewProps {
  variant?: "default" | "success" | "warning" | "error";
  style?: ViewStyle;
  title?: string;
  description?: string;
  icon?: IconProps;
  children?: ReactNode;
}

const VariantContext = createContext("default");

export const AlertTitle = ({ style, children }: TextProps) => {
  const variant = useContext(VariantContext);

  const variants = {
    default: tailwind`text-neutral-950 dark:text-neutral-50`,
    success: tailwind`text-green-950 dark:text-green-50`,
    warning: tailwind`text-orange-950 dark:text-orange-50`,
    error: tailwind`text-red-950 dark:text-red-50`,
  };

  return (
    <Text style={[tailwind`text-lg font-semibold`, variants[variant], style]}>
      {children}
    </Text>
  );
};

export const AlertDescription = ({ style, children }: TextProps) => {
  const variant = useContext(VariantContext);

  const variants = {
    default: tailwind`text-neutral-950 dark:text-neutral-50`,
    success: tailwind`text-emerald-900`,
    warning: tailwind`text-amber-900`,
    error: tailwind`text-red-950 dark:text-red-50`,
  };

  return (
    <Text style={[tailwind`text-base`, variants[variant], style]}>
      {children}
    </Text>
  );
};

export const AlertIcon = ({ name, type, color, size }: IconProps) => {
  const [colorScheme] = useAppColorScheme(tailwind);
  const variant = useContext(VariantContext);

  useEffect(() => {
    console.log("!variant", variant);
  }, [variant]);

  const variants = {
    default: {
      light: tailwind.color("text-neutral-950"),
      dark: tailwind.color("text-neutral-50"),
    },
    error: {
      light: tailwind.color("text-red-950"),
      dark: tailwind.color("text-red-50"),
    },
    success: {
      light: tailwind.color("text-green-950"),
      dark: tailwind.color("text-green-50"),
    },
    warning: {
      light: tailwind.color("text-orange-950"),
      dark: tailwind.color("text-orange-50"),
    },
  };

  const defaultColor =
    colorScheme === "dark" ? variants[variant].dark : variants[variant].light;

  useEffect(() => {
    console.log("default color", defaultColor);
  }, [defaultColor]);

  return (
    <Icon
      name={name}
      type={type}
      size={size || 24}
      color={color || defaultColor}
    />
  );
};

/**
 * React Native alert component built with Tailwind CSS
 */
export const Alert = ({
  variant = "default",
  title,
  description,
  icon,
  style,
  children,
  ...props
}: AlertProps) => {
  const variants = {
    default: tailwind`bg-neutral-100 dark:bg-neutral-950`,
    success: tailwind`bg-green-50 dark:bg-green-950`,
    warning: tailwind`bg-orange-50 dark:bg-orange-950`,
    error: tailwind`bg-red-50 dark:bg-red-950`,
  };

  const renderContent = () => {
    if ((title || description) && icon) {
      return (
        <View style={tailwind`flex flex-row gap-2`}>
          <View>
            <AlertIcon {...icon} />
          </View>
          <View style={tailwind`flex flex-col`}>
            {title ? <AlertTitle>{title}</AlertTitle> : null}
            {description ? (
              <AlertDescription>{description}</AlertDescription>
            ) : null}
            {children}
          </View>
        </View>
      );
    }

    if (title || description) {
      return (
        <View style={tailwind`flex flex-col`}>
          {title ? <AlertTitle>{title}</AlertTitle> : null}
          {description ? (
            <AlertDescription>{description}</AlertDescription>
          ) : null}
          {children}
        </View>
      );
    }

    if (icon) {
      return (
        <View style={tailwind`flex flex-row gap-2`}>
          <View>
            <AlertIcon {...icon} />
          </View>
          <View style={tailwind`flex flex-col`}>{children}</View>
        </View>
      );
    }

    return children;
  };

  return (
    <View
      style={[
        tailwind`w-full p-4 rounded-md flex-row items-center gap-4 border border-black/20 dark:border-white/20`,
        variants[variant],
        style,
      ]}
      {...props}
    >
      <VariantContext.Provider value={variant}>
        {renderContent()}
      </VariantContext.Provider>
    </View>
  );
};
