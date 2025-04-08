import Input from "./Input";

export default function NewProject() {
    return (
        <div className="w-[35rem] mt-16">
            {" "}
            {/* w-[35rem] custom width syntax */}
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" textarea />{" "}
                {/* same as <Input label="Description" textarea={true}/> */}
                <Input label="Due Date" />
            </div>
        </div>
    );
}
