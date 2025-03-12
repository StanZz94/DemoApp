import noProjectImage from '../assets/no-project.png'

export default function NoProjectSelected() {

    return <div className="mt-24 text-center w-2/3">
        <img className="w-16 h-16 object-contain mx-auto" src={noProjectImage} alt='missing image' />
        <h2 className="text-xl font-bold text-stone-400 my-4">No Project Selected!</h2>
        <p className="text-stone-400 mb-4">Select a project or start a new one.</p>
        <p className="mt-8"><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Create new project</button></p>
    </div>
}