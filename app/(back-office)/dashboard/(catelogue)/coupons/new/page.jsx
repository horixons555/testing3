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

export default function NewCoupon() {
  const [loading, setLoading] = useState(false);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data) {
    // const slug = generateSlug(data.title);
    // data.slug = slug;
    // data.imageUrl = imageUrl;
    // makePostRequest(
    //   setLoading,
    //   "api/categories",
    //   data,
    //   "Category",
    //   reset
    // );
    // setImageUrl("");
    console.log(data)
  }

  return (
    <div>

      <FormHeader title="New Coupon" />

      <form onSubmit={handleSubmit(onSubmit)} classnName="">
        <div>
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Coupon Code"
            name="couponCode"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Coupon Expiry Date"
            name="expiryDate"
            type='date'
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={loading} buttonTitle={"Save Coupon"} loadingButtonTitle={"Saving Coupon..."} />
      </form>

    </div>
  )
}
