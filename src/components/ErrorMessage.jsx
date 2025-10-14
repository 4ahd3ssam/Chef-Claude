export default function ErrorMessage({message}) {
    return (
        <div className="fixed bottom-4 right-5 bg-amber-200 rounded-md z-[999] px-3 py-2">
            <p className="text-gray-950 text-[14px]">{message}</p>
        </div>
    )
}