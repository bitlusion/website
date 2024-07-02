"use client";

export default function Counter() {
    let privacy = localStorage.getItem("privacy")

    function setPrivacy(respose: boolean) {
        if(respose == true) {
            localStorage.setItem("privacy", "true")
        } else if(respose == false) {
            localStorage.setItem("privacy", "false")
        }
    }

    return (
        <div className={`max-w-[420px] max-md:w-full fixed z-50 bottom-4 left-4 bg-black border border-gray-500 rounded-xl p-4 text-sm ${(privacy == "true") ? "hidden" : "block"}`}>
            This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
            <div className="flex justify-end gap-2 mt-2">
                <button className="bg-white text-black font-medium px-3 h-8 rounded-full cursor-pointer transition hover:bg-opacity-75" onClick={() => setPrivacy(false)}>Deny</button>
                <button className="bg-white text-black font-medium px-3 h-8 rounded-full cursor-pointer transition hover:bg-opacity-75" onClick={() => setPrivacy(true)}>Accept</button>
            </div>
        </div>
    );
}