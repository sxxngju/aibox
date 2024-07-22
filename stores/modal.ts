export const useModalStore = defineStore('modal', () => {
  interface ModalState {
    isOpen: boolean;
    type: string;
  }
  const defaultModalState: ModalState = {
    isOpen: false,
    type: ''
  };

  const modalData = ref<ModalState>({ ...defaultModalState });
  const { isOpen, type } = toRefs(modalData.value);

  const openModal = (modal: ModalState) => {
    Object.assign(modalData.value, modal, { isOpen: true });
  };

  const closeModal = () => {
    Object.assign(modalData.value, { ...defaultModalState });
  };

  return { isOpen, type, openModal, closeModal };
});
