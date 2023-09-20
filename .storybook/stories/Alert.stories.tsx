import React from "react";
import { DefaultAlert } from "@/examples/components/alert/DefaultAlert";
import { SuccessAlert } from "@/examples/components/alert/SuccessAlert";
import { WarningAlert } from "@/examples/components/alert/WarningAlert";
import { ErrorAlert } from "@/examples/components/alert/ErrorAlert";

const AlertMeta = {
  title: "Components/Alert",
};

export default AlertMeta;

export const Default = {
  render: (args) => {
    return <DefaultAlert />;
  },
};

export const Success = {
  render: (args) => {
    return <SuccessAlert />;
  },
};

export const Warning = {
  render: (args) => {
    return <WarningAlert />;
  },
};

export const Error = {
  render: (args) => {
    return <ErrorAlert />;
  },
};
