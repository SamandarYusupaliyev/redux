function FormCheckbox({ label, name, defaultVal, size }) {
    return (
        <div className="form-control items-center">
            <label htmlFor={name} className="label cursor-pointer">
                <span className="label-text capitalize">{label}</span>
            </label>
            <input type="checkbox" name={name} defaultChecked={defaultVal} className={`checkbox-primary checkbox ${size}`} />
        </div>
    )
}

export default FormCheckbox