"use client";

import axios from "axios";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import useUpgradeModal from "@/app/hooks/useUpgradeModal";
import Modal from "./Modal";

const UpgradeModal = () => {
  const router = useRouter();
  const upgradeModal = useUpgradeModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  setIsLoading(true);

  return (
    <Modal
      disabled={isLoading}
      isOpen={upgradeModal.isOpen}
      title="Upgrade to Plus"
      onClose={upgradeModal.onClose}
      onSubmit={upgradeModal.onClose}
      actionLabel={"Buy"}
    />
  );
};

export default UpgradeModal;
