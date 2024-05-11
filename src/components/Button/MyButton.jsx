export default function MyButton({ children, onClick, className}) {
    return (
        <button onClick={onClick} className={className}>{children}</button >
    )
}