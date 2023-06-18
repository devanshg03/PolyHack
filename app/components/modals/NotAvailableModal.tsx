'use client'
import Modal from './Modal'
import useNotAvailableModal from '@/app/hooks/useNotAvailableModal'


function NotAvailableModal() {

    const notAvailableModal = useNotAvailableModal()

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <div>More features are coming soon.Send us ideas to hello@audaiq.com. Thanks.</div>
        </div>
    )

    return (
        <Modal
            disabled={false}
            isOpen={notAvailableModal.isOpen}
            title='AudaIQ is currently in Alpha testing.'
            actionLabel='Go Back'
            onClose={notAvailableModal.onClose}
            onSubmit={notAvailableModal.onClose}
            body={bodyContent}
        />
    )
}

export default NotAvailableModal
