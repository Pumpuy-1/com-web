// rafce
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import ResizeModule from 'react-image-file-resizer'
import { removeFiles, uploadFiles } from '../../api/product'
import useEcomStore from '../../store/ecom-store'
import { Loader, ImagePlus } from 'lucide-react';

// แก้ปัญหา Vite: แพ็กเกจนี้มี .default ซ้อนอยู่
const Resize = ResizeModule.default || ResizeModule

const Uploadfile = ({ form, setForm }) => {
    const token = useEcomStore((state) => state.token)
    const [isLoading, setIsLoading] = useState(false)

    const handleOnChange = (e) => {
        const files = e.target.files
        if (!files || files.length === 0) return

        setIsLoading(true)
        for (let i = 0; i < files.length; i++) {
            const file = files[i]

            // Validate
            if (!file.type.startsWith('image/')) {
                toast.error(`File ${file.name} บ่แม่นรูป`)
                setIsLoading(false)
                continue
            }

            // Image Resize
            Resize.imageFileResizer(
                file,
                720,
                720,
                "JPEG",
                100,
                0,
                (data) => {
                    uploadFiles(token, data)
                        .then((res) => {
                            setForm((prev) => ({
                                ...prev,
                                images: [...prev.images, res.data]
                            }))
                            toast.success('Upload image Sucess!!!')
                        })
                        .catch((err) => {
                            console.log(err)
                            toast.error('Upload failed')
                        })
                        .finally(() => setIsLoading(false))
                },
                "base64"
            )
        }
        e.target.value = '' // ให้เลือกไฟล์เดิมซ้ำได้
    }

    const handleDelete = (public_id) => {
        removeFiles(token, public_id)
            .then((res) => {
                setForm((prev) => ({
                    ...prev,
                    images: prev.images.filter((item) => item.public_id !== public_id)
                }))
                toast.error(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='my-4'>
            <div className='flex mx-4 gap-4 my-4'>
                {isLoading && <Loader className='w-16 h-16 animate-spin' />}

                {form.images.map((item, index) =>
                    <div className='relative' key={index}>
                        <img
                            className='w-24 h-24 object-cover rounded-md hover:scale-105'
                            src={item.url} />
                        <span
                            onClick={() => handleDelete(item.public_id)}
                            className='absolute top-0 right-0 bg-red-500 text-white p-1 rounded-md cursor-pointer'>X</span>
                    </div>
                )}
            </div>

            {/* กรอบเลือกไฟล์ */}
            <label
                htmlFor='upload-images'
                className='flex flex-col items-center justify-center w-full max-w-md h-36
                           border-2 border-dashed border-gray-300 rounded-lg
                           bg-gray-50 cursor-pointer
                           hover:bg-blue-50 hover:border-blue-400 transition'
            >
                <ImagePlus className='w-10 h-10 text-gray-400 mb-2' />
                <p className='font-semibold text-blue-500'>คลิกเพื่อเลือกรูป</p>
                <p className='text-xs text-gray-400 mt-1'>PNG, JPG (เลือกได้หลายรูป)</p>

                <input
                    id='upload-images'
                    onChange={handleOnChange}
                    type='file'
                    name='images'
                    accept='image/*'
                    multiple
                    className='hidden'
                />
            </label>
        </div>
    )
}

export default Uploadfile