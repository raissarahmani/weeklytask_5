import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Calendar from "../assets/calendar.png"
import Show from "../assets/eye2.png"
import Edit from "../assets/edit.png"
import Delete from "../assets/Delete.png"

function AdminMovie() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    
    const confirmDelete = () => {
        setIsModalOpen(true)
    }

    const deleteMovie = () => {
        localStorage.removeItem("movie")
    }

    const cancelDelete = () => {
        setIsModalOpen(false)
    }

    const nextPage = () => {
        navigate("/admin/add-movie")
    }

  return (
    <section className='bg-[#fff] rounded-3xl py-[7vh] px-[5vw]'>
        <div className='flex flex-row justify-between'>
            <p className='font-semibold text-2xl'>List Movie</p>
            <div className='flex flex-row gap-[1vw]'>
                <label for="date" hidden></label>
                <div className='flex flex-row items-center justify-between gap-[1vw] bg-[#EFF0F6] py-[2vh] px-[1vw] rounded-lg border border-[#EFF0F6]'>
                    <img className='object-cover' src={Calendar} alt="Date"/>
                    <input className='form-input border-none outline-none m-[0] p-[0]' type="date"/>
                </div>
                <button onClick={nextPage} className='custom-button bg-[#1D4ED8] text-[#fff] text-sm w-1/2'>Add Movie</button>
            </div>
        </div>
        <div className='overflow-x-scroll md:overflow-hidden'>
            <table className='w-full border-collapse my-[5vh]'>
                <tr className='border-b border-[#E6EAF0] text-center'>
                    <th className='text-[#1F4173] text-xs font-semibold py-[2vh]'>No</th>
                    <th className='text-[#1F4173] text-xs font-semibold py-[2vh]'>Thumbnail</th>
                    <th className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Movie Name</th>
                    <th className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Category</th>
                    <th className='text-[#1F4173] text-xs font-semibold py-[2vh]'>Released Date</th>
                    <th className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Duration</th>
                    <th className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[100px]'>Action</th>
                </tr>
                <tr className='border-b border-[#E6EAF0] text-center'>
                    <td className='text-[#1F4173] text-sm'>1</td>
                    <td className='text-[#1F4173] text-sm flex justify-center items-center'><div className='h-[10vh] w-[10vh] my-[1vh] overflow-hidden'><img className='object-cover object-center-top rounded-lg w-full h-full' src="/poster1.png" alt="Spiderman"/></div></td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Spiderman Homecoming</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Action, Adventure</td>
                    <td className='text-[#1F4173] text-sm'>07/05/2023</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>2 Hours 15 Minutes</td>
                    <td className='flex flex-row gap-1 justify-center items-center text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[100px]'>
                        <img className='bg-[#1D4ED8] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Show} alt="Preview"/>
                        <img className='bg-[#5D5FEF] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Edit} alt="Edit"/>
                        <img onClick={confirmDelete} className='bg-[#E82C2C] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Delete} alt="Delete"/>
                    </td>
                </tr>
                <tr className='border-b border-[#E6EAF0] text-center'>
                    <td className='text-[#1F4173] text-sm'>2</td>
                    <td className='text-[#1F4173] text-sm flex justify-center items-center'><div className='h-[10vh] w-[10vh] my-[1vh] overflow-hidden'><img className='object-cover object-center-top rounded-lg w-full h-full' src="/poster4.png" alt="Avengers"/></div></td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Avengers End Game</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Sci-fi, Adventure</td>
                    <td className='text-[#1F4173] text-sm'>10/06/2023</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>2 Hours 15 Minutes</td>
                    <td className='flex flex-row gap-1 justify-center items-center text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[100px]'>
                        <img className='bg-[#1D4ED8] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Show} alt="Preview"/>
                        <img className='bg-[#5D5FEF] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Edit} alt="Edit"/>
                        <img onClick={confirmDelete} className='bg-[#E82C2C] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Delete} alt="Delete"/>
                    </td>
                </tr>
                <tr className='border-b border-[#E6EAF0] text-center'>
                    <td className='text-[#1F4173] text-sm'>3</td>
                    <td className='text-[#1F4173] text-sm flex justify-center items-center'><div className='h-[10vh] w-[10vh] my-[1vh] overflow-hidden'><img className='object-cover object-center-top rounded-lg w-full h-full' src="/poster1.png" alt="Spiderman"/></div></td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Spiderman Homecoming</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Action, Adventure</td>
                    <td className='text-[#1F4173] text-sm'>07/05/2023</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>2 Hours 15 Minutes</td>
                    <td className='flex flex-row gap-1 justify-center items-center text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[100px]'>
                        <img className='bg-[#1D4ED8] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Show} alt="Preview"/>
                        <img className='bg-[#5D5FEF] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Edit} alt="Edit"/>
                        <img onClick={confirmDelete} className='bg-[#E82C2C] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Delete} alt="Delete"/>
                    </td>
                </tr>
                <tr className='border-b border-[#E6EAF0] text-center'>
                    <td className='text-[#1F4173] text-sm'>4</td>
                    <td className='text-[#1F4173] text-sm flex justify-center items-center'><div className='h-[10vh] w-[10vh] my-[1vh] overflow-hidden'><img className='object-cover object-center-top rounded-lg w-full h-full' src="/poster4.png" alt="Avengers"/></div></td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Avengers End Game</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Sci-fi, Adventure</td>
                    <td className='text-[#1F4173] text-sm'>10/06/2023</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>2 Hours 15 Minutes</td>
                    <td className='flex flex-row gap-1 justify-center items-center text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[100px]'>
                        <img className='bg-[#1D4ED8] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Show} alt="Preview"/>
                        <img className='bg-[#5D5FEF] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Edit} alt="Edit"/>
                        <img onClick={confirmDelete} className='bg-[#E82C2C] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Delete} alt="Delete"/>
                    </td>
                </tr>
                <tr className='border-b border-[#E6EAF0] text-center'>
                    <td className='text-[#1F4173] text-sm'>5</td>
                    <td className='text-[#1F4173] text-sm flex justify-center items-center'><div className='h-[10vh] w-[10vh] my-[1vh] overflow-hidden'><img className='object-cover object-center-top rounded-lg w-full h-full' src="/poster1.png" alt="Spiderman"/></div></td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Spiderman Homecoming</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Action, Adventure</td>
                    <td className='text-[#1F4173] text-sm'>07/05/2023</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>2 Hours 15 Minutes</td>
                    <td className='flex flex-row gap-1 justify-center items-center text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[100px]'>
                        <img className='bg-[#1D4ED8] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Show} alt="Preview"/>
                        <img className='bg-[#5D5FEF] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Edit} alt="Edit"/>
                        <img onClick={confirmDelete} className='bg-[#E82C2C] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Delete} alt="Delete"/>
                    </td>
                </tr>
            </table>
        </div>
        <div className='flex flex-row items-center justify-center'>
            <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>1</div>
            <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>2</div>
            <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>3</div>
            <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>4</div>
        </div>
        {isModalOpen && (
            <div className='fixed inset-0 bg-[#00000099] flex justify-center items-center z-3'>
                <section className='bg-[#fff] rounded-md absolute top-1/2 left-1/2 py-[5vh] px-[10vw] md:px-[3vw] transform -translate-x-1/2 -translate-y-1/2 z-4'>
                    <p className='text-center font-bold text-2xl'>Movie deleted cannot be added again.<br/> Are you sure about this change?</p>
                    <div className="flex flex-row items-center justify-center my-[3vh] gap-3">
                        <button onClick={deleteMovie} className='custom-button text-[#1D4ED8] hover:text-[#fff] hover:bg-[red] hover:border-[red] w-full py-[2vh] font-semibold text-sm'>Yes</button>
                        <button onClick={cancelDelete} className='custom-button hover:bg-[#1D4ED8] text-[#1D4ED8] hover:text-[#fff] w-full py-[2vh] font-semibold text-sm'>No</button>
                    </div>
                </section>
            </div>
            )}
    </section>
  )
}

export default AdminMovie
