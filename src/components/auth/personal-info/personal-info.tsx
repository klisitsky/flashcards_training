import { ChangeEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { PencilIcon } from '@/assets'
import profile from '@/assets/img/profile.png'
import { Avatar, Button, Card, TextField, Typography } from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiLogOut } from 'react-icons/fi'
import { z } from 'zod'

import s from './personal-info.module.scss'

type PersonalInfoProps = {
  avatar?: string
  email: string
  name: string
  onChangeAvatar?: (avatar: Blob) => void
  onLogOut?: () => void
  onSubmit?: (data: PersonalInfoFormSchema) => void
}

export type PersonalInfoFormSchema = z.infer<typeof PersonalInfoSchema>

const PersonalInfoSchema = z.object({
  email: z.string().email(),
  file: z.any(),
  nickname: z.string().min(3).max(30),
})

export const PersonalInfo = ({
  avatar = profile,
  email,
  name,
  onChangeAvatar,
  onLogOut,
  onSubmit,
}: PersonalInfoProps) => {
  const [editMode, setEditMode] = useState(false)
  const [editName, setEditName] = useState(name)
  const [avatarError, setAvatarError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePencilClick = () => {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click()
    }
  }
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<PersonalInfoFormSchema>({ resolver: zodResolver(PersonalInfoSchema) })

  const onSubmitHandler = (data: PersonalInfoFormSchema) => {
    onSubmit && onSubmit(data)
    setEditMode(false)
  }

  const onCancelHandler = () => {
    setEditMode(false)
    reset()
  }

  const onChangeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      return
    }

    const allowedTypes = ['image/jpeg', 'image/png']

    if (!allowedTypes.includes(file.type)) {
      setAvatarError('Only JPEG and PNG images are allowed.')

      return
    }
    const maxSizeInBytes = 1024 * 1024

    if (file.size > maxSizeInBytes) {
      setAvatarError('The image size should not exceed 1MB.')

      return
    }
    onChangeAvatar?.(file)
    setAvatarError('')
  }

  return (
    <Card className={s.personalInfoWrapper}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>

      <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <Avatar avatar={avatar} className={s.avatar} />
        <div className={s.changeAvatar} onClick={handlePencilClick}>
          <input
            type={'file'}
            {...register('file')}
            className={s.inputFile}
            name={'file'}
            onChange={onChangeAvatarHandler}
            ref={fileInputRef}
          />
          <PencilIcon className={s.addPhotoBtn} />
        </div>
        <div className={s.errorMessage}>{avatarError}</div>

        <DevTool control={control} />
        {editMode && (
          <>
            <TextField
              className={s.input}
              {...register('nickname')}
              errorMessage={errors.nickname?.message}
              label={'Nickname'}
              name={'nickname'}
              onChange={e => setEditName(e.currentTarget.value)}
              value={editName}
            />
            <Button fullWidth onClick={onCancelHandler} type={'submit'}>
              Save Changes
            </Button>
          </>
        )}
      </form>
      {!editMode && (
        <div className={s.infoContainer}>
          <div className={s.editNameWrapper}>
            <Typography className={s.name} variant={'subtitle1'}>
              {name}
            </Typography>

            <PencilIcon className={s.editNameIcon} onClick={() => setEditMode(true)} />
          </div>
          <Typography className={s.email} variant={'body2'}>
            {email}
          </Typography>
          <Button
            className={s.buttonLogOut}
            onClick={onLogOut}
            type={'submit'}
            variant={'secondary'}
          >
            <FiLogOut />
            Logout
          </Button>
        </div>
      )}
    </Card>
  )
}
