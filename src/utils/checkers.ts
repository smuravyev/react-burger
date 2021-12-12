export const reNameChecker : RegExp = /^[a-zA-Z0-9А-ЯЁа-яё][a-zA-Z0-9А-ЯЁа-яёё\s-]{0,32}$/;
export const rePasswordChecker : RegExp = /^[a-zA-Z0-9!@#$%^&*_.,.<>-]{6,}$/;
export const reEmailChecker : RegExp = /^[a-zA-Z0-9_.-]+(?:\+[a-zA-Z0-9_.-]+)*@[a-zA-Z0-9][a-zA-Z0-9-]+(?:\.[a-zA-Z0-9][a-zA-Z0-9-]+)*\.[a-zA-Z0-9-]{2,}$/;