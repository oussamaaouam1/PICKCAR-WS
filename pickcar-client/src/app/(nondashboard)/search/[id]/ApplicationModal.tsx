import { useCreateApplicationMutation, useCreateCarMutation } from "@/state/api";
import React from "react";

const ApplicationModal = ({isOpen, onClose, carId}:ApplicationModalProps) => {

  const [createApplication] = useCreateApplicationMutation()
  return <div></div>;
};

export default ApplicationModal;
