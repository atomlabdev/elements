import { View, Text } from "react-native";
import tailwind from "twrnc";
import { Stack } from "expo-router";

import { DefaultAlert } from "@/examples/components/alert/default";
import { ErrorAlert } from "@/examples/components/alert/error";
import { SuccessAlert } from "@/examples/components/alert/success";
import { WarningAlert } from "@/examples/components/alert/warning";

import { DefaultAvatarExample } from "@/examples/components/avatar/default";
import { RoundedAvatarExample } from "@/examples/components/avatar/rounded";

import { DefaultBadgeExample } from "@/examples/components/badge/default";
import { DestructiveBadgeExample } from "@/examples/components/badge/destructive";
import { SuccessBadgeExample } from "@/examples/components/badge/success";

import { DefaultBoxExample } from "@/examples/components/box/default";
import { DestructiveBoxExample } from "@/examples/components/box/destructive";
import { SuccessBoxExample } from "@/examples/components/box/success";

import { DefaultButtonExample } from "@/examples/components/button/default";
import { DestructiveButtonExample } from "@/examples/components/button/error";
import { SuccessButtonExample } from "@/examples/components/button/success";
import { ButtonWithIconExample } from "@/examples/components/button/with-icon";

import { ButtonGroupExample } from "@/examples/components/button-group/default";

import { CardExample } from "@/examples/components/card/default";

import { CheckboxExample } from "@/examples/components/checkbox/default";

import { DefaultIconButtonExample } from "@/examples/components/icon-button/default";
import { DestructiveIconButtonExample } from "@/examples/components/icon-button/destructive";
import { SuccessIconButtonExample } from "@/examples/components/icon-button/success";

import { DefaultImageExample } from "@/examples/components/image/default";
import { CircleImageExample } from "@/examples/components/image/circle";
import { RoundedImageExample } from "@/examples/components/image/rounded";
import { LargerImageExample } from "@/examples/components/image/sized";

import { BulletListExample } from "@/examples/components/list/bullet";
import { HyphenatedListExample } from "@/examples/components/list/hyphenated";
import { SquaredListExample } from "@/examples/components/list/squared";

import { DefaultProgressBarExample } from "@/examples/components/progress-bar/default";
import { DestructiveProgressBarExample } from "@/examples/components/progress-bar/destructive";
import { SuccessProgressBarExample } from "@/examples/components/progress-bar/success";
import { WarningProgressBarExample } from "@/examples/components/progress-bar/warning";

import { RadioButtonsExample } from "@/examples/components/radio-buttons/default";

import { SelectExample } from "@/examples/components/select/default";

import { DefaultSwitchExample } from "@/examples/components/switch/default";
import { StyledContainerSwitchExample } from "@/examples/components/switch/styled-container";
import { WithLabelSwitchExample } from "@/examples/components/switch/with-label";

import { TextAreaExample } from "@/examples/components/text-area/default";

import { DefaultTextInputExample } from "@/examples/components/text-input/default";
import { Login } from "@/templates/authentication/login";
import { Signup } from "@/templates/authentication/signup";
import { PasswordReset } from "@/templates/authentication/reset-password";
import { UserProfile } from "@/templates/authentication/user-profile";
import { DefaultRefresh } from "@/examples/components/refresh/default";
import { ButtonRefresh } from "@/examples/components/refresh/button";
import { LoadingRefresh } from "@/examples/components/refresh/loading";
import { DefaultStarRatingExample } from "@/examples/components/star-rating/default";
import { CustomIconStarRatingExample } from "@/examples/components/star-rating/custom-icon";
import { CustomScaleStarRatingExample } from "@/examples/components/star-rating/custom-scale";

type ExamplePreviewProps = {
  component:
    | "alert"
    | "avatar"
    | "badge"
    | "box"
    | "button-group"
    | "button"
    | "card"
    | "checkbox"
    | "icon-button"
    | "image"
    | "list"
    | "progress-bar"
    | "radio-button"
    | "select"
    | "switch"
    | "text-area"
    | "text-input"
    | string;
  example: any;
};

