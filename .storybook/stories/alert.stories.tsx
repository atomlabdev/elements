import React from "react";
import { DefaultAlert } from "@/examples/components/alert/default-alert";
import { SuccessAlert } from "@/examples/components/alert/success-alert";
import { WarningAlert } from "@/examples/components/alert/warning-alert";
import { ErrorAlert } from "@/examples/components/alert/error-alert";

const AlertMeta = {
  title: "Components/Alert",
};

export default AlertMeta;

export const Default = {
  render: () => {
    return <DefaultAlert />;
  },
};

export const Success = {
  render: () => {
    return <SuccessAlert />;
  },
};

export const Warning = {
  render: () => {
    return <WarningAlert />;
  },
};

export const Error = {
  render: () => {
    return <ErrorAlert />;
  },
};
