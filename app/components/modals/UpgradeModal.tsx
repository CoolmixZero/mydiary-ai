"use client";

import useUpgradeModal from "@/app/hooks/useUpgradeModal";
import Modal from "./Modal";

const UpgradeModal = () => {
  const upgradeModal = useUpgradeModal();

  return (
    <Modal
      isOpen={upgradeModal.isOpen}
      title="Upgrade to Plus"
      onClose={upgradeModal.onClose}
      onSubmit={upgradeModal.onClose}
      actionLabel={"Buy"}
    />
  );
};

export default UpgradeModal;
