import { create } from 'zustand'

interface OnBoardModalStore{
    isOpen:boolean,
    onOpen: () => void,
    onClose: () => void
}

const useOnBoardModal = create<OnBoardModalStore>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose : () => set({isOpen:false})
}))

export default useOnBoardModal