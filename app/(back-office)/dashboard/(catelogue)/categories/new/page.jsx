"use client"

import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import FormHeader from '@/components/back-office/FormHeader'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { generateSlug } from './../../../../../../lib/generateSlug';
import { makePostRequest } from './../../../../../../lib/apiRequest';
import ImageInput from '@/components/FormInputs/ImageInput'

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    makePostRequest(
      setLoading,
      "api/categories",
      data,
      "Category",
      reset
    );
    setImageUrl("");
  }

  return (
    <div>

      <FormHeader title="New Category" />

      <form onSubmit={handleSubmit(onSubmit)} classnName="">
        <div>
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput label={"Category Image"} endpoint='categoryImageUploader' imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </div>
        <SubmitButton isLoading={loading} buttonTitle={"Save Category"} loadingButtonTitle={"Saving Category..."} />
      </form>

    </div>
  )
}
