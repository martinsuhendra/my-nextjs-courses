'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/trpc/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface FormInputProps {
  repoUrl: string
  projectName: string
  githubToken?: string
}

const CreatePage = () => {
  const { register, handleSubmit, reset } = useForm<FormInputProps>()
  const createProject = api.project.createProject.useMutation()

  const onSubmit = async (data: FormInputProps) => {
    await createProject.mutate(
      {
        name: data.projectName,
        githubUrl: data.repoUrl,
        githubToken: data.githubToken,
      },
      {
        onSuccess: () => {
          toast.success('Project created successfully')
        },
        onError: (error) => {
          toast.error('Failed to create project')
        },
      },
    )
    reset()
  }

  return (
    <div className="flex items-center gap-12 h-full justify-center">
      <img
        src="/undraw-github.svg"
        alt="create project"
        className="h-56 w-auto"
      />
      <div>
        <div className="font-bold text-2xl">
          <h1>Link your GitHub Repository</h1>
          <p className="text-sm text-muted-foreground">
            Enter the repository URL to link it to Dionysus
          </p>
        </div>
        <div className="mt-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <Input
              {...register('projectName', { required: true })}
              placeholder="Project Name"
              required
            />
            <Input
              {...register('repoUrl', { required: true })}
              placeholder="Github URL"
              type="url"
              required
            />
            <Input
              {...register('githubToken')}
              placeholder="Github Token (Optional)"
            />
            <Button
              type="submit"
              className="w-fit"
              disabled={createProject.isPending}
            >
              Create Project
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreatePage
