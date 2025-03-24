import { useNavigate } from "react-router-dom"
import Calendar from "../assets/calendar.png"
import Show from "../assets/eye2.png"
import Edit from "../assets/edit.png"
import Delete from "../assets/Delete.png" 

function AdminMovie() {
    const navigate = useNavigate()
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
                    <td className='text-[#1F4173] text-sm flex justify-center items-center'><div className='h-[10vh] w-[10vh] my-[1vh] overflow-hidden'><img className='object-cover object-center-top rounded-lg w-full h-full' src="../../public/poster1.png" alt="Spiderman"/></div></td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Spiderman Homecoming</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Action, Adventure</td>
                    <td className='text-[#1F4173] text-sm'>07/05/2023</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>2 Hours 15 Minutes</td>
                    <td className='flex flex-row gap-1 justify-center items-center text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[100px]'>
                        <img className='bg-[#1D4ED8] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Show} alt="Preview"/>
                        <img className='bg-[#5D5FEF] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Edit} alt="Edit"/>
                        <img className='bg-[#E82C2C] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Delete} alt="Delete"/>
                    </td>
                </tr>
                <tr className='border-b border-[#E6EAF0] text-center'>
                    <td className='text-[#1F4173] text-sm'>2</td>
                    <td className='text-[#1F4173] text-sm flex justify-center items-center'><div className='h-[10vh] w-[10vh] my-[1vh] overflow-hidden'><img className='object-cover object-center-top rounded-lg w-full h-full' src="../../public/poster4.png" alt="Avengers"/></div></td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Avengers End Game</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Sci-fi, Adventure</td>
                    <td className='text-[#1F4173] text-sm'>10/06/2023</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>2 Hours 15 Minutes</td>
                    <td className='flex flex-row gap-1 justify-center items-center text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[100px]'>
                        <img className='bg-[#1D4ED8] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Show} alt="Preview"/>
                        <img className='bg-[#5D5FEF] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Edit} alt="Edit"/>
                        <img className='bg-[#E82C2C] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Delete} alt="Delete"/>
                    </td>
                </tr>
                <tr className='border-b border-[#E6EAF0] text-center'>
                    <td className='text-[#1F4173] text-sm'>3</td>
                    <td className='text-[#1F4173] text-sm flex justify-center items-center'><div className='h-[10vh] w-[10vh] my-[1vh] overflow-hidden'><img className='object-cover object-center-top rounded-lg w-full h-full' src="../../public/poster1.png" alt="Spiderman"/></div></td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Spiderman Homecoming</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Action, Adventure</td>
                    <td className='text-[#1F4173] text-sm'>07/05/2023</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>2 Hours 15 Minutes</td>
                    <td className='flex flex-row gap-1 justify-center items-center text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[100px]'>
                        <img className='bg-[#1D4ED8] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Show} alt="Preview"/>
                        <img className='bg-[#5D5FEF] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Edit} alt="Edit"/>
                        <img className='bg-[#E82C2C] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Delete} alt="Delete"/>
                    </td>
                </tr>
                <tr className='border-b border-[#E6EAF0] text-center'>
                    <td className='text-[#1F4173] text-sm'>4</td>
                    <td className='text-[#1F4173] text-sm flex justify-center items-center'><div className='h-[10vh] w-[10vh] my-[1vh] overflow-hidden'><img className='object-cover object-center-top rounded-lg w-full h-full' src="../../public/poster4.png" alt="Avengers"/></div></td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Avengers End Game</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Sci-fi, Adventure</td>
                    <td className='text-[#1F4173] text-sm'>10/06/2023</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>2 Hours 15 Minutes</td>
                    <td className='flex flex-row gap-1 justify-center items-center text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[100px]'>
                        <img className='bg-[#1D4ED8] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Show} alt="Preview"/>
                        <img className='bg-[#5D5FEF] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Edit} alt="Edit"/>
                        <img className='bg-[#E82C2C] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Delete} alt="Delete"/>
                    </td>
                </tr>
                <tr className='border-b border-[#E6EAF0] text-center'>
                    <td className='text-[#1F4173] text-sm'>5</td>
                    <td className='text-[#1F4173] text-sm flex justify-center items-center'><div className='h-[10vh] w-[10vh] my-[1vh] overflow-hidden'><img className='object-cover object-center-top rounded-lg w-full h-full' src="../../public/poster1.png" alt="Spiderman"/></div></td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Spiderman Homecoming</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>Action, Adventure</td>
                    <td className='text-[#1F4173] text-sm'>07/05/2023</td>
                    <td className='text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[200px]'>2 Hours 15 Minutes</td>
                    <td className='flex flex-row gap-1 justify-center items-center text-[#1F4173] text-xs font-semibold py-[2vh] min-w-[100px]'>
                        <img className='bg-[#1D4ED8] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Show} alt="Preview"/>
                        <img className='bg-[#5D5FEF] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Edit} alt="Edit"/>
                        <img className='bg-[#E82C2C] rounded-md object-contain w-[5vh] h-[5vh] p-[1vh] cursor-pointer' src={Delete} alt="Delete"/>
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
    </section>
  )
}

export default AdminMovie
