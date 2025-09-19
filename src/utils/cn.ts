const cn = (...classNames: (string | undefined | null)[]) => {
    return classNames.filter(Boolean).join(" ");
}

export default cn;