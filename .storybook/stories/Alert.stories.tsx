import React from "react";
import { DefaultAlert } from "@/examples/components/alert/default";
import { SuccessAlert } from "@/examples/components/alert/success";
import { WarningAlert } from "@/examples/components/alert/warning";
import { ErrorAlert } from "@/examples/components/alert/error";

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
