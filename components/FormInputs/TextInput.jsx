export default function TextInput({
    label,
    name,
    register,
    errors,
    isRequired = true,
    type = "text",
    className = "",
    defaultValue = ""
}) {
    return (
        <div className={`mt-4 ${className}`}>
            <label
                htmlFor={name}
                className="block text-lg font-medium text-white mb-2 "
            >
                {label}
            </label>
            <div className="mt-2">
                <input
                    {...register(`${name}`, { required: isRequired })}
                    type={type}
                    name={name}
                    id={name}
                    defaultValue={defaultValue}
                    autoComplete={name}
                    className="block w-full rounded-md border-0 py-2 text-black shadow-sm placeholder:text-black/70 text-lg focus:ring-0 focus:outline-none focus:border-none"
                    placeholder={`Type the ${label.toLowerCase()}`}
                />
                {errors[`${name}`] && (
                    <span className="text-sm font-medium text-red-500 ">{label} is required</span>
                )}
            </div>
        </div>
    );
}