export const ExamplePreviewComponent = ({
  component,
  example,
}: ExamplePreviewProps) => {
  console.log("example preview", component, example);

  if (component === "alert") {
    if (example === "default") return <DefaultAlert />;
    if (example === "error") return <ErrorAlert />;
    if (example === "success") return <SuccessAlert />;
    if (example === "warning") return <WarningAlert />;
  }

  if (component === "avatar") {
    if (example === "default") return <DefaultAvatarExample />;
    if (example === "rounded") return <RoundedAvatarExample />;
  }

  if (component === "badge") {
    if (example === "default") return <DefaultBadgeExample />;
    if (example === "destructive") return <DestructiveBadgeExample />;
    if (example === "success") return <SuccessBadgeExample />;
  }

  if (component === "box") {
    if (example === "default") return <DefaultBoxExample />;
    if (example === "destructive") return <DestructiveBoxExample />;
    if (example === "success") return <SuccessBoxExample />;
  }

  if (component === "button") {
    if (example === "default") return <DefaultButtonExample />;
    if (example === "error") return <DestructiveButtonExample />;
    if (example === "success") return <SuccessButtonExample />;
    if (example === "with-icon") return <ButtonWithIconExample />;
  }

  if (component === "button-group") {
    if (example === "default") return <ButtonGroupExample />;
  }

  if (component === "card") {
    if (example === "default") return <CardExample />;
  }

  if (component === "checkbox") {
    if (example === "default") return <CheckboxExample />;
  }

  if (component === "icon-button") {
    if (example === "default") return <DefaultIconButtonExample />;
    if (example === "destructive") return <DestructiveButtonExample />;
    if (example === "success") return <SuccessButtonExample />;
  }

  if (component === "image") {
    if (example === "default") return <DefaultImageExample />;
    if (example === "circle") return <CircleImageExample />;
    if (example === "rounded") return <RoundedImageExample />;
    if (example === "sized") return <LargerImageExample />;
  }

  if (component === "list") {
    if (example === "bullet") return <BulletListExample />;
    if (example === "hyphenated") return <HyphenatedListExample />;
    if (example === "squared") return <SquaredListExample />;
  }

  if (component === "progress-bar") {
    if (example === "default") return <DefaultProgressBarExample />;
    if (example === "destructive") return <DestructiveProgressBarExample />;
    if (example === "success") return <SuccessProgressBarExample />;
    if (example === "warning") return <WarningProgressBarExample />;
  }

  if (component === "radio-button") {
    if (example === "default") return <RadioButtonsExample />;
  }

  if (component === "refresh") {
    if (example === "default") return <DefaultRefresh />;
    if (example === "button") return <ButtonRefresh />;
    if (example === "loading") return <LoadingRefresh />;
  }

  if (component === "select") {
    if (example === "default") return <SelectExample />;
  }

  if (component === "star-rating") {
    if (example === "default") return <DefaultStarRatingExample />;
    if (example === "custom-icon") return <CustomIconStarRatingExample />;
    if (example === "custom-scale") return <CustomScaleStarRatingExample />;
  }

  if (component === "switch") {
    if (example === "default") return <DefaultSwitchExample />;
    if (example === "styled-container") return <StyledContainerSwitchExample />;
    if (example === "with-label") return <WithLabelSwitchExample />;
  }

  if (component === "text-area") {
    if (example === "default") return <TextAreaExample />;
  }

  if (component === "text-input") {
    if (example === "default") return <DefaultTextInputExample />;
  }

  if (component === "authentication") {
    if (example === "login") return <Login />;
    if (example === "signup") return <Signup />;
    if (example === "reset-password") return <PasswordReset />;
    if (example === "user-profile") return <UserProfile />;
  }

  return (
    <View style={tailwind`flex-1 flex items-center justify-center`}>
      <Text>Not found</Text>
    </View>
  );
};

export const ExamplePreview = ({ component, example }: ExamplePreviewProps) => {
  return (
    <View
      style={tailwind`flex-1 flex items-center justify-center ${
        component === "authentication" ? "" : "p-8"
      }`}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ExamplePreviewComponent component={component} example={example} />
    </View>
  );
};
