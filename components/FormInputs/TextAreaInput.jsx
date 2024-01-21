"use client";
export default function TextareaInput({
    label,
    name,
    register,
    errors,
    isRequired = true,
    className = "mt-4",
}) {
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="block text-lg font-medium text-white mb-2 "
            >
                {label}
            </label>
            <div className="mt-2">
                <textarea
                    {...register(`${name}`, { required: isRequired })}
                    name={name}
                    id={name}
                    rows={3}
                    placeholder="Category Description will goes here...."
                    className="block w-full rounded-md text-lg border-0 py-1.5 text-black shadow-sm  placeholder:text-black/70 focus:ring-0 focus:border-none focus:outline-none"
                    defaultValue={""}
                />
                {errors[`${name}`] && (
                    <span className="text-sm font-medium text-red-500 ">{label} is required</span>
                )}
            </div>
        </div>
    );
}