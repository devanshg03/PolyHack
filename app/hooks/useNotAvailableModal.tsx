import { create } from 'zustand'

interface NotAvailableModalStore{
    isOpen:boolean,
    onOpen: () => void,
    onClose: () => void
}

const useNotAvailableModal = create<NotAvailableModalStore>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose : () => set({isOpen:false})
}))

export default useNotAvailableModal